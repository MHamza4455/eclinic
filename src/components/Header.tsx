import Image from "next/image";
import Link from "next/link";
import { useState, type FC } from "react";
import { RiMenu5Fill, RiUser6Line } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

export const Header: FC = () => {
  const { isSignedIn, user: sessionData } = useUser();

  const [showSideNav, setShowSideNav] = useState(false);

  const [{ showSpecialties, showServices, showSymptoms }, setFindAppointments] =
    useState({
      showSpecialties: false,
      showSymptoms: false,
      showServices: false,
    });

  return (
    <>
      <header className="fixed left-0 top-0 z-30 h-20 w-full bg-white shadow-lg">
        <div className="m-auto flex h-full w-11/12 items-center justify-between">
          <div className="flex items-center gap-5">
            <RiMenu5Fill
              onClick={() => setShowSideNav(true)}
              className="cursor-pointer text-3xl hover:text-purple-600"
            />
            <Link
              href="/"
              className="inline-block h-14 w-14 transition-all ease-linear hover:scale-105"
            >
              <Image
                className="h-full w-full"
                src="/images/logos/company-logo.png"
                width={500}
                height={500}
                alt="Logo of the company"
              />
            </Link>
          </div>

          <div className="md:hidden">
            <BiSearchAlt2 className="cursor-pointer text-3xl text-purple-600" />
          </div>

          <div className="flex gap-10 max-md:hidden lg:gap-14">
            <div className="flex gap-2 border-b border-black py-2 focus-within:border-purple-600">
              <BiSearchAlt2 className="cursor-pointer text-2xl text-purple-600" />
              <input
                type="text"
                className="w-56 outline-none placeholder:text-sm"
                placeholder="symptom, service, doctor name"
              />
            </div>
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" signInUrl="/sign-in" />
            ) : (
              <Link
                href="/sign-in"
                passHref
                className="group flex items-center gap-2 hover:text-purple-600"
              >
                <RiUser6Line className="text-2xl" />
                <span className="font-semibold tracking-tighter group-hover:underline group-hover:underline-offset-2">
                  LOG IN
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>
      {/* here starts the mobile menu */}
      <AnimatePresence>
        {showSideNav && (
          <header className="fixed left-0 top-0 z-50 w-full backdrop-brightness-50">
            <motion.header
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{ x: -1000 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-screen w-full overflow-y-scroll bg-white px-6 py-8 lg:w-96"
            >
              <OutsideClickHandler onOutsideClick={() => setShowSideNav(false)}>
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="inline-block h-14 w-14 transition-all ease-linear hover:scale-105"
                  >
                    <Image
                      className="h-full w-full"
                      src="/images/logos/company-logo.png"
                      width={500}
                      height={500}
                      alt="Logo of the company"
                    />
                  </Link>
                  <GrClose
                    onClick={() => setShowSideNav(false)}
                    className="cursor-pointer text-2xl text-purple-600"
                  />
                </div>

                {sessionData?.unsafeMetadata?.role === "PATIENT" && (
                  <div className="mt-6 flex flex-col font-semibold tracking-tight [&>*]:py-2.5">
                    <p className="text-gray-500">ACCOUNT</p>
                    <div>
                      <Link href="/" className="hover:text-purple-600">
                        Your appointments
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="hover:text-purple-600">
                        Your prescriptions
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="hover:text-purple-600">
                        Settings
                      </Link>
                    </div>
                    <div>
                      <SignOutButton>
                        <button className="hover:text-purple-600">
                          Sign out
                        </button>
                      </SignOutButton>
                    </div>
                  </div>
                )}

                <div className="mt-3 flex flex-col font-semibold tracking-tight [&>*]:py-4 [&>]:border-b [&>]:border-purple-300 [&>div:hover]:border-purple-600 [&>div:hover]:text-purple-600 [&>div]:flex [&>div]:cursor-pointer [&>div]:justify-between">
                  <p className="text-gray-500">FIND APPOINTMENTS BY :</p>

                  <div
                    onClick={() =>
                      setFindAppointments((prev) => ({
                        showServices: false,
                        showSymptoms: false,
                        showSpecialties: !prev.showSpecialties,
                      }))
                    }
                  >
                    Specialty
                    {showSpecialties ? (
                      <MdKeyboardArrowUp className="text-2xl text-purple-500" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl text-purple-500" />
                    )}
                  </div>
                  {showSpecialties && (
                    <section className="font-medium [&>]:py-2 [&>]:pl-4">
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Dermatologist
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          General Physician
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Gastroenterologist
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Urologist
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Cardiologist
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          General Physician
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Psychiatrist
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Neurologist
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          All medical specialties
                        </Link>
                      </div>
                    </section>
                  )}

                  <div
                    onClick={() =>
                      setFindAppointments((prev) => ({
                        showServices: false,
                        showSymptoms: !prev.showSymptoms,
                        showSpecialties: false,
                      }))
                    }
                  >
                    Symptom
                    {showSymptoms ? (
                      <MdKeyboardArrowUp className="text-2xl text-purple-500" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl text-purple-500" />
                    )}
                  </div>
                  {showSymptoms && (
                    <section className="font-medium [&>]:py-2 [&>]:pl-4">
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Fever
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Heart Attack
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Breathlessness
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Migraine
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Anxiety/Depression
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Diarrhea
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Blood pressure
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Acne
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/specialities/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          See all symptoms
                        </Link>
                      </div>
                    </section>
                  )}

                  <div
                    onClick={() =>
                      setFindAppointments((prev) => ({
                        showServices: !prev.showServices,
                        showSymptoms: false,
                        showSpecialties: false,
                      }))
                    }
                  >
                    Service
                    {showServices ? (
                      <MdKeyboardArrowUp className="text-2xl text-purple-500" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl text-purple-500" />
                    )}
                  </div>
                  {showServices && (
                    <section className="font-medium [&>]:py-2 [&>]:pl-4">
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          IVF
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Braces
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Chemotherapy
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Open heart surgery
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          HydraFacial
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          MRI
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          CT Scan
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          Laser hair removal
                        </Link>
                      </div>
                      <div className="text-sm">
                        <Link
                          href="/services/doctor"
                          className="text-gray-500 hover:text-purple-600"
                        >
                          All medical services
                        </Link>
                      </div>
                    </section>
                  )}
                </div>

                <div className="mt-6 flex flex-col font-semibold tracking-tight [&>*]:py-2.5">
                  <p className="text-gray-500">PLATFORM</p>
                  <div>
                    <Link href="/" className="hover:text-purple-600">
                      Blog
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="hover:text-purple-600">
                      Help
                    </Link>
                  </div>
                </div>
              </OutsideClickHandler>
            </motion.header>
          </header>
        )}
      </AnimatePresence>
    </>
  );
};
