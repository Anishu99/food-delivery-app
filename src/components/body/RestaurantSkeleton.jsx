export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="restaurant-image-skeleton"></div>
      <div className="restaurant-description-1-skeleton"></div>
      <div className="restaurant-description-2-skeleton"></div>
      <div className="restaurant-description-2-skeleton"></div>
    </div>
  );
};

export const RestaurantSkeleton = () => {
  return (
    <div className="skeleton-container">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};
