import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, RootState } from "../store";
import Skeleton from "./Skeleton";

interface User {
  id: number;
  name: string;
}

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <Skeleton times={3} className="h-10 w-full" />;
  if (error) return <div>{error}</div>;

  const renderedUsers = data.map((user: User) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    )
  })

  return (
    <div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
