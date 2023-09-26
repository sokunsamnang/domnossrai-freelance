import Landing from './page/Landing';
import { Route, BrowserRouter, Routes, HashRoute } from "react-router-dom";
import MainLayout from './components/MainLayout';
import ITProjectDetail from './page/ITProjectDetail';
import GraphicProjectDetail from './page/GraphicProjectDetail';
import Register from './page/Register';
import Login from './page/Login';
import NoPage from './page/NoPage';
import PortfolioDetail from './page/PortfolioDetail';
import Contact from './page/Contact';
import BlockchainNFT from './page/BlockchainNFT';
import Server from './page/Server';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainLayout><Landing /></MainLayout>} />
        <Route path="/development" element={<MainLayout><ITProjectDetail /></MainLayout>} />
        <Route path="/development/:id" element={<MainLayout><PortfolioDetail /></MainLayout>} />
        <Route path="/graphic-design" element={<MainLayout><GraphicProjectDetail /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/blockchain_&_nft" element={<MainLayout><BlockchainNFT /></MainLayout>} />
        <Route path="/server-hosting" element={<MainLayout><Server /></MainLayout>} />
        <Route path="*" element={<MainLayout><NoPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;