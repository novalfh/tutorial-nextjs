
import './Navbar.css'
// 'use client'
import {Input} from "@nextui-org/react";


export const Navbar = () => {
    // console.log('Hello')

    return (
        <nav className='navbar flex justify-between w-screen bg-slate-400 h-[5rem]'>
            {/*<Input label={'sdasdas'}></Input>*/}
            <h1 className={' text-slate-950'}>Hello World from naval</h1>
            <h1 className={' text-slate-950'}>Hello World from naval</h1>
        </nav>
    );
};