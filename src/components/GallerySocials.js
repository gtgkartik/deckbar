
import image1 from '../Images/homeimages/25.jpg'
import image2 from '../Images/homeimages/26.jpg'
import image3 from '../Images/homeimages/27.jpg'
import image4 from '../Images/homeimages/28.jpg'
import image5 from '../Images/homeimages/29.jpg'
import image6 from '../Images/homeimages/30.jpg'
import image7 from '../Images/homeimages/31.jpg'
import image8 from '../Images/homeimages/32.jpg'
import image9 from '../Images/homeimages/33.jpg'
import image10 from '../Images/homeimages/34.jpg'
import image11 from '../Images/homeimages/35.jpg'







const GallerySocials = () => {
    return ( 
        <>
            
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:mx-[30px] sm:flex-col ls:mx-[100px] md:mx-[150px] mt-[60px]">
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image2} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image3} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image4} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image5} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image6} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image11} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image8} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={image9} alt=""/>
    </div>

</div>

        </>
     );
}
 
export default GallerySocials;