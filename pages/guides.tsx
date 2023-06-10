import React from "react";
import Layout from "../components/Layout/Layout";
import GuidesList from "../components/Common/Guides/Guides";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";
import Divide from "../components/Common/Divide/Divide";

const Guides = () => {
  return (
    <Layout title="The Dean Dsouza Mindset - Guides">
      <GuidesList />
      <Divide/>
      <div className="formContain">
        <div className="form-inner">
          <ContactForm
            serviceId={process.env.EMAILJS_SERVICE_ID}
            templateId={process.env.EMAILJS_TEMPLATE_ID}
            userId={process.env.EMAILJS_USER_ID}
          />
          <Socials />
        </div>
      </div>
    </Layout>
  );
};

export default Guides;
