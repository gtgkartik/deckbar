import image1 from '../Images/homeimages/11.jpg'
import image2 from '../Images/homeimages/10.jpg'


const ImageOverImage = () => {

    return ( 
        <>
            <div className="relative mx-auto ">
                <img className="rounded-lg ls:w-[500px] md:w-[300px] md:h-[400px]  shadow-lg shadow-black/50 object-cover" src= {image1}/>
                <img className="sm:w-[200px] ls:w-[300px] sm:top-[230px] sm:h-[200px] ls:h-[300px]  ls:top-[300px] md:absolute md:top-[300px] md:left-[100px] ls:left-[200px] shadow-lg md:w-[300px] h-[300px] sm:absolute sm:left-[119px] rounded-lg object-cover  shadow-black/50" src= {image2}/>
            </div>

            
        </>
     );
}
 
export default ImageOverImage;