import { useEffect } from 'react';
import isInstagramBrowser from '../utils/detectInstagram';

const OpenLinksExternally = () => {
  useEffect(() => {
    if (isInstagramBrowser()) {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const url = e.currentTarget.href;
          window.open(url, '_blank');
        });
      });
    }
  }, []);

  return null;
};

export default OpenLinksExternally;