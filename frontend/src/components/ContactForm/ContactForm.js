import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7kmrjvl', 'template_t5uz7vz', form.current, '8AnBwut9yyPZ1CjYX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[100%] h-[100%] items-center justify-around bg-yellow-200">
      {/* <label>Name</label> */}
      <div className='w-[400px]'>
      <input type="text" name="user_name" placeholder='Your name' className="w-[100%] border-b-[2px] border-gray-400"/>
      </div>
      {/* <label>Email</label> */}
      <div className='w-[400px]'>
      <input type="email" name="user_email" placeholder='Your email' className="w-[100%] border-b-[2px] border-gray-400"/>
      </div>
      {/* <label>Message</label> */}
      <div className='w-[400px] h-[100px]'>
      <textarea name="message" placeholder='Your message'className="w-[100%] h-[100%] border-[2px] border-gray-400"/>
      </div>
      <div className='w-[400px]'>
      {/* <input type="submit" value="Send" /> */}
      <button type="submit" value="Send" className='bg-cyan-600 pl-5 pr-5 pb-1 pt-1' >Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
