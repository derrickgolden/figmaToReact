
import { useState } from "react";

import PropTypes from 'prop-types';

import { links } from "../assets/dataInfor/link";

import { AiOutlineMenu } from 'react-icons/ai'

import { Link } from "react-router-dom";

const NavMenu = ({text_col, bg_col, img_src}) =>{

    const [showMenu, setShowMenu] = useState(false)

    return(
        <div className="flex flex-row justify-between items-center gap-10 relative p-0 h-12">
            <div className="w-[138px] h-[52px]">
                <Link to='/'>
                    <img className="bg-contain "
                    src={img_src} alt="logo" />
                </Link>
            </div>
            <div className={`${bg_col} desktop:bg-transparent  z-10 grid overflow-hidden 
             ${showMenu? ` absolute top-11 right-0 left-0 grid-rows-1 
            rounded drop-shadow-xl ` : " grid-rows-[0px] " } desktop:block`}>
                <ul className="flex flex-col items-start gap-7 desktop:flex-row lg-desktop:gap-14 
                desktop:items-center p-8 desktop:p-0">
                    {links.map(link =>(
                        <li key={link.id}
                        className="h-6">
                            <Link className={` font-lexend-deca font-medium text-base 
                            leading-[150%] hover:underline ${text_col} drop-shadow-lg`} 
                            to={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    
                    <li className="flex flex-row items-center justify-center py-[10px] desktop:w-auto
                    px-[44px] desktop:px-2 gap-2 w-44 lg-desktop:w-44 h-12 box-border bg-lightBlue rounded">
                        <a className={`flex-none order-0 flex-grow-0 font-lexend-deca 
                        font-medium text-base leading-[150%]  hover:underline
                        ${text_col} drop-shadow-lg`}
                        href="#">
                            Get Access
                        </a>
                    </li>
                </ul>
            </div>
            <div onClick={() => setShowMenu(!showMenu)}
            className={`${showMenu? `${bg_col}`: ""} flex items-center justify-center 
            desktop:hidden cursor-pointer h-12 w-12 rounded-t `}>
                <AiOutlineMenu className={`${text_col} w-9 h-9 `}/>
            </div>
        </div>
    )
}

export default NavMenu;

NavMenu.propTypes = {
    text_col: PropTypes.string,
    bg_col: PropTypes.string,
    img_src: PropTypes.string,   
}
