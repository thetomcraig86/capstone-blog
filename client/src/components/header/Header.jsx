import './header.css';

export default function Header() {
  const PF = 'http://localhost:5000/images/';
  const hero = 'blue_hero.jpg';
  return (
    <div className='h-container'>
      <img src={PF + hero} alt='brand message' className='hero' />
    </div>
  );
}
