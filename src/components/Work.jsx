import React from "react";
import ANTHRO from "../assets/Anthro.png";
import DINO from "../assets/dino.png";
import TXTUTILS from "../assets/txtutils.png";
import STREAMLINE from "../assets/Streamline.png";
import QUIZZ from "../assets/Quizz.png";
import MAGIC from "../assets/MagicNotes.png";
import { FaEye, FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full  sm:h-[1600px] md:h-[1300px] bg-[#0a192f] text-gray-300 "
    >
      <div className="sm:max-w-[720px] md:max-w-[1000px] lg:max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-800">
            Projects
          </p>
          <p className="py-6">Check some of my recent work</p>
        </div>

        {/* Container */}

        <div className=" w-full grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={STREAMLINE}
              alt="Sugar Cosmetics image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">Streamline</p>
              <p className="my-2 text-sm text-left text-gray-500">
                Streamline chat application where proffestionals can chat and
                assign tasks all in the real time.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>{" "}
                MongoDB | ExpressJS | ReactJS | NodeJS | Chakra UI
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a href="https://streamline-eight.vercel.app/" target="_blank">
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Parth-Bisht/Streamline"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={QUIZZ}
              alt="Sugar Cosmetics image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">Quizz Game</p>
              <p className="my-2 text-sm text-left text-gray-500">
                A quiz game using React.JS. There will be always a different
                question. User can also watch his score. Questions can be
                related to any category like General Knowledge, arts, science
                etc
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>{" "}
                MongoDB | Express.js | React | Node.js{" "}
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a href="https://reactquizz121.netlify.app/" target="_blank">
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a href="https://github.com/Parth-Bisht/Quizz" target="_blank">
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={MAGIC}
              alt="kimaye image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">Magic Notes</p>
              <p className="my-2 text-sm text-left text-gray-500">
                You can add basic todo notes with the help of this application
                which will help you to remind your activities and when you are
                done with that particular activity then you can delete that
                activity also. I have also put a search functionality in this
                application by which you can search your activities.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>{" "}
                HTML | CSS | Javascript | Bootstrap{" "}
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://fantastic-moonbeam-b7438a.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Parth-Bisht/Magic-Notes"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={ANTHRO}
              alt="AnthroPologie"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left text-gray-600">
                Anthropologie Clone
              </p>
              <p className="my-2 text-sm text-left text-gray-500">
                Anthropologie is an American clothing retailer with
                approximately 200 stores across the U.S. and Canada which offer
                an assortment of clothing, jewellery, home furniture,
                decoration, beauty, and gifts.
              </p>
              <p className="my-2 text-sm text-lef text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                ReactJS | Bootstrap | Rest API | NodeJS
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://incomparable-sorbet-96eaba.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Parth-Bisht/Anthropologie-clone"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={DINO}
              alt="LinkedIn Learning image"
            />
            <div className="px-3 my-4">
              <p className=" font-bold  text-left text-gray-600">Dino Game</p>
              <p className="my-2 text-sm text-left  text-gray-500">
                A simple game using HTML,CSS & JS ,Inspired from the game which
                we used to play when we don't have internet connection in chrome
                browser. You can move the character according to yourself and
                make your own highscores.
              </p>
              <p className="my-2 text-sm text-left   text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>
                HTML | CSS | JavaScript{" "}
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://heroic-peony-3ab984.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Parth-Bisht/dino-game"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#dce0ee] rounded-2xl shadow-md shadow-gray-400 hover:scale-110 duration-500">
            <img
              className=" rounded-tr-2xl  rounded-tl-2xl mx-auto my-auto"
              src={TXTUTILS}
              alt="Textutils image"
            />
            <div className="px-3 my-4">
              <p className="font-bold  text-left  text-gray-600">Text Utils</p>
              <p className="my-2 text-sm text-left  text-gray-500">
                It is an application where you can play with text. User can do
                different different operations like cnovert whole text to
                uppercase as well as lowercase also user can delete extra spaces
                and many many more...
              </p>
              <p className="my-2 text-sm text-left   text-gray-500 inline">
                <span className=" text-sm text-left  mr-2 font-bold text-[#0a192f] ">
                  Tech Stack:
                </span>{" "}
                ReactJS | NodeJS | Bootstrap{" "}
              </p>
              <div className="flex flex-row pt-8 pb-4 justify-between w-full text-gray-500">
                <a
                  href="https://benevolent-jelly-ba68a8.netlify.app/"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Live</span>
                    <FaEye className="mt-[6px] mb-[6px] " />
                  </button>
                </a>
                <a
                  href="https://github.com/Parth-Bisht/Text-Utils"
                  target="_blank"
                >
                  <button className="flex flex-row  justify-around  w-[80px] text-white hover:bg-[#1b3050] rounded-xl bg-[#0a192f] ">
                    <span className="text-white text-lg ">Repo</span>
                    <FaGithub className="mt-[6px] mb-[6px] " />
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
