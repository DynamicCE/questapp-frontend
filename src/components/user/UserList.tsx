import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {userService} from '../../services/userService';

interface User {
  id: number;
  userName: string;
  // Diğer kullanıcı özellikleri
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers();
        setUsers(data);
      } catch (err) {
        setError('Kullanıcılar yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.userName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;