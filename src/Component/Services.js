import React from 'react'

export default function Services() {
  return (
    <section className="services-section" id="about">
        <div className="container">
            <div className='common-title'>
            <h1 className='text-center common-heading'>What We Will Do For <br /> Your Business</h1>
            <hr className=' w-25 mx-auto  ' />
            </div>
              <div className="row g-5">
                 <div className="col-12 col-lg-4 col-md-12">
                    <div className="card card-marketing rounded-2 p-5">
                      <img src="./images/link.gif" className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bolder text-center">Link Building</h5>
                        <p className="card-text mb-5">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                          <a href="#Services" className="icon-span rounded-circle d-flex justify-content-center align-items-center ">
                          <i className="fa-sharp fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>      
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-12">
                    <div className="card card-marketing rounded-2 p-5 shadow">
                      <img src="./images/speaker.gif" className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title mb-3 fw-bolder text-center">Content Marketing</h5>
                        <p className="card-text mb-5">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                          <a href="#Services" className="icon-span rounded-circle d-flex justify-content-center align-items-center ">
                          <i className="fa-sharp fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                   </div>
                  </div>
                 <div className="col-12 col-lg-4 col-md-12">
                   <div className="card card-marketing rounded-2 p-5">
                     <img src="./images/seo.gif" className="card-img-top" alt="..."/>
                     <div className="card-body">
                     <h5 className="card-title mb-3 fw-bolder text-center">SEO Marketing</h5>
                        <p className="card-text mb-5">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                          <a href="#Services" className="icon-span rounded-circle d-flex justify-content-center align-items-center ">
                          <i className="fa-sharp fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
        </div>
    </section>
  )
}
