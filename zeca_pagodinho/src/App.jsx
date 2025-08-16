import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Discography from './pages/Discography';
import PopularSongs from './pages/PopularSongs';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/popular-songs" element={<PopularSongs />} />
      </Routes>
    </Router>
  );
}