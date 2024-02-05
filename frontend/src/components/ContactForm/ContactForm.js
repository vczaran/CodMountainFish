import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [value, setValue] = useState()
  const [msg, setMsg] = useState({})
  const [successMessage, setSuccessMessage] = useState(false)
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs.sendForm('service_7kmrjvl', 'template_t5uz7vz', form.current, '8AnBwut9yyPZ1CjYX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSuccessMessage(true)
      setTimeout(() => {setSuccessMessage(false)}, 3000);
      reset();
  };

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="flex flex-col w-[100%] h-[100%] items-center justify-around pt-[10px] pb-[10px] gap-[40px] border-l-[1px] border-cyan-800">
      <div className='w-[400px]'>
      <label>Your name (required):
      <input
      type="text"
      name="user_name"
      // placeholder='Your name (required)'
      {...register("user_name", { required: true })}
      className="pl-1 w-[100%] border-b-[2px] border-cyan-800"/>
      {errors.user_name && (
            <div style={{ color: "red" }} className="invalid-feedback d-block">
              Please enter your name.
            </div>
          )}
          </label>
      </div>
      <div className='w-[400px]'>
      <label>Your email (required):
      <input
      type="email"
      name="user_email"
      // placeholder='Your email (required)'
      {...register("user_email", { required: true })}
      className="pl-1 w-[100%] border-b-[2px] border-cyan-800"/>
      {errors.user_email && (
            <div style={{ color: "red" }} className="invalid-feedback d-block">
              Please enter your email.
            </div>
          )}
      </label>
      </div>
      <div className='w-[400px]'>
      <label>Your phone number:
      <PhoneInput
      className="pl-1 w-[100%] border-b-[2px] border-cyan-800"
      defaultCountry="US"
      name="user_phone"
      // placeholder="Your phone number"
      value={value}
      onChange={setValue}
      />
      </label>
      </div>
      <div className='w-[400px] h-[140px]'>
      <label>Your message (required):
      <textarea
      name="message"
      // placeholder='Your message (required)'
      {...register("message", { required: true })}
      className="pl-1 w-[100%] h-[100%] border-[2px] border-cyan-800"/>
      {errors.message && (
            <div style={{ color: "red" }} className="invalid-feedback d-block">
              Please enter your message.
            </div>
          )}
      </label>
      </div>
      <div className='w-[400px] flex justify-center'>
      <button type="submit" value="Send" className='bg-cyan-800 text-white pl-5 pr-5 pb-1 pt-1' >Send message</button>
      </div>
      {successMessage && <div className='success-msg text-red-600'>Message sent!</div>}
    </form>
  );
};

export default ContactForm;
