import ButtonDownload from '../../atoms/ButtonDownload/ButtonDownload';
import { GitHubIcon, LinkedInIcon } from '../../atoms/icons/icons';

const SocialNav = () => {
  return (
    <div className='flex items-center gap-5'>
      <ButtonDownload />
      <ul className='flex items-center gap-5'>
        <li>
          <a
            href='https://www.linkedin.com/in/ivaneconomo/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/ivaneconomo/'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNav;
