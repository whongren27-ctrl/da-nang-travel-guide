import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { places } from '../data/home';

const categoryInfo = {
  food: { title: '正餐', intro: '峴港的每一餐，都值得慢慢享用。' },
  snacks: { title: '小食', intro: '沿著街巷，發現當地的日常滋味。' },
  cafe: { title: '咖啡廳', intro: '找一處喜歡的角落，為旅途留一點空白。' },
  spa: { title: '按摩 SPA', intro: '讓海風和一場放鬆，收好旅途的疲憊。' },
};

function PlaceTags({ tags, limit }) {
  const visibleTags = limit ? tags.slice(0, limit) : tags;
  return <div className="place-tags">{visibleTags.map((tag) => <span className="place-tag" key={tag}>{tag}</span>)}</div>;
}

export function PlaceListPage({ category }) {
  const info = categoryInfo[category];
  const items = places.filter((place) => place.category === category);
  return (
    <main className="place-page">
      <div className="place-page-heading">
        <span className="section-kicker">DA NANG · PLACE NOTES</span>
        <h1>{info.title}</h1>
        <p>{info.intro}</p>
      </div>
      <div className="place-grid">
        {items.map((place) => (
          <article className="place-card" key={place.slug}>
            <Link className="place-card-image" to={`/place/${place.slug}`} aria-label={`查看 ${place.name} 詳情`}><img src={place.cover} alt={`${place.name} 封面`} loading="lazy" /></Link>
            <div className="place-card-copy">
              <span className="place-card-category">{info.title}</span>
              <h2>{place.name}</h2>
              <p className="place-card-position">{place.position}</p>
              <p className="place-card-description">{place.cardDescription}</p>
              <PlaceTags tags={place.tags} limit={3} />
              <div className="place-card-actions">
                <Link className="place-card-link" to={`/place/${place.slug}`}>查看詳情 <ArrowRight size={16} /></Link>
                {place.mapUrl && <a className="place-card-map" href={place.mapUrl} target="_blank" rel="noreferrer">Google Maps <ExternalLink size={14} /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export function PlaceDetailPage() {
  const { slug } = useParams();
  const place = places.find((item) => item.slug === slug);
  if (!place) return <main className="place-not-found"><h1>找不到這間店</h1><Link to="/">回到首頁</Link></main>;
  const category = categoryInfo[place.category];
  return (
    <main className="place-detail">
      <Link className="place-back" to={`/${place.category}`}><ArrowLeft size={17} /> 返回{category.title}</Link>
      <header className="place-detail-heading">
        <span className="place-card-category">{category.title} · DA NANG</span>
        <h1>{place.name}</h1>
        <p className="place-detail-position">{place.position}</p>
      </header>
      <img className="place-detail-cover" src={place.cover} alt={`${place.name} 封面`} />
      <section className="place-description-section">
        <h2>♡ 為什麼推薦</h2>
        <p>{place.description}</p>
        <PlaceTags tags={place.tags} />
      </section>
      {place.gallery.length > 0 && <section className="place-gallery-section"><h2>店鋪相冊 <span>{String(place.gallery.length).padStart(2, '0')} PHOTOS</span></h2><div className="place-gallery">{place.gallery.map((src, index) => <img key={src} src={src} alt={`${place.name} 相冊 ${index + 1}`} loading="lazy" />)}</div></section>}
      {place.mapUrl && <a className="place-map-link" href={place.mapUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> 在 Google Maps 打開 <ExternalLink size={15} /></a>}
    </main>
  );
}
