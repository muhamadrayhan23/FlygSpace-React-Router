import react from 'react';
import Faq from "../components/Faq";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const RefundPolicyPage: React.FC = () => {
    return ( 
        <div>
            <Navigation />
            <Faq />
            <Footer />
        </div>
     );
}         

export default RefundPolicyPage;