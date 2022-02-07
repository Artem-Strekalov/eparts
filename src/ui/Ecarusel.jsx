import React, {useRef, useState} from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper'

const Ecarusel = () => {
  const styled = {
    swiper: {
      width: '100%',
      height: 'calc(100% - 50px)',
    },
    slideFirst: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/image/png/part.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    slideSecond: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'right',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/image/png/best.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },
    slideItem: {
      width: '100%',
      height: '100%',
    },
  }
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      style={styled.swiper}
    >
      <SwiperSlide style={styled.slide}>
        <div style={styled.slideItem}>
          <div style={styled.aboutHeader}>
            <h2 style={{color: '#999', fontWeight: '500'}}>
              Запчасти для спецтехники с доставкой по России
            </h2>
            <p style={{fontSize: '18px'}}>
              Оперативно подберём и отправим детали в любой регион страны
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={styled.slideFirst}>
        <div style={styled.slideItem}></div>
      </SwiperSlide>
      <SwiperSlide style={styled.slideSecond}>
        <div style={styled.slideItem}></div>
      </SwiperSlide>
    </Swiper>
  )
}
export default Ecarusel
