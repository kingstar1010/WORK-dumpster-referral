import Image from 'next/future/image';
import style from './BlockTopBanner.module.scss';
import ourDumpsters from '../assets/our_dumpsters.jpg';
import bannerBg from '../assets/banner-bg.png';


export function BlockTopBanner(props) {
  return (
    <section className={`${style.blockTopBanner} block-top-banner block`}>
      <div className={`block-inner content-width-constraint`}>
        <div>
          <p className={`top-title`}>Open 24 Hours</p>
          <div className='block-top-banner-content'>
            <h2>"Your Dumpster Guy" Dumpster Rentals</h2>
            <p>Fast and painless dumpster rentals serving Metro Detroit and the surrounding area.</p>
            <p>We deliver a dumpster and haul away construction debris, landscaping debris, and any other junk.</p>
            {/*<a href="tel:5869435752" title="Call Now" className={`orange button`}>Call Now</a>*/}
            <a href="#booking-form" title="Book Now" className={`orange button`}>Book Now</a>
          </div>
        </div>
        <Image loading="eager" src={ourDumpsters} alt="Our Dumpsters" />
      </div>
      <Image loading="eager" className={`top-background`} aria-hidden src={bannerBg} alt="background" />
    </section>
  )
}

export default BlockTopBanner;