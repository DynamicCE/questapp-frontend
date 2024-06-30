import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {userService} from '../services/userService';
import PostList from '../components/post/PostList';

interface User {
  id: number;
  userName: string;
  // Diğer kullanıcı bilgileri
}

export const UserPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          setLoading(true);
          const userData = await userService.getUserById(parseInt(userId));
          setUser(userData);
        } catch (err) {
          console.error('Failed to fetch user:', err);
          setError('Kullanıcı bilgileri yüklenirken bir hata oluştu.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;
  if (!user) return <div>Kullanıcı bulunamadı.</div>;

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{user.userName}'in Profili</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kullanıcı Bilgileri</h2>
        <p>Kullanıcı ID: {user.id}</p>
        <p>Kullanıcı Adı: {user.userName}</p>
        {/* Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz */}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Kullanıcının Gönderileri</h2>
        <PostList userId={user.id} />
      </div>
    </div>
  );
};

export default UserPage;