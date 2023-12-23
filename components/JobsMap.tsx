import Image from 'next/future/image';
import Link from 'next/link';
import { menu } from '../src/pricing';
import style from './JobsMap.module.scss';
import Mi from '../assets/michigan_plain_web.svg?component';

export default function BookDumpsterLinks(props: { className?: string }) {
  return (
    <section className={`${style.jobsMap} ${props.className ?? ''} block`}>
      <Mi
        width="800px"
        height={`${(800*2126/1440).toFixed(2)}px`}
      />
      <Link href="/">
        <a className="grosse-ile-link">
          Grosse Ile
        </a>
      </Link>
      <Link href="/">
        <a className="detroit-link">
          Detroit
        </a>
      </Link>
    </section>
  )
}


