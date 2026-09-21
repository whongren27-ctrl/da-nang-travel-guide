import { useLayoutEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; import Hero from './components/Hero'; import QuickGuide from './components/QuickGuide'; import CategoryGrid from './components/CategoryGrid';
import { PlaceDetailPage, PlaceListPage } from './components/PlacePages';
import ItineraryPage from './components/ItineraryPage';
import TravelInfoPage from './components/TravelInfoPage';
function Home(){return <><Hero/><QuickGuide/><CategoryGrid/><footer className="footer"><span>DA NANG, WITH LOVE</span><p>把海風和好心情，一起裝進行李裡。 ♡</p></footer></>}
function Placeholder(){const loc=useLocation();const names={'/itinerary':'行程推薦'};return <main className="coming-soon"><span>YOUR LITTLE TRAVEL NOTE</span><h1>{names[loc.pathname]||'峴港旅行小貼士'}</h1><p>這一頁正在慢慢寫進旅行手帳裡。</p><Link to="/">← 回到首頁</Link></main>}
function ScrollToTop(){
  const { pathname } = useLocation();
  useLayoutEffect(()=>{window.scrollTo(0,0);},[pathname]);
  return null;
}
export default function App(){return <><ScrollToTop/><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/food" element={<PlaceListPage category="food"/>}/><Route path="/snacks" element={<PlaceListPage category="snacks"/>}/><Route path="/cafe" element={<PlaceListPage category="cafe"/>}/><Route path="/spa" element={<PlaceListPage category="spa"/>}/><Route path="/guide" element={<TravelInfoPage page="guide"/>}/><Route path="/spots" element={<TravelInfoPage page="spots"/>}/><Route path="/itinerary" element={<ItineraryPage/>}/><Route path="/tips" element={<TravelInfoPage page="tips"/>}/><Route path="/place/:slug" element={<PlaceDetailPage/>}/><Route path="*" element={<Placeholder/>}/></Routes></>}
