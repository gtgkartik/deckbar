import Field from "./Field";
import Map from "./Map";
import Socials from "./Socials";
import { GrLocationPin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

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
              <h1 className="ls:text-[15px] sm:text-[14px] flex-wrap font-normal mt-6 font-libre">
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
            <p>enquiry@bluemist.sg</p>
          </div>

          <h1 className="font-libre text-md font-semibold pt-10">
            If urgent, please call us
          </h1>

          <div className="flex flex-row mt-3 font-libre space-x-2 items-center">
            <BsFillTelephoneFill size={20} />
            <p>+65 6220 1820 /<br/> +65 8771 2549</p>
          </div>
        </div>
        {/* End Of Text  */}
      </div>

      
    </>
  );
};

export default EmailForm;
