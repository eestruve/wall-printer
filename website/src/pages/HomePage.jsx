import { useEffect } from 'react';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import UseCases from '../components/UseCases';
import Calculator from '../components/Calculator';
import Features from '../components/Features';
import TurnkeyPrep from '../components/TurnkeyPrep';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import CTAForm from '../components/CTAForm';

export default function HomePage() {
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
      { rootMargin: '0px 0px -40px 0px' }
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
      <Calculator />
      <Features />
      <TurnkeyPrep />
      <SocialProof />
      <FAQ />
      <CTAForm />
    </>
  );
}
