import React, { FC, ReactNode } from 'react'
import layout from '../styles/Layout.module.css';
import LeftHandSide from './LeftHandSide';
import SideBar from './Sidebar';

type Props = {
    children: ReactNode,
    title: String
}

const MasterLayout: FC<Props> = ({ children, title }) => {

    return (

        <div className="h-screen flex flex-row bg-gray-120 stroke-white text-black">
            <div className="w-auto min-w-[100px]">
            </div>
            <div className="flex-auto p-10">
                <h1 className='text-4xl'>{title}</h1>
                {children}
            </div>
        </div>
    )
}
export default MasterLayout;
