import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Articles from './pages/Articles';
import Regulations from './pages/Regulations';
import Forum from './pages/Forum';
import Info from './pages/Info';
import Admin from './pages/Admin';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="perangkat" element={<Resources />} />
            <Route path="artikel" element={<Articles />} />
            <Route path="regulasi" element={<Regulations />} />
            <Route path="forum" element={<Forum />} />
            <Route path="info" element={<Info />} />
            {/* Hidden Admin Route */}
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </HashRouter>
    </DataProvider>
  );
}

export default App;