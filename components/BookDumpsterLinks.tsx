import Image from 'next/future/image';
import Link from 'next/link';
import { menu } from '../src/pricing';
import style from './BookDumpsterLinks.module.scss';
import d17 from "../assets/dumpster_17yddumptrailer.png";
import d22 from "../assets/dumpster_22ydrolloff.png";

function r(n: number) {
  return Math.ceil(n);
}

// By default, the browser chooses 100vw when choosing from the srcset. We need
// to specify size so it stops wasting resources. Luckily, we know the sizes
// at all viewports so use that here (from css)
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
const textelSizes =
  `(min-width : 400px)  ${r(300 * 260/300)}px,
  ${r(200 * 260/300)}px`;
// const textelSizesLarge = 
//   `(min-width : 1000px) ${r(650 * 260/300)}px,
//    (min-width : 800px)  ${r(500 * 260/300)}px,
//    (min-width : 600px)  ${r(400 * 260/300)}px,
//   ` + textelSizes;

export default function BookDumpsterLinks() {
  return (
    <section className={`${style.bookDumpsterLinks} block`}>
      <div>
        <Link href="/rent/17yd-dumpster">
          <a className="dumpster-link button-chunky">
            <div className="dumpster-image-ct">
              <Image
                alt={"17 yd dump trailer"}
                width={160}
                height={160 * d17.height/d17.width}
                src={d17}
                sizes={textelSizes}
              />
            </div>
            <div className="dumpster-label">
              <p className="dumpster-type">17yd dump trailer</p>
              <p className="dumpster-price">$375</p>
            </div>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/rent/22yd-dumpster">
          <a className="dumpster-link button-chunky">
            <div className="dumpster-image-ct">
              <Image
                alt={"22 yd roll off dumpster"}
                width={200}
                height={200 * d22.height/d22.width}
                src={d22}
                sizes={textelSizes}
              />
            </div>
            <div className="dumpster-label">
              <p className="dumpster-type">22yd rolloff</p>
              <p className="dumpster-price">$425</p>
            </div>
          </a>
        </Link>
      </div>

      <p className="content">Our rental terms:
        <ul>
          <li>No hazardous waste</li>
          <li>Weight limit 2 tons</li>
        </ul>
      </p>
    </section>
  )
}
