import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import "./Footer.css";
import Spinner from "../Spinner/Spinner";
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xeqwaved");

  const Success = () => {
    return (
      <div className="footerState">
        <span className="footerthankstext">
          Thanks for contacting us, your response is received , will contact you
          by a hour
        </span>
      </div>
    );
  };

  return (
    <>
      <footer className="footerContainer" id="contacts">
        <TitleBox
          heading="Want to do Freelance"
          subheading="Fill in your details"
        />
        <form className="footerForm" onSubmit={handleSubmit}>
          <div className="footerFields">
            <div className="footerFields1">
              <div>
                <label className="footerformLabel" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Name"
                  className="footerformInput"
                />
                <ValidationError
                  className="red-alert"
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="footerformLabel" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                  className="footerformInput"
                />
                <ValidationError
                  className="red-alert"
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="footerformLabel" htmlFor="name">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Subject"
                  className="footerformInput"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  className="red-alert"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="footerFields2">
              <div>
                <label className="footerformLabel" htmlFor="message">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  required
                  placeholder="Message"
                  className="footerformMessage"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  className="red-alert"
                  errors={state.errors}
                />
              </div>
            </div>
          </div>
          <div></div>
          <div className="footerSubmit">
            <button className="footerSubmitBtn">Submit</button>
          </div>
        </form>
        {state.succeeded && <Success />}
        <div className="footerCopyrightbox">
          <span className="footerCopyright">
            COPYRIGHT © 2017 CODER. ALL RIGHTS RESERVED
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
