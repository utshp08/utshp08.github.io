import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from "next/app";
import cn from "classnames";

const PageWithTransition = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const handler = () => {
            setTransitioning(true);
            setTimeout(() => {
                setTransitioning(false)
            }, 300)
        }
        router.events.on("routeChangeComplete", handler);
        return () => {
            router.events.off("routeChangeComplete", handler);
        }
    }, [router.events])

    const Loading = () => <div className="text-white flex flex-col justify-center items-center h-screen pb-10">...</div>;

    const Screen = !transitioning ? Component : Loading;


    return (
        <div className={cn({
            "animate-slideUpEnter": !transitioning,
            "xl:pt-[0px] lg:pt-[0px] md:pt-[0px] sm:pt-[140px] xs:pt-[140px]": true
        })}>
            <Screen  {...pageProps} />
        </div>
    )
}

export default PageWithTransition
