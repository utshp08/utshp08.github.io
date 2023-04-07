import Image from "next/image";
import { FC } from "react";

const Home: FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen pb-10">
      <Image
        alt=""
        src={"https://mir-s3-cdn-cf.behance.net/user/276/92390f168029759.5b356ed946ab5.jpg"}
        width={200}
        height={200}
        className=" border-r-8 min-w-[200px] max-w-[300px] rounded-full border-r-2 my-5" />
      <h1 className="text-4xl">Hello, I&lsquo;m Reymart!</h1>
    </div>
  )
}

export default Home;