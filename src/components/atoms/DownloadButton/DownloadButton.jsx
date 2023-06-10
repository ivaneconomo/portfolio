import { DownloadCVIcon } from '../icons/icons';

const DownloadButton = () => {
  return (
    <a className='flex items-center space-x-1 rounded bg-pistachio-500 px-2 py-0.5 transition hover:bg-pistachio-600 active:ring-1 dark:hover:bg-pistachio-200'>
      <DownloadCVIcon />
      <span className='text-gray-950'>Descargar CV</span>
    </a>
  );
};

export default DownloadButton;
