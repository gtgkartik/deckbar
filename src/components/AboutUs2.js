import ImageOverImage from "./ImagesOverImage";

const AboutUs2 = () => {
    return ( 
        <>
        <div className="max-w-[1320] md:py-[80] py-5 flex mx-auto">
            <div className="px-5 basis-[55%] mx-auto ">
                <h1 className="text-4xl font-libre">About Us</h1>
                <p className="py-5">
                    Bluemist is a local gastro-bar that has been serving the finest coffee and a wide range of top quality alcoholic beverages at the hub of Tanjong Pagar since 2002. Our food menu is meticulously crafted to match the list of beverages that some dishes are a fusion.
                </p>
                <p>
                    We once sat on the ground level of Amara Shopping Center (current Amara 100AM) that can be spotted by a misty reflective blue light from all the window panels. It was a “love at first sight”, thus the name Bluemist. In 2010, due to the refurbishment of Amara Shopping Center, Bluemist was relocated to Blk 7 Tanjong Pagar Plaza, #01-103 untill today.
                </p>
            </div>

            <div className="basis-[45%]">
                <ImageOverImage/>
            </div>
        </div>
        </>
     );
}
 
export default AboutUs2;