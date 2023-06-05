import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, addUser, RootState } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button';
import { useThunk } from "../hooks/useThunk";

interface User {
  id: number;
  name: string;
}

const UsersList = () => {
  const { data } = useSelector(
    (state: RootState) => state.users
  );
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreatingUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const handleClick = () => {
    doCreatingUser(addUser);
  } 

  useEffect(() => {
    doFetchUsers();
  }, []);

  if (isLoadingUsers) return <Skeleton times={3} className="h-10 w-full" />;
  if (loadingUsersError) return <div>{loadingUsersError}</div>;

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
