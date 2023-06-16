import { GoTrashcan } from "react-icons/go";

import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import Panel from "./Panel";
import AlbumList from "./AlbumList";

interface User {
  id: number;
  name: string;
}

interface IUserListItemProps {
  user: User;
}

const UsersListItem = ({ user }: IUserListItemProps) => {
  const [doRemoveUser, isRemovingUser, removingUserError] =
    useThunk(removeUser);

  const handleRemoveUser = (id: number) => {
    doRemoveUser(id);
  };

  const handleAddAlbum = (id: number) => {
    console.log(id);
  }

  const header = (
    <div className="flex p-2 justify-between items-center cursor-pointer">
      <Button
        danger
        loading={isRemovingUser}
        onClick={() => handleRemoveUser(user.id)}
        className="mr-3"
      >
        <GoTrashcan />
      </Button>
      {user.name}
      {removingUserError && <div>{removingUserError}</div>}
    </div>
  );

  return (
    <Panel header={header}>
      <div key={user.id} className="border flex justify-between mb-2 p-2 rounded">
        <AlbumList user={user} />
        {/* <Button primary loading={false} onClick={() => handleAddAlbum(user.id)}>
          Add Album
        </Button> */}
      </div>
    </Panel>
  );
};

export default UsersListItem;
