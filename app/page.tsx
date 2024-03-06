// 'use client'
import {Navbar} from "@/components/navbar/Navbar";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

export default function Home() {
    // console.log('Helloo')
    console.log('from page')


  return (
    <>

        <header>
            <Navbar></Navbar>
        </header>
        <main>
            <h1>Hello</h1>
            <form  className='flex flex-col sm:flex-row gap-3 w-screen box-border pl-5 pr-5'>
                <Input label='Name'></Input>
                <Input label='Email'></Input>
                <Input label='Password' type='password'></Input>
                <Button>Submit</Button>
            </form>

        </main>
        <footer></footer>
    </>
  )
}
