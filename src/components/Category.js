import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


const Category = () => {

    return (
        <div className="category">
            <Container maxWidth="lg">
                    <Grid container spacing={3} gap={2} >
                        <Grid xs>
                            <div class="single-items mb-20">
                                <div class="items-img">
                                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items1.jpg" alt="" />
                                </div>
                                <div class="items-details">
                                    <h4><Link href="#">Men's Fashion</Link></h4>
                                    <Link href="#" class="browse-btn">Shop Now</Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs>
                            <div class="single-items mb-20">
                                <div class="items-img">
                                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items2.jpg.webp" alt="" />
                                </div>
                                <div class="items-details">
                                    <h4><Link href="#">Women's Fashion</Link></h4>
                                    <Link href="#" class="browse-btn">Shop Now</Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs>
                            <div class="single-items mb-20">
                                <div class="items-img">
                                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items3.jpg.webp" alt="" />
                                </div>
                                <div class="items-details">
                                    <h4><Link href="#">Baby Fashion</Link></h4>
                                    <Link href="#" class="browse-btn">Shop Now</Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
            </Container>
        </div>
    );
}

export default Category;