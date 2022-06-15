import './App.css';
import { logDOM } from '@testing-library/react';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
