'use client'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
      <div
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430867.jpg?t=st=1719857681~exp=1719861281~hmac=04809b912de729713bf2ce9521e5142e74608339b25439174446793f4943bb8a&w=826')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-between px-10">
          <h2 className="mb-4 w-1/2 text-5xl font-semibold text-white" data-aos="fade-up">
            Trusted Legacy of Business and Engineering Excellence
          </h2>
          <div className="w-1/3 rounded-lg bg-white bg-opacity-20 p-10 text-center text-white">
            <h2 className="mb-4 text-6xl font-bold">About Us</h2>
          </div>
          <div className="absolute bottom-4 right-4">
            <img
              src={'/HcplLogo.jpeg'}
              alt="HCPL Logo"
              className="h-[5rem] w-[8rem] lg:h-[2rem] lg:w-[5rem]"
            />
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="animate__animated animate__fadeInUp flex items-center justify-center md:col-span-1">
              <h2 className="text-5xl font-semibold" data-aos="fade-up">HCPL Distinction</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3" data-aos="fade-up">
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Prominent Player</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">In-house Expertise</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Integrated & Comprehensive Approach</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Extensive Experience in Complex Projects</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Visionary Leadership</p>
              </div>
              <div className="animate__animated animate__fadeInUp flex items-center">
                <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                <p className="text-lg">Prudent Financial Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
