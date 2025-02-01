// Basic React component structure
import Topbar from '@/components/Topbar';
import { useMusicStore } from '@/stores/useMusicStore';
import React, { useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import SectionGrid from './components/SectionGrid';
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
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Good afternoon
          </h1>
          <FeaturedSection />

          <div className="space-y-8">
            <SectionGrid
              title="Made For You"
              songs={madeForYouSongs}
              isLoading={isLoading}
            />
            <SectionGrid
              title="Trending"
              songs={trendingSongs}
              isLoading={isLoading}
            />
          </div>
        </div>
      </ScrollArea>
      {/* <FeaturedSection /> */}
    </div>
  );
};

export default HomePage;
