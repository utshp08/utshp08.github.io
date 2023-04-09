import React, { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import layout from "../styles/Sideba.module.css";
import { pages, icons } from '../commons/common';
import cn from "classnames";
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
                "flex aspect-square min-h-[50px] w-[80px] flex-col rounded-md items-center justify-center gap-1 p-2 dark:bg-sky-900 dark:text-sky-50": true,
                "bg-indigo-50 text-indigo-600": hover
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
            "flex items-center h-screen border-tbackdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed": true
        })}>

            <nav
                className={cn({
                    " border-gray-900  bg-gray-900 p-2.5 shadow-lg z-20 flex shrink-0 grow-0 justify-around gap-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border h-auto ": true
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