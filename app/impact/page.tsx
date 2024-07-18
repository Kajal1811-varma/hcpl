'use client'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    })
  }, [])

  return (
    <>
      <div
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/one-businessman-holds-glowing-gold-coin-stack-generated-by-ai_188544-27348.jpg?t=st=1721308430~exp=1721312030~hmac=682e46a70df1b3daeaa7fb3dfda5de23adb8ca0b9d5837fbeeb65f4948f6fa6c&w=740')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-between px-10">
          <h2 className="mb-4 w-1/2 text-5xl font-semibold text-white" data-aos="fade-up">
            Empowering People and Businesses
          </h2>
          <div className="w-1/3 rounded-lg bg-white bg-opacity-20 p-10 text-center text-white">
            <h2 className="mb-4 text-6xl font-bold">Impact</h2>
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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="animate__animated animate__fadeInUp flex items-center justify-center md:col-span-1">
              <h2 className="text-5xl font-semibold" data-aos="fade-up">
                Highlights
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-3" >
              <div className="card-container rounded-lg bg-white p-12 shadow-md" data-aos="fade-up">
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">Increased Private Investment</p>
                </div>
              </div>
              <div className="card-container rounded-lg bg-white p-12 shadow-md" data-aos="fade-up">
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">Prospering Economic Development</p>
                </div>
              </div>
              <div className="card-container rounded-lg bg-white p-12 shadow-md" data-aos="fade-up">
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">
                    Essential Player in Marathwada's Growth Projects Done 500+
                  </p>
                </div>
              </div>
              <div className="card-container rounded-lg bg-white p-12 shadow-md" data-aos="fade-up">
                <div className="animate__animated animate__fadeInUp flex items-center">
                  <div className="mr-5 h-[2.3px] w-5 bg-[#ef1c25]"></div>
                  <p className="text-lg">Job Creation 5000+ Clients Served Nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
