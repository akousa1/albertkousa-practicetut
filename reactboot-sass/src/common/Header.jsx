import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { menu } from '../data/data';

export default function Header() {
    const [mobile, setMobile] = useState(false);
    const handleActive = () => {}
    return (
        <>
            <header>
                <ul className={`${mobile ? "mobile-nav" : "menu"}`}>
                    {menu.map((item)=> (
                        <li key={item.id}>
                            <Link to={item.url} onClick={handleActive} className='link'>
                                {item.text}
                            </Link>
                            <span>{item.icons}</span>
                        </li>
                    ))}
                </ul>
                <div className="icons">
                    <button onClick={()=> setMobile(!mobile)}>
                        {mobile ? <AiOutlineClose/>: <RiMenu3Fill/>}
                    </button>
                </div>
            </header>
        </>
    )
}
