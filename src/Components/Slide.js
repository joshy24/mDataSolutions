import React from 'react'

export const Slide = () => {
    return (
        <div>
            <section class="section section-padding-equal pt-0 related-blog-area">
            <div class="container">
                <div class="section-heading heading-left">
                    <h3 class="title">Related Post</h3>
                </div>
                <div class="slick-slider recent-post-slide" data-slick='{"infinite": true, "autoplay": true, "arrows": false, "dots": false, "slidesToShow": 2,
        "responsive": [
            {
                "breakpoint": 1199,
                "settings": {
                    "slidesToShow": 1
                }
            }
        ]
        }'>
                    <div class="slick-slide">
                        <div class="blog-list">
                            <div class="post-thumbnail">
                                <a href="single-blog.html"><img src="assets/media/blog/blog-1.png" alt="Blog Post" /></a>
                            </div>
                            <div class="post-content">
                                <h5 class="title"><a href="single-blog-2.html">How To Use a Remarketing Strategy To Get More</a></h5>
                                <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has...</p>
                                <a href="single-blog-2.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="slick-slide">
                        <div class="blog-list">
                            <div class="post-thumbnail">
                                <a href="single-blog.html"><img src="assets/media/blog/blog-2.png" alt="Blog Post"/></a>
                            </div>
                            <div class="post-content">
                                <h5 class="title"><a href="single-blog-3.html">SEO Statistics You Should Know in 2021</a></h5>
                                <p>Organic search has the potential to capture more than 40 percent of your gross revenue...</p>
                                <a href="single-blog-3.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="slick-slide">
                        <div class="blog-list">
                            <div class="post-thumbnail">
                                <a href="single-blog.html"><img src="assets/media/blog/blog-1.png" alt="Blog Post"/></a>
                            </div>
                            <div class="post-content">
                                <h5 class="title"><a href="single-blog-2.html">How To Use a Remarketing Strategy To Get More</a></h5>
                                <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has...</p>
                                <a href="single-blog-2.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
