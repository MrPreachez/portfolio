import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Contact from './pages/Contact/Contact';
import ProjectMelder from './pages/ProjectMelder/ProjectMelder';
import ProjectInstock from './pages/ProjectInstock/ProjectInstock';
import ProjectBrainflix from './pages/ProjectBrainflix/ProjectBrainflix';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project/melder" element={<ProjectMelder/>}/>
        <Route path="/project/instock" element={<ProjectInstock/>}/>
        <Route path="/project/brainflix" element={<ProjectBrainflix/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
