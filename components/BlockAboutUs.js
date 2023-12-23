import style from './BlockAboutUs.module.scss';

export function BlockAboutUs(props) {
  return (
    <section id="about-us" className={`${style.blockAboutUs} block`}>
      <h2>About Us</h2>
      <p>Fast and painless dumpster rentals serving Metro Detroit and the surrounding area. We deliver a dumpster and haul away construction debris, landscaping debris, and any other junk. Multiple length dumpsters are available, call to request options.</p>
      <p><strong>Our Address:</strong> 22007 Virginia Ave, Eastpoint, MI 48021 United States</p>

      <ul>
        <li><strong>Mon:</strong> Open 24 hours</li>
        <li><strong>Tue:</strong> Open 24 hours</li>
        <li><strong>Wed:</strong> Open 24 hours</li>
        <li><strong>Thu:</strong> Open 24 hours</li>
        <li><strong>Fri:</strong> Open 24 hours</li>
        <li><strong>Sat:</strong> Open 24 hours</li>
        <li><strong>Sun:</strong> Open 24 hours</li>
      </ul>

      <a className="button" href="tel:5869435752" title="Call Now">Call Now</a>
    </section>
  )
}

export default BlockAboutUs;