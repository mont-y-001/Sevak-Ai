import { useState } from 'react';
import UtilityBar from './components/layout/UtilityBar.jsx';
import Header from './components/layout/Header.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Breadcrumb from './components/layout/Breadcrumb.jsx';
import NoticeBar from './components/layout/NoticeBar.jsx';
import Footer from './components/layout/Footer.jsx';
import Modal from './components/ui/Modal.jsx';
import Home from './pages/Home.jsx';
import ActiveNeeds from './pages/ActiveNeeds.jsx';
import AICallDemo from './pages/AICallDemo.jsx';
import VolunteerPortal from './pages/VolunteerPortal.jsx';
import ImpactReport from './pages/ImpactReports.jsx';
import TeamPage from './pages/TeamPage.jsx';

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
