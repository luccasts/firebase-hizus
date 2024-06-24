import { useState } from 'react';
import styles from  './Hamburger.module.css';

export interface HamburgerProps {
    onClick: () => void;

    isInitiallyOpen?: boolean;
}


export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen } = props;
    const [isOpen, setOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setOpen((prev:any) => !prev);
        onClick();

    };
    return (
        <button
            onClick={handleClick}
            type="button"
            className={styles.button}
        >
            <div
                className={`line ${
                    isOpen ? 'rotate45deg' : 'rotate-0'
                }`}
            />
            <div
                className={`line ${
                    isOpen ? 'bg-transparent-translateX' : 'translate-0'
                }`}
            />
            <div
                className={`line ${
                    isOpen ? 'rotate-45deg' : 'rotate-0'
                }`}
            /> 
            <div className={`${isOpen ? 'test' : 'null'}`} >
                ${isOpen ?  (
                    <>
                <ul className="list">
                    <li><a href="/">Periféricos</a></li>
                    <li><a href="/">Hardware</a></li>
                </ul> </>) : null}
            </div>
        </button>
    );
}
