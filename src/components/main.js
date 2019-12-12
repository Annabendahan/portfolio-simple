import React, { Component } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import mainPic from "../images/mainPic.png"
import mainPic2 from "../images/photoAnna.png"

import qm from "../images/qmavocat.png"
import alice11 from "../images/aliceTop.png"
import phone from "../images/phone.png"
import easy from "../images/easy.png"
import picSmall from "../images/picMainsmall.png"

class Main extends Component {
  render() {
    let d = new Date()
    let day = d.getDay()
    let today = ""

    switch (day) {
      case 1:
        today = "LUNDI"
        break
      case 2:
        today = "MARDI"
        break
      case 3:
        today = "MERCREDI"
        break
      case 4:
        today = "JEUDI"
        break
      case 5:
        today = "VENDREDI"
        break
      case 6:
        today = "SAMEDI"
      case 7:
        today = "DIMANCHE"
        break
    }

    return (
      <div>
        <SEO title="Main" />

        <div className="main_object">
          <img className="pic1" src={mainPic2} alt="main_pic" />
          <img className="pic2" src={picSmall} alt="main_pic" />
        </div>

        <div className="text-left">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5981 15.6339L12.5981 7.13392C13.4177 6.49642 13.5088 5.82858 13.5088 4.8875V4.85715C13.5088 3.58215 12.6284 2.61073 12.2945 2.30715V1.21427C12.2945 0.546424 11.7481 0 11.0802 0L5.58553 0C4.91768 0 4.40161 0.546424 4.40161 1.21427V2.3375C3.52126 3.52142 3.49088 3.94642 3.49088 6.07142C3.49088 7.19465 3.79445 8.46965 3.85515 8.83392C3.673 9.53215 4.0373 10.2607 4.7355 10.5036C5.00873 10.5947 5.34265 10.5947 5.61584 10.5036C5.61584 11.05 5.98011 11.5661 6.52657 11.7482L6.55692 11.7786C6.89084 11.9 7.2855 11.8697 7.58907 11.7178C7.64173 11.6915 7.69243 11.6613 7.74111 11.628C7.8631 12.2649 8.43954 12.75 9.10699 12.75C9.38021 12.75 9.65341 12.6589 9.86591 12.5072V15.6339C9.86591 16.3928 10.4731 17 11.232 17C11.9909 17 12.5981 16.3928 12.5981 15.6339ZM4.94806 2.61073C4.97841 2.55 5.00879 2.4893 5.00879 2.42858V1.21427C5.00879 0.880348 5.28202 0.607119 5.58556 0.607119L11.0802 0.607119C11.4141 0.607119 11.6873 0.880348 11.6873 1.21427V2.42854C11.6873 2.51962 11.7177 2.6107 11.8088 2.67139C11.8088 2.67139 12.8713 3.58212 12.9016 4.82674V4.85709C12.9016 5.79816 12.8409 6.22316 12.1123 6.70886L12.082 6.7392L11.8011 6.97691C10.8416 7.70857 9.78755 8.50256 9.34983 8.80351C8.8641 9.10709 8.46949 9.19816 8.2266 9.01601C8.07347 8.88841 8.0066 8.63212 8.04316 8.39133C8.05063 8.35527 8.06105 8.32047 8.07483 8.28743C8.2266 7.92316 8.6516 7.28566 9.22841 6.58743C9.25245 6.55539 9.26995 6.52123 9.28127 6.4861C9.97545 5.65881 10.765 4.88943 11.1409 4.73566C11.2927 4.67493 11.3534 4.49281 11.2927 4.34101C11.232 4.18924 11.0498 4.12851 10.898 4.18924C10.4538 4.37962 9.66974 5.11723 8.96166 5.93403C8.86331 5.8661 8.75746 5.81317 8.6516 5.76781L8.59088 5.73747C8.25469 5.62053 7.90463 5.6447 7.60468 5.77874C7.5128 5.3128 7.18014 4.89965 6.70872 4.73566C6.0105 4.49281 5.22122 4.88743 4.97838 5.58566L4.2589 7.66418C4.17377 7.18194 4.09803 6.60334 4.09803 6.07136C4.09806 3.94642 4.12841 3.70358 4.94806 2.61073ZM6.98199 6.28392L6.1624 8.65161L5.88057 9.46189C5.82532 9.60497 5.73873 9.71929 5.63254 9.80243C5.59825 9.82597 5.56222 9.84735 5.52483 9.86604C5.34268 9.95712 5.13018 9.95712 4.94806 9.89639C4.55341 9.77497 4.34091 9.34997 4.49271 8.92497C4.49271 8.89512 4.50002 8.86523 4.50387 8.83539L5.55521 5.7982C5.70699 5.3732 6.13199 5.19104 6.52664 5.31247C6.70879 5.3732 6.86056 5.52497 6.95164 5.70712C7.01237 5.7982 7.04271 5.91962 7.04271 6.04104C7.04268 6.13215 7.01233 6.22323 6.98199 6.28392ZM7.68018 10.7161C7.61945 10.8982 7.49803 11.05 7.31591 11.1411C7.16414 11.2322 6.95164 11.2322 6.76949 11.1714L6.70876 11.1411C6.57266 11.0957 6.45359 11.0164 6.36404 10.9032C6.2461 10.7212 6.21287 10.4911 6.28376 10.2607L6.49626 9.65358C6.51538 9.59617 6.5194 9.54178 6.51123 9.49231L6.73937 8.83323L7.46768 6.7393C7.61945 6.34465 8.0141 6.16253 8.40876 6.28396L8.46949 6.3143C8.49983 6.3143 8.56056 6.34465 8.59091 6.37503C8.57155 6.40007 8.55276 6.42471 8.53373 6.44947C8.10233 6.99291 7.74081 7.52844 7.5658 7.92486C7.56201 7.93339 7.55833 7.94186 7.55474 7.95026C7.54544 7.972 7.53651 7.99345 7.52841 8.0143C7.46672 8.1608 7.43846 8.31908 7.4384 8.48011C7.43786 8.49671 7.43733 8.51328 7.43733 8.53035C7.43733 8.74072 7.48823 8.9509 7.58363 9.13202C7.69047 9.37112 7.85045 9.58697 8.04449 9.74462L7.68018 10.7161ZM8.37841 11.3839V11.2625L8.46949 10.5643C8.46949 10.5168 8.46055 10.4693 8.44365 10.4255L8.68199 9.74465C8.68912 9.72676 8.69447 9.70889 8.69829 9.69116C8.96776 9.66035 9.29608 9.54776 9.68376 9.28927C9.7396 9.25514 9.80375 9.2137 9.87424 9.16662L9.9266 11.4446C9.9266 11.6268 9.83553 11.8089 9.7141 11.9303C9.56233 12.0518 9.38018 12.1428 9.16768 12.1428C8.74268 12.1428 8.37841 11.8089 8.37841 11.3839ZM10.4731 15.6339V11.4447C10.4731 11.4143 10.4731 11.4143 10.4731 11.3839V8.80358C10.4731 8.78422 10.4714 8.76572 10.4687 8.74783C10.9302 8.41155 11.4825 7.99126 11.9909 7.60003V15.634C11.9909 16.059 11.657 16.3929 11.232 16.3929C10.807 16.3929 10.4731 16.0589 10.4731 15.6339Z"
              fill="#FF2E6C"
            />
          </svg>

          <p>
            {" "}
            CE QUE JE FAIS: <br />
            CREATION DE SITES INTERNET <br />
            DESIGN <b> & </b> CODE{" "}
          </p>

          <p>
            {" "}
            DISPONIBILITÉ: <br />
            JANVIER 2020{" "}
          </p>
        </div>

        <div className="section">
          <p className="">
            BIENVENUE ICI ! BONNE VISITE <b> & </b> BON {today}{" "}
            <svg
              width="16"
              height="12"
              viewBox="0 0 41 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.023 18.33C3.042 18.361 3.065 18.389 3.089 18.413L19.007 35.327C19.122 35.449 19.278 35.519 19.451 35.524H19.463C19.626 35.524 19.78 35.462 19.898 35.348L37.28 18.54C37.288 18.534 37.356 18.472 37.397 18.432C37.431 18.4 37.459 18.367 37.465 18.351C39.427 16.319 40.508 13.649 40.508 10.834C40.508 4.86 35.648 0 29.673 0C25.763 0 22.175 2.094 20.254 5.48C18.334 2.093 14.746 0 10.835 0C4.86 0 6.94466e-07 4.86 6.94466e-07 10.834C-0.000999306 13.648 1.078 16.316 3.023 18.33ZM10.834 1.251C14.709 1.251 18.18 3.563 19.676 7.142C19.774 7.375 20 7.525 20.253 7.525C20.505 7.525 20.732 7.375 20.83 7.141C22.327 3.563 25.798 1.251 29.673 1.251C34.958 1.251 39.258 5.551 39.258 10.835C39.258 13.356 38.28 15.739 36.504 17.547C36.487 17.565 36.472 17.582 36.459 17.6L19.483 34.008L4.083 17.65C4.06 17.613 4.033 17.578 4.001 17.546C2.226 15.741 1.249 13.358 1.249 10.835C1.249 5.55 5.549 1.251 10.834 1.251Z"
                fill="#FF2E6C"
              />
            </svg>
          </p>

          <ScrollAnimation animateIn="fadeIn">
            <h2> À propos </h2>
          </ScrollAnimation>
          <p className="">ANNA, 24, DEVELOPPEUSE WEB</p>
          <p className="">
            BIENVENUE DANS MON PORTFOLIO ! JE SUIS ANNA BENDAHAN, DÉVELOPPEUSE
            FULLSTACK EN FREELANCE DEPUIS MAINTENANT DEUX ANS, SPÉCIALISÉE EN
            FRONT-END. JE CRÉE DES SITES INTERNETS À LA FOIS MODERNES ET
            PERFORMANTS, EN UTILISANT DES TECHNOLOGIES RÉCENTES POUR RÉPONDRE AU
            MIEUX À VOS BESOINS ET ATTENTES.{" "}
          </p>
        </div>
        <div className="section ">
          <ScrollAnimation animateIn="fadeIn">
            <h2> Outils</h2>
          </ScrollAnimation>

          <div className="section__outils">
            <div>
              <p> DESIGN: </p>
              <p> FIGMA, SKETCH, ILLUSTRATOR, INDESIGN, VELVETYNE, AWWWARDS </p>
            </div>
            <div>
              <p> CODE: </p>
              <p>
                {" "}
                REACT.JS, GATSBY.JS, VUE.JS, RUBY ON RAILS, GRAPHQL, CSS
                GENERATORS...{" "}
              </p>
            </div>
          </div>
        </div>

        <ScrollAnimation animateIn="fadeIn">
          <div className="section section__projets ">
            <p> PROJETS </p>
            <svg
              width="84"
              height="8"
              viewBox="0 0 84 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                fill="black"
              />
            </svg>
            <div className="section__projets__each">
              <div className="projet">
                <img className="projet__picture" src={mainPic} alt="mainpic" />
                <p> 2019 </p>
                <h5> La loge </h5>
                <p>
                  {" "}
                  DESIGN <b> & </b> CODE{" "}
                </p>
                <p className="red"> BIENTÔT DISPONIBLE </p>
              </div>
              <div className="projet">
                <a href="https://qmavocat.netlify.com/" target="blank">
                  <img className="projet__picture" src={qm} alt="mainpic" />
                  <p> 2019 </p>
                  <h5> QM avocat </h5>
                  <p>
                    {" "}
                    DESIGN <b> & </b> CODE{" "}
                  </p>
                </a>
              </div>
              <div className="projet">
                <img className="projet__picture" src={alice11} alt="mainpic" />
                <p> 2019 </p>
                <h5> Alice </h5>
                <p>
                  {" "}
                  DESIGN <b> & </b>CODE{" "}
                </p>
              </div>
              <div className="projet">
                <a href="https://annabdh.netlify.com/" target="blank">
                  <img className="projet__picture" src={phone} alt="mainpic" />
                  <p> 2018 </p>
                  <h5> Portfolio précédent </h5>
                  <p>
                    {" "}
                    DESIGN <b> & </b> CODE{" "}
                  </p>
                </a>
              </div>
              <div className="projet">
                <img className="projet__picture" src={easy} alt="mainpic" />
                <p> 2018 </p>
                <h5> EasyFork </h5>
                <p>
                  {" "}
                  DESIGN <b> & </b> CODE{" "}
                </p>
                <p className="red"> EN MAINTENANCE </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="section ">
            <p> CONTACT </p>
            <div className="section__contact">
              <div>
                {" "}
                <form name="contact" method="POST" data-netlify="true">
                  <h2>
                    <label>
                      <input type="text" name="name" placeholder="nom" />
                    </label>
                  </h2>
                  <h2>
                    <label>
                      <input type="text" name="name" placeholder="prénom" />
                    </label>
                  </h2>
                  <p>
                    <label>
                      <input type="email" name="email" placeholder="EMAIL" />
                    </label>
                  </p>
                  <p>
                    <textarea
                      id="story"
                      name="story"
                      rows="3"
                      cols="33"
                      placeholder="Votre message ici"
                    ></textarea>
                  </p>
                  <p>
                    <button type="submit">ENVOYER</button>
                    <br />
                    <svg
                      width="84"
                      height="8"
                      viewBox="0 0 84 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M83.3536 4.35355C83.5488 4.15829 83.5488 3.84171 83.3536 3.64645L80.1716 0.464466C79.9763 0.269204 79.6597 0.269204 79.4645 0.464466C79.2692 0.659728 79.2692 0.976311 79.4645 1.17157L82.2929 4L79.4645 6.82843C79.2692 7.02369 79.2692 7.34027 79.4645 7.53553C79.6597 7.7308 79.9763 7.7308 80.1716 7.53553L83.3536 4.35355ZM0 4.5H83V3.5H0V4.5Z"
                        fill="black"
                      />
                    </svg>
                  </p>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                </form>
              </div>

              <div className="envoyer">
                <p className="nomargin"> ENVOYER </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Main
