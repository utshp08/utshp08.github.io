import { useState, useRef } from 'react';
import styles from '../../styles/Components.module.css';
import { Card } from '../types/CardType';
import DraggableComponent from './DraggableComponent';
type Props = {
    title: String,
    length: Number,
    position: Number
}

export default function ActionBox({ title, length, position }: Props) {
    const duration = 300;
    const top = Number(position) * 30;


    const defaultStyle = {
        top: '-200%',
        transition: `all ${duration}ms cubic-bezier(0.6, -0.28, 0.74, 0.05)`,
        // top: `${top}px`,
        animationDelay: `${Number(position) * 0.1}s`,
        transform: `scale(${(((1 + Number(`0.${Number(length)}`)) - Number(`0.${Number(length)}`)) + Number(`0.${Number(position)}`))}) translateY(${top}px)`
    }
    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    const [animate, setAnimate] = useState(false);
    const [full, setFull] = useState(false);

    const handleMouseEnter = () => {
        setAnimate(true)
    }
    const handleMouseLeave = () => {
        setAnimate(false)
    }
    const handleClick = () => {
        setFull(!full)
    }

    return (
        <div
            className={`${styles.actionBox}`}
            style={defaultStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <DraggableComponent title={title}>
                <div className={`${styles.actionBoxContent}`}>
                    {title}
                </div>
            </DraggableComponent>
        </div>
    )
}