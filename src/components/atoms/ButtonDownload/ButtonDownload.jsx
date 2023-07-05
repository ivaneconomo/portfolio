import { DownloadFileIcon } from '../icons/icons';

const ButtonDownload = () => {
  return (
    <a
      href='/ivan_economo_es.pdf'
      download
      className='flex items-center gap-1 rounded bg-pistachio-500 px-2 py-1.5 hover:bg-pistachio-600 active:ring-1 dark:hover:bg-pistachio-200'
    >
      <DownloadFileIcon />
      <span className='text-gray-950'>Descargar CV</span>
    </a>
  );
};

export default ButtonDownload;
