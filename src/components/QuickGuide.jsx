import { Link } from 'react-router-dom';
import { quickLinks } from '../data/home';
export default function QuickGuide(){return <div className="quick-wrap"><div className="quick-guide">{quickLinks.map((item,i)=><Link className="quick-item" to={item.to} key={item.title}><span className={`quick-icon qi-${i}`}>{item.icon}</span><span className="quick-text"><b>{item.title}</b><small>{item.detail}</small></span></Link>)}</div></div>}
