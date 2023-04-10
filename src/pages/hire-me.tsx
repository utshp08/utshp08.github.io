import Heading from "../components/common/heading";
import { icons } from "../commons/common";

export default function HireMe() {
  return (
    <div className="justify-center px-5 text-white flex flex-col xl:justify-center lg:justify-center md:justify-center sm:justify-start  xs:justify-start items-center h-screen ">
      <Heading className={"text-center text-4xl"}>HOW TO REACH OUT</Heading>
      <p className="z-10 my-5 mb-[40px] text-center">Got some ideas in mind? Hire me, and let&lsquo;s discuss how to make it reality.</p>
      <div className="z-10 px-5 flex flex-row gap-4 justify-around sm:justify-between flex-wrap">
        {Object.keys(icons.contacts).map((key: any) => {
          return (
            <a key={key} href={icons.contacts[key as keyof typeof icons.contacts].link} rel="noreferrer" target="_blank">
              <div className="flex flex-col border-tbackdrop-blur-lg justify-center items-center p-3 min-h-[80px] min-w-[80px] aspect-square rounded-md shadow-lg bg-gray-900 shadow-black border-gray-900 border-solid">
                <svg width={100} className="mt-1" dangerouslySetInnerHTML={{ __html: icons.contacts[key as keyof typeof icons.contacts].icon }}></svg>
                <p className=" text-sm">{key.toString().toUpperCase()}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
