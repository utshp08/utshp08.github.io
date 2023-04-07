import React, { FC } from "react";
import { useDrag } from "react-dnd";

type Props = {
    title: any,
    children: any
}

const DraggableComponent: FC<Props> = ({ title, children }) => {
    const [collect, drag]: any = useDrag(() => ({
        type: title,
        collect: (monitor) => ({
           position: monitor.getInitialClientOffset(),   
           isDragging: monitor.isDragging()
        }),

    }));

    const getDirection = (collect: any) => {
        console.log(collect)
        return {
            opacity: '0.5'
        }
    }


    return (
        <div ref={drag} style={collect.isDragging ? getDirection(collect) : {}} >
            {children}
        </div>
    )

}

export default DraggableComponent;