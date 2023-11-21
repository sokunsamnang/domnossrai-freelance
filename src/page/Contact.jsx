import React, {useEffect } from 'react'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import { FiMap } from 'react-icons/fi'
import { Titled } from 'react-titled'
import { useTranslation } from 'react-i18next';
import InputContact from '../components/InputContact';
const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);

  const { t } = useTranslation();
  

  return (
    <section className="contact-container">
      <Titled title={title => `Contact Us | ${title}`} />
      <div className="cover-image" style={{ backgroundImage: `url(${require("../assets/image/PSD_9_-scaled.jpg")})`, backgroundPosition:'bottom' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dicount-offer-content text-center pt-5 detail-cover-title ">
                <h2 className="theme-gradient">{t('contact_us')}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout">
        <section className="contact-grid row justify-content-center">
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiPhoneCall /></span>
              <ul>
                <li><a>086 581 383</a></li>
                <li><a>086 836 109</a></li>
              </ul>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiMail /></span>
              <ul>
                <li><a>sokkongchan@gmail.com</a></li>
              </ul>
            </div>
          </div>
         
        </section>
        <InputContact />
      </div>
    </section>
  )
}
export default Contact