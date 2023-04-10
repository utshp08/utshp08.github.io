import React, { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import layout from "../styles/Sideba.module.css";
import { pages, icons } from '../commons/common';
import cn from "classnames";
import Router from "next/router";
import { Button } from '../stories/components/Button';

type SideBarProps = {
}

type LinkProps = {
    page: any,
}

const NavLink = ({ page }: LinkProps) => {
    const [hover, setHover] = useState(false);


    return (
        <Link
            href={page.path}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={cn({
                " transition-all flex aspect-square min-h-[50px] w-[80px] flex-col rounded-md items-center justify-center gap-1 p-2 dark:bg-sky-900 dark:text-sky-50": true,
                "bg-white text-slate-900": hover
            })}
        >
            <svg width="50px" dangerouslySetInnerHTML={{ __html: page.icon }} />
            <small className="text-center text-xs font-medium"> {page.title} </small>
        </Link>
    )
}

const SideBar: FC<SideBarProps> = ({ }) => {

    return (
        <div className={cn({
            "z-[20] flex h-screen flex-row xl:flex lg:flex md:flex sm:block xs:block items-center w-[100%] xl:h-screen lg:h-screen md:h-screen sm:w-[100%] xs:w-[100%] xl:w-auto lg:w-auto md:w-auto border-tbackdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed xl:fixed-left lg:fixed-left md:fixed-left sm:fixed-top xs:fixed-top": true
        })}>

            <nav
                className={cn({
                    " flex-col xl:w-auto lg:w-auto md:w-auto xl:flex-col lg:flex-col md:flex-col sm:flex-row xs:flex-row border-gray-900  bg-gray-900 p-2.5 shadow-lg z-20 flex shrink-0 grow-0 justify-around gap-6 min-h-[auto] min-w-[64px] rounded-lg border h-auto  sm:w-[100%] xs:w-[100%]": true
                })}
            >
                {/* <button
                    className={cn({
                        "flex flex-row justify-center text-center aspect-square min-h-[50px] w-[80px] rounded-md p-2 dark:bg-sky-900 dark:text-sky-50": true,
                    })}
                >
                    <svg width={50} dangerouslySetInnerHTML={{ __html: icons.menu }} />
                </button> */}
                {
                    pages.map((page, index) => {
                        return <NavLink key={index} page={page} />
                    })
                }
            </nav>
        </div>
    )
}
export default SideBar;