import React from 'react'
import "../Css/ContactMe.css"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactMe = () => {

    const form = useRef();   

    const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm(
            'service_q5rmidi',
            'template_selkyih',
            form.current,
            'KSAMr1WgJ9h847kw2'
            )
            .then(() => {
            alert("Message sent!");
            form.current.reset(); 
            }, (error) => {
            console.log(error);
            });
        };

  return (<div className='container'>

    <div className='fullcard'> 
        
        <div className='leftPanel'> 
            <div className='heading'> 
            <span> LET'S TALK ABOUT <br />SOMETHING </span> 
            <span className='great'> GREAT </span> <br />
            <span >TOGETHER</span>
            </div>

            <div className='contactDetails'>

                <div className='contactItems'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 
                         0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span>
                            2052kundan@gmail.com
                        </span><br/>

                </div>    

                <div className='contactItems'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 
                            0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg> 
                <span>
                    9599048562
                </span><br/>

                </div>   

                <div className='contactItems'>       
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>
                        Delhi, India 
                    </span><br/>

                </div>   
            </div>

            <div className='socialMedia'>
                <a href="https://www.instagram.com/kundan_rajsirohi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"> <img src="instagram.png" alt="instagram"/> </a>
                <a href="https://www.linkedin.com" target="_blank"> <img src="linkedin.png" alt="linkedin" /> </a> 
            </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className='rightPanel'>

            <input type="text" name='name' placeholder='name' required />
            <input type="email" name='email' placeholder='email' required/>
            <textarea name='message' placeholder='your message' required></textarea>


            <button className='sendBtn' type='submit'>
                Send 
            </button>
    </form>
    </div>
    </div>
  )
}

export default ContactMe