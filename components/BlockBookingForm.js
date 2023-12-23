import { useRef, useState, useEffect } from 'react';
import Loader from './Loader.js';
import style from './BlockBookingForm.module.scss';
import { config } from '../assets/config.js';
import { menu, getPriceOfItem } from '../src/pricing';

function dataForForm(formEl) {
  const formData = {};
  Array.from(formEl.querySelectorAll('input, select, textarea'))
    .forEach((el) => {
      const name = el.getAttribute('name');
      formData[name] = el.value;
    });
  return formData;
}


export function BlockBookingForm(props) {
  const defaultDynamicInfo = <div className="dynamic-info">
    <p><strong>Quote:</strong> For a quote, fill out the above</p>
    <p className="disclaimer">A 3.5% surcharge is added at checkout for credit cards</p>
    <p><strong>Weight Limit:</strong></p>
    <p><strong>Restrictions:</strong></p>
  </div>;
  const [dynamicInfo, setDynamicInfo] = useState(defaultDynamicInfo);
  function updateDynamicInfo() {
    if (!formRef.current) {
      return;
    }
    const formData = dataForForm(formRef.current);
    if (!formData.dumpsterLength ||
      !formData.rentalDurationDays) {
      setDynamicInfo(defaultDynamicInfo);
      return;
    }

    const price = getPriceOfItem(formData.dumpsterLength, parseInt(formData.rentalDurationDays));
    const priceFmt = `$${price}.00`;

    setDynamicInfo(<div className="dynamic-info">
      <p><strong>Quote:</strong> {priceFmt}</p>
      <p className="disclaimer">A 3.5% surcharge is added at checkout for credit cards</p>
      <p><strong>Weight Limit:</strong> 2 tons</p>
      <p>Above 2 tons, $125 is charged for each additional ton</p>
      <p><strong>Restrictions:</strong> No hazardous materials</p>
    </div>);
  }
  // Update on first render if there's prefilled info from the browser
  useEffect(updateDynamicInfo, []);

  const formRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [reqSent, setReqSent] = useState(false);
  const [reqError, setReqError] = useState(null);
  async function submit() {
    if (!formRef.current) {
      return;
    }
    setFormSubmitted(true);
    setReqError(null);

    // Try form validity and get data
    const form = formRef.current;
    const isValid = form.reportValidity();
    if (!isValid) {
      return;
    }
    const formData = dataForForm(form);

    // Send the message to the backend
    setShowLoader(true);
    const resp = await fetch(`${config.built.API_ENDPOINT}/booking`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    });
    setShowLoader(false);
    setFormSubmitted(false);
    if (!resp.ok) {
      setReqError('Request failed, please call us');
      console.error(resp);
      return;
    }
    else {
      setReqSent(true);
    }
  }

  function onPhone(e) {
    const validityMsg = e.type === 'invalid'
      ? 'Please enter a phone number with at least 10 digits.'
      : ''
    e.target.setCustomValidity(validityMsg);
  }
  function onEmail(e) {
    const validityMsg = e.type === 'invalid'
      ? 'Please enter a valid email address.'
      : ''
    e.target.setCustomValidity(validityMsg);
  }

  return (
    <section className={`block ${style.blockBookingForm}`}>
      <form ref={formRef} className={`${formSubmitted ? 'submitted' : ''}`}>
        <div className="side-by-side-50-50">
          <input name="name" type="text" placeholder="Name" required/>
          <input name="phone" type="tel" placeholder="Phone" required pattern="(.*\d){10,}.*" onInvalid={onPhone} onInput={onPhone}/>
          {/*<input name="email" type="email" placeholder="Email" required pattern=".+@.+\..+" onInvalid={onEmail} onInput={onEmail}/>*/}
        </div>
        {/*<div className="hr" />*/}
        {/*<select name="dumpsterLength" defaultValue="" required onInput={updateDynamicInfo}>
          <option value="" disabled>Dumpster Selection</option>
          {Object.entries(menu).map(([length, item])=>(
            <option key={length} value={length}>{item.name}</option>
          ))}
        </select>*/}
        <input name="address" type="text" placeholder="Dropoff Address" required/>
        {/*<div className="side-by-side-2">
          <input name="dropoffDate" type="text" placeholder="Dropoff Date" required/>
          <select name="rentalDurationDays" defaultValue="" required onInput={updateDynamicInfo}>
            <option value="" disabled>Rental Duration</option>
            <option value="1">1 day</option>
            <option value="2">2 day</option>
            <option value="3">3 day</option>
            <option value="4">4 day</option>
            <option value="5">5 day</option>
            <option value="6">6 day</option>
            <option value="7">7 day</option>
          </select>
        </div>*/}
        <textarea name="comments" placeholder="Special Instructions"></textarea>
      </form>
      <div className="action-container">
        { !reqSent
          ? (<>
            <button className={`request-button chunky ${showLoader ? 'loading': ''}`} onClick={submit}>
              <p>Request Dumpster</p>
              <p><small>(you will receive a call to confirm the details)</small></p>
            </button>
            { reqError &&
              <p className="error req-error">{reqError}</p>
            }
          </>)
          :(<p>Thanks! We have received your request. We will contact you shortly</p>)
        }
      </div>
      <h3>Terms</h3>
      {dynamicInfo}
    </section>
  )
}

export default BlockBookingForm;