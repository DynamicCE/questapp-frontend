import React from 'react';
import { UserList } from '../components/user/UserList';
export {};

export const UserPage: React.FC = () => {
  return (
    <div>
      <h1>Kullanıcı Sayfası</h1>
      <UserList />
    </div>
  );
};