import React from "react";
import { useForm } from "react-hook-form";

const CustomForm = ({ defaultValues, children, onSubmit }) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};

const CustomLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block my-1.5">
      {children}
    </label>
  );
};

const CustomInput = ({ type, name, id, placeholder, register }) => {
  return (
    <input
      {...register(name)}
      type={type}
      id={id}
      className="border-green-500 border-b-2 px-4 py-2 mb-6 outline-none w-full shadow-lg"
      placeholder={placeholder}
    />
  );
};

const CustomTextArea = ({ placeholder, register, name, id }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full border-b-2 border-green-500 outline-none p-4 mb-6 shadow-lg"
      rows="5"
      {...register(name)}
      id={id}
    />
  );
};

export {
  CustomForm as Form,
  CustomLabel as Label,
  CustomInput as Input,
  CustomTextArea as TextArea,
};
