import React from 'react'

export default function About() {
  return (
    <div>
         <section className='bg-color more-info-section p-5'>
    <div className="container">
        <div className="row mb-5">


            <div className="col-md-6 text-center text-lg-end img-section">
                <figure>
                  <img src="./images/phone.gif" alt="digital products img" className='img-fluid'/>
                </figure>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2 className=' text-capitalize fw-bold text-white'>Steps to Build a <br />Successful Digital Products</h2>
                <p className='mt-3 mb-4 para-width text-light-grey text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas maiores unde quae harum. 
                 Hic quibusdam soluta nam,deleniti, quas ratione quam molestiae laboriosam illo voluptatibus,
                 consequuntur repudiandae porro.</p>

                 <div className='text-center w-100 text-md-start'>
                   <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" title="Default tooltip">Contact Us</button>
                 </div>                 
            </div>


        </div>
    </div>


    </section>
    </div>
  )
}
