import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';


const FeatureProducts = () => {

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };


    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="products">
            <Container maxWidth="lg">
                <Grid className="c-product-tray">
                    <div className="o-wrapper">
                        <h2 className="c-product-tray__heading">Trending This Week</h2>
                        <div className="c-product-tray__carousel">
                            <div className="o-slider-product-tray">
                                <div className="o-slider-product-tray__controls js-controls">
                                    <button onClick={previous} className="slide-prev o-slider-product-tray__button o-slider-product-tray__button--prev">
                                        <svg className="o-slider-product-tray__arrow o-slider-product-tray__arrow--prev"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="-44 40.7 11 21.1">
                                            <path d="M-33.5 61.8L-44 51.3l10.5-10.6.5.5-10.1 10.1 10.1 10z" />
                                        </svg>
                                    </button>

                                    <button onClick={next} className="slide-next o-slider-product-tray__button o-slider-product-tray__button--next">
                                        <svg className="o-slider-product-tray__arrow o-slider-product-tray__arrow--next"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="-44 40.7 11 21.1">
                                            <path d="M-33.5 61.8L-44 51.3l10.5-10.6.5.5-10.1 10.1 10.1 10z" />
                                        </svg>
                                    </button>

                                </div>
                                <Slider ref={sliderRef} {...settings} className="o-slider-product-tray__inner js-slider-product-tray">
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocketmen4-500x750.jpeg" />
                                            <h3 className="c-product-tile__name">Pouch Pocket Hoodie Orange</h3>
                                            <span className="c-product-tile__price">$29.50</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <span className="c-product-tile__promo">On Sale</span>
                                            <img alt="" className="c-product-tile__image" src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan4-500x750.jpg" />
                                            <h3 className="c-product-tile__name">Slogan Hoodie With Label Detail</h3>
                                            <span className="c-product-tile__price">$11.99</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/shirt4-500x750.jpeg" />
                                            <h3 className="c-product-tile__name">Relaxed Fit Plaid Flannel Shirt</h3>
                                            <span className="c-product-tile__price">$34.99</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/bomber1-1-500x750.jpg" />
                                            <h3 className="c-product-tile__name">Quilted Bomber Jacket With Ribbed</h3>
                                            <span className="c-product-tile__price">$47.58</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pocket1-500x750.jpeg" />
                                            <h3 className="c-product-tile__name">Pouch Pocket Hoodie</h3>
                                            <span className="c-product-tile__price">$27.40</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/overshirt1-500x750.jpg" />
                                            <h3 className="c-product-tile__name">Check Overshirt With Pocket Detail</h3>
                                            <span className="c-product-tile__price">$112.00</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/trousers1-500x750.jpeg" />
                                            <h3 className="c-product-tile__name">Ripstop Cargo Trousers With Pockets</h3>
                                            <span className="c-product-tile__price">$49.99</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/shirt4-500x750.jpeg" />
                                            <h3 className="c-product-tile__name">Relaxed Fit Plaid Flannel Shirt</h3>
                                            <span className="c-product-tile__price">$30.00</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="o-slider-product-tray__slide">

                                        <div className="c-product-tile">
                                            <img alt="" className="c-product-tile__image" src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pocket5-500x750.jpeg" />
                                            <h3 className="c-product-tile__name">Pouch Pocket Hoodie Black</h3>
                                            <span className="c-product-tile__price">$30.00</span>
                                            <div class="socal_icon">
                                                <a href="#" tabindex="0"><i class="fa fa-shopping-cart"></i></a>
                                                <a href="#" tabindex="0"><i class="fa fa-heart"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Container>
        </div>
    );
}

export default FeatureProducts;