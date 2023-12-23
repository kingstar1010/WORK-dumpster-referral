import Image from 'next/future/image';
import logo from '../assets/ydp_logo_stroke_mid.png';
import style from './Header.module.scss';

export default function Header(props) {
  return (
    <header className={`${style.header}`}>
      <div className='content-width-constraint-desktop-only ml-'>
        <span className=''>LOGO</span>
        <span className='ml-102'>Your Local Pro</span>
      </div>
    </header>
  );
}