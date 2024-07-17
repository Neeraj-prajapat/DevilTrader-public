
import React, { useEffect } from 'react';



export default function Home() {



useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  



  return (
    <section className='bg-main bg-color hero-section' id="home">
    <div className="container">
        <div className="row mb-5">
            <div className="text-center text-lg-start mt-5 mt-lg-0 order-lg-0 order-1 col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center ">
                <h1 className='text-center text-capitalize fw-bold text-white' >We Collect High Quality Leads</h1>
                <p className='mt-3 mb-4 para-width text-light-grey text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas maiores unde quae harum. 
                 Hic quibusdam soluta nam,deleniti, quas ratione quam molestiae laboriosam illo voluptatibus,
                 consequuntur repudiandae porro.</p>

                 <div className='text-center w-100 text-md-start'>
                   <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" title="Default tooltip">Contact Us</button>
                 </div>                 
            </div>

            <div className=" order-lg-1 order-0 col-12 col-md-12 col-lg-6 text-center text-lg-end">
                <video src="./images/hero.mp4" muted autoPlay loop className='hero-video--section'>
                    Your browser does not support img
                </video>
            </div>
        </div>
    </div>

<div class="custom-shape-divider-bottom-1720771051">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </section>
  )
}







