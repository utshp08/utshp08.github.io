import MasterLayout from "../layouts/MasterLayout";
import styles from '../styles/Home.module.css';
import cn from "classnames";
import { icons } from "../commons/common";
import Heading from "../components/common/heading";

export default function Skills() {
  return (
    <div className="justify-center px-5 text-white flex flex-col xl:justify-center lg:justify-center md:justify-center sm:justify-start  xs:justify-start  items-center h-screen ">
      <Heading className={"text-center text-4xl "}>WHAT I DO</Heading>
      <p className="z-10 my-5 mb-[40px] text-center">Tech-stack I use for designing and building web applications.</p>
      <div className="z-10 px-5 flex flex-row gap-4 justify-around flex-wrap">
        {Object.keys(icons.skills).map((key: any) => {
          return (
            <div key={key} className="flex flex-col border-tbackdrop-blur-lg justify-center items-center p-3 min-h-[80px] min-w-[80px] aspect-square rounded-md shadow-lg bg-gray-900 shadow-black border-gray-900 border-solid">
              <svg width={100} className="mt-1" dangerouslySetInnerHTML={{ __html: icons.skills[key as keyof typeof icons.skills] }}></svg>
              <p className=" text-sm">{key.toString().toUpperCase()}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
