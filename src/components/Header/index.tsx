import React from 'react';

const Header = () => {
    return (
        <div id="header " className='bg-[#191919] py-8'>
            <div className="container">
                <div className="header flex justify-between">
                    <h1 className="text-white text-2xl font-bold">Castaway</h1>
                    <div className="header-nav flex justify-between text-white text-[16px] font-sans">
                        <h6 className=" hover:text-[#118DA8]">Home</h6>
                        <div className="contact flex px-20  ">
                            <h6 className="px-6">About</h6>
                            <h6>Contact</h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;