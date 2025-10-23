import react from 'react';
import RefundPolicy from "../components/RefundPolicy";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const RefundPolicyPage: React.FC = () => {
    return ( 
        <div>
            <Navigation />
            <RefundPolicy />
            <Footer />
        </div>
     );
}         

export default RefundPolicyPage;