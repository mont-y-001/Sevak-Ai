import { useState } from 'react';
import UtilityBar from './components/layout/UtilityBar';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Breadcrumb from './components/layout/Breadcrumb';
import NoticeBar from './components/layout/NoticeBar';
import Footer from './components/layout/Footer';
import Modal from './components/ui/Modal';
import Home from './pages/Home';
import ActiveNeeds from './pages/ActiveNeeds';
import AICallDemo from './pages/AICallDemo';
import VolunteerPortal from './pages/VolunteerPortal';
import ImpactReport from './pages/ImpactReports';
import TeamPage from './pages/TeamPage';

const PAGES = { home: Home, needs: ActiveNeeds, sim: AICallDemo, volunteer: VolunteerPortal, impact: ImpactReport, team: TeamPage };

export default function App() {
  const [page, setPage] = useState('home');
  const [modal, setModal] = useState(false);

  const navigate = id => { setPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const PageComponent = PAGES[page];

  return (
    <>
      <UtilityBar />
      <Header />
      <Navbar activePage={page} onNavigate={navigate} onRegisterClick={() => setModal(true)} />
      <Breadcrumb page={page} />
      <NoticeBar />
      <PageComponent onRegisterClick={() => setModal(true)} />
      <Footer onRegisterClick={() => setModal(true)} />
      <Modal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
