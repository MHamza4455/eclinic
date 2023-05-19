import React, { ReactElement, useState } from "react";
import { CollapseItem } from "~/components/CollapseItem";
import { UserLayout } from "~/layouts/UserLayout";

export default function Faqs() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (index: any) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const collapseData = [
    {
      title:
        "What is E-Clinic?",
      desc: "E-Clinic is an electronic clinic platform that allows users to access healthcare services remotely. It provides a convenient way to connect with healthcare providers, schedule appointments, receive medical advice, and access medical records online.",
    },
    {
      title: "How does E-Clinic work?",
      desc: "To use E-Clinic, you need to create an account and provide relevant personal information. Once registered, you can browse through a list of available healthcare providers, review their profiles and specialties, and schedule appointments based on your preferences. During the appointment, you can communicate with the healthcare provider through secure messaging or video calls.",
    },
    {
      title: "Is my personal information secure on E-Clinic?",
      desc: "E-Clinic takes data security and privacy seriously. We implement industry-standard measures to protect your personal information. Our Privacy Policy provides detailed information about how we collect, use, and protect your data.",
    },
    {
      title: "How can I trust the healthcare providers on E-Clinic?",
      desc: "We strive to connect users with reputable and licensed healthcare providers. Our platform verifies the credentials and qualifications of healthcare providers before they join E-Clinic. However, it's important to note that the selection and decision to engage with a particular healthcare provider are solely the user's responsibility.",
    },
    {
      title: "How do I know if my booking is confirmed?",
      desc: "We will send a booking confirmation email once payment has been made.",
    },
  ];
  return (
    <>
      <div className="mt-20 flex justify-center">
        <div>
          <div className=" faqs mt-16 w-full max-w-2xl px-5">
            <h1 className="my-5 text-4xl font-semibold text-black">
              Frequently Asked Questions
            </h1>
            <h2 className="text-lg text-black">TOP 10 FAQS</h2>
          </div>
          <section className="faqs mb-28 mt-8  w-full max-w-2xl ">
            <div className="max-w-2xl px-4">
              {collapseData.map((data, index) => {
                return (
                  <CollapseItem
                    key={index}
                    //@ts-ignore
                    open={index === open}
                    title={data.title}
                    desc={data.desc}
                    toggle={() => toggle(index)}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
Faqs.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
