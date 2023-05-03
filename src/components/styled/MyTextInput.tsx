/* eslint-disable  @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { type FC, type InputHTMLAttributes } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export const MyTextInput: FC<
  {
    watchForm: UseFormWatch<any>;
    label: string;
    registerName: string;
    formErrors: FieldErrors<any>;
    register: UseFormRegister<any>;
  } & InputHTMLAttributes<HTMLInputElement>
> = ({ formErrors, label, register, registerName, watchForm, ...props }) => {
  return (
    <div>
      <div className="relative flex h-12 items-end">
        <input
          {...props}
          {...register(registerName)}
          className="peer z-10 w-full border-b border-black bg-transparent pb-1 outline-none focus:border-purple-600"
        />
        <label
          htmlFor={registerName}
          className={clsx(
            "absolute left-0 transition-all ease-linear peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-700",
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
            (watchForm(registerName)?.length as string)
              ? "top-0 text-sm"
              : "top-4"
          )}
        >
          {label}
        </label>
      </div>
      <div className="text-sm text-rose-600">
        {formErrors[registerName]?.message as string}
      </div>
    </div>
  );
};
