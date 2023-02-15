import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useTranslation } from 'react-i18next';
import { Titled } from 'react-titled';
const Register = () => {
  const { t } = useTranslation();
  return (
    <>
      <Titled title={title => `Register`} />
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="ecohosting-main/assets/img/logo/loder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <main className="login-body" data-vide-bg="ecohosting-main/assets/img/login-bg.mp4">
        <div style={{ position: "absolute", zIndex: " -1", inset: " 0px", overflow: " hidden", backgroundSize: "cover", backgroundColor: "transparent", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%", backgroundImage: " none" }}>
          <video autoplay="true" loop="true" muted="true" style={{ margin: "auto", position: "absolute", zIndex: " -1", top: "50%", left: " 50%", transform: " translate(-50%, -50%)", visibility: "visible", opacity: "1", width: "1922px", height: "auto" }}>
            <source src="ecohosting-main/assets/img/login-bg.mp4" type="video/mp4" /><source src="ecohosting-main/assets/img/login-bg.webm" type="video/webm" /><source src="ecohosting-main/assets/img/login-bg.ogv" type="video/ogg" />
          </video>
        </div>
        <form className="form-default" action="login-bg.mp4" method="POST">
          <div className="login-form">
            <div className="logo-login">
              <a href="/">
                {/* <img src="src/assets/image/cropped-Asset-14-32x32.png" alt="" /> */}
                <div className="play">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/788ceed7-bf29-4b5f-8626-a52b9259b477/ju2uz24VbJ.json"
                    style={{ height: "100%", width: "100%" }}
                  >
                  </Player>
                </div>

              </a>
            </div>
            <h2>{t("auth.registration_title")}</h2>
            <div className="form-input">
              <label for="name">{t("auth.full_name")}</label>
              <input type="text" name="name" placeholder={t("auth.full_name")} />
            </div>
            <div className="form-input">
              <label for="name">{t("auth.email_add")}</label>
              <input type="email" name="email" placeholder={t("auth.email_add")} />
            </div>
            <div className="form-input">
              <label for="name">{t("auth.pwd")}</label>
              <input type="password" name="password" placeholder={t("auth.pwd")} />
            </div>
            <div className="form-input">
              <label for="name">{t("auth.confirm_pwd")}</label>
              <input type="password" name="password" placeholder={t("auth.confirm_pwd")} />
            </div>
            <div className="form-input pt-30">
              <input type="submit" name="submit" value={t("auth.registration")} />
            </div>
            <a href="/login" className="registration">{t("auth.login")}</a>
          </div>
        </form>
      </main>

    </>
  )
}

export default Register