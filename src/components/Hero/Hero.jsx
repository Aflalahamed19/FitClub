import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from './../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_black from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best add*/}
        <div className="the-best-ad">
          <div></div>
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

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </div>

        {/* Hero Images */}

        <img src={hero_image} alt="" className="hero_images" />
        <img src={hero_image_black} alt="" className="hero_image_black" />

        {/* calories */}

        <div className="calories">
          <img src={calories} alt=""  />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero