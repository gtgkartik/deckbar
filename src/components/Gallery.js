import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Socials from "./Socials";

const slides = [
  {
    url: "https://www.facebook.com/photo/?fbid=798424658316630&set=a.277218380437263",
  },
  {
    url: "https://www.facebook.com/NBAIndia/photos/a.120767717933456/6606948992648597/",
  },
  {
    url: "https://www.facebook.com/CricTrackerIndia/photos/a.1646074219013839/3564839683803940/",
  },
  {
    url: "https://www.facebook.com/FIBA/photos/a.10150738360011271/10160580408431271/",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1290, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1130, min: 0 },
    items: 1,
  },
};

const Gallery = (props) => {
  return (
    <>
      <div
        className={`bg-[${props.bgcolor}] ] sm:mt-20 h-[900px] flex flex-col  `}
      >
        <h1 className="font-libre font-semibold text-center md:text-3xl  sm:text-2xl pt-10 py-[75px]">
          {props.title}
        </h1>
        <Carousel
          infinite={true}
          transitionDuration={500}
          responsive={responsive}
          className=" z-0 "
        >
          <div className="mx-2">
            <Socials link={`${slides[0].url}`} className="object-cover " />
          </div>
          <div className="mx-2">
            <Socials link={`${slides[1].url}`} className="object-cover" />
          </div>
          <div className="mx-2">
            <Socials link={`${slides[1].url}`} className="object-cover" />
          </div>
          <div className="mx-2">
            <Socials link={`${slides[0].url}`} className="object-cover" />
          </div>
          <div className="mx-2">
            <Socials link={`${slides[0].url}`} className="object-cover" />
          </div>
          <div className="mx-2">
            <Socials link={`${slides[1].url}`} />
          </div>
        </Carousel>
        <button className="bg-black mx-auto hover:bg-yellow duration-300 text-white font-bold py-2 px-4 font-libre rounded my-[75px]">
          {props.btntext}
        </button>
      </div>
    </>
  );
};

export default Gallery;
