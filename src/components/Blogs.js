import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';


const Blogs = () => {

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
        <div class="home-blog">
            <Container maxWidth="lg">
                <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                    <Grid lg={12}>
                        <div class="section-tittle text-center mb-40">
                            <h2>Latest News</h2>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} gap={2}>
                    <Grid xs>
                        <div class="single-blogs mb-30">
                            <div class="blog-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/blog1.jpg" alt="" /></a>
                            </div>
                            <div class="blogs-cap">
                                <span>Fashion Tips</span>
                                <h5><a href="pro-details.html">What Curling Irons Are The Best Ones</a></h5>
                                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                                <a href="pro-details.html" class="red-btn">Read More</a>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs>
                        <div class="single-blogs mb-30">
                            <div class="blog-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/blog2.jpg" alt="" /></a>
                            </div>
                            <div class="blogs-cap">
                                <span>Fashion Tips</span>
                                <h5><a href="pro-details.html">Vogue's Ultimate Guide To Autumn/
                                    Winter 2019 Shoes</a></h5>
                                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                                <a href="pro-details.html" class="red-btn">Read More</a>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs>
                        <div class="single-blogs mb-30">
                            <div class="blog-img">
                                <a href="pro-details.html"><img src="assets/img/gallery/blog3.jpg" alt="" /></a>
                            </div>
                            <div class="blogs-cap">
                                <span>Fashion Tips</span>
                                <h5><a href="pro-details.html">What Curling Irons Are The Best Ones</a></h5>
                                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                                <a href="pro-details.html" class="red-btn">Read More</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Blogs;