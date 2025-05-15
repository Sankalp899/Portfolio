import React from 'react'
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
 <>
 <div className="contact" id="contact">
    <div className="card card0 border-0">
        <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                    <div className="row border-line">
                        <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?t=st=1746982337~exp=1746985937~hmac=3518412a6be30cd96809dfc08bf1817c9921d80053a34f6857333993c8fd51ca&w=996 " alt="Contact"
                        className="image"
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                        <div className="row">
                    <h6>Contact with 
                        <FaLinkedin color="blue" size={30} className="ms-2"/>
                        <FaGithubSquare color="black" size={30} className="ms-2"/>
                    </h6>
                    </div>
                    </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                        <small className="or text-center">OR</small>
                        <div className="line"/>
                    </div>
                    <div className="row px-3">
                        <input type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="mb-3"
                        />
                    </div>

                         <div className="row px-3">
                        <input type="Email" 
                        name="name" 
                        placeholder="Enter your EmailAddress" 
                        className="mb-3"
                        />
                        </div>
                        
                         <div className="row px-3">
                        <textarea
                        name="msg" 
                        placeholder="Write your message" 
                        className="mb-3"
                        />
                    </div>
                    <div className="row px-3">
                        <button className="button" type="submit">
                             SEND MESSAGE
                       </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
 </>
  );
};

export default Contact;