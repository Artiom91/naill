import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logo from '../img/11.png';
import logo1 from '../img/22.png';
import logo2 from '../img/33.png';
import logo3 from '../img/44.png';
import logo5 from '../img/66.png';
import logo6 from '../img/77.png';

const Slider = () => {
    return (
        <div className="flex justify-center">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={30}
                effect="fade"
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="w-screen h-screen bg-contain absolute"
            >
                <SwiperSlide>
                    <img src={logo} alt="CssLogo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo1} alt="JSlogo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo2} alt="reactLogo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo3} alt="SASS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo5} alt="SASS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={logo6} alt="SASS"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
