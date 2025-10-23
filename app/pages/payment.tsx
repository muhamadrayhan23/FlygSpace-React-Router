import react from "react";
import PaymentConfirmation from "../components/PaymentConfirmation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PaymentPage: React.FC = () => {
  return (
    <div>  
        <Navigation />
        <PaymentConfirmation />
        <Footer />
    </div>
    ); 
};
export default PaymentPage;