import { useEffect, useState } from 'react';

const AppViewport = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed bottom-4 left-4 right-4 mx-auto flex justify-center space-x-3 rounded bg-violet-600/50 p-2 font-bold backdrop-blur-sm'>
      <div>Width: {viewportWidth}px</div>
      <div>Height: {viewportHeight}px</div>
    </div>
  );
};

export default AppViewport;
