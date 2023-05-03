import { type SubmitHandler, useForm } from "react-hook-form";
import { type UserLoginSchemaType, userLoginSchema } from "~/zod/authSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { type NextPageWithLayout } from "../_app";
import { type ReactElement } from "react";
import { AuthLayout } from "~/layouts/AuthLayout";
import Link from "next/link";
import { MyTextInput } from "~/components/styled/MyTextInput";
import { HashLoader } from "~/components/loading/HashLoader";

const LoginPage: NextPageWithLayout = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginSchemaType>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLoginSchemaType> = async (
    data
  ): Promise<void> => {};

  return (
    <>
      {true && <HashLoader />}
      <div className="text-3xl font-bold tracking-tighter">LOG IN</div>
      <div className="mt-10 tracking-tight">
        Don&apos;t have an account?&nbsp;
        <Link
          href="/auth/register"
          className="font-semibold text-purple-600 hover:underline hover:underline-offset-4"
        >
          Create Account.
        </Link>
      </div>
      <form
        onSubmit={void handleSubmit(onSubmit)}
        className="mt-7 flex flex-col gap-6"
      >
        <MyTextInput
          type="email"
          watchForm={watch}
          label="Email"
          register={register}
          registerName="email"
          formErrors={errors}
        />
        <div>
          <MyTextInput
            type="password"
            watchForm={watch}
            label="Password"
            register={register}
            registerName="password"
            formErrors={errors}
          />
          <div className="mt-3 flex justify-end">
            <Link
              href="/"
              className="text-sm font-semibold text-purple-600 hover:underline hover:underline-offset-4"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <button className="h-12 border border-purple-600 bg-purple-600 font-semibold tracking-tighter text-yellow-400 transition-all hover:bg-transparent hover:text-purple-600">
          LOG IN
        </button>
      </form>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
