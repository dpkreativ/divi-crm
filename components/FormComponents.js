const CustomLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block my-1.5">
      {children}
    </label>
  );
};

const CustomInput = ({ type, name, id, placeholder, value, ref }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="border-green-500 border-b-2 px-4 py-2 outline-none w-full shadow-lg"
      placeholder={placeholder}
      value={value}
      ref={ref}
    />
  );
};

const CustomTextArea = ({ placeholder, ref }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full border-b-2 border-green-500 outline-none p-4 shadow-lg"
      rows="5"
      cols="20"
      ref={ref}
    />
  );
};

export {
  CustomLabel as Label,
  CustomInput as Input,
  CustomTextArea as TextArea,
};
