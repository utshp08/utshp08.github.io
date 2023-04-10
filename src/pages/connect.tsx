import Heading from "../components/common/heading";
import { icons } from "../commons/common";
import { MouseEventHandler } from "react";

export default function HireMe() {

  const sendEmailHandler: MouseEventHandler<HTMLAnchorElement> = (e: any) => {
    e.preventDefault();
    console.log( e)
  }

  return (
    <div className="justify-center px-5 text-white flex flex-col xl:justify-center lg:justify-center md:justify-center sm:justify-start  xs:justify-start items-center h-screen ">
      <Heading className={"text-center text-4xl"}>HOW TO CONNECT</Heading>
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
      {/* <div className="z-10 text-center">
        <div className="py-5 flex max-w-[380px] justify-between items-center">
          <hr className="flex-1"></hr> <span className="px-2"> or </span> <hr className="flex-1"></hr>
        </div>
        <a href="" onClick={sendEmailHandler} className=" underline">Send me an email</a>
      </div> */}
    </div>
  )
}
