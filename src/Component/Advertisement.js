import React from 'react'

export default function Advertisement() {
  return (
    <div>
        <section className='my-5 pb-5' id="online-section">
            <div className="container">
                <h1 className='common-heading text-center'>Generating New Customers via <br /> Online Mode</h1>
                <hr className='w-25 mx-auto mb-5' />
                <div className="row gx-5 mb-5">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className=' d-flex px-5 py-5 shadow'>
                          <img src="./images/phone.gif" alt="" className=' d-md-block d-none mx-3 img-fluid advertising-img ' />
                          <div>
                              <p className='mb-3 fw-bolder'>Social media Advertising</p>
                              <p>Reach a wider audience by creating engaging ads on platforms like Facebook, Instagram and LinkedIn.
                                Target specific demographics to connect with potential Customers interested in your services.
                              </p>
                          </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className=' d-flex px-5 py-5 shadow'>
                          <img src="./images/speaker.gif" alt="" className=' d-md-block d-none mx-3 img-fluid advertising-img ' />
                          <div>
                              <p className='mb-3 fw-bolder'>Influencer Marketing</p>
                              <p>Reach a wider audience by creating engaging ads on platforms like Facebook, Instagram and LinkedIn.
                                Target specific demographics to connect with potential Customers interested in your services.
                              </p>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="row gx-5 ">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className=' d-flex px-5 py-5 shadow'>
                          <img src="./images/speaker.gif" alt="" className=' d-md-block d-none mx-3 img-fluid advertising-img ' />
                          <div>   
                              <p className='mb-3 fw-bolder'>Content Marketing</p>
                              <p>Reach a wider audience by creating engaging ads on platforms like Facebook, Instagram and LinkedIn.
                                Target specific demographics to connect with potential Customers interested in your services.
                              </p>
                          </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className=' d-flex px-5 py-5 shadow'>
                          <img src="./images/phone.gif" alt="" className=' d-md-block d-none mx-3 img-fluid advertising-img ' />
                          <div>
                              <p className='mb-3 fw-bolder'>Referral Programs</p>
                              <p>Reach a wider audience by creating engaging ads on platforms like Facebook, Instagram and LinkedIn.
                                Target specific demographics to connect with potential Customers interested in your services.
                              </p>
                          </div>
                      </div>
                    </div>
                </div>        
            </div>
        </section>
    </div>
  )
}
