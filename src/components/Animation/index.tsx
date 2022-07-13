import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface AnimationBoxProps {
  height?: number;
  width?: number;
}
interface AnimationProps extends AnimationBoxProps {
  file: any;
}

const Animation = ({ file, height, width }: AnimationProps) => {
  const lottieRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lottieRef.current) {
      const instance = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: file,
      });
      return () => instance.destroy();
    }
  }, []);
  return <div style={{ height: height, width: width }} ref={lottieRef}></div>;
};

export default Animation;
