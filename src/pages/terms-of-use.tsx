import Head from "next/head";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { UserLayout } from "~/layouts/UserLayout";

import { Footer } from "~/components/footer";
const TermOfUsePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Terms Of Use | E-CLINIC</title>
      </Head>
      <div className="my-20 flex w-full justify-center ">
        <div className="my-20 w-4/5 ">
          <div>
            <h1 className="border-b-4 border-rose-500 pb-9 text-5xl font-bold text-rose-500">
              E-CLINIC Terms of Service
            </h1>
            <h2 className="my-10 text-xl text-black ">
              Last Updated: May 21, 2023
            </h2>
            <p className="my-10 text-justify text-lg text-black ">
            Please read these Terms of Use ("Terms") carefully before using E-Clinic's electronic clinic services ("E-Clinic" or "Services"). These Terms govern your access to and use of the Services provided by E-Clinic. By using our Services, you agree to be bound by these Terms. </p>
            <h1 className="text-2xl font-bold text-rose-500">Use of Services</h1>
            <p className="my-10 text-justify text-lg text-black ">
            
            1.1 Eligibility: You must be at least 18 years old and have the legal capacity to enter into a binding contract to use our Services. If you are accessing or using the Services on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms.

            </p>
            <p className="my-10 text-justify text-lg text-black ">
             
            1.2 Account Creation: In order to access certain features of the Services, you may be required to create an account. You agree to provide accurate and complete information during the registration process and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
             
            1.3 Compliance with Laws: You agree to use the Services in compliance with all applicable laws, rules, and regulations. You are solely responsible for ensuring that your use of the Services does not violate any applicable laws or regulations.
           </p>
          </div>
          <div>
           <h1 className="text-2xl font-bold text-rose-500">Medical Advice and Services</h1>
            <p className="my-10 text-justify text-lg text-black ">
            2.1 No Medical Advice: E-Clinic provides a platform for connecting you with healthcare providers and facilitating the delivery of healthcare services. However, the information provided through the Services is for informational purposes only and should not be considered as medical advice. You should always consult with a qualified healthcare professional for medical advice or treatment.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
            2.2 Healthcare Providers: E-Clinic does not endorse or recommend any specific healthcare provider or guarantee the quality of their services. It is your responsibility to evaluate and select a healthcare provider based on your own judgment and requirements. </p>
            <p className="my-10 text-justify text-lg text-black ">
            
          2.3 User Responsibilities: You are solely responsible for providing accurate and complete information about your medical history, symptoms, and any other relevant information to healthcare providers. You acknowledge that the accuracy and completeness of such information are essential for the provision of appropriate medical advice and treatment.           </p>
          </div>



          <div>
           <h1 className="text-2xl font-bold text-rose-500">Intellectual Property Rights</h1>
            <p className="my-10 text-justify text-lg text-black ">
            3.1 Ownership: E-Clinic and its licensors retain all rights, title, and interest in and to the Services, including all intellectual property rights. You acknowledge that the Services contain proprietary and confidential information protected by intellectual property laws.


            </p>
            <p className="my-10 text-justify text-lg text-black ">
            3.2 Limited License: Subject to these Terms, E-Clinic grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services for your personal, non-commercial use.

            </p>
            <p className="my-10 text-justify text-lg text-black ">

            
            3.3 Prohibited Activities: You agree not to copy, modify, distribute, sell, lease, reverse engineer, or create derivative works based on the Services, in whole or in part, without the prior written consent of E-Clinic.
             
            
            </p>
          </div>

          <div>
           <h1 className="text-2xl font-bold text-rose-500">Privacy</h1>
            <p className="my-10 text-justify text-lg text-black ">
            Your privacy is important to us. Our collection, use, and disclosure of your information are governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Services, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy.
            
            </p>
          </div>

          
          <div>
           <h1 className="text-2xl font-bold text-rose-500">Disclaimer of Warranties</h1>
            <p className="my-10 text-justify text-lg text-black ">
            THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS. E-CLINIC DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. E-CLINIC DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED.

            </p>
            
          </div>
           
          <div>
           <h1 className="text-2xl font-bold text-rose-500">Limitation of Liability</h1>
            <p className="my-10 text-justify text-lg text-black ">
            TO THE MAXIMUM EXTENT PERMITTEDs
            </p>
            
          </div>





          










        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

TermOfUsePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default TermOfUsePage;
