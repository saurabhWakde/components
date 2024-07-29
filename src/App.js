import logo from './logo.svg';
import './App.css';
import Ngo from './Ngo';
import StoreLocator from './StoreLocator';
import FeaturedListing from './FeaturedListing';
import CardComponent from './CardComponent';
import AboutUs from './AboutUs';
import Testimonial from './Testimonial';
import Homepage from './Homepage';
import Responsive from './Responsive';

function App() {
  return (
    <div className="App">
   {/* 
    */}
    <Ngo/>
    <Homepage/>
    <StoreLocator/>
    <FeaturedListing/>
   
    <FeaturedListing/>
    <Testimonial/>
     <AboutUs/>
    
    </div>
  );
}

export default App;
