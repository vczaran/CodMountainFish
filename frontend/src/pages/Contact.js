import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { SiYelp } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import ContactForm from '../components/ContactForm/ContactForm';
import Map from '../components/Map/Map';





export default function Contact() {
  const location = {
    address: 'Cod Mountain Fish Co.',
    lat: 36.96578633181195,
    lng: -122.00103392460099,
  }

  return (
    <div>
      <img src="https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg" alt="cover-photo" class="w-full h-40 object-cover"></img>

      <div className="main-content-box flex w-screen h-[auto] pt-[5%]">

        <div className="left-side flex-col w-[50%]" >

          <div className="left-top ml-[10%] h-[470px]">
            <h1 className="text-4xl pb-8 text-cyan-800 flex">Contact Us</h1>

            <p className='pb-7 pr-5'>Thank you for your interest in Cod Mountain Fish Co. We're here to answer any questions or concerns you may have. Please feel free to reach out to us using the contact information provided below, or you can fill out the contact form and we'll get back to you as soon as possible.</p>

            <div className="addy-phone-email-box flex-col min-h-[200px] gap-1">
              <div className="flex">
                <div className="pr-2 text-cyan-800"><IoLocation /></div>
                <p>Santa Cruz Harbor - S Dock Slip #15</p>
              </div>
              <p className="pl-6 pb-4">333 Lake Ave, Santa Cruz, CA 95062</p>
              <div className="flex pb-4">
                <div className="pr-2 text-cyan-800"><FaPhoneAlt /></div>
                <p>(+1) 831 419 8443</p>
              </div>
              <div className="flex pb-7">
                <div className="pr-2 text-cyan-800"><MdEmail /></div>
                <p>codmountainfishco@gmail.com</p>
              </div>

              <div className='social-med flex gap-5 text-cyan-800'>
              <a href="https://www.facebook.com/Codmountain" className="text-3xl" target="_blank">
            <FaFacebook />
            </a>

            <a href="https://www.instagram.com/codmountainfishco" className="text-3xl" target="_blank">
            <RiInstagramFill/>
            </a>

            <a href="https://www.yelp.com/biz/cod-mountain-fish-santa-cruz-2" className="text-3xl" target="_blank">
            <SiYelp/>
            </a>
            <a href="https://www.google.com/maps/place/Cod+Mountain+Fish+Co./@36.9656925,-122.0010254,15z/data=!4m6!3m5!1s0x808e6b1c634fd087:0x3da19c973caff216!8m2!3d36.9656925!4d-122.0010254!16s%2Fg%2F11v0l_5r23?entry=ttu"
            className="text-3xl" target="_blank">
            <FaGoogle/>
            </a>
              </div>
            </div>
          </div>
          <div className="left-bottom h-[400px] w-[100%] flex justify-center items-center overflow-hidden bg-cyan-800 p-[30px]">
            <img className="shrink-0 w-[100%] h-[100%]" src="https://codmountain.s3.us-west-1.amazonaws.com/458550EE-2216-4B10-A573-DB5BE7CD88FC_1_105_c.jpeg" alt="sunset"></img>
          </div>
        </div>

        <div className="right-side flex-col w-[50%]">
          <div className="right-top mr-[10%] pb-10 h-[470px]">
            <ContactForm />
          </div>
          <div className="right-bottom h-[400px] bg-cyan-800 w-[100%] flex justify-center items-center p-[30px]">
          <Map location={location} zoomLevel={17} />
          </div>
        </div>

      </div>

    </div>
  )
}
