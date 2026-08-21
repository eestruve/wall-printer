import { Link } from 'react-router-dom';
import './BackButton.css';

export default function BackButton() {
  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <Link to="/" className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        На главную
      </Link>
    </div>
  );
}
