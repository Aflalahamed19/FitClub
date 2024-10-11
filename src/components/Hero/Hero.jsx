import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from './../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_black from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'


const Hero = () => {

  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth<=768 ? true: false; 
  return (
    <div className="hero">

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "178px": '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>


        {/* Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we will help your shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachers</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero button */}

        <div className="hero-buttons">
          <button className="btn">Get Start</button>
          <button className="btn">Learn More</button>
        </div>

      </div>



      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}

        <img src={hero_image} alt="" className="hero_images" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_black} alt="" className="hero_image_black" />

        {/* calories */}

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero