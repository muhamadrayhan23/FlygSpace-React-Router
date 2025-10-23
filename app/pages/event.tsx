import react from 'react';
import Navigation from '../components/Navigation';
import Event from '../components/Event';
import Footer from '../components/Footer';


const EventPage: React.FC = () => {
    return (
        <>
            <Navigation />
            <Event />
            <Footer />
        </>
    );
}

export default EventPage;