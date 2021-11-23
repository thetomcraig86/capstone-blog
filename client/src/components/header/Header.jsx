import './header.css';
import hero from './WDUhero.png';

export default function Header() {
  return (
    <div className='h-container'>
      <img src={hero} alt='brand message' className='hero' />
    </div>
  );
}
