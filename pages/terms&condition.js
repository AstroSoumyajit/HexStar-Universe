import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

const PrivacyandPolicy = () => {
  return (
    <div className="bg-black min-h-screen pb-8">
      <div className="bg-white h-[20vh] flex justify-start items-end rounded-br-[5rem]">
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-gilroy font-bold">
            Terms and Conditions
          </h1>
        </div>
      </div>
      <div className="text-white px-4 md:px-8 lg:px-16 xl:px-32 py-10 md:space-y-10 space-y-4">
        <section className="space-y-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-gilroy font-bold">
            General:
          </h1>
          <h1>
            This site is owned and developed by Hex-Star Universe (“company,”
            “we” or “us”). By utilizing the Site, you consent to be bound by
            these Terms of Service and to utilize the Site as per these Terms of
            Service, our Privacy Policy and any extra terms and conditions that
            may apply to explicit areas of the Site or to items and
            administrations accessible through the Site or from the company.
            Getting to the Site, in any way, regardless of whether robotized or
            something else, establishes utilization of the Site and your consent
            to be bound by these Terms of Service.
          </h1>
          <h1>
            We maintain whatever authority is needed to change these Terms of
            Service or to force new conditions on utilization of the Site, when
            necessary, in which case we will post the updated Terms of Service
            on this site. By proceeding to utilize the Site after we post any
            such changes, you acknowledge the Terms of Service, as altered.
          </h1>
        </section>
        <section className="space-y-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-gilroy font-bold">
            Property Rights:
          </h1>

          <h1>
            This Site and every one of the materials accessible on the Site are
            the property of us and additionally our partners or licensors, and
            are ensured by copyright, trademark, and other protected innovation
            laws. The Site is given exclusively to your own non-commercial use.
            You may not utilize the Site or the materials accessible on the Site
            in a way that establishes an encroachment of our rights or that has
            not been approved by us. All the more explicitly, except if
            unequivocally approved in these Terms of Service or by the
            proprietor of the materials, you may not alter, duplicate, imitate,
            republish, transfer, post, transmit, decipher, sell, make subsidiary
            works, misuse, or convey in any way or medium (counting by email or
            other electronic methods) any material from the Site. You may, in
            any case, now and again, download as well as print one duplicate of
            individual pages of the Site for your own, non-business use, given
            that you keep flawless all copyright and other exclusive takes note.
          </h1>
        </section>
        <section className="space-y-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-gilroy font-bold">
            Limitations on Linking and Framing:
          </h1>
          <h1>
            You may establish a hypertext link to the Site so long as the link
            does not state or imply any sponsorship of your site by us or by the
            Site. However, you may not, without our prior written permission,
            frame or link to any of the content of the Site, or incorporate into
            another website or other service any of our material, content or
            intellectual property.
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
