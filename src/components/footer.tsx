import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="mx-3 my-10 flex flex-col md:flex-row">
        <div className="flex-1 md:w-2/4 md:flex-none">
          <div className="flex">
            <div>
              <h1 className="md: mx-10 mb-4 pt-10 font-mono text-xl font-bold text-black">
                {" "}
                Get 20% off today when you join our mailing list.{" "}
              </h1>

              <form className="md: mx-12 w-3/4 font-mono text-xl font-bold text-slate-600">
                <div className="flex items-center border-b border-slate-500 py-2">
                  <input
                    className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="jane.doe123@gmail.com"
                    aria-label="Full name"
                  />
                  <button
                    className="flex-shrink-0 rounded border-4 border-slate-500 bg-slate-500 px-2 py-1 text-sm text-white hover:border-slate-700 hover:bg-slate-700"
                    type="button"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-2/4 md:flex-none">
          <div className="flex items-center justify-center">
            <div></div>
          </div>
        </div>
      </div>

      <h1 className="md: mx-12 mb-8 pt-6 font-mono text-xl font-bold text-black">
        {" "}
        Find a doctor by{" "}
      </h1>

      <div className="flex w-full flex-col md:flex-row">
        <div className="flex-1 md:w-1/4 md:flex-none">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-1xl font-bold text-slate-600">Location </h1>
              <h1 className="text-1xl font-bold text-black">
                ______________________________
              </h1>
              <ul className=" text-large mt-4 list-inside list-disc font-normal  text-black ">
                <button> Lahore </button>
                <br></br>
                <button> Karachi </button>
                <br></br>
                <button> Islamabad </button>
                <br></br>
                <button> Peshawar </button>
                <br></br>
                <button> Gujranwala </button>
                <br></br>
                <button> Gujrat </button>
                <br></br>
                <button> Faisalabad </button>
                <br></br>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-1/4 md:flex-none">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-1xl font-bold text-slate-600">Symptoms </h1>
              <h1 className="text-1xl font-bold text-black">
                ______________________________
              </h1>
              <ul className=" text-large mt-4 list-inside list-disc font-normal text-black ">
                <button> Fever </button>
                <br></br>
                <button> Flu </button>
                <br></br>
                <button> Anxiety </button>
                <br></br>
                <button> Depression </button>
                <br></br>
                <button> Ear Infection </button>
                <br></br>
                <button> Back Pain </button>
                <br></br>
                <button> Vaginal Itching </button>
                <br></br>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-1/4 md:flex-none">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-1xl font-bold text-slate-600">Caretype </h1>
              <h1 className="text-1xl font-bold text-black">
                ______________________________
              </h1>
              <ul className=" text-large mt-4 list-inside list-disc font-normal text-black ">
                <button> Urgent Care </button>
                <br></br>
                <button> Skin Care </button>
                <br></br>
                <button> Prescription Refills </button>
                <br></br>
                <button> Mental Health </button>
                <br></br>
                <button> Wellness and Preventions </button>
                <br></br>
                <button> Women Health </button>
                <br></br>
                <button> Men Health </button>
                <br></br>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-1/4 md:flex-none">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-1xl font-bold text-slate-600">Speciality </h1>
              <h1 className="text-1xl font-bold text-black">
                ______________________________
              </h1>
              <ul className=" text-large mt-4 list-inside list-disc font-normal text-black ">
                <button> Family Medicine </button>
                <br></br>
                <button> General Doctor </button>
                <br></br>
                <button> Primary Care </button>
                <br></br>
                <button> Therapist </button>
                <br></br>
                <button> Pediatrician </button>
                <br></br>
                <button> OB-GYN </button>
                <br></br>
                <button> Psychiatrist </button>
                <br></br>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 pt-10 md:w-1/4 md:flex-none ">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-600">E-Clinic </h1>
            <h1 className="text-1xl font-bold text-black">
              ______________________________
            </h1>
            <ul className=" text-large mt-4 list-inside list-disc font-normal text-black ">
              
            <Link
                href="/about"
                className="text-black hover:text-purple-600"
              >
                 About
              </Link>
              <br></br>
              <Link
                href="/about"
                className="text-black hover:text-purple-600"
              >
                 Team
              </Link>
              <br></br>
              <Link
                href="/about"
                className="text-black hover:text-purple-600"
              >
                 Blog
              </Link>
              <br></br>
              <Link
                href="/terms-of-use"
                className="text-black hover:text-purple-600"
              >
                Term of Service
              </Link>
              <br></br>
              <Link
                href="/privacy-policy"
                className="text-black hover:text-purple-600"
              >
                Privacy Policy
              </Link>
              <br></br>
              <Link href="/faq" className="text-black hover:text-purple-600">
                Faq
              </Link>
              <br></br>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="mx-10 mt-5 font-mono text-sm text-black">
        @2023 E-Clinic All Rights Reserved.
      </h1>
    </footer>
  );
};

export default Footer;
