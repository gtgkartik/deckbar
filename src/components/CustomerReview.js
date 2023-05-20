import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <>
      <section className="mt-[100px] py-[30px]  bg-[#eeeeee] dark:text-gray-100">
        <div className=" flex flex-col items-center  mb-12 md:p-10 md:px-12">
          <h1 className="p-4   sm:text-2xl md:text-3xl text-black font-libre font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </>
  );
};

export default CustomerReview;
