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

      <div className="flex  justify-center px-[100px] mt-11">
        <Map />
        <div className="flex flex-col ml-20 ">
          <div className="flex flex-col">
            <h1 className="font-libre font-semibold text-[16px]">
              Opening Hours
            </h1>
            <h1>
              11:00am to 12:00am (Sunday & Public Holiday Close)
              <br />
              Look out for announcement on our Facebook
            </h1>
          </div>

          <div className="flex flex-row">
            <GrLocationPin />
            <h1>Blk 7 Tanjong Pagar Plaza #01-103 Singapore 081007</h1>
          </div>
        </div>

        <div className="flex flex-col ml-20 ">
          <div className="flex flex-col">
            <h1 className="font-libre font-semibold text-[16px]">
              For Any Enquiry / <br />
              Feedback, Please Contact
            </h1>
            <div className="flex flex-row">
              <MdEmail />
              <h1>enquiry@bluemist.sg</h1>
            </div>
          </div>

          <div className="flex flex-row">
            <GrLocationPin />
            <h1>Blk 7 Tanjong Pagar Plaza #01-103 Singapore 081007</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
