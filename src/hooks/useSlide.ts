import { RefObject, useEffect, useState } from 'react';

const useSlide = (slideRef: RefObject<HTMLDivElement>) => {
  const TOTAL_SLIDES_COUNT = 10;
  const IMAGE_SIZE = 230;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideMaxIdx, setSlideMaxIdx] = useState(0);

  useEffect(() => {
    const slide = slideRef.current;
    if (!slide || window.innerWidth <= 600) return;

    slide.style.transition = 'all 0.5s ease-in-out';
    slide.style.transform = `translateX(-${currentSlide * IMAGE_SIZE}px)`;

    setSlideMaxIdx(
      (IMAGE_SIZE * TOTAL_SLIDES_COUNT - slide.offsetWidth) / IMAGE_SIZE
    );
  }, [currentSlide]);

  return { slideMaxIdx: Math.ceil(slideMaxIdx), currentSlide, setCurrentSlide };
};

export default useSlide;
