import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    const formData = new FormData(form.current);
    const requiredFields = ["from_name", "user_email", "subject", "message"];
    let formIsValid = true;

    requiredFields.forEach((field) => {
      if (!formData.get(field)) {
        formIsValid = false;
        // Show error toast for empty field
        toast.error(`Please fill in the ${field.replace("_", " ")}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });

    if (formIsValid) {
      try {
        const result = await emailjs.sendForm(
          "service_wyqt0zi",
          "template_5ng00mu",
          form.current,
          "Bv9GqaewcLyz6ipOE"
        );
        console.log(result.text);
        // Show success toast
        toast.success("Message sent successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.log(error.text);
        // Show error toast
        toast.error("Error sending message. Please try again later.", {
          position: toast.POSITION.TOP_CENTER,
        });
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact__details">Reply get in 24 hours</p>
          <a
            href="https://www.linkedin.com/in/arihantcodes/"
            className="home__social-link"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/arihantcodes"
            className="home__social-link"
            target="_blank"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://github.com/arihantcodes"
            className="home__social-link"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/arihantjainn18/"
            className="home__social-link"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact_form-div">
              <input
                type="text"
                name="from_name"
                className="contact_form-input"
                placeholder="Your FullName*"
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                name="user_email"
                className="contact_form-input"
                placeholder="Email*"
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              name="subject"
              className="contact_form-input"
              placeholder="Subject*"
            />
          </div>

          <div className="contact_form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact_form-input "
              placeholder="Message*"
            ></textarea>
          </div>
          <button type="submit" value="Send" className="btn2">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
