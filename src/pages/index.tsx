import Image from "next/image";
import { FC } from "react";
import cn from "classnames";
import Heading from "../components/common/heading";

const Home: FC<{}> = () => {
  return (
    <div className="px-5 flex flex-col xl:justify-center lg:justify-center md:justify-center sm:justify-start xs:justify-start items-center h-screen ">
      <div className={cn({
        "block  min-w-[200px] max-w-[300px] rounded-full  xl:p-1 mb-[30px]": true,
        "animate-steam": true
      })} >
        <Image
          alt=""
          src={"https://mir-s3-cdn-cf.behance.net/user/276/92390f168029759.5b356ed946ab5.jpg"}
          width={200}
          height={200}
          className={cn({
            "min-w-[200px] max-w-[300px] rounded-full ": true,
            " absolute z-10 top-0 left-0": true
          })} />
      </div>
      <Heading className="text-5xl  mt-5 ">Hello, I&lsquo;m Reymart!</Heading>
      <div className="p-5 text-xl text-center max-w-[800px]">
        <p>I&lsquo;m a <strong>web</strong> enthusiast — a self-taught developer and experienced designer. I studied IT where my focus is on database management.</p>
        <p>One of my passion is to design and build modern websites. </p>
        <p>I&lsquo;ve been in an IT industry for more than 6-years where I demonstrated both my web design and development skills.</p>
      </div>
    </div>
  )
}

export default Home;