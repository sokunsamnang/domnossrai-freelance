import React from 'react'
import '../assets/css/page_notfound.css'
import { useTranslation } from 'react-i18next';
import { Player } from "@lottiefiles/react-lottie-player";
import { Titled } from 'react-titled';
const NoPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Titled title={title => `${window.location.pathname} | Page Not Found`} />
      <div id="main">
        <div className="fof">
          <div>
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_iq9koc12.json"
              style={{ height: "100%", width: "100px" }}
            >
            </Player>
            <h1>{t("error_404")}</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default NoPage