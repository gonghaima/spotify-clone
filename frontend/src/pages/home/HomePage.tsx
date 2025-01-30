// Basic React component structure
import Topbar from '@/components/Topbar';
import { useMusicStore } from '@/stores/useMusicStore';
import React, { useEffect } from 'react';

const HomePage: React.FC = () => {
  const {
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
  } = useMusicStore();
  console.log(
    '🚀 ~ isLoading,madeForYouSongs,featuredSongs,trendingSongs,:',
    isLoading,
    madeForYouSongs,
    featuredSongs,
    trendingSongs
  );

  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

  return (
    <div>
      <Topbar />
    </div>
  );
};

export default HomePage;
