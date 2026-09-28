import React, { useEffect } from 'react'
import Footer from '../Common/Footer'
import HeadetTitle from '../Common/HeadetTitle'
import Header from '../Common/Header'
import useAPICall from '../../Custom Hooks/useAPICall'

function TestimonialPage() {

    const { apidata, fetchAPIData } = useAPICall("http://localhost:3000/testimonials")

    useEffect(() => {
        fetchAPIData()
    }, [])

    useEffect(() => {
        if (!apidata?.length) return;

        const $carousel = $(".testimonial-carousel");
        const canLoop = apidata.length > 3;

        $carousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: canLoop,
            loop: canLoop,
            margin: 24,
            dots: true,
            nav: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
            },
        });

        const t = setTimeout(() => $carousel.trigger("refresh.owl.carousel"), 300);

        return () => {
            clearTimeout(t);
            $carousel.trigger("destroy.owl.carousel");
        };
    }, [apidata]);


    return (
        <div>
            <Header />
            <HeadetTitle name="Testimonial" title="Testimonial" />

            {/* Testimonial Start */}
            <div className="container-fluid bg-light bg-icon py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <h1 className="display-5 mb-3">Customer Review</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        {

                            apidata && apidata.map((test, index) => {

                                //  console.log("testimonila ---", testimonial)
                                return (
                                    <div className="testimonial-item position-relative bg-white p-5 mt-4">
                                        <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5" />
                                        <p className="mb-4 quote-text">{test.quote}</p>
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 rounded-circle" src={test.client_img} alt={test.client_name} />
                                            <div className="ms-3">
                                                <h5 className="mb-1">{test.client_name}</h5>
                                                <span>{test.profession}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Testimonial End */}

            <Footer />
        </div>
    )
}

export default TestimonialPage