import react from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <>  
        <Navigation />
        <ContactForm />
        <Footer />
    </>
  );
}
export default ContactPage;