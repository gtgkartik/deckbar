import ImageOverImage from "./ImagesOverImage";

const AboutUs = () => {

    return ( 
        <>
        <div className="flex md:py-[200px] sm:py-[100px] md:flex-row  sm:flex-col">

            {/* Left HandSide  */}
            <div className=" md:w-[60%] sm:w-[100%]">
                <div className="font-libre flex flex-col md:px-12 md:ml-20 sm:mx-10 justify-center">
                    <div  className="text-3xl  font-semibold">About Us</div>
                    <div className="py-5 mt-4">
                        Bluemist is a local gastro-bar that has been serving the finest coffee and a wide range of top quality alcoholic beverages at the hub of Tanjong Pagar since 2002. Our food menu is meticulously crafted to match the list of beverages that some dishes are a fusion.
                    </div>
                    <div className="py-5">
                        We once sat on the ground level of Amara Shopping Center (current Amara 100AM) that can be spotted by a misty reflective blue light from all the window panels. It was a “love at first sight”, thus the name Bluemist. In 2010, due to the refurbishment of Amara Shopping Center, Bluemist was relocated to Blk 7 Tanjong Pagar Plaza, #01-103 untill today.
                    </div>
                    <div className="py-5">
                        We once sat on the ground level of Amara Shopping Center (current Amara 100AM) that can be spotted by a misty reflective blue light from all the window panels. It was a “love at first sight”, thus the name Bluemist. In 2010, due to the refurbishment of Amara Shopping Center, Bluemist was relocated to Blk 7 Tanjong Pagar Plaza, #01-103 untill today.
                    </div>
                    <div className="py-10">
                    For reservation of tables, WhatsApp us at +65 8771 2549
                    </div>
                    <div className="">
                        <button className="rounded-sm bg-black text-white px-7 py-2">Menu</button>
                    </div>
                </div>
            </div>
            
            {/* Right HandSide  */}
            <div className="sm:pt-10 md:w-[40%] flex justify-center md:relative md:right-12 sm:w-[100%]">
                <ImageOverImage/>
            </div>
        </div>

    


        </>
     );
}
 
export default AboutUs;