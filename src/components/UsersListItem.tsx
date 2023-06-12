import { GoTrashcan } from "react-icons/go";

import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";

interface User {
    id: number;
    name: string;
  }

interface IUserListItemProps {
    user: User;
}

const UsersListItem = ({user}: IUserListItemProps) => {
    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

    const handleRemoveUser = (id: number) => {
        doRemoveUser(id);
      }

    return (
        <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
          <Button danger loading={isRemovingUser} onClick={() => handleRemoveUser(user.id)}>
            <GoTrashcan />
          </Button>
          {removingUserError && <div>{removingUserError}</div>}
        </div>
      </div>
    )
}

export default UsersListItem;