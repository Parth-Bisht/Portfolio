import React from "react";
import ANTHRO from '../assets/Anthro.png';
import DINO from '../assets/dino.png';
import GROWW from '../assets/groww.png';
import YOUTUBE from '../assets/youtube.png';
import TIC from '../assets/tic.png';
import TXTUTILS from '../assets/txtutils.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-800">
            Work
          </p>
          <p className="py-6">Check some of my recent work</p>
        </div>

{/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* grid item */}

        
          <div
            style={{ backgroundImage: `url(${ANTHRO})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 px-2">
              <span className="text-[18px] font-bold text-white ">
                Inspiration from an International e-commerce website where you can buy different products.
              </span>
              <p className='pt-3'> <span className="text-pink-400 font-bold">Tech-Stack: </span> React.JS | Javascript | Node</p>
              <div className="pt-3 text-center">
                <a href="https://incomparable-sorbet-96eaba.netlify.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/Anthropologie-clone/tree/main/anthropologie-clone" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DINO})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 px-2">
            <span className="text-[18px] font-bold text-white ">
                A game inspired from dragon game which we play in our chrome browser but with a little twist. User can also make his own highscores.
              </span>
              <p className='pt-3'> <span className="text-pink-400 font-bold">Tech-Stack: </span> CSS | Javascript | HTML</p>
              <div className="pt-3 text-center">
                <a href="https://heroic-peony-3ab984.netlify.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/dino-game" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${GROWW})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 px-2">
            <span className="text-[18px] font-bold text-white ">
                Inspiration from a stock purchasing web-application where you can buy and sell stocks.
              </span>
              <p className='pt-3'> <span className="text-pink-400 font-bold">Tech-Stack: </span> HTML | CSS | Javascript | Node</p>
              <div className="pt-3 text-center">
                <a href="https://astounding-empanada-72ca7f.netlify.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/Team-GROWW" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${YOUTUBE})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 px-2">
            <span className="text-[18px] font-bold text-white ">
              A popular web-application to watch videos online without any advertisment
              </span>
              <p className='pt-3'> <span className="text-pink-400 font-bold">Tech-Stack: </span> HTML | CSS | Javascript | Node</p>
              <div className="pt-3 text-center">
                <a href="https://determined-beaver-13d0cf.netlify.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/Youtube" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TIC})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 px-2">
            <span className="text-[18px] font-bold text-white ">
                A game using React.JS where user have options to clear history and user can save his scores also.
              </span>
              <p className='pt-3'> <span className="text-pink-400 font-bold">Tech-Stack: </span> React.JS | Node</p>
              <div className="pt-3 text-center">
                <a href="https://stellar-cassata-07aaf4.netlify.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/Coding-Assignments/tree/main/day7/tic-tac-toe" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TXTUTILS})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 px-2">
            <span className="text-[18px] font-bold text-white ">
                A utility application where user can count the number of words and can play with text.
              </span>
              <p className='pt-3'> <span className="text-pink-400 font-bold">Tech-Stack: </span> React.JS | Routing | Node</p>
              <div className="pt-3 text-center">
                <a href="https://benevolent-jelly-ba68a8.netlify.app/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/Text-Utils" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
