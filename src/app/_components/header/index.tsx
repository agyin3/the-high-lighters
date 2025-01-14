"use client";
import { useEffect, useState } from "react";
import Burger from "../svg/burger";
import Close from "../svg/close";
import LeftArrow from "../svg/left-arrow";
import { NavLink } from "./data";
import theme from "../../../../tailwind.config";

interface HeaderProps {
    navLinks: NavLink[];
}

export const Header = ({ navLinks }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return () => setIsOpen(false); // close menu on unmount
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        let element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <header className="flex items-center justify-end w-full fixed top-0 left-0 p-5 z-50">
                {isOpen ? (
                    <Close
                        className="hover:cursor-pointer"
                        onClick={() => setIsOpen(false)}
                        color={theme.theme.extend.colors.highlightersYellow}
                    />
                ) : (
                    <Burger
                        className="hover:cursor-pointer"
                        onClick={() => setIsOpen(true)}
                        color={theme.theme.extend.colors.highlightersYellow}
                    />
                )}
            </header>
            {isOpen ? (
                <div className="fixed top-0 left-0 w-full h-full bg-highlightersGreen flex flex-col justify-center items-center z-40">
                    <nav className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <p
                                key={link.title}
                                className="text-highlightersYellow text-2xl sm:text-6xl hover:underline cursor-pointer"
                                onClick={() => handleNavClick(link.href)}
                            >
                                {link.title}
                            </p>
                        ))}
                    </nav>
                    <a
                        href={process.env.NEXT_PUBLIC_HOME_URL}
                        className="flex items-center absolute bottom-0 left-0 p-5 hover:cursor-pointer text-white"
                    >
                        <LeftArrow />
                        <p>buddyagyin.com</p>
                    </a>
                </div>
            ) : null}
        </>
    );
};
