import React from 'react'

export default function Contact() {
  return (
    
    <section className='common-section contact-section bg-color pt-5' id='contact'>
        <div class="custom-shape-divider-top-1721010597">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div className="container text-center common-title fw-bold">
            <h2 className='common-heading text-white'>Contact Us</h2>
            <hr className="w-25 mx-auto text-white" />
        </div>
        <div className="container">
          <div className='form-section mx-auto'>
            <form>
                <div className='mb-3'>
                  <div class="row text-white">
                    <div class="col col-lg-6">
                      <label for="inputName" class="form-label">First name</label>
                      <input type="text" required class="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col col-lg-6">
                      <label for="inputLast" class="form-label">Last name</label>
                      <input type="text" required class="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
                  <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label text-white">Textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary px-4">Submit</button>

            </form>
          </div>
        </div>
    </section>
  )
}






