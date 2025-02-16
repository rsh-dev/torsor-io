import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Puzzle from './components/InteractiveLanding';
import AboutPage from './components/AboutPage';
import BlogPage from './components/blog';
import BlogPost from './components/blog/BlogPost'; 
import ResearchPage from './components/ResearchPage';
import ConsultingPage from './components/ProductsPage';
import TeamPage from './components/TeamPage';
import CommunityPage from './components/CommunityPage';
import YawTemp from './components/YawTemp';
import Manifesto from './components/Manifesto';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
    return saved === 'dark';  // Checks if saved value is 'dark'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

    useEffect(() => {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');  // Saves 'dark' or 'light'
}, [isDark]);
  
    const [waveState, setWaveState] = useState('play');
    const [isSwitched, setIsSwitched] = useState(false);
    const [books, setBooks] = useState(false);
    const [weird, setWeird] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Router>
      <Routes>
        <Route path="puzzle" element={
          <Puzzle 
            isDark={isDark} 
            setIsDark={setIsDark}
            isSwitched={isSwitched}
            setIsSwitched={setIsSwitched}
            books={books}
            setBooks={setBooks}
            weird={weird}
            setWeird={setWeird}
          />
        } />
        <Route path="" element={
          <AboutPage 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="blog" element={
          <BlogPage 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="blog/:id" element={
          <BlogPost 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="research" element={
          <ResearchPage 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="consulting" element={
          <ConsultingPage 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="team" element={
          <TeamPage 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="community" element={
          <CommunityPage 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="yaw" element={
          <YawTemp 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
        <Route path="manifesto" element={
          <Manifesto 
            isDark={isDark} 
            setIsDark={setIsDark}
            waveState={waveState}
            setWaveState={setWaveState}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;
