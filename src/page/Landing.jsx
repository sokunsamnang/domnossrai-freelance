import React from 'react';
import ITProject from './ITProject';
import GraphicProject from './GraphicProject';
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from 'react-i18next';
import { branding } from '../assets/data/portfolio';
import heroAnimation from '../assets/image/animation/140746-cubicmaths.json';
import togetherAnimation from '../assets/image/animation/129756-online-investment-scheme.json';
import devIcon from '../assets/image/icons/Mobile app development and coding.png';
import dbIcon from '../assets/image/icons/Uploading files to a database.png'
import { Titled } from 'react-titled';
const Landing = () => {
  const { t } = useTranslation();
  return (
    <>
      <Titled title={title => `Home | ${title}`} />
      <div className="slider-area slider-bg ">
        <div className="slider-active">
          <div className="single-slider d-flex align-items-center slider-height ">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-5 col-md-9 ">
                  <div className="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".3s">{t("landing.design_evolution")}</span>
                    <h1 data-animation="fadeInLeft" data-delay=".6s ">{t('landing.design_driven')}</h1>
                    <p data-animation="fadeInLeft" data-delay=".8s">{t('landing.supercharge')}</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                    <Player
                      autoplay
                      loop
                      src={heroAnimation}
                      style={{ height: "100%", width: "100%" }}
                    >
                    </Player>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-shape d-none d-lg-block">
          <img className="slider-shape1" src="ecohosting-main/assets/img/hero/top-left-shape.png" alt="" />
        </div>
      </div>
      
      {/* card price start*/}
      <section className="pricing-card-area fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-tittle text-center mb-90">
                <h2>{t('landing.service_for_you')}</h2>
                <p>{t('landing.service_for_you_desc')}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src={dbIcon} alt="" />
                  <h4>{t('landing.system_development')}</h4>
                  <p>{t('landing.system_development_desc')}</p>
                </div>
                
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src={devIcon} alt="" />
                  <h4>{t('landing.web_mobile_development')}</h4>
                  <p>{t('landing.web_mobile_development_desc')}</p>

                </div>
               
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* about-1 area start */}
      <div className="about-area1 section-padding40">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">

              <div className="about-img ">
                <Player
                  autoplay
                  loop
                  src={togetherAnimation}
                  style={{ height: "100%", width: "100%" }}
                >
                </Player>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="about-caption ">

                <div className="section-tittle section-tittle2 mb-30">
                  <h2>{t('landing.doubleda_means')} "{t('landing.together')}" {t('landing.doubleda_means2')} </h2>
                </div>
                <p className="mb-40">{t('landing.doubleda_means_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section-padding40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-tittle text-center mb-90">
                <h2 style={{ color: '#2B1C5C' }}>{t('landing.development_project')}</h2>
                <p>{t('landing.development_project_desc')}</p>
              </div>
            </div>
          </div>
          <ITProject />
        </div>
      </section>
   
      {/* <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-tittle text-center mb-90">
                <h2 style={{ color: '#4C1E51' }}>{t('landing.top_client')}</h2>
                <p>{t('landing.top_client_desc')}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <div className="row justify-content-center">
                {
                  branding.map((item, index) => (
                    <div key={`logos_${index}`} className="col-lg-3 col-md-6 col-sm-6">
                      <div className="single-brand-items d-table">
                        <div className="d-table-cell text-center">
                          <img src={item.logo} alt="" />
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Landing