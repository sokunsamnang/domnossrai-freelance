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
      <div className="cover-image" style={{ backgroundImage: `url(${require("../assets/image/PSD_9_-scaled.jpg")})` }}>
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
        <section className="contact-grid row">
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiPhoneCall /></span>
              <ul>
                <li><a>KR: +82 010 2709 9254</a></li>
                <li><a>UK: +44 074 8756 0640</a></li>
                <li><a>KH: +855 010 224 214</a></li>
              </ul>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiMail /></span>
              <ul>
                <li><a>admin@doubleda.net</a></li>
                <li><a>doubleda01@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-6 col-12" >
            <div className="grid">
              <span className="icon"><FiMap /></span>
              <ul>
                <li><a>KR: G223, 602 Yeongdong-daero, Gangnam-gu, Seoul, Korea (06083) KH: #34, St360, BKK1, Phnom Penh, Cambodia</a></li>
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