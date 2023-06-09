import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, addUser, removeUser, RootState } from "../store";
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
  const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

  const handleClick = () => {
    doCreatingUser();
  }

  const handleRemoveUser = (id: number) => {
    doRemoveUser(id);
  }

  useEffect(() => {
    doFetchUsers();
  }, []);

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={3} className="h-10 w-full" />
  }
  else if (loadingUsersError) {
    content = <div>{loadingUsersError}</div>
  } else {
    content = data.map((user: User) => {
      return (
        <div key={user.id} className="mb-2 border rounded">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
            <Button danger loading={isRemovingUser} onClick={() => handleRemoveUser(user.id)}>
              X
            </Button>
            {removingUserError && <div>{removingUserError}</div>}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users List</h1>
        <Button primary loading={isCreatingUser} onClick={handleClick}>
          Add User
        </Button>
        {creatingUserError && <div>{creatingUserError}</div>}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
