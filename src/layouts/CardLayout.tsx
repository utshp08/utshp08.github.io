import React from 'react';
import styles from '../../styles/Components.module.css';

type Props = {
    children: any;
}
export default function CardLayout({ children }: Props) {

    const Cards = children.map((child: any) => React.cloneElement(child))
    const noOfCards = Cards.length;
    const verticalGap = 15;
    const scales = Cards.map((item: any, key: number) => {
        return `${(1 - Number(`0.${noOfCards}`)) + Number(`0.${key}`)}`
    })
    return (
        <div className={styles.CardLayoutContainer}>
            {/* {Cards.map((card: any, key:number) => {
                return (
                    <div style={{
                        position: 'absolute',
                        top: `${(key + 1) * verticalGap}px`,
                        transformOrigin: 'top center',
                        transform: `scale(${scales[key]})`
                    }} key={key}>
                        {card}
                    </div>
                )
            })} */}
            {children}
        </div>
    )
}