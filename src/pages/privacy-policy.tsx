import Head from "next/head";
import { NextPage } from "next";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import { UserLayout } from "~/layouts/UserLayout";

import { Footer } from "~/components/footer";
const PrivacyPolicyPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | E-CLINIC</title>
      </Head>
      <div className="my-20 flex w-full justify-center ">
        <div className="my-20 w-4/5 ">
          <div>
            <h1 className="border-b-4 border-rose-500 pb-9 text-5xl font-bold text-rose-500">
              E-CLINIC Privacy Policy Service
            </h1>
            <h2 className="my-10 text-xl text-black ">
              Last Updated: May 21, 2023
            </h2>
            <p className="my-10 text-justify text-lg text-black ">
            At E-Clinic, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our electronic clinic services ("E-Clinic" or "Services"). Please read this Privacy Policy carefully before using our Services. 
            </p>
            <h1 className="text-4xl font-bold text-rose-500">Terms of Privacy Policy</h1>
            <br></br>
            <h1 className="text-2xl font-bold text-rose-500">Information We Collect</h1>
            <p className="my-10 text-justify text-lg text-black ">
            1.1 Personal Information: When you use E-Clinic, we may collect personal information such as your name, email address, contact number, date of birth, and medical history. We only collect personal information that is necessary to provide you with our Services and improve your healthcare experience.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
             
            1.2 Non-Personal Information: We may also collect non-personal information, such as your device information, IP address, browser type, and operating system. This information is collected to analyze trends, administer the website, and gather demographic information for aggregate use.
            
            </p>
          </div>
          <div>
           <h1 className="text-2xl font-bold text-rose-500">Use of Information</h1>
            <p className="my-10 text-justify text-lg text-black ">
            2.1 Provide Services: We use your personal information to provide and improve our Services, including scheduling appointments, delivering test results, facilitating communication with healthcare providers, and ensuring the security of your information.  </p>
            <p className="my-10 text-justify text-lg text-black ">
            2.2 Communication: We may use your contact information to send you appointment reminders, important updates, newsletters, or other relevant communications related to your healthcare. You can opt out of these communications at any time. </p>
            <p className="my-10 text-justify text-lg text-black ">
            2.3 Research and Analysis: We may anonymize and aggregate your information to conduct research, analysis, and generate statistical data to improve our Services and develop new features. Any data used for research or analysis purposes will be de-identified and will not identify you personally.
            </p>
            </div>



          <div>
           <h1 className="text-2xl font-bold text-rose-500">Information Sharing and Disclosure</h1>
            <p className="my-10 text-justify text-lg text-black ">
            3.1 Service Providers: We may share your personal information with trusted third-party service providers who assist us in delivering our Services. These service providers are bound by confidentiality agreements and are only authorized to use your information as necessary to perform services on our behalf.

            </p>
            <p className="my-10 text-justify text-lg text-black ">
            3.2 Legal Requirements: We may disclose your personal information if required to do so by law, regulation, or legal process, or if we believe in good faith that such disclosure is necessary to protect the rights, property, or safety of E-Clinic, our users, or others.


            </p>
            <p className="my-10 text-justify text-lg text-black ">

            
            3.3 Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring entity. We will notify you via email or prominent notice on our website before your personal information becomes subject to a different privacy policy. 
            
            </p>
          </div>

          <div>
           <h1 className="text-2xl font-bold text-rose-500">Data Security</h1>
            <p className="my-10 text-justify text-lg text-black ">
            We take reasonable measures to protect the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.


            </p>
          </div>

          
          <div>
           <h1 className="text-2xl font-bold text-rose-500">Your Rights</h1>
            <p className="my-10 text-justify text-lg text-black ">
            You have certain rights regarding your personal information. You can access, update, or delete your personal information by logging into your account or by contacting us. Please note that we may retain certain information as required by law or for legitimate business purposes.
            </p>
            
          </div>
           
          <div>
           <h1 className="text-2xl font-bold text-rose-500">Changes to this Privacy Policy</h1>
            <p className="my-10 text-justify text-lg text-black ">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated Privacy Policy on our website or by sending you an email notification. We encourage you to review this Privacy Policy periodically for any updates.
            </p>
            
          </div>

          
          <div>
           <h1 className="text-2xl font-bold text-rose-500">Contact Us</h1>
            <p className="my-10 text-justify text-lg text-black ">
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at contact information. </p>
            
          </div>

          <div>
            <p className="my-10 text-justify text-lg text-black ">
            By using E-Clinic, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein. </p>
          </div>





          










        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

PrivacyPolicyPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default PrivacyPolicyPage;
