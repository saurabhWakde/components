import logo from './logo.svg';
import './App.css';
import Ngo from './Ngo';
import StoreLocator from './StoreLocator';
import FeaturedListing from './FeaturedListing';
import AboutUs from './AboutUs';
import Testimonial from './Testimonial';
import Homepage from './Homepage';
import Responsive from './Responsive';
import Urban from './Urban';
import Faq from './Faq';

function App() {
  return (
    <div className="App">
    {/* 
      
      */}
      <Homepage/>
      <AboutUs/>
      <FeaturedListing/>
      <Urban/>
      <Testimonial/>
      <Faq/>
      <Ngo/>
      <StoreLocator/>
    
    </div>
  );
}

export default App;
