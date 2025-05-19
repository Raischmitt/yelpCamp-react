import Home from "../Components/Home";
import Campgrounds from "../Components/Campgrounds";
import NewCampground from "../Components/NewCampground";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GiCampfire } from 'react-icons/gi';
import { FaRegTimesCircle } from "react-icons/fa";



function NavBar() {
    const [click, setClick] = useState('Home');
    const [menu, setMenu] = useState(false);

    const handleChange = (page) => {
        setClick(page);
        setMenu(false);
    };

    const render = () => {
        switch (click) {
            case 'Home':
                return <Home />;
            case 'Campgrounds':
                return <Campgrounds />;
            case 'NewCampground':
                return <NewCampground />;
            case 'Login':
                return <Login />;
            case 'Register':
                return <Register />;
        }
    };

    return (
        <div className="min-h-screen bg-zinc-900 text-white pt-24">
            <nav className="bg-zinc-800 fixed top-0 left-0 w-full px-6 py-4 z-50 shadow-md flex items-center justify-between">
                <div className={`items-center gap-4 mb-4 animate-pulse ${menu ? 'hidden' : 'flex'} md:flex`}>
                    <GiCampfire className="text-white mr-2 text-3xl" />
                    <span className="text-[30px] font-bold  bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">YelpCamp</span>
                </div>
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenu(!menu)}
                    aria-label="Toggle menu">
                    {menu ? <FaRegTimesCircle /> : <IoMdMenu />}

                </button>

                <ul className={`
                      flex flex-col md:flex-row md:items-center md:gap-6
                      text-lg mt-4 md:mt-2 transition-all duration-300
                      ${menu ? 'flex' : 'hidden'} md:flex
                `}>
                    {['Home', 'Campgrounds', 'NewCampground', 'Login', 'Register'].map((page) => (
                        <li key={page} onClick={() => handleChange(page)} className="group relative px-4 py-2 cursor-pointer transition-all duration-300 hover:text-red-400 hover:bg-white/20  hover:rounded-lg group-hover:translate-x-1">
                            {page}
                        </li>
                    ))}
                </ul>
                <div>

                </div>

            </nav>
            <div className="mt-50">{render()}</div>
        </div>

    );
}

export default NavBar;