import Field from "./Field";
import Map from "./Map";
import Socials from "./Socials";
import { GrLocationPin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const EmailForm = (props) => {
  return (
    <>
      <form method="post">
        <div className="flex flex-row justify-center mt-[80px] mb-20">
          <div className="flex flex-col justify-center   ">
            <div className="flex flex-col items-center mb-10">
              <h1 className="ls:text-[40px] font-semibold font-libre sm:text-[32px]">
                Contact Us
              </h1>
              <h1 className="ls:text-[15px] sm:text-[14px] font-normal mt-6 font-libre">
                Receive promotion updates and birthday month offers.
              </h1>
            </div>

            <Field input="Email Address" />
            <Field input="First Name" />
            <Field input="Last Name" />
            <Field input="Phone Number" />
            <div className="flex">
              <button className="rounded-md bg-black font-libre text-white hover:text-black hover:bg-yellow w-[140px] px-2 py-2 mt-10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      <Socials />

      {/* Map and extras Section  */}
      <div className="w-full md:py-[80px] md:flex-row sm:flex-col py-5 flex mx-auto px-[150px] ">
        {/* Left handside  */}
        <div className="md:basis-[35%] sm:basis-[100%]">
          <center>
            <Map />
          </center>
        </div>
        {/* right hand side  */}
        <div className="basis-[65%] flex font-libre px-10">
          {/* left hand side  */}
          <div className="basis-[50%]">
            <h1 className="font-libre font-semibold text-xl my-3">
              Opening Hours
            </h1>
            <h1 className="font-libre my-8">
              11:00am to 12:00am (Sunday & Public Holiday Close) Look out for
              announcement on our Facebook
              <br />
            </h1>
            <div className="flex flex-row items-center mx-auto">
              <GrLocationPin size={40} />
              <h1>Blk 7 Tanjong Pagar Plaza #01-103 Singapore 081007</h1>
            </div>
          </div>
          {/* right hand side  */}
          <div className="basis-[50%]">
            <h1 className="font-libre font-semibold text-xl my-3">
            For Any Enquiry / <br/> Feedback, Please Contact
            </h1>
            <h1 className="font-libre my-8">
              11:00am to 12:00am (Sunday & Public Holiday Close) Look out for
              announcement on our Facebook
              <br />
            </h1>
            <div className="flex flex-row items-center mx-auto">
              <GrLocationPin size={40} />
              <h1>Blk 7 Tanjong Pagar Plaza #01-103 Singapore 081007</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
