import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка!</div>;
  }
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
