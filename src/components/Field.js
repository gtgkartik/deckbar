const Field = (props) => {
  console.log(props.name)
  return (
    <>
      <div className="flex flex-col mt-5 ls:w-[500px]">
        <div className="flex flex-row space-x-1">
          <label>{props.input}</label>
          <span className="text-red-600">*</span>
        </div>

        <input
          required
          type={props.type}
          className="h-12 text-[14px] w-full mt-1 px-3 py-[8px] rounded-sm border-[#dfe1e2] border-2 "
          name = {props.name}
        />
      </div>
    </>
  );
};

export default Field;
