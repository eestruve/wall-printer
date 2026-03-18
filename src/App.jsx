import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import UseCases from './components/UseCases';
import Features from './components/Features';
import Guarantee from './components/Guarantee';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CTAForm from './components/CTAForm';
import Footer from './components/Footer';
import './styles/design-tokens.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Defer to ensure child components have rendered their DOM
    const timerId = requestAnimationFrame(() => {
      document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(timerId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Comparison />
        <UseCases />
        <Features />
        <Guarantee />
        <SocialProof />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
