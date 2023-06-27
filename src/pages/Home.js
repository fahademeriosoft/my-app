import React from 'react';
import SimpleSlider from "../components/Slider";
import Category from '../components/Category';
import Products from '../components/Products';
import Testimonial from '../components/Testimonial';


const Home = () => {
  return (
    <div className="App">
      <SimpleSlider />
      <Category />
      <Products />
      <Testimonial />
    </div>
  );
}

export default Home;
