import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers, addUser, RootState } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button';

interface User {
  id: number;
  name: string;
}

const UsersList = () => {
  const dispatch = useDispatch();
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [loadingDataError, setLoadingDataError] = useState(null);
  const { data } = useSelector(
    (state: RootState) => state.users
  );

  const handleClick = () => {
    dispatch(addUser());
  } 

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoadingData(true);
        await dispatch(fetchUsers()).unwrap();
      } catch (err) {
        setLoadingDataError(err.message);
      } finally {
        setIsLoadingData(false);
      }
    }

    fetchData();
  }, [dispatch]);

  if (isLoadingData) return <Skeleton times={3} className="h-10 w-full" />;
  if (loadingDataError) return <div>{loadingDataError}</div>;

  const renderedUsers = data.map((user: User) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users List</h1>
        <Button primary onClick={handleClick}>
          Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
