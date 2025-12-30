"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
const ContactSection = ({ data, contactinfo }: { data: any, contactinfo: any } ) => {

  // const { toast } = useInstantLayoutTransition()

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message: `Phone: ${phone} Message: ${message}`,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed");

      // toast.success("Message sent successfully");
      toast.success('Form submitted successfully', {
  position: "bottom-right",
})
      console.log("Message sent successfully");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    

    } catch (error) {
      // Show error toast
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-10 bg-white rounded-xl ">
          <div className="w-full p-4 sm:p-10 max-w-[841px]">
            <h2 className="text-2xl sm:text-[40px] font-bold arial-font text-[#1A1A1A]">
            {data?.Title}
            </h2>
            <p className="text-lg font-inter text-[#6F7377] mt-2">
              {data?.SubTitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5 font-inter">
              <div>
                <label className="text-xl font-medium text-[#1A1A1A]">
                  {data?.InputFields[0]?.InputName}
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={data?.InputFields[0]?.Placeholder}
                  className="mt-2 w-full h-12 px-4 rounded-md bg-[#F6F7F8] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FA7238]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xl font-medium text-[#1A1A1A]">
                    {data?.InputFields[1]?.InputName}
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder={data?.InputFields[1]?.Placeholder}
                    className="mt-2 w-full h-12 px-4 rounded-md bg-[#F6F7F8] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FA7238]"
                  />
                </div>

                <div>
                  <label className="text-xl font-medium text-[#1A1A1A]">
                   {data?.InputFields[2]?.InputName}
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder={data?.InputFields[2]?.Placeholder}
                    className="mt-2 w-full h-12 px-4 rounded-md bg-[#F6F7F8] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FA7238]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xl font-medium text-[#1A1A1A]">
                {data?.InputFields[3]?.InputName}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={data?.InputFields[3]?.Placeholder}
                  rows={6}
                  className="mt-2 w-full px-4 py-3 rounded-md bg-[#F6F7F8] border border-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#FA7238]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#F36A10] hover:bg-orange-600 text-white font-medium rounded-md transition"
              >
                {/* {loading ? "Sending..." : "Send Message"} */}
                {
                  loading ? (
                    <div className="flex items-center justify-center">
                      {/* <Spinner /> */}
                      <span className="ml-2">Sending...</span>
                    </div>
                  ) : (
                   data?.cta?.text
                  )
                }
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl max-w-[523px] p-6 lg:p-8">
            <h3 className="text-2xl sm:text-[40px] font-bold arial-font text-[#1A1A1A]">
              {contactinfo?.Heading}
            </h3>
            <p className="text-lg font-inter text-[#6F7377] mt-3">
              {contactinfo?.Description}
            </p>

            {/* Address */}
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FA7238] rounded-md flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1A1A]">
                    Office Address
                  </h4>
                  <p className="text-base font-inter max-w-[278px] text-[#6F7377] mt-1">
                    {contactinfo?.ContactDetails?.adress}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FA7238] rounded-md flex items-center justify-center text-white">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1A1A]">
                    Phone
                  </h4>
                  <p className="text-base font-inter max-w-[278px] text-[#6F7377] mt-1">
                    Phone: {contactinfo?.ContactDetails?.call}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FA7238] rounded-md flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1A1A]">
                    Email Us
                  </h4>
                  <p className="text-base font-inter max-w-[278px] text-[#6F7377] mt-1">
                    {contactinfo?.ContactDetails?.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h4 className="text-2xl arial-font md:text-[32px] font-bold text-[#1A1A1A]">
                Follow Our Social Media
              </h4>
               <div className="flex items-center gap-3 mt-4">
    {contactinfo?.SocialLinks?.facebook && (
      <Link href={contactinfo.SocialLinks.facebook} target="_blank">
       <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M17.5 34.8336C10.4167 33.5836 5 27.4169 5 20.0002C5 11.7502 11.75 5.00024 20 5.00024C28.25 5.00024 35 11.7502 35 20.0002C35 27.4169 29.5833 33.5836 22.5 34.8336L21.6667 34.1669H18.3333L17.5 34.8336Z"
                    fill="url(#paint0_linear_2053_388)"
                  />
                  <path
                    d="M25.8333 24.1666L26.5 19.9999H22.5V17.0833C22.5 15.9166 22.9167 14.9999 24.75 14.9999H26.6667V11.1666C25.5833 10.9999 24.4167 10.8333 23.3333 10.8333C19.9167 10.8333 17.5 12.9166 17.5 16.6666V19.9999H13.75V24.1666H17.5V34.7499C18.3333 34.9166 19.1667 34.9999 20 34.9999C20.8333 34.9999 21.6667 34.9166 22.5 34.7499V24.1666H25.8333Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2053_388"
                      x1="20"
                      y1="33.9619"
                      x2="20"
                      y2="5.00024"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0062E0" />
                      <stop offset="1" stop-color="#19AFFF" />
                    </linearGradient>
                  </defs>
                </svg>
      </Link>
    )}

    {contactinfo?.SocialLinks?.instagram && (
      <Link href={contactinfo.SocialLinks.instagram} target="_blank">
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20.0008 5.45435C16.0506 5.45435 15.5549 5.47162 14.0034 5.54222C12.455 5.61313 11.398 5.85829 10.4732 6.21798C9.51659 6.5895 8.7051 7.08647 7.89664 7.89525C7.08757 8.70374 6.59062 9.51525 6.2179 10.4716C5.8573 11.3968 5.61186 12.454 5.54216 14.0019C5.47277 15.5534 5.45459 16.0495 5.45459 19.9998C5.45459 23.9501 5.47217 24.4443 5.54247 25.9959C5.61368 27.5443 5.85882 28.6013 6.2182 29.5262C6.59001 30.4828 7.08696 31.2943 7.89573 32.1028C8.70389 32.9119 9.51538 33.4101 10.4714 33.7816C11.3968 34.1413 12.4541 34.3865 14.0022 34.4574C15.5537 34.528 16.0491 34.5452 19.999 34.5452C23.9495 34.5452 24.4437 34.528 25.9952 34.4574C27.5436 34.3865 28.6018 34.1413 29.5272 33.7816C30.4835 33.4101 31.2938 32.9119 32.102 32.1028C32.911 31.2943 33.408 30.4828 33.7807 29.5265C34.1383 28.6013 34.3837 27.544 34.4564 25.9962C34.5261 24.4446 34.5443 23.9501 34.5443 19.9998C34.5443 16.0495 34.5261 15.5537 34.4564 14.0022C34.3837 12.4537 34.1383 11.3968 33.7807 10.4719C33.408 9.51525 32.911 8.70374 32.102 7.89525C31.2929 7.08616 30.4838 6.58919 29.5263 6.21798C28.599 5.85829 27.5415 5.61313 25.9931 5.54222C24.4416 5.47162 23.9477 5.45435 19.9963 5.45435H20.0008ZM18.696 8.07556C19.0833 8.07495 19.5154 8.07556 20.0008 8.07556C23.8843 8.07556 24.3446 8.0895 25.8782 8.15919C27.2964 8.22404 28.066 8.46101 28.5787 8.6601C29.2575 8.92374 29.7414 9.23889 30.2502 9.74798C30.7593 10.2571 31.0744 10.7419 31.3387 11.4207C31.5377 11.9328 31.775 12.7025 31.8395 14.1207C31.9092 15.654 31.9244 16.1146 31.9244 19.9965C31.9244 23.8783 31.9092 24.3389 31.8395 25.8722C31.7747 27.2904 31.5377 28.0601 31.3387 28.5722C31.075 29.251 30.7593 29.7343 30.2502 30.2431C29.7411 30.7522 29.2578 31.0674 28.5787 31.331C28.0666 31.531 27.2964 31.7674 25.8782 31.8322C24.3449 31.9019 23.8843 31.9171 20.0008 31.9171C16.117 31.9171 15.6567 31.9019 14.1234 31.8322C12.7053 31.7668 11.9356 31.5298 11.4226 31.3307C10.7438 31.0671 10.259 30.7519 9.74991 30.2428C9.24084 29.7337 8.9257 29.2501 8.66146 28.571C8.46238 28.0589 8.22511 27.2892 8.16057 25.871C8.09087 24.3377 8.07693 23.8771 8.07693 19.9928C8.07693 16.1086 8.09087 15.6504 8.16057 14.1171C8.22541 12.6989 8.46238 11.9292 8.66146 11.4165C8.92509 10.7377 9.24084 10.2528 9.74991 9.74374C10.259 9.23465 10.7438 8.9195 11.4226 8.65525C11.9353 8.45525 12.7053 8.21889 14.1234 8.15374C15.4652 8.09313 15.9852 8.07495 18.696 8.07192V8.07556ZM27.7648 10.4907C26.8012 10.4907 26.0194 11.2716 26.0194 12.2356C26.0194 13.1992 26.8012 13.981 27.7648 13.981C28.7284 13.981 29.5102 13.1992 29.5102 12.2356C29.5102 11.2719 28.7284 10.4901 27.7648 10.4901V10.4907ZM20.0008 12.5301C15.8758 12.5301 12.5313 15.8746 12.5313 19.9998C12.5313 24.1249 15.8758 27.468 20.0008 27.468C24.1258 27.468 27.4691 24.1249 27.4691 19.9998C27.4691 15.8746 24.1255 12.5301 20.0005 12.5301H20.0008ZM20.0008 15.1513C22.6783 15.1513 24.8492 17.3219 24.8492 19.9998C24.8492 22.6774 22.6783 24.8483 20.0008 24.8483C17.323 24.8483 15.1525 22.6774 15.1525 19.9998C15.1525 17.3219 17.323 15.1513 20.0008 15.1513V15.1513Z"
                    fill="url(#paint0_radial_2053_392)"
                  />
                  <path
                    d="M20.0008 5.45435C16.0506 5.45435 15.5549 5.47162 14.0034 5.54222C12.455 5.61313 11.398 5.85829 10.4732 6.21798C9.51659 6.5895 8.7051 7.08647 7.89664 7.89525C7.08757 8.70374 6.59062 9.51525 6.2179 10.4716C5.8573 11.3968 5.61186 12.454 5.54216 14.0019C5.47277 15.5534 5.45459 16.0495 5.45459 19.9998C5.45459 23.9501 5.47217 24.4443 5.54247 25.9959C5.61368 27.5443 5.85882 28.6013 6.2182 29.5262C6.59001 30.4828 7.08696 31.2943 7.89573 32.1028C8.70389 32.9119 9.51538 33.4101 10.4714 33.7816C11.3968 34.1413 12.4541 34.3865 14.0022 34.4574C15.5537 34.528 16.0491 34.5452 19.999 34.5452C23.9495 34.5452 24.4437 34.528 25.9952 34.4574C27.5436 34.3865 28.6018 34.1413 29.5272 33.7816C30.4835 33.4101 31.2938 32.9119 32.102 32.1028C32.911 31.2943 33.408 30.4828 33.7807 29.5265C34.1383 28.6013 34.3837 27.544 34.4564 25.9962C34.5261 24.4446 34.5443 23.9501 34.5443 19.9998C34.5443 16.0495 34.5261 15.5537 34.4564 14.0022C34.3837 12.4537 34.1383 11.3968 33.7807 10.4719C33.408 9.51525 32.911 8.70374 32.102 7.89525C31.2929 7.08616 30.4838 6.58919 29.5263 6.21798C28.599 5.85829 27.5415 5.61313 25.9931 5.54222C24.4416 5.47162 23.9477 5.45435 19.9963 5.45435H20.0008ZM18.696 8.07556C19.0833 8.07495 19.5154 8.07556 20.0008 8.07556C23.8843 8.07556 24.3446 8.0895 25.8782 8.15919C27.2964 8.22404 28.066 8.46101 28.5787 8.6601C29.2575 8.92374 29.7414 9.23889 30.2502 9.74798C30.7593 10.2571 31.0744 10.7419 31.3387 11.4207C31.5377 11.9328 31.775 12.7025 31.8395 14.1207C31.9092 15.654 31.9244 16.1146 31.9244 19.9965C31.9244 23.8783 31.9092 24.3389 31.8395 25.8722C31.7747 27.2904 31.5377 28.0601 31.3387 28.5722C31.075 29.251 30.7593 29.7343 30.2502 30.2431C29.7411 30.7522 29.2578 31.0674 28.5787 31.331C28.0666 31.531 27.2964 31.7674 25.8782 31.8322C24.3449 31.9019 23.8843 31.9171 20.0008 31.9171C16.117 31.9171 15.6567 31.9019 14.1234 31.8322C12.7053 31.7668 11.9356 31.5298 11.4226 31.3307C10.7438 31.0671 10.259 30.7519 9.74991 30.2428C9.24084 29.7337 8.9257 29.2501 8.66146 28.571C8.46238 28.0589 8.22511 27.2892 8.16057 25.871C8.09087 24.3377 8.07693 23.8771 8.07693 19.9928C8.07693 16.1086 8.09087 15.6504 8.16057 14.1171C8.22541 12.6989 8.46238 11.9292 8.66146 11.4165C8.92509 10.7377 9.24084 10.2528 9.74991 9.74374C10.259 9.23465 10.7438 8.9195 11.4226 8.65525C11.9353 8.45525 12.7053 8.21889 14.1234 8.15374C15.4652 8.09313 15.9852 8.07495 18.696 8.07192V8.07556ZM27.7648 10.4907C26.8012 10.4907 26.0194 11.2716 26.0194 12.2356C26.0194 13.1992 26.8012 13.981 27.7648 13.981C28.7284 13.981 29.5102 13.1992 29.5102 12.2356C29.5102 11.2719 28.7284 10.4901 27.7648 10.4901V10.4907ZM20.0008 12.5301C15.8758 12.5301 12.5313 15.8746 12.5313 19.9998C12.5313 24.1249 15.8758 27.468 20.0008 27.468C24.1258 27.468 27.4691 24.1249 27.4691 19.9998C27.4691 15.8746 24.1255 12.5301 20.0005 12.5301H20.0008ZM20.0008 15.1513C22.6783 15.1513 24.8492 17.3219 24.8492 19.9998C24.8492 22.6774 22.6783 24.8483 20.0008 24.8483C17.323 24.8483 15.1525 22.6774 15.1525 19.9998C15.1525 17.3219 17.323 15.1513 20.0008 15.1513V15.1513Z"
                    fill="url(#paint1_radial_2053_392)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_2053_392"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(13.1816 36.7859) rotate(-90) scale(28.8312 26.8142)"
                    >
                      <stop stop-color="#FFDD55" />
                      <stop offset="0.1" stop-color="#FFDD55" />
                      <stop offset="0.5" stop-color="#FF543E" />
                      <stop offset="1" stop-color="#C837AB" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_2053_392"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(2.52946 12.637 -52.087 10.4326 0.581907 7.55001)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3771C8" />
                      <stop offset="0.128" stop-color="#3771C8" />
                      <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
      </Link>
    )}

    {contactinfo?.SocialLinks?.twitter && (
      <Link href={contactinfo.SocialLinks.twitter} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="27" viewBox="0 0 31 27" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M27.0437 6.59791C27.055 6.88939 27.0588 7.18075 27.0588 7.47222C27.0588 16.3092 20.8424 26.511 9.47471 26.511C5.98277 26.511 2.73577 25.3981 0 23.5035C0.483596 23.5565 0.974734 23.5963 1.4734 23.5963C4.3687 23.5963 7.03538 22.5229 9.15064 20.7211C6.44628 20.6814 4.16271 18.7338 3.37514 16.084C3.75322 16.1635 4.14258 16.2033 4.54076 16.2033C5.10224 16.2033 5.64738 16.1239 6.16991 15.965C3.33994 15.3555 1.20837 12.6528 1.20837 9.40683C2.04241 9.81747 2.99703 10.122 4.0107 10.1618C2.35014 8.95614 1.25858 6.90261 1.25858 4.58406C1.25858 3.36516 1.56256 2.21246 2.09765 1.21879C5.14494 5.27295 9.70082 7.93601 14.837 8.21424C14.7315 7.72403 14.6774 7.20745 14.6774 6.69075C14.6774 2.99431 17.4446 0 20.8587 0C22.636 0 24.2413 0.808298 25.368 2.10669C26.7786 1.81521 28.1001 1.2588 29.2959 0.490364C28.8324 2.05373 27.8538 3.3651 26.5751 4.18653C27.8262 4.02754 29.0195 3.67009 30.1262 3.14014C29.2959 4.47828 28.2508 5.65724 27.0437 6.59791Z" fill="#1EA1F2"/>
        </svg>
      </Link>
    )}

    {contactinfo?.SocialLinks?.linkdin && (
      <Link href={contactinfo.SocialLinks.linkdin} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M5.83301 7.8446C5.83301 6.7339 6.73341 5.8335 7.84412 5.8335H32.1552C33.2659 5.8335 34.1663 6.7339 34.1663 7.8446V32.1556C34.1663 33.2663 33.2659 34.1667 32.1552 34.1667H7.84412C6.73341 34.1667 5.83301 33.2663 5.83301 32.1556V7.8446Z" fill="#0A66C2"/>
          <path d="M12.1933 14.6324C13.5507 14.6324 14.6512 13.5319 14.6512 12.1745C14.6512 10.817 13.5507 9.71655 12.1933 9.71655C10.8358 9.71655 9.73535 10.817 9.73535 12.1745C9.73535 13.5319 10.8358 14.6324 12.1933 14.6324Z" fill="white"/>
          <path d="M16.9022 16.4488H20.9758V18.315C20.9758 18.315 22.0812 16.1041 25.0888 16.1041C27.7718 16.1041 29.9944 17.4258 29.9944 21.4545V29.9497H25.773V22.4839C25.773 20.1073 24.5042 19.846 23.5374 19.846C21.531 19.846 21.1875 21.5767 21.1875 22.7939V29.9497H16.9022V16.4488Z" fill="white"/>
          <path d="M10.0506 16.4489H14.3359V29.9497H10.0506V16.4489Z" fill="white"/>
        </svg>
      </Link>
    )}

    {contactinfo?.SocialLinks?.youtube && (
      <Link href={contactinfo.SocialLinks.youtube} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M36.1798 11.51C35.7906 10.0643 34.6508 8.92452 33.2052 8.53531C30.5641 7.8125 19.9999 7.8125 19.9999 7.8125C19.9999 7.8125 9.43572 7.8125 6.79467 8.50751C5.37684 8.89672 4.20922 10.0643 3.82001 11.51C3.125 14.151 3.125 19.6277 3.125 19.6277C3.125 19.6277 3.125 25.1322 3.82001 27.7455C4.20922 29.1911 5.34904 30.3309 6.79467 30.7201C9.46352 31.443 19.9999 31.443 19.9999 31.443C19.9999 31.443 30.5641 31.443 33.2052 30.7479C34.6508 30.3587 35.7906 29.2189 36.1798 27.7733C36.8749 25.1322 36.8749 19.6555 36.8749 19.6555C36.8749 19.6555 36.9027 14.151 36.1798 11.51Z" fill="#FF0000"/>
          <path d="M16.6362 24.4944L25.4212 19.4347L16.6362 14.375V24.4944Z" fill="white"/>
        </svg>
      </Link>
    )}
  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
