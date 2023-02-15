import React from 'react'
import {FiCodesandbox} from 'react-icons/fi'
import {HiOutlineDevicePhoneMobile, HiOutlineComputerDesktop, HiOutlinePencilSquare} from 'react-icons/hi2'
import {AiOutlineCheck} from 'react-icons/ai'
import {TbUsers, TbActivity} from 'react-icons/tb'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'
const Server = () => {
  const { t } = useTranslation();
  
  return (
   <>
    <section>
        <div className="banner_inner" style={{ backgroundImage: `url(${require('../assets/image/server/web-hosting-company2.jpg')})` }}>
          <div className="container black-over-lay">
            <div className="row">
              <div className="col-12">
                <div className="banner_content server-content">
                  <h5 className="text-uppercase sub-title server-sub-title">{t("server.hero_sub_title")}</h5>
                  <h1 className="text-uppercase main-title server-main-title">Hosting & <br/>Maintenance</h1>
                  <p className=" text-uppercase desc-title server-desc-title">{t("server.hero_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pt">
        <div className="server-content feature row">
            <div className="feature-item col-xl-4 col-md-6 col-sm-12">
              <div className="feature-box">
               <h1><HiOutlineComputerDesktop /></h1>
                <h2>System Development</h2>
                <p>Front-end & Back-end, CMS, Custom Programming, POS, E-commerce</p>
              </div>
            </div>
            <div className="feature-item col-xl-4 col-md-6 col-sm-12">
              <div className="feature-box">
                <h1><HiOutlineDevicePhoneMobile /></h1>
                <h2>Mobile Development</h2>
                <p>iOS, Android, React Native, Flutter</p>
              </div>
            </div>
            <div className="feature-item col-xl-4 col-md-6 col-sm-12">
              <div className="feature-box">
                <h1><FiCodesandbox /></h1>
                <h2>Blockchain & NFT</h2>
                <p>Private blockchain network, dApps, Smart Contract, Crypto wallets, Asset tokenization platforms, De-Fi</p>
              </div>
            </div>
            <div className="feature-item col-xl-4 col-md-6 col-sm-12">
              <div className="feature-box">
                <h1><HiOutlinePencilSquare /></h1>
                <h2>Graphic & Branding Design</h2>
                <p>Logo & Branding, Social Media, Website UI&UX, Book & Magazine, Product Packaging</p>
              </div>
            </div>
            <div className="feature-item col-xl-4 col-md-6 col-sm-12">
              <div className="feature-box">
                <h1><TbUsers /></h1>
                <h2>Marketing & SEO</h2>
                <p>Search Engine Optimization, Website Speed Optimization,
                  Advertising, Market Research
                </p>
              </div>
            </div>
            <div className="feature-item col-xl-4 col-md-6 col-sm-12">
              <div className="feature-box">
                <h1><TbActivity /></h1>
                <h2>Hosting & Domain</h2>
                <p>Website (Cloud, Dedicated) & WordPress Hosting, Domain Registration & Management</p>
              </div>
            </div> 
        </div>
      </section>
      <section className="section-pt section-pb">
        <div className="server-content hosting">
            <div className="row hosting-header">
              <div className="col-xl-6 col-md-6 col-sm-12">
                  <h1>Hosting Plan</h1>
                  <p>{t("server.hosting_desc")}</p>
              </div>
            </div>
            <div className="row hosting-price">
              <div className="col-xl-4 col-md-6 col-sm-12 price-item">
                <div className="price-box">
                  <div className="price">
                    <h3>Basic</h3>
                    <h1>10</h1>
                    <p>USD Per Month (starting)</p>
                  </div>
                  <div className="benefit">
                    <ul>
                      <li><span><AiOutlineCheck /></span><span>1 Website</span></li>
                      <li><span><AiOutlineCheck /></span><span>Fast SSD Storage</span></li>
                      <li><span><AiOutlineCheck /></span><span>1000 Transfer</span></li>
                      <li><span><AiOutlineCheck /></span><span>cPanel Access</span></li>
                      <li><span><AiOutlineCheck /></span><span>Support IPv6</span></li>
                    </ul>
                  </div>
                  <div className="next-step">
                    <Link to="/contact" className="slider-btns my-slider-btn"><a data-animation="fadeInLeft" data-delay="1s" className="btn radius-btn" href="/detail/1">Contact Us</a></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 price-item">
                <div className="price-box">
                  <div className="price">
                    <h3>Medium</h3>
                    <h1>45</h1>
                    <p>USD Per Month (starting)</p>
                </div>
                <div className="benefit">
                    <ul>
                      <li><span><AiOutlineCheck /></span><span>4GB/2 CPUs</span></li>
                      <li><span><AiOutlineCheck /></span><span>Fast SSD Storage (80GB)</span></li>
                      <li><span><AiOutlineCheck /></span><span>4TB Transfer</span></li>
                      <li><span><AiOutlineCheck /></span><span>cPanel Access</span></li>
                      <li><span><AiOutlineCheck /></span><span>Support IPv6</span></li>
                      <li><span><AiOutlineCheck /></span><span>24/7 support</span></li>
                    </ul>
                </div>
                <div className="next-step">
                  <Link to="/contact" className="slider-btns my-slider-btn"><a data-animation="fadeInLeft" data-delay="1s" className="btn radius-btn" href="/detail/1">Contact Us</a></Link>
                </div>
                </div>
                
                
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12 price-item">
              <div className="price-box">
                <div className="price">
                    <h3>Dedicated</h3>
                    <h1>100</h1>
                    <p>USD Per Month (starting)</p>
                </div>
                <div className="benefit">
                    <ul>
                      <li><span><AiOutlineCheck /></span><span>Max. 5 Websites</span></li>
                      <li><span><AiOutlineCheck /></span><span>8GB/2 CPUs</span></li>
                      <li><span><AiOutlineCheck /></span><span>4TB Transfer</span></li>
                      <li><span><AiOutlineCheck /></span><span>cPanel Access</span></li>
                      <li><span><AiOutlineCheck /></span><span>Free SSL Certificate</span></li>
                      <li><span><AiOutlineCheck /></span><span>Various OS</span></li>
                      <li><span><AiOutlineCheck /></span><span>24/7 support</span></li>
                    </ul>
                </div>
                <div className="next-step">
                  <Link to="/contact" className="slider-btns my-slider-btn"><a data-animation="fadeInLeft" data-delay="1s" className="btn radius-btn" href="/detail/1">Contact Us</a></Link>
                </div>
              </div>
              </div>
            </div>
        </div>
      </section>
   </>
  )
}

export default Server