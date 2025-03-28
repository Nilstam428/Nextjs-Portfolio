import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="text-1xl font-bold justify-around align-super bg-gray-900 p-4 rounded shadow-lg" >
          <h1 className="text-white ">Medico</h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            porro corporis est, assumenda sed, officia consequatur qui vel
            mollitia distinctio labore sint blanditiis! Doloremque quo sint rem
            adipisci facilis consectetur.
          </p>
        </div>
        <div className="text-3xl flex font-bold justify-around align-super bg-gray-900 p-4 rounded shadow-lg flex-col" >
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/contact">Contact</a>
                  <a href="/services">Services</a>
                  <a href="/products">Products</a>
        </div>
        <div className="text-3xl font-bold justify-around align-super bg-gray-900 p-4 rounded shadow-lg flex-col gap-4" >
          <h1 className="text-white">Contact Us</h1>
                  <p className="text-white">Engineering College Bikaner</p>
                  <p className="text-white">+91 9929564774</p>
                  <p className="text-white">nileshtamboli428@gmail.com</p>

        </div>
              <div className="text-3xl font-bold justify-around align-super bg-gray-900 p-4 rounded shadow-lg flex-col gap-4" >
                  <h1 className="text-white">Follow Me</h1>
                  <div>
                    <a href="https://www.facebook.com/nilesh.tamboli.428">Facebook</a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/nilesh.tamboli.428">Instagram</a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/nilesh-tamboli-428"><FaLinkedin /></a>
                  </div>
                  <div>
                    <a href="https://www.youtube.com/@nik4tech"><IoLogoYoutube /></a>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Footer