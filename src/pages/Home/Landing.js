import React from 'react';
import BucketGirl from "../../assets/bucketgirl.png"

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[70vh] bg-accent mt-16 z-60 relative">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className='text-xl'>Best Quality</p>
                        <h1 data-aos="fade-right" data-aos-duration="900" data-aos-delay="400" class="text-5xl font-bold">
                            Professional Cleaning Service
                        </h1>
                        <p data-aos="fade-right" data-aos-duration="600" data-aos-delay="800" class="py-6 max-w-xl">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button class="btn btn-primary" data-aos="zoom-in" data-aos-delay="1200">
                            Get Started
                        </button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={BucketGirl} class="h-full" alt='img' />
                    </div>
                </div>
            </div>
            <div className='rounded-lg shadow-lg mx-auto mt-[-50px] bg-base-200 z-70 w-5/6 relative p-8'>
                <h1 className='text-2xl mb-2 text-primary'>Get Free Estimate</h1>
                <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>

            </div>
        </>
    );
};

export default Landing;