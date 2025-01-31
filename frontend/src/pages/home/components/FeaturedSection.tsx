import { useMusicStore } from '@/stores/useMusicStore';
import SectionGridSkeleton from './SectionGridSkeleton.tsx';

const FeaturedSection = () => {
  //@ts-ignore
  const { isLoading, featuredSongs, error } = useMusicStore();

  //   if (isLoading) return <SectionGridSkeleton />;
  if (true) return <SectionGridSkeleton />;

  return <div>FeaturedSection</div>;
};

export default FeaturedSection;
