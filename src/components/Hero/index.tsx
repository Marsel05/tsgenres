import React from 'react';
import voises from "../../img/voise.png"
import logo1 from '../../img/Vector1.svg'
import logo2 from '../../img/Vector2.svg'
import logo3 from '../../img/Vector3.svg'
import logo4 from '../../img/Vector4.svg'
import logo5 from '../../img/Vector5.svg'
const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero flex  items-center">
                    <img src={voises} width={400} alt=""/>
                    <div className="header-title ml-11 ">
                        <h1 className='text-white text-6xl py-5  font-[400] leading-[80px]'>Take your <br/> podcast to
                            the <br/> next <span
                                className='text-white font-[600]'>level</span></h1>
                        <p className="text-white text-[10px] pl-5 py-5">Listen on</p>
                            <div className="flex pl-7 ">
                                <img className="mr-2" src={logo1} width={18}  alt=""/>
                                <img className="mr-2" src={logo2} width={18}  alt=""/>
                                <img className="mr-2" src={logo3} width={18}  alt=""/>
                                <img className="mr-2" src={logo4} width={18}  alt=""/>
                                <img className="mr-2" src={logo5} width={18}  alt=""/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;