import { PiFolderStarThin } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { TfiPlus } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Language = () => {
  const demoLanguages = [
    {
      id: 1,
      name: "Introduction to HTML & CSS",
      description: "This module covers the fundamental building blocks of web development, including HTML for structuring content and CSS for styling"
    },
    {
      id: 2,
      name: "Python Basics",
      description: "This module provides an introduction to Python programming language, covering basic syntax, data types, and control structures."
    },
    {
      id: 3,
      name: "Introduction to JavaScript",
      description: "This module introduces the JavaScript programming language, covering basic concepts such as variables, functions, and control flow."
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      {demoLanguages.map((lang) => {
        return (
          <div key={lang.id} className="w-full bg-blue-500/5 border border-blue-500/15 hover:bg-blue-500/10 hover:border-blue-500/20 duration-200 cursor-pointer rounded-2xl flex p-4">
            <div className="hidden lg:flex-[0.15] lg:flex items-center justify-center">
              <div className="w-14 h-14 bg-blue-500/35 rounded-full flex items-center justify-center text-white">
                <PiFolderStarThin size={30} />
              </div>
            </div>
            <div className="lg:flex-[0.85] flex-1 flex flex-col justify-start gap-2">
              <p className="font-semibold text-left text-xl"> {lang.name} </p>
              <p className="text-xs lg:text-sm"> {lang.description} </p>
              <button className="mr-auto flex items-center gap-[5px] text-blue-500 group">
                <span>Get Started</span>
                <FaAngleRight className="group-hover:translate-x-1 duration-200 mt-[1px]" />
              </button>
            </div>
          </div>
        )
      })}
      <div className="w-full">
        <div className="mt-6 bg-blue-500 hover:bg-blue-600 duration-200 mx-auto lg:mx-0 py-2 px-6 rounded text-gray-950 font-semibold w-fit group cursor-pointer">
          <span className="group-hover:text-gray-800 duration-200">
            <Link to={'/learn'}>
              EXPLORE ALL MODULES
            </Link>
          </span>
        </div>
        <div className="w-full h-20 bg-gradient-to-b mt-14 from-transparent relative to-gray-900 border-b border-gray-600">
          <div className='hidden md:block absolute bottom-0 left-0 -translate-x-[14px] translate-y-[14px] text-white'>
            <TfiPlus size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Language