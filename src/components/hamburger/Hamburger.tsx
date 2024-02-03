import React, { useState } from 'react';
import  './Hamburger.css';

export interface HamburgerProps {
    onClick: () => void;

    isInitiallyOpen?: boolean;
}


export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen } = props;
    const [isOpen, setOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        setOpen((prev:any) => !prev);
        onClick();

    };
    return (
        <button
            onClick={handleClick}
            type="button"
            className={`button`}
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
