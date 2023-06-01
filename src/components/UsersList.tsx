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
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);
  const { data } = useSelector(
    (state: RootState) => state.users
  );

  /*
  preview
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  */
  const handleClick = () => {
    setIsCreatingUser(true);
    dispatch(addUser()).unwrap()
    .catch((err) => {
      setCreatingUserError(err.message);
    })
    .finally(() => {
      setIsCreatingUser(false);
    }
    )
  } 

  useEffect(() => {
    // how to manage loading and error state
    // inside a component
    // when fetching data from an API
    // using redux toolkit unwrap utility
    // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results
    async function fetchData() {
      setIsLoadingData(true);
        /* 
          The promise returned by the dispatched thunk 
          has an unwrap property which can be called 
          to extract the payload of a fulfilled action 
          or to throw either the error 
        */
        dispatch(fetchUsers()).unwrap()
        .catch((err) => {
          setLoadingDataError(err.message);
        })
        .finally(() => {
          setIsLoadingData(false);
        })
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
          {isCreatingUser ? 'Adding...' : 'Add User'}
        </Button>
        {creatingUserError && <div>{creatingUserError}</div>}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
