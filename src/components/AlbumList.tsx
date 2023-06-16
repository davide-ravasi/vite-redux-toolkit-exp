import { User } from "./UsersList";

interface IAlbumListProps {
  user: User
}

const AlbumList = ({ user }: IAlbumListProps) => {
  return (
    <div>Albums by {user.name}</div>
  )
}

export default AlbumList;