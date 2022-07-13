import { RefObject, useEffect, useState } from 'react';

const useSlide = (slideRef: RefObject<HTMLDivElement>) => {
  const IMAGE_SIZE = 230;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideMaxIdx, setSlideMaxIdx] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);

  useEffect(() => {
    const slide = slideRef.current;
    if (!slide || window.innerWidth <= 600) return;

    slide.style.transition = 'all 0.5s ease-in-out';
    slide.style.transform = `translateX(-${currentSlide * IMAGE_SIZE}px)`;

    setSlideMaxIdx(
      (IMAGE_SIZE * totalSlides - slide.offsetWidth) / IMAGE_SIZE
    );
  }, [currentSlide, totalSlides]);

  return {totalSlides, setTotalSlides, slideMaxIdx: Math.ceil(slideMaxIdx), currentSlide, setCurrentSlide };
};

export default useSlide;
