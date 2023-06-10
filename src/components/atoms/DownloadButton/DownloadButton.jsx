import { DownloadCVIcon } from '../icons/icons';
import cv from '../../../../public/cv_es.pdf'

const DownloadButton = () => {
  return (
    <a
      href={cv}
      download
      className='flex items-center space-x-1 rounded bg-pistachio-500 px-2 py-0.5 transition hover:bg-pistachio-600 active:ring-1 dark:hover:bg-pistachio-200'
    >
      <DownloadCVIcon />
      <span className='text-gray-950'>Descargar CV</span>
    </a>
  );
};

export default DownloadButton;
