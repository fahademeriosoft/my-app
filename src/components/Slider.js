import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


const SimpleSlider = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <div className="sliders">
            <Slider {...settings}>
                <div className="single-slider">
                    <div className="slide bg-1">
                        <Container maxWidth="lg">
                            <Grid container spacing={2} >
                                <Grid xs={6}>
                                    <div class="hero-caption text-center">
                                        <span>Fashion Sale</span>
                                        <h1>Minimal Menz Style</h1>
                                        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                        <Link href="#" className="btn_1 hero-btn animated fadeInUp">Shop Now</Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
                <div className="single-slider">
                    <div className="slide bg-2">
                        <Container maxWidth="lg">
                            <Grid container spacing={2} >
                                <Grid xs={6} ></Grid>
                                <Grid xs={6}>
                                    <div class="hero-caption text-center">
                                        <span>Fashion Sale</span>
                                        <h1>Minimal Menz Style</h1>
                                        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                        <Link href="#" className="btn_1 hero-btn animated fadeInUp">Shop Now</Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;