import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import ContactForm from '../components/ContactForm/ContactForm';



export default function Contact() {
  return (
    <div>
      <img src="https://codmountain.s3.us-west-1.amazonaws.com/hooked-up-charter-boat-hero1.jpeg" alt="cover-photo" class="w-full h-40 object-cover"></img>

      <div className="main-content-box flex pt-10 border w-screen">

        <div className="left-side flex-col pl-[10%] border w-[50%]" >

          <div className="left-top border bg-pink-50">
            <h1 className="text-3xl pb-4">Contact Us</h1>
            <div className="addy-phone-email-box flex-col ">
              <div className="flex">
                <div className="pr-2"><IoLocation /></div>
                <p>Santa Cruz Harbor - S Dock Slip ?</p>
              </div>
              <p className="pl-6 pb-3">333 Lake Ave, Santa Cruz, CA 95062</p>
              <div className="flex pb-3">
                <div className="pr-2"><FaPhoneAlt /></div>
                <p>(+1) 831 419 8443</p>
              </div>
              <div className="flex">
                <div className="pr-2 pb-20"><MdEmail /></div>
                <p>codmountainfishco@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="left-bottom pb-10 border">
            <img className="h-80" src="https://codmountain.s3.us-west-1.amazonaws.com/458550EE-2216-4B10-A573-DB5BE7CD88FC_1_105_c.jpeg" alt="sunset-photo"></img>
          </div>
        </div>

        <div className="right-side border w-[50%]">

          <div className="right-top border h-[50%]">

            <ContactForm />
          </div>
          <div className="right-bottom border h-[50%]">
            <div>fjfjjfjfjf</div>
          </div>
        </div>

      </div>

    </div>
  )
}
