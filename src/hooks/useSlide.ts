import { RefObject, useEffect, useState } from 'react';

const useSlide = (slideRef: RefObject<HTMLDivElement>) => {
  const TOTAL_SLIDES = 9;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slide = slideRef.current;
    if (!slide || window.innerWidth <= 600) return;

    slide.style.transition = 'all 0.5s ease-in-out';
    slide.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return { totalSildes: TOTAL_SLIDES, currentSlide, setCurrentSlide };
};

export default useSlide;
