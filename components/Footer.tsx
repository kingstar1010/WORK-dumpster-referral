import Image from 'next/future/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/ydp_logo_stroke_mid.png';
import style from './Footer.module.scss';

export default function Footer(props) {
  return (
    <footer className={`${style.footer}`}>
      <div>Get featured on our site</div>
      <div>Our Process</div>
      <div>About this site</div>
    </footer>
  )
}