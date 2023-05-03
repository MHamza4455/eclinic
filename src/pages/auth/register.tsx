import { type SubmitHandler, useForm } from "react-hook-form";
import {
  type UserRegisterSchemaType,
  userRegisterSchema,
} from "~/zod/authSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { type NextPageWithLayout } from "../_app";
import { type ReactElement } from "react";
import { AuthLayout } from "~/layouts/AuthLayout";
import Link from "next/link";
import { MyTextInput } from "~/components/styled/MyTextInput";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";
import { HashLoader } from "~/components/loading/HashLoader";

const RegisterPage: NextPageWithLayout = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterSchemaType>({
    resolver: zodResolver(userRegisterSchema),
  });
  const onSubmit: SubmitHandler<UserRegisterSchemaType> = async (data) => {};

  return (
    <>
      {true && <HashLoader />}
      <div className="text-3xl font-bold tracking-tighter">CREATE ACCOUNT</div>
      <div className="mt-10 tracking-tight">
        Already a customer?&nbsp;
        <Link
          href="/auth/login"
          className="font-semibold text-purple-600 hover:underline hover:underline-offset-4"
        >
          Log In
        </Link>
      </div>
      <form
        autoComplete="off"
        onSubmit={void handleSubmit(onSubmit)}
        className="mt-7 flex flex-col gap-6"
      >
        <MyTextInput
          autoComplete="off"
          type="email"
          watchForm={watch}
          label="Email"
          register={register}
          registerName="email"
          formErrors={errors}
        />
        <MyTextInput
          autoComplete="off"
          type="password"
          watchForm={watch}
          label="Password"
          register={register}
          registerName="password"
          formErrors={errors}
        />

        <button className="h-12 border border-purple-600 bg-purple-600 font-semibold tracking-tighter text-yellow-400 transition-all hover:bg-transparent hover:text-purple-600">
          CREATE ACCOUNT
        </button>
      </form>
    </>
  );
};

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default RegisterPage;
