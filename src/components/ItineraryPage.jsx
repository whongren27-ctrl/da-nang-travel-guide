import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { itineraryDays } from '../data/home';

function ItineraryTitle({ item }) {
  if (!item.slug) return <h3>{item.title}</h3>;
  return <h3><Link to={`/place/${item.slug}`}>{item.title}<ArrowRight size={15} aria-hidden="true" /></Link></h3>;
}

export default function ItineraryPage() {
  return (
    <main className="itinerary-page">
      <header className="itinerary-heading">
        <p className="itinerary-script">Two days in Da Nang ♡</p>
        <h1>2天1夜 · 慢慢玩</h1>
        <p>把海鮮、咖啡、按摩和一點夜生活，排進剛剛好的峴港小旅行。</p>
      </header>

      <div className="itinerary-days">
        {itineraryDays.map((day, dayIndex) => (
          <section className={`itinerary-day day-${dayIndex + 1}`} key={day.day}>
            <div className="itinerary-day-heading">
              <div>
                <span>{day.day}</span>
                <strong>{day.date}</strong>
              </div>
              <p>{day.subtitle}</p>
            </div>

            <ol className="itinerary-timeline">
              {day.items.map((item) => (
                <li key={`${item.time}-${item.title}`}>
                  <time>{item.time}</time>
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <div className="timeline-title-row">
                      <span className="timeline-icon" aria-hidden="true">{item.icon}</span>
                      <ItineraryTitle item={item} />
                      {item.badge && <span className="timeline-badge">{item.badge}</span>}
                    </div>
                    {item.meta && <p className="timeline-meta">{item.meta}</p>}
                    {item.note && <p className="timeline-note">{item.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <footer className="itinerary-signoff" aria-label="行程結語">
        <span>GOOD FOOD</span>
        <span>GOOD MOOD</span>
        <strong>GOOD TRIP ♡</strong>
      </footer>
    </main>
  );
}
