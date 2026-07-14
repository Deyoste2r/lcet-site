import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InfosPage from './pages/InfosPage';
import GaleriePage from './pages/GaleriePage';
import AmicalePage from './pages/AmicalePage';
import EvenementsPage from './pages/EvenementsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/infos" element={<InfosPage />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/amicale" element={<AmicalePage />} />
            <Route path="/evenements" element={<EvenementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
