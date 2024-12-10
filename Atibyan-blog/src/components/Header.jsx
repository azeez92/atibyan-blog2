import { Button, Navbar, TextInput } from "flowbite-react";
import {FaMoon} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <Navbar fluid rounded className="border-b-2">
    <Navbar.Brand href="https://flowbite-react.com" className="self-center whitespace-nowrap text-xl sm:text-xl font-semibold dark:text-white">
   
      <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white" >Atibyan</span>Blog
    </Navbar.Brand>
<form>
<TextInput  placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline"/>


</form>


    <div className="flex gap-2 md:order-2">
  
    <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
    <FaMoon />
    </Button>

    <Link>
      <Button gradientDuoTone="purpleToBlue" outline>
        Sign Up
        </Button>
        </Link>

      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/about">About</Navbar.Link>
      <Navbar.Link href="/projects">Projects</Navbar.Link>
      
    </Navbar.Collapse>
  </Navbar>




  )
}
