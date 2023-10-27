import React from 'react';
import SimpleSlider from "../components/Slider";
import Category from '../components/Category';
import Products from '../components/Products';
import Testimonial from '../components/Testimonial';
import FeatureProducts from '../components/FeatureProducts';
import Blogs from '../components/Blogs';


const Home = () => {
  return (
    <div className="App">
      <SimpleSlider />
      <Category />
      <Products />
      <Testimonial />
      <FeatureProducts />
      <Blogs />
    </div>
  );
}

export default Home;
