import { type ReactElement } from "react";
import { UserLayout } from "~/layouts/UserLayout";
import { type NextPageWithLayout } from "./_app";
import { DoctorCard } from "~/components/DoctorCard";
import { api } from "~/utils/api";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <DoctorCard />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default HomePage;
