import Image from 'next/future/image';
import Link from 'next/link';
import style from './BookJunkRemoval.module.scss';
import { menu } from '../src/pricing';

export default function CallUsLink() {
  return (
    <section className={`${style.bookJunkRemoval} block`}>
      <a className="phone-link" href="tel:5555555555">
        <div className="phone-label">
          <p className="phone-title">555-555-5555</p>
          <p className="phone-subtitle">Open 9am-5pm</p>
        </div>
      </a>
    </section>
  )
}
