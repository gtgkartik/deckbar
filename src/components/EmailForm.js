import Field from "./Field";
import Map from "./Map";
import Socials from "./Socials";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const EmailForm = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5oqiimy",
        "template_7jcnit5",
        form.current,
        "uYlQklS5Bt0Ds2gi9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-row justify-center mt-[80px] mb-20">
          <div className="flex flex-col justify-center   ">
            <div className="flex flex-col items-center mb-10">
              <h1 className="ls:text-[40px] font-semibold font-libre sm:text-[32px]">
                Contact Us
              </h1>
              <h1 className="ls:text-[15px] sm:text-[14px] flex-wrap font-normal mt-6 font-libre">
                Receive promotion updates and birthday month offers.
              </h1>
            </div>

            <Field
              input="Email Address"
              type="email"
              name="user_email"
              height="h-12"
            />
            <Field input="First Name" name="user_name" height="h-12" />
            <Field input="Last Name" name="user_lastname" height="h-12" />
            <Field
              input="Phone Number"
              type="text"
              name="user_phonenumber"
              height="h-12"
            />

            <div className="flex flex-col mt-5 ls:w-[500px]">
              <div className="flex flex-row space-x-1">
                <label>Message</label>
                <span className="text-red-600">*</span>
              </div>
              <textarea
                name="user_message"
                className={`h-[200px] text-[14px] w-full mt-1 px-3 py-[8px] rounded-sm border-[#dfe1e2] border-2`}
              ></textarea>
            </div>

            <div className="flex">
              <button className="rounded-md bg-black font-libre text-white hover:text-black hover:bg-yellow w-[140px] px-2 py-2 mt-10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      <Socials />

      <div className="flex flex-row flex-wrap justify-center px-10 mt-[80px] my-[100px] ">
        {/* Map  */}
        <div className="w-[500px] md:px-0 ls:px-5 sm:px-0">
          <Map />
        </div>
        {/* end of map  */}

        {/* Text Section  */}
        <div className="px-5 md:pt-0 sm:pt-10">
          <h1 className="text-md font-semibold font-libre">Opening Hours</h1>
          <p className="font-libre py-4">
            11:00am to 12:00am (Sunday & <br /> Public Holiday Close)
            <br />
            Look out for announcement on our <br /> Facebook
          </p>
        </div>
        {/* End Of Text  */}

        {/* Text Section  */}
        <div className="px-5 sm:pt-10 md:pt-0">
          <h1 className="text-md font-semibold font-libre">
            For Any Enquiry /
            <br />
            Feedback, Please Contact
          </h1>
          <div className="flex flex-row mt-3 font-libre space-x-2 items-center">
            <MdEmail size={20} />
            <p>happyhut.sg@gmail.com</p>
          </div>

          <h1 className="font-libre text-md font-semibold pt-10">
            If urgent, please call us
          </h1>

          <div className="flex flex-row mt-3 font-libre space-x-2 items-center">
            <BsFillTelephoneFill size={20} />
            <p>
              +65 9877 3377 <br />
            </p>
          </div>
        </div>
        {/* End Of Text  */}
      </div>
    </>
  );
};

export default EmailForm;
