import Image from 'next/image';
import Link from 'next/link';
import style from './BlockAboutUs.module.scss';
import { menu } from '../src/pricing';

export default function LatestJob() {
  return (
    <section className={`${style.blockAboutUs} block`}>
      <div>
        <Link href="/rent/17yd-dumpster">
          <Image alt={"17 yd dumpster product image"} src={""}/>
          <div>
            <p>17yd</p>
            <p>$375</p>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/rent/22yd-dumpster">
          <Image alt={"22 yd dumpster product image"} src={""}/>
          <div>
            <p>22yd</p>
            <p>$425</p>
          </div>
        </Link>
      </div>

      <p>Dumpster rental terms</p>
    </section>
  )
}
