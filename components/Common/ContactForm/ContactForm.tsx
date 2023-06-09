import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  serviceId: string | any;
  templateId: string | any;
  userId: string | any;
};

const ContactForm = ({ serviceId, templateId, userId }: ContactFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track submission status

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    setSubmitted(true); // Set submitted to true to show the thank you message

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      () => {
        setStatus("Message sent!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setSubscription(false);
      },
      (error) => {
        console.error(error);
        setStatus("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div>
    {submitted ? ( // Render the thank you message if submitted is true
      <div className={styles.messageBox}>
        <p className={styles.message}>
          Thank you for reaching out. I appreciate any and all feedback. I hope you have an amazing day
        </p>
      </div>
    ) : ( // Render the contact form if submitted is false
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Drop a message</h3>
      <div className={styles.inputField}>
        <input
          required
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className={styles.inputField}>
        <input
          required
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputField}>
        <input
          required
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputField}>
        <textarea
          required
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
        ></textarea>
      </div>
      <button className={styles.submitButton} type="submit">Submit</button>
      {submitted && ( // Render the message if submitted is true
        <div className={styles.messageBox}>
          <p className={styles.message}>Thank you for reaching out. I appreciate any and all feedback. I hope you have an amazing day</p>
        </div>
      )}
    </form>
    )}
    </div>
  );
};

export default ContactForm;