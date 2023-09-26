import { React, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { allPortfolio } from '../assets/data/portfolio';
import { Titled } from 'react-titled';
import NoPage from './NoPage';
const PortfolioDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [data,setData] = useState();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
    allPortfolio.map((item)=>{t(`${item.title_id}.title`) == id && setData(item)})
  }, [])
  return (
    <>
    {data ?
        <>
          <Titled title={title => `${t(`${data.title_id}.title`)} | ${t('menus.portfolio')}`} />
          <section className="portfolio-cover" style={{ backgroundImage: 'url(' + require(`../assets/image/portfolio/${data.img[0]}`) + ')' }} >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="dicount-offer-content text-center pt-5 detail-cover-title ">
                    <h2 className="theme-gradient">{t(`${data.title_id}.title`)}</h2>
                    <p>{t(`${data.title_id}.sub_title`)}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="packages">
            <div className="container detail_container">
              <div className="detail_left">
                <h1>{t(`${data.title_id}.detail_title`)}</h1>
                <div className="under_line"></div>
                <p>{t(`${data.title_id}.detail_desc`)}</p>
                <div className="under_line"></div>
                <div className="client_tb">
                  <div className="client-col">
                    <span>{t('portfolio.client_name')}</span>
                    <p>{t(`${data.title_id}.client_name`)}</p>
                  </div>
                  <div className="client-col">
                    <span>{t('portfolio.release_date')}</span>
                    <p>{t(`${data.title_id}.release_date`)}</p>
                  </div>
                  <div className="client-col">
                    <span>{t('portfolio.project_type')}</span>
                    <p>{t(`${data.title_id}.project_type`)}</p>
                  </div>
                </div>
              </div>
              <div className="detail_right">
                <div className="item-list">
                  <h4>{t(`${data.title_id}.title_1`)}</h4>
                  <ul>
                    {data.desc_1.map(desc => (
                      <li key={desc}><div className="check-icon"><FiCheck /></div> {t(`${data.title_id}.desc_1.${desc}`)}</li>
                    ))}
                  </ul>
                </div>
                <div className="item-list">
                  <h4>{t(`${data.title_id}.title_2`)}</h4>
                  <ul>
                    {data.desc_2.map(desc => (
                      <li key={desc}><div className="check-icon"><FiCheckCircle /></div>{t(`${data.title_id}.desc_2.${desc}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="section_gap_bottom">
            <div className="container image-container">
              {
                data.img.map((photo, index) => (
                  <div key={`pi-mg_${index}`} className="image-box">
                    <img src={require(`../assets/image/portfolio/${photo}`)} alt="" />
                  </div>
                ))
              }
            </div>
          </section>
        </> : <NoPage />
    }
     
    </>
  )
}

export default PortfolioDetail