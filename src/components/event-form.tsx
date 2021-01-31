import React from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "./layout/form-input";
import { OrgEvent } from "../models/orgEvent";

export default function EventForm(props: any) {
  const { register, handleSubmit, watch, errors, setValue } = useForm<OrgEvent>({
    defaultValues: {
      name: "",
      location: "",
      description: "",
    },
  });
  const nameValue = watch("name");
  const onSubmit = (data: any) => {
    console.log(nameValue);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <FormInput
        register={register}
        name={"name"}
        text={"Event Name"}
        hasError={errors.name}
        errors={errors}
        options={{
          required: "Name is required",
        }}
      />
      <FormInput
        register={register}
        name={"location"}
        text={"Location"}
        hasError={errors.location}
        errors={errors}
        options={{
          required: "Location is required",
        }}
      />
      <FormInput
        register={register}
        name={"description"}
        text={"Description"}
        hasError={errors.description}
        errors={errors}
        options={{
          required: "Description is required",
        }}
      />
      <input type="submit" />
    </form>
  );
}
