import React, { useState } from 'react'
import layout from '../../styles/Layout.module.css';
import SideBar from './Sidebar';

export default function LeftHandSide() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return (
        <div className="flex-initial w-80 p-6">
            <div className="menu ">
                <button onClick={() => setMenuOpen(!menuOpen)}>Open</button>
                {menuOpen &&  <SideBar />}
            </div>
            <div className="text-center">
                <h1 className="text-4xl">Hi, Im Reymart</h1>
            </div>
        </div>
    )
}
