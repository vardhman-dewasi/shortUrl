import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import Footer from './components/Footer';
import Analytics from './components/Analytics'
import Shortlink from './components/Shortlink';

function App() {
  const [urlValue, setUrlValue] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  
  return (
    <div className="App flex flex-col items-center w-full">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      
      <Shortlink urlValue = {urlValue} shortenedUrl = {shortenedUrl}
       setShortenedUrl = {setShortenedUrl} setUrlValue = {setUrlValue} />
      <Analytics shortenedUrl = {shortenedUrl}/>
      <Footer />
    </div>
  );
}

export default App;
