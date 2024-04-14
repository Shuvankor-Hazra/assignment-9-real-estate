import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay, Navigation, Pagination, Scrollbar, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

import slider1 from '../../assets/1.jpg'
import slider2 from '../../assets/2.jpg'
import slider3 from '../../assets/3.jpg'

const SwiperSlider = () => {
    return (
        <Swiper
            modules={[Parallax, Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
            data-swiper-parallax="-23%"
            slot="container-start"
            parallax={true}
            speed={600}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect={'cube'}
            // grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
            }}
        >
            <SwiperSlide>
                <div
                    className="mx-2 md:mx-0 bg-no-repeat bg-center bg-cover h-dvh rounded-3xl text-white"
                    style={{
                        backgroundImage: `url(${slider1})`,
                        opacity: .8
                    }}
                >
                    <div className='md:w-5/6 h-full flex flex-col justify-center mx-auto md:space-y-5 px-10'
                    >
                        <div className='md:space-y-5 md:w-3/4 leading-7 '>
                            <h2 className='font-extrabold text-2xl md:text-5xl' data-swiper-parallax="-100">Welcome to BricksValley</h2>
                            <h2 className='font-semibold md:text-xl' data-swiper-parallax="-300">Rising demand fuels industrial real estate growth, driven by logistics innovation and manufacturing expansion.</h2>
                        </div>
                        <div className='space-x-6 '>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-semibold bg-white w-fit md:px-12 text-[#fda40b]'>About Us</button>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-semibold bg-[#fda40b] w-fit md:px-12 text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="mx-2 md:mx-0 bg-no-repeat bg-center bg-cover h-dvh rounded-3xl text-white"
                    style={{
                        backgroundImage: `url(${slider2})`,
                        opacity: .8
                    }}
                >
                    <div className='md:w-5/6 h-full flex flex-col justify-center mx-auto md:space-y-5 px-10'
                    >
                        <div className='md:space-y-5 md:w-3/4 leading-7 '>
                            <h2 className='font-extrabold text-2xl md:text-5xl' data-swiper-parallax="-100">Welcome to BricksValley</h2>
                            <h2 className='font-semibold md:text-xl' data-swiper-parallax="-300">Rising demand fuels industrial real estate growth, driven by logistics innovation and manufacturing expansion.</h2>
                        </div>
                        <div className='space-x-6 '>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-semibold bg-white w-fit md:px-12 text-[#fda40b]'>About Us</button>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-semibold bg-[#fda40b] w-fit md:px-12 text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="mx-2 md:mx-0 bg-no-repeat bg-center bg-cover h-dvh rounded-3xl text-white"
                    style={{
                        backgroundImage: `url(${slider3})`,
                        opacity: .8
                    }}
                >
                    <div className='md:w-5/6 h-full flex flex-col justify-center mx-auto md:space-y-5 px-10'
                    >
                        <div className='md:space-y-5 md:w-3/4 leading-7 '>
                            <h2 className='font-extrabold text-2xl md:text-5xl' data-swiper-parallax="-100">Welcome to BricksValley</h2>
                            <h2 className='font-semibold md:text-xl' data-swiper-parallax="-300">Rising demand fuels industrial real estate growth, driven by logistics innovation and manufacturing expansion.</h2>
                        </div>
                        <div className='space-x-6 '>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-semibold bg-white w-fit md:px-12 text-[#fda40b]'>About Us</button>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-semibold bg-[#fda40b] w-fit md:px-12 text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
 

        </Swiper>
    );
};

export default SwiperSlider;