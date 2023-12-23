import style from './ContractorDetail.module.scss';
import img_ctr_detail from "../assets/contract_detail.jpg";
import img_star_icon from "../assets/staricon.png";
import img_direct_icon from "../assets/direct.png";
import Image from 'next/image';
export default function ContractorDetail() {
    return (
      <>
          <section className={`${style.contractorDetail} block`}>
            <div className="ctr_main">
                <div className="ctr_image">
                    <Image src={img_ctr_detail} height={1500}/>
                </div>
                <div className="ctr_content">
                    <div className="ctr_content_header">
                        <Image src={img_star_icon} className="ctr_content_header_icon" width={15} height={15}></Image>
                        <p className="ctr_content_header_text">Featured Contractor</p>
                    </div>
                    <div className="ctr_content_title">JSF Crane</div>
                    <div className="ctr_content_text">
                        <p>JSF Crane is headed by Jimmy Garlan. Garlan started his company in 1972 with 100$ and a desire to strike out on his own. He's been providing quality, on time service all around Detroit for the past 3 years, going from 3 employees to 20.</p>
                        <p>JSF Crane has been seen most recently at the demolition of the Joe Louis Ice Arena. 60,000 hours of service over 10 people has gone into that job. Check out the job here.</p>
                    </div>
                    <div className="ctr_content_schedule">
                        <p className="ctr_content_schedule_title">Schedule a crane!</p>
                        <div className="ctr_content_schedule_content">
                            <div className="ctr_content_schedule_text">
                                <p className="ctr_content_schedule_phone">555-555-555</p>
                                <p className="ctr_content_schedule_time">Open 8am to 5pm</p>
                            </div>
                            <div className="ctr_content_schedule_icon">
                                <Image src={img_direct_icon} className="ctr_content_schedule_icon_image"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ctr_bottom">
                <p className="ctr_bottom_title">Need a different discipline?</p>
                <a className="ctr_bottom_view_site"> Visit our directory</a>
            </div>
          </section>
      </>
    );
}
  