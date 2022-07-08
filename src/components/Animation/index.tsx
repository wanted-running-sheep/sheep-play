import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface AnimationBoxProps {
  height?: number;
  width?: number;
}
interface AnimationProps extends AnimationBoxProps {
  file: any;
}

const Animation = ({ file, height, width }: AnimationProps) => {
  const rocketRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (rocketRef.current) {
      const instance = lottie.loadAnimation({
        container: rocketRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: file,
      });
      return () => instance.destroy();
    }
  }, []);
  return <div style={{ height: height, width: width }} ref={rocketRef}></div>;
};

export default Animation;
