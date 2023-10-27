import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';


const Testimonial = () => {

    const sliderRef = useRef(null);

    const nexts = () => {
        sliderRef.current.slickNext();
    };

    const previouss = () => {
        sliderRef.current.slickPrev();
    };


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="testimonial" style={{background: "#f3ead8", paddingBottom: "80px", paddingTop: "80px"}}>
            <Container maxWidth="lg">
                <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                    <Grid xs={10} md={10}>
                        <div className="o-slider-product-tray__controls js-controls">
                            <button onClick={previouss} className="slide-prev o-slider-product-tray__button o-slider-product-tray__button--prev">
                                <svg className="o-slider-product-tray__arrow o-slider-product-tray__arrow--prev"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-44 40.7 11 21.1">
                                    <path d="M-33.5 61.8L-44 51.3l10.5-10.6.5.5-10.1 10.1 10.1 10z" />
                                </svg>
                            </button>

                            <button onClick={nexts} className="slide-next o-slider-product-tray__button o-slider-product-tray__button--next">
                                <svg className="o-slider-product-tray__arrow o-slider-product-tray__arrow--next"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-44 40.7 11 21.1">
                                    <path d="M-33.5 61.8L-44 51.3l10.5-10.6.5.5-10.1 10.1 10.1 10z" />
                                </svg>
                            </button>

                        </div>

                        <h2 className='text-center' style={{textAlign: "center"}}>Customer Testimonial</h2>
                        <Slider ref={sliderRef} {...settings} className="text-center" style={{textAlign: "center"}}>
                            <div class="single-testimonial text-center">
                                <div class="testimonial-caption ">
                                    <div class="testimonial-top-cap">
                                        <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    </div>

                                    <div class="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div class="founder-img">
                                            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/founder-img.png.webp" alt="" />
                                        </div>
                                        <div class="founder-text">
                                            <span>Petey Cruiser</span>
                                            <p>Designer at Colorlib</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-testimonial text-center">
                                <div class="testimonial-caption ">
                                    <div class="testimonial-top-cap">
                                        <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    </div>

                                    <div class="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div class="founder-img">
                                            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/founder-img.png" alt="" />
                                        </div>
                                        <div class="founder-text">
                                            <span>Petey Cruiser</span>
                                            <p>Designer at Colorlib</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Testimonial;