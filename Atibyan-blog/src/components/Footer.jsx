import { Button, Footer, FooterCopyright } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsPinterest, BsTwitterX} from 'react-icons/bs'

export default function FooterComp() {
  return (
    <Footer className="border border-t-8 border-teal-500 flex flex-col">
        <main className='flex flex-col gap-7 w-full md:flex-row'>

<aside className='p-4'>

<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white" >Atibyan</span>Blog

<p className='text-xl mt-4 md:text-sm md:text-left'>Atibyan Blog is your go-to source for insightful articles, inspiring stories, and expert advice on a wide range of topics. Join us on a journey of learning and discovery.</p>
</aside>

<aside className='grid grid-cols-2 gap-3 sm:mt-4 md:grid-cols-3 md:gap-6 p-4'>

    <div>
        <Footer.Title title="Category" />
        <Footer.LinkGroup col>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>News</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Politics</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Education</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Technology</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Health</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>International</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Food</Footer.Link>
        </Footer.LinkGroup>
    </div>
    <div>
    <Footer.Title title="Quick Link" />
        <Footer.LinkGroup col>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>About</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Contact us</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Report a user</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Join Community</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>User Terms and Condition</Footer.Link>
            <Footer.Link href="#" target='_self' referrerPolicy='noopener noreferrer'>Privacy Policy</Footer.Link>
            
        </Footer.LinkGroup>
    </div>
    <div>
    <Footer.Title title="Quick Link" />
    <p classname="text-xl mt-4 md:text-sm md:text-left">Have an inspiring story or insightful article to share? We'd love to feature it on Atibyan Blog!</p>
    <Link>
      <Button gradientDuoTone="purpleToBlue" outline>
        Share a story
        </Button>
        </Link>
    </div>
</aside>

        </main>
<Footer.Divider />
        <div className='flex flex-col w-full items-center justify-center md:flex-row md:justify-between py-4 px-8'>
            <Footer.Copyright by="Azeez Sodiq of Atibyan" year={new Date().getFullYear()}  />
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsTwitterX} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsPinterest} />
            </div>
        </div>

    </Footer>



  );
}
