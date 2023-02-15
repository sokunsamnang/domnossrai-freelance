import React from 'react';
import ITProject from './ITProject';
import GraphicProject from './GraphicProject';
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from 'react-i18next';
import { branding } from '../assets/data/portfolio';
import { Titled } from 'react-titled';
const Landing = () => {
  const { t } = useTranslation();
  return (
    <>
      <Titled title={title => `Double.da | ${title}`} />
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
                    {/* <div className="slider-btns">
                      <a data-animation="fadeInLeft" data-delay="1s" href="/#" className="btn radius-btn">{t('landing.get_start')}</a>
                    </div> */}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="hero__img d-none d-lg-block f-right" data-animation="fadeInRight" data-delay="1s">
                    <Player
                      autoplay
                      loop
                      src="https://lottie.host/101c75f2-4686-4237-9911-43062ad13824/ybejxWjwbR.json"
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
      {/* Domain-search start */}
      {/* <div className="domain-search-area section-bg1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <h2>{t('landing.search_new')}</h2>
              <p>{t('landing.supercharge_your')}</p>
            </div>
            <div className="col-xl-8 col-lg-7">
              <form action="#" className="search-box">
                <div className="input-form">
                  <input type="text" placeholder={t('landing.search_for')} />

                  <div div className="search-form" >
                    <button><i className="ti-search"></i></button>
                  </div>

                  <div className="world-form">
                    <i className="fas fa-globe"></i>
                  </div>
                </div>
              </form>
              <div className="single-domain pt-30 pb-30">
                <ul>
                  <li><span>.com</span>
                    <p>$15.99</p>
                  </li>
                  <li><span>.net</span>
                    <p>$10.99</p>
                  </li>
                  <li><span>.rog</span>
                    <p>$10.99</p>
                  </li>
                  <li><span>.me</span>
                    <p>$10.99</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div > */}
      {/* Domain-search end */}
      {/* service start */}
      {/* <section className="team-area section-bg1 section-padding40">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className=" single-cat">
                <div className="cat-icon">
                  <img src="ecohosting-main/assets/img/icon/services1.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="#">{t('landing.web_app')}</a></h5>
                  <p>{t('landing.web_app_desc')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-cat">
                <div className="cat-icon">
                  <img src="ecohosting-main/assets/img/icon/services2.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="#">{t('landing.blockchain_nft')}</a></h5>
                  <p>{t('landing.blockchain_nft_desc')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-cat">
                <div className="cat-icon">
                  <img src="ecohosting-main/assets/img/icon/services3.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5><a href="#">{t('landing.design_marketing')}</a></h5>
                  <p>{t('landing.design_marketing_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* service end */}
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
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src="ecohosting-main/assets/img/icon/price2.svg" alt="" />
                  <h4>{t('landing.system_development')}</h4>
                  <p>{t('landing.system_development_desc')}</p>
                </div>
                {/* <div className="card-bottom"> <Link to="/it" className="borders-btn ">{t('landing.get_start')}</Link></div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src="ecohosting-main/assets/img/icon/services4.svg" alt="" />
                  <h4>{t('landing.web_mobile_development')}</h4>
                  <p>{t('landing.web_mobile_development_desc')}</p>

                </div>
                {/* <div className="card-bottom"> <Link to="/it" className="borders-btn ">{t('landing.get_start')}</Link></div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10 mb-5">
              <div className="single-card text-center h-100 d-flex flex-column justify-content-between">
                <div className="card-top pb-5">
                  <img src="ecohosting-main/assets/img/icon/price3.svg" alt="" />
                  <h4>{t('landing.blockchain_nft_solution')}</h4>
                  <p>{t('landing.blockchain_nft_solution_desc')}</p>
                </div>
                {/* <div className="card-bottom"> <Link to="/blockchain_&_nft" className="borders-btn ">{t('landing.get_start')}</Link></div> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* card price end */}

      {/* about-1 area start */}
      <div className="about-area1 section-padding40">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">

              <div className="about-img ">
                <Player
                  autoplay
                  loop
                  src="https://assets9.lottiefiles.com/packages/lf20_uZeVpjFav8.json"
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
                {/* <div className="slider-btns">
                  <Link to="/gd" data-animation="fadeInLeft" data-delay="1s" className="btn radius-btn">{t('landing.doubleda_together')}</Link>
                </div> */}
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
                <h2 style={{ color: '#4C1E51' }}>{t('landing.development_project')}</h2>
                <p>{t('landing.development_project_desc')}</p>
              </div>
            </div>
          </div>
          <ITProject />
        </div>
      </section>
      <section className="section-padding40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="section-tittle text-center mb-90">
                <h2 style={{ color: '#4C1E51' }}>{t('landing.graphic_design_project')}</h2>
                <p>{t('landing.graphic_design_project_desc')}</p>
              </div>
            </div>
          </div>
          <GraphicProject />
        </div>
      </section>
      <section className="brand_area section_gap_bottom">
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
      </section>
    </>
  )
}

export default Landing