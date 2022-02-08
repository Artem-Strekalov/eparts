import React, {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Autoplay, Pagination, Navigation} from 'swiper'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import Button from '@mui/material/Button'

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
      fontSize: '22px',
    },
    network: {display: 'flex'},
    //второй слайд
    slideSecond: {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/image/png/best.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: 'contain',
    },
    slideSecondContent: {
      width: '50%',
      padding: '20px 50px',
      color: '#fff',
      fontWeight: '600',
      background: 'linear-gradient(121.44deg,#ffc14d 29.02%,#ffdb5b 83.08%)',
      marginTop: '50px',
      borderRadius: '0 10px 10px 0',
      display: 'flex',
      flexDirection: 'column',
    },
    slideThird: {
      width: '100%',
      height: '100%',
      background: 'red',
      padding: '20px',
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
      {/*   <SwiperSlide style={styled.slide}>
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
                <p style={{marginTop: '3px'}}>Напишите нам:</p>&nbsp; &nbsp;
                <a
                  target='_blank'
                  style={{color: '#fff'}}
                  href='https://wa.me/79198952285'
                >
                  <WhatsAppIcon />
                </a>
                &nbsp;&nbsp;
                <a
                  target='_blank'
                  href='https://t.me/epartsrostov'
                  style={{color: '#fff'}}
                >
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={styled.slideSecond}>
        <div style={styled.slideSecondContent}>
          <h2 style={{fontWeight: '500'}}>
            Покупайте популярные товары с максимальной выгодой в разделе{' '}
            <a style={{color: '#0075c4'}} href=''>
              БЕСТСЕЛЛЕРЫ
            </a>
          </h2>
          <Button style={{marginLeft: 'auto'}} variant='contained'>
            Посмотреть товары
          </Button>
        </div>
      </SwiperSlide> */}
      <SwiperSlide style={styled.slideThird}>
        <div></div>
      </SwiperSlide>
    </Swiper>
  )
}
export default Ecarusel
