const ImageOverImage = () => {
    const images = [
        {url: "https://images.unsplash.com/photo-1682264938594-3e655fd8541d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
        {url: "https://images.unsplash.com/photo-1679614825455-8f9056902d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
    ]
    return ( 
        <>
            <div className="relative mx-auto ">
                <img className="rounded-lg drop-shadow-lg md:w-[300px] md:h-[400px]  drop-shadow-2xl object-cover" src= {images[0].url}/>
                <img className="md:absolute md:top-[300px] md:left-[100px] md:w-[300px] h-[300px] sm:absolute sm:top-[400px] sm:left-[200px] rounded-lg object-cover drop-shadow-2xl" src= {images[1].url}/>
            </div>

            
        </>
     );
}
 
export default ImageOverImage;