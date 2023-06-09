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
    <div className='text-xs fixed bottom-3 mx-auto flex flex-col justify-center space-x-3 space-y-1 rounded bg-pistachio-500/20 p-2 text-center backdrop-blur-sm'>
      <span>Viewport Size</span>
      <div className='flex justify-center'>
        <div className='mr-2 border-r pr-2'>Width: {viewportWidth}px</div>
        <div>Height: {viewportHeight}px</div>
      </div>
    </div>
  );
};

export default AppViewport;
