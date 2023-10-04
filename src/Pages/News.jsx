
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/sundorbon.png'
import image2 from '../assets/sreemongol.png'
import image3 from '../assets/sajek.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../Styles/Stylesl.css';

// import required modules
import { Pagination } from 'swiper/modules';



const News = () => {
    return (
        
      <div className='main-container'>
        
        <div>

        </div>
        <div className='h-[80vh] w-[600px]  ml-[500px]'>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="rounded mySwiper"
      >
            <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
      </div>
    )
};

export default News;