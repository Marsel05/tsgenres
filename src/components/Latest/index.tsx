import React from 'react';
import music from '../../img/music1.svg'
import music2 from '../../img/music2.png'
import music3 from '../../img/music3.svg'

const Latest = () => {
    return (
        <div className="py-12">
            <div className="container">
                <div className="latest-title flex justify-between items-center ">
                    <h1 className="text-white text-3xl">Latest episodes </h1>
                    <button type="button"
                            className="text-white bg-[#118DA8] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-[400] rounded-[5px] text-[10px] px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        View all episodes
                    </button>
                </div>
                <div className="latest ">

                        <div
                            className="flex flex-col items-center bg-black border border-gray-200 rounded-lg  md:flex-row md:max-w-[1000px]  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                                className=" ml-8 "
                                src={music} width={200} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-[64px] font-[400]  text-white ">
                                    Should you get <br/> outboard audio gear?</h5>
                                <p className="mb-3 font-normal text-gray-300">Is hardware really
                                    worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons
                                    on why you might want to consider picking something up.</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-center bg-black border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={music2} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                    technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                                    enterprise technology acquisitions of 2021 so far, in reverse chronological
                                    order.</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-center bg-black border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={music3} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                    technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest
                                    enterprise technology acquisitions of 2021 so far, in reverse chronological
                                    order.</p>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Latest;