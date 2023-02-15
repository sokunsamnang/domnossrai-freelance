import { React } from 'react';
import '../assets/satner-master/vendors/linericon/style.css';
import '../assets/satner-master/css/font-awesome.min.css';
import '../assets/satner-master/css/magnific-popup.css';
import '../assets/satner-master/vendors/nice-select/css/nice-select.css';
import '../assets/satner-master/css/style.css';
import { Link } from 'react-router-dom';
import { allGraphicDesign } from '../assets/data/portfolio';
import { useTranslation } from 'react-i18next';
import useScript from "../appendScript/useScript";
const GraphicProject = () => {
  const { t } = useTranslation();
  useScript("/satner-master/js/popper.js");
  useScript("/satner-master/js/stellar.js");
  useScript("/satner-master/js/theme.js");
  return (
    <>
      <div className="filters-content">
        <div className="row portfolio-grid justify-content-center mb-30">
          {
            allGraphicDesign.slice(0, 3).map((item, index) => (
              <div key={`id_${index}`} className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box my-box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src={require(`../assets/image/portfolio/${item.img}`)} alt="" />
                    <div className="overlay"></div>
                    <a href={require(`../assets/image/portfolio/${item.img}`)} className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a>{t(`graphic.${item.title}`)}</a></h4>
                    <p>{t(`graphic.${item.type}`)}</p>
                  </div>
                  {/* <button className="slider-btns my-slider-btn" >
                    <a href={require(`../assets/image/portfolio/${item.img}`)} data-animation="fadeInLeft" data-delay="1s" className="btn radius-btn img-gal">
                      Case Study
                    </a>
                  </button> */}
                </div>

              </div>
            ))
          }

        </div>
        <div className="row">
          <div className="col-12 view-more-btn">
            <div className="card-bottom"> <Link to="/graphic-design" className="borders-btn ">View More Projects</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GraphicProject