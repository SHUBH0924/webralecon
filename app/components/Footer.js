import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


function Footer() {
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer className="text-md-start fw-medium text-lg-start bg-body-tertiary text-muted p-2">
                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <img src='https://www.webralecon.com/images/logo/header_logo.png' alt='logo' width={300} />
                                <p className='mt-3'>
                                    We have Young, Dynamic and Passionate result oriented professional team in Webralecon India. We believe in innovation, learning and team work to achieve customer's goal.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto me-4 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="fw-bold fs-5 mb-4 text-primary">
                                    Quick Links
                                </h6>
                                <p>
                                    <a href="#!" className="text-decoration-none">SEO Services</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Social Media Marketing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">PPC Management</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Responsive Web Design</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Wordpress Development</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Web Maintenance</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="fw-bold fs-5 mb-4 text-primary">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-decoration-none">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">About us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Contact us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Blog</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Terms & Condition</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-decoration-none">Careers</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="fw-bold fs-5 mb-4 text-primary">Quick Contact</h6>
                                <p><FaLocationDot /> New York, NY 10012, US</p>
                                <p >
                                    <IoMail className='me-2' />
                                    <a href="mailto:info@webralecon.com">
                                        info@webralecon.com
                                    </a>
                                </p>
                                <p><FaPhone className='me-2' /><a href='tel:"+91-9991766633"'> +91-9991766633 </a></p>
                                <div >
                                    <FaFacebook className='me-2' size={25} /> <FaInstagram className='me-2' size={25}/> <FaTwitter className='me-2' size={25}/> <FaLinkedin className='me-2' size={25}/>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            </div>
                            {/* <!-- Grid column --> */}

                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4" style={{ backgroundColor: "rgb(0,0,0,0.05)" }}>
                    Made 
                    with ❤️ Shubhjeet for Webralecon
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </div>
    )
}

export default Footer
