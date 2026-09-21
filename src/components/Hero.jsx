import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Hero(){
 const root=useRef(null);
 useEffect(()=>{ const ctx=gsap.context(()=>{
  gsap.to('.hero-art',{y:-12,scale:1.025,duration:7,ease:'sine.inOut',yoyo:true,repeat:-1});
  gsap.from('.quick-item',{scrollTrigger:{trigger:'.quick-guide',start:'top 88%'},y:18,opacity:0,duration:.65,stagger:.12,ease:'power2.out'});
  gsap.from('.category-card',{scrollTrigger:{trigger:'.category-grid',start:'top 88%'},y:28,opacity:0,duration:.7,stagger:.11,ease:'power2.out'});
 },root); return ()=>ctx.revert(); },[]);
 return <section className="hero" ref={root}>
   <div className="hero-scene" aria-hidden="true"></div><div className="hero-wash" aria-hidden="true"></div>
   <div className="hero-content"><div className="hero-copy"><p className="hero-hello">Hello <span>♡</span></p><h1 className="hero-title">Da Nang</h1><div className="yellow-stroke"></div><h2>吃 · 玩 · 放鬆 · 剛剛好</h2><p className="hero-sub">2天1夜 · 美食 × 海風 × 慢生活</p><div className="brush-tag">一場說走就走的美食之旅 <span>♡</span></div></div>
   <div className="hero-art" aria-hidden="true"><div className="art-note">Good Food<br/>Good Mood<br/><small>in Da Nang :)</small></div><div className="photo-card"><img src={`${import.meta.env.BASE_URL}assets/hero-beach.png`} alt="峴港海灘手繪風景"/><span>My favorite place <b>♡</b></span></div></div>
   <div className="floating-note">Life is better<br/>by the beach <span>♡</span></div><span className="doodle-star star-one">✳</span><span className="doodle-star star-two">✦</span><span className="flight-path">⌁ ⌁ ⌁</span>
   </div>
  </section>
}
