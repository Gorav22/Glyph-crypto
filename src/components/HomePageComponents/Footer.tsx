import React from 'react'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';

const Footer = () => {
    return (
        <div><footer id='C' className="footer p-10 bg-base-200 text-base-content poppinsFont">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover md:text-lg text-base">Branding</a>
                <a className="link link-hover md:text-lg text-base">Design</a>
                <a className="link link-hover md:text-lg text-base">Marketing</a>
                <a className="link link-hover md:text-lg text-base">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover md:text-lg text-base">About us</a>
                <a className="link link-hover md:text-lg text-base">Contact</a>
                <a className="link link-hover md:text-lg text-base">Jobs</a>
                <a className="link link-hover md:text-lg text-base">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover md:text-lg text-base">Terms of use</a>
                <a className="link link-hover md:text-lg text-base">Privacy policy</a>
                <a className="link link-hover md:text-lg text-base">Cookie policy</a>
            </div>
        </footer>
            </div>
    )
}

export default Footer