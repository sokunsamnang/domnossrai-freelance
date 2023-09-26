import { React, useEffect } from 'react';
import '../assets/tournest-master/assets/css/style.css';
import '../assets/tournest-master/assets/css/animate.css';
import '../assets/tournest-master/assets/css/responsive.css';
import { useTranslation } from 'react-i18next';
import { allPortfolio } from '../assets/data/portfolio';
import { Link } from 'react-router-dom';
import { Titled } from 'react-titled';
export default function ITProjectDetail(props) {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [])
  return (
    <>
      <Titled title={title => `${t('menus.portfolio')} | ${title}`} />
      <section>
        <div className="banner_inner" style={{ backgroundImage: `url(${require('../assets/image/dp-big-portfolio-04.jpg')})` }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner_content">
                  <h1 className="text-uppercase main-title">{t('development.our_portfolio')}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pack" className="packages">
        <div className="container">
          <div className="gallery-header text-center">
            <p>
              {t('development.portfolio_desc')}
            </p>
          </div>
          <div className="packages-content">
            <div className="row">
              {
                allPortfolio.map((item, index) => (
                  <div key={item.id} className="col-md-4 col-sm-6">
                    <div className="single-package-item">
                      <img src={require(`../assets/image/portfolio/${item.img[0]}`)} alt="portfolio-image" />
                      <div className="single-package-item-txt">
                        <h3>{t(`${item.title_id}.title`)} </h3>
                        <div className="packages-para">
                          <p><i className="fa fa-angle-right"></i> {t(`${item.title_id}.detail_title`)}</p>
                          <p><i className="fa fa-angle-right"></i>  {t(`${item.title_id}.release_date`)}</p>
                        </div>
                        <div className="about-btn p-0">
                          <button className="slider-btn col-12 my-slider-btn" >
                            <Link to={{ pathname: `/development/${t(`${item.title_id}.title`)}` }} data-animation="fadeInLeft" data-delay="1s" className="btn radius-btn">
                              See Details
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
