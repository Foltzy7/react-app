import React from "react";
import { RegisterOptions } from "react-hook-form";
import classnames from "classnames";
import { ErrorMessage } from "@hookform/error-message";
import "./form-input.scss";

type FormInputProps = {
  register: (options: any) => React.Ref<any>;
  name: string;
  text: string;
  disabled?: boolean;
  options?: RegisterOptions;
  errors: any;
  hasError?: any;
};

export function FormInput(props: FormInputProps) {
  const { register, name, text, disabled, options, errors, hasError } = props;
  const className = classnames("form-group", {
    "hasError": hasError
  });
  return (
    <div className={className}>
      <label htmlFor={name}>{text}</label>
      <input
        id={name}
        name={name}
        disabled={disabled}
        className={"form-control"}
        aria-invalid={errors.name ? "true" : "false"}
        ref={register(options)}
      />
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
