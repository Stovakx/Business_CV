import { useRef } from "react"
import emailjs from '@emailjs/browser';

import '../assets/css/contactPage.css';


const ContactPage = ()=>{

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m4jnha7', 'template_m0pmdgr', form.current, 'BMEa4fAyy2FLRT6bH')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    };


    return(
        <div className="contactContainer">
            <div className="formDiv">
                <form ref={form} onSubmit={sendEmail}>
                    <h4>Let's talk</h4>
                    <div className='inputBox'>
                        <input type='text' required="required" name="name"/>
                        <span className='name'>Name</span>
                    </div>
                    <div className='inputBox'>
                        <input type='email' required name="email"/>
                        <span className='email'>Email</span>
                    </div>
                    <div className='inputBox'>
                        <textarea type='text' required name="message"/>
                        <span className='message'>Message</span>
                    </div>
                    <button className="submitEmailForm" type="submit" value="send">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                            </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ContactPage;