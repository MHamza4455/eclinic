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
        "We have children travelling with us. Can you provide child/infant seats?",
      desc: "Please email us in advance and we will arrange child/infant seat at an extra charge of £10. However a child can travel without a child car seat in private hire vehicles. but only if they travel on a rear seat and wear an adult seat belt.",
    },
    {
      title: "My flight details have changed, do I need to inform you?",
      desc: "Yes, please send your new flight schedule as soon as possible at info@ridemcr.com.  If your pick-up time is within 24 hours, please call us at our office.",
    },
    {
      title: "How do I find my driver at the airport?",
      desc: "Driver will be waiting for you at arrival terminal. However we suggest that you contact the driver on the telephone number you have been provided after your booking. You can contact on our office number as well. Driver will try to contact you on your telephone number as well.",
    },
    {
      title: "I’ve made an error in my booking. How can I fix it?",
      desc: "Please get in touch with us asap and we will do our best to fix it.",
    },
    {
      title: "How do I know if my booking is confirmed?",
      desc: "We will send a booking confirmation email once payment has been made.",
    },
    {
      title: "Will I have to share the vehicle with anyone?",
      desc: "No, for private transfers, you and your group will be the sole occupants of the vehicle.",
    },
    {
      title: "How do I pay for my booking?",
      desc: "You can pay by credit or debit card using the link we send via email following your booking enquiry. However, if you prefer to do a bank transfer please contact us.",
    },
    {
      title: "Which Airports do we cover?",
      desc: "We are based in Manchester but provide our services for all UK airports.",
    },
    {
      title: "What is the size of a Medium and Small suitcase?",
      desc: "Driver will be waiting for you at arrival. The average height of medium luggage is approximately 76cm / 30 inches and the width of around 45cm / 18 inches. Small baggage can be a maximum size of roughly 43cm / 17 inches and a width of approximately 30cm / 12 inches. If you have large or oversized luggage, please email us with dimensions. However we suggest that you contact the driver on the telephone number you have been provided after your booking. You can contact on our office number as well. Driver will try to contact you on your telephone number as well.",
    },
    {
      title: "What if my flight is delayed or cancelled?",
      desc: "Your flight will be monitored for delays to ensure your driver will be waiting for you at the correct time. If your flight is delayed, your reservation will be automatically updated. We will appreciate if you can email us your about delays and cancellations.",
    },
    {
      title: "How can I leave a feedback / suggestion?",
      desc: "We value our customers feedback and would love to hear from you, please leave us a review on Google review and Trust Pilot.",
    },
    {
      title: "I left an item in the car. How can I retrieve it?",
      desc: "Please email us on info@ridemcr.com and we will do our best to retrieve your missing items.",
    },
    {
      title: "Is your service available day and night?",
      desc: "Yes, we operate on 24/7 basis.",
    },
    {
      title: "Are your prices fixed?",
      desc: "Yes, you will only pay the price fixed at the time of booking.",
    },
    {
      title: "Can I smoke in the car?",
      desc: "No, it is against the law smoke in a private hire vehicle.",
    },
    {
      title: "Can I get a receipt?",
      desc: "We will send you payment receipt via email.",
    },
    {
      title: "Which payment methods are available?",
      desc: "We accept debit Card, Credit card, Bank Transfer.",
    },
    {
      title: "Do you drop off passengers anywhere in the UK?",
      desc: "Yes, we can drop off passengers anywhere in the UK.",
    },
    {
      title: "Do you provide airport to airport transfers?",
      desc: "Yes, we do provide airport transfers to and from all UK Airports.",
    },
    {
      title: "Where are you based?",
      desc: "We are based in Manchester in the United Kingdom.",
    },
    {
      title: "How do I choose a suitable transfer?",
      desc: "While booking the journey, you have an option for choosing a vehicle dependent upon your comfort you can choice of suitable transfer",
    },
    {
      title: "What type of vehicles do you offer?",
      desc: "We have a selection of vehicles to suit your requirements like Saloon Cars, Estate Cars Executive Cars and 6 Seater Minibus. ",
    },

    {
      title: "Are all your vehicles licensed?",
      desc: "Yes. All the drivers and vehicles are fully licensed by the local councils",
    },
    {
      title: "Can I make changes to my booking?",
      desc: "You can make changes to your booking free of charge online, by email or by phone 24hrs before flight. For last minute changes please contact the Emergency contact number provided in your booking confirmation email.",
    },
    {
      title:
        "Can you guarantee that your driver will be at the airport on time?",
      desc: "Our drivers are always on time unless there are some unforeseen circumstances due to traffic or other situations which are out of our control",
    },
    {
      title: "What if I have bulky luggage?",
      desc: "No problem, we will provide you with the vehicle according to your needs.",
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
