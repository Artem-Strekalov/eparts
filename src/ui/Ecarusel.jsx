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
    slideContent: {
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    slideItemLeft: {
      width: '50%',
      height: '100%',
    },
    slideItemRight: {
      width: '50%',
      height: '100%',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/image/png/part.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    nameBlock: {
      marginTop: '50px',
      width: '70%',
      height: '150px',
      background: '#0075c4',
      padding: '20px',
      borderRadius: '0 10px 10px 0',
    },
  }
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
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
        <div style={styled.slideContent}>
          <div style={styled.slideItemLeft}>
            <div style={styled.nameBlock}>
              <h2 style={{color: 'yellow', fontWeight: '500'}}>
                Запчасти для спецтехники с доставкой по России
              </h2>
              <p style={{fontSize: '18px', color: '#fff', marginTop: '10px'}}>
                Оперативно подберём и отправим детали в любой регион страны
              </p>
            </div>
          </div>
          <div style={styled.slideItemRight}></div>
        </div>
      </SwiperSlide>
       <SwiperSlide style={styled.slideFirst}>
        <div style={styled.slideContent}></div>
      </SwiperSlide>
      <SwiperSlide style={styled.slideSecond}>
        <div style={styled.slideContent}></div>
      </SwiperSlide>
    </Swiper>
  )
}
export default Ecarusel
