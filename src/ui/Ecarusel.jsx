import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Autoplay, Pagination, Navigation} from 'swiper'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'

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
      backgroundImage: `url(${process.env.PUBLIC_URL + '/image/png/part.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    slideItemLeft: {
      width: '50%',
      height: '100%',
    },
    slideItemRight: {
      width: '50%',
      height: '100%',
      padding: '50px 20px',
      position: 'relative',
    },
    nameBlockLeft: {
      marginTop: '50px',
      width: '70%',
      height: '150px',
      background: 'linear-gradient(121.44deg,#ffdb5b 29.02%,#ffc14d 83.08%)',
      padding: '0 20px',
      borderRadius: '0 10px 10px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: ' center',
    },
    nameBlockRight: {
      position: 'absolute',
      background: '#0075c4',

      top: '70%',
      left: '50%',
      bottom: 'auto',
      right: '0',
      borderRadius: '10px 0 0 10px',
      padding: '20px',
      color: '#fff',
    },
    phone: {
      display: 'flex',
      alignItems: 'center',
      color: '#ffdb5b',
      margin: '5px 0 10px 0',
      fontSize:'22px'
    },
    network: {display: 'flex', alignItems: 'end'},
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
            <div style={styled.nameBlockLeft}>
              <h2 style={{color: '#0075c4', fontWeight: '500'}}>
                Запчасти для спецтехники с доставкой по России
              </h2>
              <p style={{fontSize: '18px', color: '#fff', marginTop: '10px'}}>
                Оперативно подберём и отправим детали в любой регион страны
              </p>
            </div>
          </div>
          <div style={styled.slideItemRight}>
            <h2 style={{color: '#0075c4', marginBottom: '10px'}}>
              Компания EASY PARTS
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              mollitia tenetur eveniet ipsam, blanditiis corporis veniam sunt
              aliquid cupiditate nesciunt voluptatum vitae laborum, possimus
              consequuntur, nihil cumque iste quibusdam dolore?
            </p>
            <div style={styled.nameBlockRight}>
              <div style={styled.phone}>
                <p>Телефон:</p>&nbsp; &nbsp; <p> 8-919-895-22-85</p>
              </div>
              <div style={styled.network}>
                <p>Напишите нам:</p>&nbsp;
                <WhatsAppIcon />
                &nbsp;
                <TelegramIcon />
              </div>
            </div>
          </div>
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
