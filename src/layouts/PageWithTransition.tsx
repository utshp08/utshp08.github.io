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

    const Loading = () => <div className="container mx-auto">Loading...</div>;

    const Screen = !transitioning ? Component : Loading;


    return (
        <div className={cn({
            "animate-slideUpEnter": !transitioning,
        })}>
            <Screen {...pageProps} />
        </div>
    )
}

export default PageWithTransition
