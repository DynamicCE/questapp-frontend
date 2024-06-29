    import React from 'react';
import {useUsers }from '../../hooks/useUsers';


export const UserList: React.FC = () => {
  const { users, isLoading, error } = useUsers();

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div>
      <h1>Kullanıcılar</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};