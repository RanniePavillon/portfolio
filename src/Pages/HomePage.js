import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typing from 'react-typing-animation';

import PDF from '../img/RanniePavillon.pdf'

import Pic  from '../img/portImages/2.png'
import Pic2  from '../img/portImages/bg2.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);

function HomePage() {
    return (
        <div className="">
            <header className="hero">
                <div className="d-sm-inline-flex d-md-flex ">
                    <div className="d-flex align-items-end order-1 ">
                        <div>
                            <Typing speed={20}>
                                <h2 className="hero-text">
                                    <span>Hi, I am  Rannie F. Pavillon.</span>
                                </h2>
                                <Typing.Delay ms={500} />
                                <h2 className="h-sub-text">
                                    <span className="c-black f-18">( Web Developer )</span>
                                </h2>
                            </Typing>
                            <p className="h-sub-text">
                                I am using the best practices on creating websites / systems such as ReactJS, PHP Laravel, Html, CSS, Bootstrap, Material UI and also Javascript.
                            </p>
                        </div>
                    </div>
                   
                    <div className="order-2 "> 
                        <Swiper spaceBetween={20} centeredSlides={true} 
                        autoplay={{
                            "delay": 2000,
                            "disableOnInteraction": false
                        }} 
                        navigation={true} className="mySwiper" style={{width:350}}>
                        <SwiperSlide>
                            <img src={Pic}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Pic2}/>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <a href="https://ranniepavillon.github.io/ranpav/" className="btn btn-outline-info float-right">
                            Check My CV
                        </a>
                    </div>
                    <div className="col-6">
                        <a href={PDF} download="my_file.pdf" className="btn btn-outline-info">
                            Download My CV
                        </a>
                    </div>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/RanniePavillon" className="icon-holder"><FontAwesomeIcon icon={faFacebook} className="icon fb"/></a>
                    <a href="https://github.com/RanniePavillon" className="icon-holder"><FontAwesomeIcon icon={faGithub} className="icon gh"/></a>
                    <a href="https://www.linkedin.com/in/rannie-pavillon-a6323b1ba/" className="icon-holder"><FontAwesomeIcon icon={faLinkedin} className="icon yt"/></a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
