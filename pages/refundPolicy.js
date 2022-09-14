import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

const PrivacyandPolicy = () => {
  return (
    <div className="bg-black min-h-screen pb-8">
      <div className="bg-white h-[20vh] flex justify-start items-end rounded-br-[5rem]">
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-gilroy font-bold">
            Refund Policy
          </h1>
        </div>
      </div>
      <div className="text-white px-4 md:px-8 lg:px-16 xl:px-32 py-10 md:space-y-10 space-y-4">
        <h1>
          We ensure to provide an excellent experience and learning to all our
          users. As with any online purchase experience, some terms and
          conditions govern the Refund Policy. When you purchase a program from
          Hex-Star Universe, you agree to our Terms & Conditions and refund
          policy.
        </h1>
        <section className="space-y-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-gilroy font-bold">
            Our refund policy is as follows:
          </h1>
          <h1>
            Once you purchase and make the required or partial payment, there
            will not be any changes or modifications to the same, nor will there
            be any refund.
          </h1>
        </section>
        <section className="space-y-1">
          <h1>
            Hex-Star Universe reserves the right to postpone/cancel the course,
            change the structure of the course or change the list of speakers.
            If Hex-Star Universe cancels the entire course, we'll refund 100% of
            the course fees to the Subscriber.
          </h1>
          <h1>
            Once the program begins, we will initiate no refund if the course
            timeline is extended.
          </h1>
        </section>
        <section className="space-y-1">
          <h1>
            We will issue no refund if the course commencement date is changed.
          </h1>
        </section>
        <section className="space-y-2">
          <h1>
            No refunds or credits will be available for participants who fail to
            attend the course.
          </h1>
        </section>
        <section className="space-y-2">
          <h1>
            There will be no refunds if the structure/content of the course is
            altered.
          </h1>
        </section>
        <section className="space-y-2">
          <h1>The course is non-transferable.</h1>
        </section>
        <section className="space-y-2">
          <h1>
            The course cannot be transferred to others in case you are unable to
            take the course under any circumstances.
          </h1>
        </section>
      </div>
      <div className="my-4">
        <div className="p-2 rounded-full bg-white w-fit mx-auto cursor-pointer">
          <Link href="/">
            <MdOutlineArrowBack className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyandPolicy;
