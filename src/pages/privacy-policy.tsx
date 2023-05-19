import Head from "next/head";
import { NextPage } from "next";
import React from "react";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | RideMCR</title>
      </Head>
      <div className="my-20 flex w-full justify-center ">
        <div className="my-20 w-4/5 ">
          <div>
            <h1 className="border-b-4 border-rose-500 pb-9 text-5xl font-bold text-rose-500">
              Ride MCR Privacy Policy
            </h1>
            <h2 className="my-10 text-xl text-black ">
              Last Updated: December 12, 2022
            </h2>
            <p className="my-10 text-justify text-lg text-black ">
              This privacy policy sets out how we use and protect any
              information that you give us. We are committed to ensuring that
              your privacy is protected. Should we ask you to provide certain
              information by which you can be identified when using this
              website, then you can be assured that it will only be used in
              accordance with this privacy statement.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
              We protect your personal data in line with the requirements of the
              General Data Protection Regulation (GDPR). The GDPR requires data
              controllers such as ourselves to document our lawful basis for
              processing personal data. It also gives you rights over how your
              data is processed. This privacy policy documents the data we
              collect, why and how we process it, and how to exercise your
              rights. The data controller responsible for this website is Ride
              MCR Ltd, contact address is 2o Turnbull Road, Manchester, M13 0PY
              United Kingdom.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
              Third-party websites which are linked to this website, have their
              own data controllers and privacy policies. This privacy policy
              applies only to this website. & This privacy policy documents our
              lawful basis for processing the data for each method by which we
              collect data Where we rely on your consent to process your data,
              we explain how you can withdraw your consent and delete your data.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
              The GDPR gives you rights over how your personal data is
              processed. In some cases you can exercise your rights through
              automated systems, as described at the relevant points in this
              privacy policy, or you can do so by contacting us. & The GDPR
              requires us to implement appropriate technical measures to protect
              data.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
              In addition to any sharing of data described elsewhere in this
              privacy policy, we may disclose data for legal reasons. If we
              suspect criminal activity we may disclose data relating to those
              involved or affected to the appropriate authorities. We may also
              be obliged to disclose data if we receive a request from an
              appropriate authority.
            </p>
            <p className="my-10 text-justify text-lg text-black ">
              We may occasionally make changes to this privacy policy. If any
              change allows for wider access to data, such changes will only
              apply to data collected after the date of the updated privacy
              policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
