import style from './BlockShortTerms.module.scss';

export function BlockShortTerms(props) {
  return (
    <section className={`${style.blockShortTerms} block content`}>
      <h2>Rental Agreement</h2>
      <p>Renting our dumpsters means you agree to our <a target="_blank" href="/rental_agreement.pdf">rental agreement</a>.</p>
      <p>Additionally, for <strong>ALL</strong> dumpster rentals:</p>
      <ul>
        <li>$125.00 charge above 2 ton weight limit. This is anywhere from 1lbs to 2000lbs over the limit. Every additional ton over the weight limit is another $125.00 charge.</li>
        <li>Absolutely <strong>NO</strong> hazardous materials</li>
      </ul>
    </section>
  )
}

export default BlockShortTerms;