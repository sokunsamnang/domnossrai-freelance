import React, { useRef, useState, useEffect }  from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';
import AlertInputError from './AlertInputError';
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from 'emailjs-com'

const messageRequired = "The field is required.";
const emailInvalid = "The e-mail address entered is invalid.";
const inputError = "One or more fields have an error. Please check and try again."
const schema = yup.object({
  name: yup.string().required(messageRequired),
  email: yup.string().email(emailInvalid).required(messageRequired),
  subject: yup.string(),
  message: yup.string().required(messageRequired),
  captchaToken: yup.string().required(messageRequired)
})
// email using emailjs
const SERVICE_ID = "service_fu0nisz";
// const TEMPLATE_ID = "template_00vu2c2"; //template email me
const TEMPLATE_ID = "template_va8l58k"; //template email admin@doubleda.net
const PUBLIC_KEY = "bALZTd6LgQDONa0nP";

const InputContact = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'auto',
        });
      }, []);
    
      const { t } = useTranslation();
      const recaptcha_site_key = "6LfcZDIjAAAAAEjsm_I8nlo-u_D9L1bkgg4unTvg";  //real key
      // const recaptcha_site_key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; //test key
      const recaptcha_secret_key = "6LfcZDIjAAAAAALBsxqXhFc1W4czb3fCI2-0QA8H";
      const captchaRef = useRef(null)
    
      const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema),
      });
    
      const [isError, setIsError] = useState(false);
      const [isSent, setIsSent] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const onChange = (value) => {
        setValue('captchaToken', value)
      }
      const onSubmit = (data) => {
        setIsLoading(true)
        emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
          .then((result) => {
            setIsSent(true);
            setIsError(false);
            setIsLoading(false)
            reset();
            const delay = setTimeout(() => {
              setIsSent(false);
            }, 15000)
            return () => clearTimeout(delay)
          }, (error) => {
            setIsSent(false);
            setIsError(true);
            const delay = setTimeout(() => {
              setIsError(false);
            }, 15000)
            return () => clearTimeout(delay)
          },)
    
      };
      const onError = (errors) => {
        console.log(errors);
      };
  return (
    <section className="form-input row">
          <div className="form-text col-lg-6 col-md-6 col-sm-12">
            <span className="tag-title">{t('Feel free to say Hi~')}</span>
            <h1 className="title">{t('contact_us')}</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="form">
                <span className="input-item">
                  <input {...register("name", { required: true })} type="text" placeholder={`${t('Your Name')} *`} />
                  <ErrorMessage errors={errors} name="name" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <input {...register("email", { required: true })} type="text" placeholder={`${t('Your Email')} *`} />
                  <ErrorMessage errors={errors} name="email" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <input {...register("subject")} type="text" placeholder={`${t('Your Subject')}`} />
                  <ErrorMessage errors={errors} name="subject" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <textarea {...register("message", { required: true })} type="text" placeholder={`${t('Your Message')} *`} />
                  <ErrorMessage errors={errors} name="message" render={({ message }) => <p>{message}</p>} />
                </span>
                <span className="input-item">
                  <ReCAPTCHA
                    sitekey={recaptcha_site_key}
                    ref={captchaRef}
                    onChange={onChange}
                  />
                  <ErrorMessage errors={errors} name="captchaToken" render={({ message }) => <p>{message}</p>} />
                </span>
              </div>
              <div className="submit-button">
                <input type="submit" className="sb-btn" value={t('Submit Now')} />
              </div>

              {isLoading &&
                <div className="loading-icon">
                  <Player
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/packages/lf20_LzRTWE.json"
                    style={{ height: "100%", width: "100%" }}
                  >
                  </Player>
                </div>}

              {isSent && <AlertInputError message="Thank you for your message. It has been sent." />}

              {isError && <AlertInputError message="Your message was error. " />}

            </form>

          </div>
          <div className="image-banner col-lg-6 col-md-6 col-sm-12">
            <img src={`${require('../assets/image/PSD_9_-scaled-pkc6v7a13euiimjy5crvz533smx50ul7pwl5iqcoxw.jpg')}`} />
          </div>
        </section>
  )
}

export default InputContact