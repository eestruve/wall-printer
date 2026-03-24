import { useEffect } from 'react';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import UseCases from '../components/UseCases';
import Features from '../components/Features';
import Guarantee from '../components/Guarantee';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import CTAForm from '../components/CTAForm';

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <Comparison />
      <UseCases />
      <Features />
      <Guarantee />
      <SocialProof />
      <FAQ />
      <CTAForm />
    </>
  );
}

export default HomePage;
