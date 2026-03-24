import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingCTA from './components/FloatingCTA';
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
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/designers" element={<DesignersPage />} />
          <Route path="/architects" element={<ArchitectsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/technology/uv-printing" element={<TechUVPrintingPage />} />
          <Route path="/technology/wall-preparation" element={<TechWallPrepPage />} />
          <Route path="/technology/printer-specs" element={<TechPrinterSpecsPage />} />
        </Routes>
      </main>
      <FloatingCTA />
      <Footer />
    </Router>
  );
}

export default App;
