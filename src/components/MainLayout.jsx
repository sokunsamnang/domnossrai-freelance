import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import useCollapse from "react-collapsed";
import { Titled } from 'react-titled';
const MainLayout = ({ children }) => {

  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { getCollapseProps, getToggleProps } = useCollapse({ defaultExpanded: false });

  return (

    <div>
      <Titled title={() => 'DoubleDa'} currentTitle={() => `${window.location.pathname} | DoubleDa`}>
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src="/ecohosting-main/assets/img/logo/loder.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <header>
          <div className="header-transparent header-area " >
            <div className="main-header ">
              <div className="header-bottom  header-sticky">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2">
                      <div className="logo">
                        <Link to="/"><img src="/ecohosting-main/assets/img/logo/logo.png" alt="" className="header-logo" onClick={() => goToTop()} /></Link>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10">
                      <div className="menu-wrapper d-flex align-items-center justify-content-end">
                        <div className="main-menu d-none d-lg-block">
                          <nav>
                            <ul id="navigation">
                              <li>
                                <Link to="/development" >{t('menus.dev')}</Link>
                                <ul className="submenu">
                                  <li><Link to="/development" >{t('menus.portfolio')}</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/server-hosting" >{t('menus.server')}</Link></li>
                              <li><Link to="/graphic-design" >{t('menus.graphic_design')}</Link></li>
                              <li><Link to="/blockchain_&_nft" >{t('menus.blockchain')}</Link></li>
                              <li><Link to="/contact" >{t('menus.contact')}</Link></li>
                              <li><a >{t("menus.lang.lng")}</a>
                                <ul className="submenu">
                                  <li><a onClick={() => changeLanguage('eng')}>{t("menus.lang.eng")}</a></li>
                                  <li><a onClick={() => changeLanguage('kr')}>{t("menus.lang.kr")}</a></li>
                                  <li><a onClick={() => changeLanguage('kh')}>{t("menus.lang.kh")}</a></li>
                                </ul>
                              </li>
                              {/* <li className="button-header margin-left "> <a href="/register" className="btn"> {t('menus.sign_up')}</a></li>
                              <li className="button-header"><a href="/login" className="btn3">{t('menus.sign_in')}</a>
                              </li> */}
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none">

                        <div className="mobile_menu_icon" {...getToggleProps()}>
                          <AiOutlineMenu />
                        </div>

                        <div className="slicknav_menu mobile_menu_card" {...getCollapseProps()}>

                          <ul className="slicknav_nav">
                            <li>
                              <Link to="/it">{t('menus.dev')}</Link>
                              <ul className="submenu">
                                <li><Link to="/it">{t('menus.portfolio')}</Link></li>
                              </ul>
                            </li>
                            <li><Link to="/gd">{t('menus.graphic_design')}</Link></li>
                            <li><Link to="/blockchain_&_nft">{t('menus.blockchain')}</Link></li>
                            <li><Link to="/contact">{t('menus.contact')}</Link></li>
                            <li>
                              <a  >{t("menus.lang.lng")}</a>
                              <ul className="submenu" >
                                <li><a onClick={() => changeLanguage('eng')}>{t("menus.lang.eng")}</a></li>
                                <li><a onClick={() => changeLanguage('kr')}>{t("menus.lang.kr")}</a></li>
                                <li><a onClick={() => changeLanguage('kh')}>{t("menus.lang.kh")}</a></li>
                              </ul>
                            </li>
                            {/* <li className="button-header margin-left ">
                              <a href="/register" className="btn">{t('menus.sign_up')}</a>
                            </li>
                            <li className="button-header">
                              <a href="/login" className="btn3">{t('menus.sign_in')}</a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="footer-wrappr" style={{ backgroundImage: "url(" + "/ecohosting-main/assets/img/gallery/footer-bg.png" + ")" }}>
            <div className="footer-area footer-padding ">
              <div className="container">
                <div className="row d-flex justify-content-between">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-footer-caption mb-50">

                      <div className="footer-logo mb-25 p-0">
                        <a href="/#"><img src="ecohosting-main/assets/img/logo/logo2_footer.png" alt="" /></a>
                      </div>
                      <div className="footer-tittle mb-50">
                        <p>{t('footer.enough_talk')}</p>
                      </div>
                      <div className="footer-form">
                        <div id="mc_embed_signup">
                          <form target="_blank"
                            action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                            method="get" className="subscribe_form relative mail_part" noValidate={true}>
                            <input type="email" name="EMAIL" id="newsletter-form-email"
                              placeholder={t('footer.email_address')} className="placeholder hide-on-focus"
                              onFocus={() => this.placeholder = ''}
                              onBlur={() => this.placeholder = 'Your email address'} />
                            <div className="form-icon">
                              <button type="submit" name="submit" id="newsletter-submit"
                                className="email_icon newsletter-submit button-contactForm">
                                {t('footer.subscribe')}
                              </button>
                            </div>
                            <div className="mt-10 info"></div>
                          </form>
                        </div>
                      </div>
                      <div className="footer-social mt-50">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>{t('footer.contact_us')}</h4>
                        <ul>
                          <li><a href="mailto:admin@doubleda.net">admin@doubleda.net</a></li>
                          <li>+44) (0)7487 540 640</li>
                          <li>+82) (0)1027 099 254</li>

                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>{t('footer.products')}</h4>
                        <ul>
                          <li><a href="#">Why choose us</a></li>
                          <li><a href="#">Review</a></li>
                          <li><a href="#">Customers</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Carrier</a></li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>{t('footer.support')}</h4>
                        <ul>
                          <li><a href="#">Technology</a></li>
                          <li><a href="#"> Products</a></li>
                          <li><a href="#">Customers</a></li>
                          <li><a href="#">Quality</a></li>
                          <li><a href="#">Sales geography</a></li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <!-- footer-bottom area --> */}
            <div className="footer-bottom-area">
              <div className="container">
                <div className="footer-border">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="footer-copy-right text-center">
                        <p>
                          {t('footer.copyright')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div id="back-top">
          <span title="Go to Top" href="#" onClick={goToTop}> <i className="fas fa-level-up-alt"></i></span>
        </div>
      </Titled>
    </div>
  )
}
export default MainLayout