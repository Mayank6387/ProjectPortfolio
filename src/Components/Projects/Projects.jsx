import React from 'react'
import './Projects.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import p1 from '../../img/p1.png'
import p2 from '../../img/p2.png'
import p3 from '../../img/p3.png'
import p4 from '../../img/p4.png'
import p5 from '../../img/p5.png'
import p6 from '../../img/p6.png'
import p7 from '../../img/p7.png'

const Projects = () => {
  return (
    <div className="project" id="Projects">
        <span>Recent</span>
        <span>Projects</span>
        <Swiper spaceBetween={300}
        grabCursor={true}
        slidesPerView={3}
        className='project-slider'
        >
            <SwiperSlide>
                <img src={p1}  alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={p2}  alt="" />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <img src={p3}  alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={p4}  alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={p5}  alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={p6}  alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={p7}  alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects