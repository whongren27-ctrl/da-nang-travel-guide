import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, Menu, X } from 'lucide-react';
import { navItems } from '../data/home';
export default function Navbar() {
  const [open, setOpen] = useState(false); const location = useLocation();
  useEffect(() => { const onScroll=()=>document.querySelector('.site-header')?.classList.toggle('scrolled',window.scrollY>8); window.addEventListener('scroll',onScroll,{passive:true}); return ()=>window.removeEventListener('scroll',onScroll); },[]);
  return <header className="site-header"><div className="nav-shell">
    <Link className="brand" to="/" aria-label="Da Nang 首頁"><span>DaNang<i>♥</i></span><small>TRAVEL GUIDE</small></Link>
    <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="主导航">{navItems.map(item => <Link key={item.to} onClick={()=>setOpen(false)} className={location.pathname===item.to?'active':''} to={item.to}><span className="nav-emoji">{item.icon}</span>{item.label}</Link>)}</nav>
    <div className="nav-actions"><button aria-label="搜索" className="icon-button"><Search size={21}/></button><button aria-label="收藏" className="icon-button"><Heart size={22}/></button><button aria-label={open?'关闭菜单':'打开菜单'} className="icon-button menu-toggle" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div><button type="button" aria-label={open?'關閉選單':'開啟選單'} className="mobile-menu-trigger" onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<Menu size={20}/>}</button></header>;
}
