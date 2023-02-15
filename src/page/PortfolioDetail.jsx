import { React, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { allPortfolio } from '../assets/data/portfolio';
import { Titled } from 'react-titled';
const PortfolioDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  let pid = id - 1;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [])

  return (
    <>
      <Titled title={title => `${t(`${allPortfolio[`${pid}`].title_id}.title`)} | ${t('menus.portfolio')}`} />
      <section className="portfolio-cover" style={{ backgroundImage: 'url(' + require(`../assets/image/portfolio/${allPortfolio[`${pid}`].img[0]}`) + ')' }} >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dicount-offer-content text-center pt-5 detail-cover-title ">
                <h2 className="theme-gradient">{t(`${allPortfolio[`${pid}`].title_id}.title`)}</h2>
                <p>{t(`${allPortfolio[`${pid}`].title_id}.sub_title`)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="packages">
        <div className="container detail_container">
          <div className="detail_left">
            <h1>{t(`${allPortfolio[`${pid}`].title_id}.detail_title`)}</h1>
            <div className="under_line"></div>
            <p>{t(`${allPortfolio[`${pid}`].title_id}.detail_desc`)}</p>
            <div className="under_line"></div>
            <div className="client_tb">
              <div className="client-col">
                <span>{t('portfolio.client_name')}</span>
                <p>{t(`${allPortfolio[`${pid}`].title_id}.client_name`)}</p>
              </div>
              <div className="client-col">
                <span>{t('portfolio.release_date')}</span>
                <p>{t(`${allPortfolio[`${pid}`].title_id}.release_date`)}</p>
              </div>
              <div className="client-col">
                <span>{t('portfolio.project_type')}</span>
                <p>{t(`${allPortfolio[`${pid}`].title_id}.project_type`)}</p>
              </div>
            </div>
          </div>

          <div className="detail_right">
            <div className="item-list">
              <h4>{t(`${allPortfolio[`${pid}`].title_id}.title_1`)}</h4>
              <ul>
                {allPortfolio[`${pid}`].desc_1.map(item => (
                  <li key={item}><div className="check-icon"><FiCheck /></div> {t(`${allPortfolio[`${pid}`].title_id}.desc_1.${item}`)}</li>
                ))}
              </ul>
            </div>
            <div className="item-list">
              <h4>{t(`${allPortfolio[`${pid}`].title_id}.title_2`)}</h4>
              <ul>
                {allPortfolio[`${pid}`].desc_2.map(item => (
                  <li key={item}><div className="check-icon"><FiCheckCircle /></div>{t(`${allPortfolio[`${pid}`].title_id}.desc_2.${item}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section_gap_bottom">
        <div className="container image-container">
          {
            allPortfolio[`${pid}`].img.map((item, index) => (
              <div key={`pi-mg_${index}`} className="image-box">
                <img src={require(`../assets/image/portfolio/${item}`)} alt="" />
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default PortfolioDetail