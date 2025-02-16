import { useAuthStore } from '@/stores/useAuthStore';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import { Album, Music } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SongsTabContent from './components/SongsTabContent';
import AlbumsTabContent from './components/AlbumsTabContent';
import { useEffect } from 'react';
import { useMusicStore } from '@/stores/useMusicStore';

function AdminPage() {
  const { isAdmin, isLoading } = useAuthStore();

  // const { fetchAlbums, fetchSongs, fetchStats } = useMusicStore();

  // useEffect(() => {
  //   fetchAlbums();
  //   fetchSongs();
  //   fetchStats();
  // }, [fetchAlbums, fetchSongs, fetchStats]);

  if (!isAdmin && !isLoading) return <div>Unauthorized</div>;
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900
   to-black text-zinc-100 p-8"
    >
      <Header />
      <DashboardStats />
    </div>
  );
}

export default AdminPage;
