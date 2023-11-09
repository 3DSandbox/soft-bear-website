import { FC } from 'react';
import { Icon } from '@iconify/react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil:facebook', color: 'white', url: 'https://www.facebook.com/3DTVTech' },
  { id: 2, icon: 'uil:instagram', color: 'white', url: 'https://www.instagram.com/3dtvtech/' },
  { id: 3, icon: 'iconoir:tiktok', color: 'white', url: 'https://www.tiktok.com/@3dtvtech' },
  { id: 4, icon: 'uil:youtube', color: 'white', url: 'https://www.youtube.com/@3DTVTech' }
];
// const links = [
//   { id: 1, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/3DTVTech' },
//   { id: 3, icon: 'uil uil-instagram', url: 'https://www.instagram.com/3dtvtech/' },
//   { id: 4, icon: 'uil uil-youtube', url: 'https://www.youtube.com/@3DTVTech' }
// ];

const SocialLinksMain: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url, color }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <Icon icon={icon} color={color} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinksMain;
