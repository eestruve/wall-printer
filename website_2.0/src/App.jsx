import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingCTA from './components/FloatingCTA';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import DesignersPage from './pages/DesignersPage';
import ArchitectsPage from './pages/ArchitectsPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPage from './pages/PrivacyPage';
import TechUVPrintingPage from './pages/TechUVPrintingPage';
import TechWallPrepPage from './pages/TechWallPrepPage';
import TechPrinterSpecsPage from './pages/TechPrinterSpecsPage';
import './styles/design-tokens.css';

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const basename = path.startsWith('/wall-printer/v2')
    ? '/wall-printer/v2'
    : path.startsWith('/wall-printer/v1')
    ? '/wall-printer/v1'
    : path.startsWith('/wall-printer')
    ? '/wall-printer'
    : undefined;

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/v2" element={<HomePage />} />
          <Route path="/designers" element={<DesignersPage />} />
          <Route path="/architects" element={<ArchitectsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/technology/uv-printing" element={<TechUVPrintingPage />} />
          <Route path="/technology/wall-preparation" element={<TechWallPrepPage />} />
          <Route path="/technology/printer-specs" element={<TechPrinterSpecsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <FloatingCTA />
      <CookieBanner />
      <Footer />
    </Router>
  );
}

export default App;
