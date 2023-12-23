import style from './Contractors.module.scss';

export default function Contractors() {
  return (
    <div className={`${style.contractor}`}>
        <div className="flex" style={{background:'#595f6a'}}> 
          <div className="w-half p-6 fw-600"><span>Our Contractors</span></div>
          <div className="w-half p-6 fw-600"><span>Service</span></div>
        </div>
        <table>
          <tbody className="tbody-bg">
            <tr className='tbody-row'>
              <a href='#thead-bg'><td>Your Dumpster Guy</td></a>
              <td>Dumpster Rental and Junk Removal</td>
            </tr>
            <tr className='tbody-row'>
              <a href='#thead-bg'><td>JSF Crane</td></a>
              <td>Crane services</td>
            </tr>
          </tbody>          
        </table>
        <div className="buttons justify-center mt-50"> 
          <button>See more</button>
          <button>Your company here?</button>
        </div>
    </div>
  );
}