import React from "react";
//import { useForm } from "../../hooks/useForm";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import Button from "../button/Button";
import "./form.styles.scss";
import { AiOutlineClose } from "react-icons/ai";

const Form = ({ handleIsOpen, form }) => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log("Submitted", data));

  console.log("errors", errors);

  return (
    <form>
      <button type="button" className="modal-close__btn">
        <AiOutlineClose onClick={handleIsOpen} />
      </button>
      {form.map((input, index) => (
        <Input
          key={index}
          type={input.type}
          label={input.label}
          name={input.name}
          register={register}
          placeholder={input.placeholder}
          textarea={input.textarea}
          validation={input.validation}
          errors={errors}
        />
      ))}
      <div className="form-btn">
        <Button btnText="Anfrage senden" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default Form;
