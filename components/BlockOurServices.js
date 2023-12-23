import Image from 'next/image';
import style from './BlockOurServices.module.scss';
import nounCost from '../assets/noun-cost.png';
import nounFlexible from '../assets/noun-flexible.png';
import nounPackaging from '../assets/noun-packaging.png';
import nounSchedule from '../assets/noun-schedule.png';
import nounDisaster from '../assets/noun-disaster.png';

export function BlockOurServices(props) {
  return (
    <section id="our-services" className={`${style.blockOurServices} block`}>
      <h2>Our Services</h2>
      <ul>
        <li>
          <Image alt="Flexibility icon" src={nounFlexible} />
          <p>Schedule drop-offs and pick-ups</p>
        </li>
        <li>
          <Image alt="Calendar icon" src={nounSchedule} />
          <p>Flexible dumpster removal and usage</p>
        </li>
        <li>
          <Image alt="Packaging icon" src={nounPackaging} />
          <p>Clean and attractive dumpsters</p>
        </li>
        <li>
          <Image alt="Cost icon" src={nounCost} />
          <p>Industry competitive rates</p>
        </li>
        <li>
          <Image alt="Disaster icon" src={nounDisaster} />
          <p>Disaster cleanup emergency services</p>
        </li>
      </ul>
    </section>
  )
}

export default BlockOurServices;