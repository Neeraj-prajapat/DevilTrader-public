import React from 'react'

export default function Footer() {
  return (
    <section className='main-footer-section bg-color'>
        <div className="contact-details">
            <div className="container px-5">
                <div className="row g-0">
                    <div className="col-lg-4">
                        <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className='icon-div d-flex flex-column justify-content-center align-items-center rounded-circle mb-3'>
                                <img src="./images/call.gif" alt="GIF Img" className='img-fluid '/>
                            </div>
                            <p className='text-white'>(+00) 1234 678</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className='icon-div d-flex flex-column justify-content-center align-items-center rounded-circle mb-3'>
                                <img src="./images/email.gif" alt="GIF Img" className='img-fluid '/>
                            </div>
                            <p className='text-white'>neerajkumar001122op@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                            <div className='icon-div d-flex flex-column justify-content-center align-items-center rounded-circle mb-3'>
                                <img src="./images/map.gif" alt="GIF Img" className='img-fluid '/>
                            </div>
                            <p className='text-white'>Lucknow(UP)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-6 d-flex justify-content-center align-items-center">
                            <div className="footer-links">
                                <h4 className='text-white mt-5 mb-3'>Courses</h4>
                                <ul className='text-white list-unstyled'>
                                    <li>Python Basics</li>
                                    <li>Pentesting</li>
                                    <li>OSCP</li>
                                    <li>Pen Advance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 d-flex justify-content-center align-items-center">
                            <div className="footer-links">
                                <h4 className='text-white mt-5 mb-3'>Affiliates</h4>
                                <ul className='text-white list-unstyled'>
                                    <li>Python Basics</li>
                                    <li>Pentesting</li>
                                    <li>OSCP</li>
                                    <li>Pen Advance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 d-flex justify-content-center align-items-center">
                            <div className="footer-links">
                                <h4 className='text-white mt-5 mb-3'>Marketing</h4>
                                <ul className='text-white list-unstyled'>
                                    <li>Python Basics</li>
                                    <li>Pentesting</li>
                                    <li>OSCP</li>
                                    <li>Pen Advance</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="footer-links">
                                <h4 className='text-white mt-5 mb-3 fw-bolder'>Subscribe</h4>
                                <div class="input-group mb-3 w-75">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"/>
                                    <span class="input-group-text btn btn-primary" id="basic-addon1">Subscribe</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <hr className='text-white mx-auto' />
                <div className="row">
                
                    <div className="col-lg-8 col-12 text-white">
                    Copyright ©2024 All rights reserved. | This template is made by <span class="bg-theme">DevilTrader.com</span>
                    </div>
                
                    <div className='col-lg-4 col-12'>
                        <div className='d-flex justify-content-center justify-content-lg-end mt-lg-0 gap-5 mt-3'>
                            <a href="https://www.instagram.com/thapatechnical/" target="_blank">
                                <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/thapatechnical/" target="_blank">
                                <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/thapatechnical/" target="_blank">
                                <div class="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>                        

        </div>
    </section>
  )
}
