import { useRef, useState, RefObject, useEffect } from 'react';

const useInfinityScroll = (fetchMoreRef: RefObject<HTMLDivElement>) => {
  const observerRef = useRef<IntersectionObserver>();
  const [intersecting, setIntersecting] = useState(false);

  const getObserver = () => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        setIntersecting(entries.some((entry) => entry.isIntersecting));
      });
    }

    return observerRef.current;
  };

  useEffect(() => {
    if (fetchMoreRef.current) getObserver().observe(fetchMoreRef.current);
  }, [fetchMoreRef.current]);

  return intersecting;
};

export default useInfinityScroll;
