import React from "react";
import { useTranslation } from "react-i18next";
import InputContact from "../components/InputContact";
import TextImg from "../components/TextImg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const BlockchainNFT = () => {
  const { t } = useTranslation();
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <>
      <section>
        <div
          className="banner_inner"
          style={{
            backgroundImage: `url(${require("../assets/image/network-gfae1fde8e_1920.jpg")})`,
          }}
        >
          <div className="container black-over-lay">
            <div className="row">
              <div className="col-12">
                <div className="banner_content nft-content">
                  <h5 className="text-uppercase sub-title nft-sub-title">
                    welcome to the new world
                  </h5>
                  <h1 className="text-uppercase main-title nft-main-title">
                    Creative
                  </h1>
                  <p className=" text-uppercase desc-title">blockchain & nft</p>
                </div>
              </div>
            </div>
          </div>
          <Particles
            id="particles-here"
            init={particlesInit}
            width="100%"
            height="10%"
            options={{
              background: {
                color: {
                  value: "",
                },
              },
              fullScreen: {
                enable: true,
                zIndex: -2,
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#fff",
                  distance: 100,
                  enable: true,
                  opacity: 0.6,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </section>
      <section className="nft-container">
        <TextImg
          imgUrl={require("../assets/image/3-2048x1152.jpg")}
          topTitle={t("private_blockchain_network")}
          descTitle={[t("private_blockchain_network_desc")]}
          useCase={[
            t("private_blockchain_network_use_cases_1"),
            t("private_blockchain_network_use_cases_2"),
            t("private_blockchain_network_use_cases_3"),
            t("private_blockchain_network_use_cases_4"),
            t("private_blockchain_network_use_cases_5"),
          ]}
          caseTitle={t("use_cases")}
          border={true}
        />
        <TextImg
          className="reverse"
          imgUrl={require("../assets/image/2.jpg")}
          topTitle={t("smart_contract")}
          descTitle={[t("smart_contract_desc_1"), t("smart_contract_desc_2")]}
          useCase={[
            t("smart_use_case_1"),
            t("smart_use_case_2"),
            t("smart_use_case_3"),
            t("smart_use_case_4"),
            t("smart_use_case_5"),
            t("smart_use_case_6"),
          ]}
          border={true}
        />
        <TextImg
          imgUrl={require("../assets/image/1-2048x1475.jpg")}
          topTitle={t("crypto_wallet")}
          descTitle={[t("crypto_wallet_desc_1"), t("crypto_wallet_desc_2")]}
        />
        <TextImg
          className="reverse"
          imgUrl={require("../assets/image/1-1-2048x1384.jpg")}
          topTitle={t("tokenization_nft")}
          descTitle={[
            t("tokenization_nft_desc_1"),
            t("tokenization_nft_desc_2"),
          ]}
        />
        <TextImg
          imgUrl={require("../assets/image/java_api.jpg")}
          topTitle={t("blockchain_api")}
          descTitle={[t("blockchain_api_desc_1"), t("blockchain_api_desc_2")]}
        />
      </section>
      <section className="layout">
        <InputContact />
      </section>
    </>
  );
};

export default BlockchainNFT;
