import { Link } from 'react-router-dom';
import {
  BusFront,
  Camera,
  CloudSun,
  Landmark,
  MapPinned,
  Mountain,
  PlaneTakeoff,
  ShoppingBag,
  Smartphone,
  WalletCards,
  Waves,
  Wifi,
} from 'lucide-react';
import { travelPages } from '../data/home';

const icons = {
  passport: PlaneTakeoff,
  transport: BusFront,
  weather: CloudSun,
  beach: Waves,
  bridge: MapPinned,
  camera: Mountain,
  landmark: Landmark,
  money: WalletCards,
  sim: Wifi,
  apps: Smartphone,
  bag: ShoppingBag,
};

export default function TravelInfoPage({ page }) {
  const content = travelPages[page];

  return (
    <main className={`travel-info-page travel-info-${content.tone}`}>
      <header className="travel-info-heading">
        <p className="travel-info-script">{content.script}</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </header>

      <div className="travel-info-grid">
        {content.sections.map((section, index) => {
          const Icon = icons[section.icon] || Camera;
          return (
            <section className="travel-note" key={section.title}>
              <div className="travel-note-icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></div>
              <div className="travel-note-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title}</h2>
                <p>{section.lead}</p>
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </section>
          );
        })}
      </div>

      <aside className="travel-info-tip"><span>♡</span><p>{content.note}</p></aside>
      <nav className="travel-info-nav" aria-label="旅行攻略分頁">
        <Link to="/guide">快速攻略</Link>
        <Link to="/spots">必去景點</Link>
        <Link to="/itinerary">行程推薦</Link>
        <Link to="/tips">旅行小貼士</Link>
      </nav>
    </main>
  );
}
