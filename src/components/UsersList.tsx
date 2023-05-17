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

  if (isLoading) return <Skeleton times={3} />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {data && data.map((user: User) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

export default UsersList;
