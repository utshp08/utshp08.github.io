import MasterLayout from "../layouts/MasterLayout";
import styles from '../styles/Home.module.css';
import cn from "classnames";
import { icons } from "../commons/common";
import Heading from "../components/common/heading";

export default function Skills() {
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen pb-10">
      <Heading className={" text-4xl"}>WHAT I DO</Heading>
      <p className="my-5 mb-[40px] ">Tech-stack I use for designing and building web applications.</p>
      <div className="flex flex-row gap-4 justify-around">
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
