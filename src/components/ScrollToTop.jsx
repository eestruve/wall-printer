import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const style = window.getComputedStyle(element);
          const paddingTop = parseInt(style.paddingTop, 10) || 0;
          
          const elementPosition = element.getBoundingClientRect().top;
          // Target the actual content by adding paddingTop to the element's top position
          // and then subtracting the header height.
          const offsetPosition = elementPosition + window.scrollY + paddingTop - headerOffset - 20; 
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
