// Basic React component structure
import Topbar from '@/components/Topbar';
import { useMusicStore } from '@/stores/useMusicStore';
import React, { useEffect } from 'react';
import FeaturedSection from './components/FeaturedSection';

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
      <FeaturedSection />
    </div>
  );
};

export default HomePage;
