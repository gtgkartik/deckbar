import Header from "../../components/Header";
import HeaderImage from "../../components/HeaderImage";
import records from '../records.json'
const SoupsAndSalads = () => {
  return (
    <>
      <Header menu="text-yellow" />
      <HeaderImage
        title="Menu"
        imageurl="https://images.unsplash.com/photo-1573551565922-aec98de55802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      {/* <!-- component --> */}
      <div className="h-screen w-full flex ">
        {/* <!-- main --> */}
        <main className="w-full  mt-[100px]">
          <div className="px-10 mt-5 flex justify-center mb-[40px]">
            <h1 className="text-black text-[40px] font-semibold font-libre">
              Pastas
            </h1>
          </div>

          <div className="px-10 flex flex-wrap gap-4 justify-center">
            {records[2].pastas.map(record =>{
                  return (
                    <div key={record.id} className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <div className="bg-white rounded-lg mt-5">
          <img
            src= {record.url}
            className="h-40 rounded-md"
            alt=""
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
          <div className="py-5 px-5">
            <span className="font-bold text-gray-800 text-lg">{record.title}</span>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 font-light"></div>
              <div className="text-2xl text-red-600 font-bold">$ {record.price}</div>
            </div>
          </div>
        </div>
      </div>
                  )
            })}

            
          </div>
        </main>
      </div>
    </>
  );
};

export default SoupsAndSalads;
