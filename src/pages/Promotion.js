import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import image1 from '../Images/originalimages/1.jpg'
import image2 from '../Images/originalimages/2.jpg'

const Promotion = () => {
  return (
    <>
      <Header promotion="text-yellow" />
      <HeaderImage
        title="Promotion"
        imageurl="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      />
    {/* Gallery  */}
    <div class=" grid md:grid-cols-4 sm:grid-cols-1 ls:grid-cols-3 gap-2 mx-auto mt-[100px] md:px-20 ls:px-15 sm:px-10">
        <div class="w-full rounded">
          <img
            src= {image1}
            alt="image"
          />
        </div>
        <div class=" rounded">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
        <div class="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
        <div class="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
        <div class="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
        <div class="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
      </div>

    
    </>
  );
};

export default Promotion;
