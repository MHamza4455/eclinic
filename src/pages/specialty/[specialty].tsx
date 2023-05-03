import { DoctorCard } from "~/components/DoctorCard";
import { InferGetServerSidePropsType, type GetServerSideProps } from "next";
import { type ReactElement } from "react";
import { api } from "~/utils/api";
import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { appRouter } from "~/server/api/root";
import { createContext } from "~/server/api/trpc";
import { type NextPageWithLayout } from "../_app";
import { UserLayout } from "~/layouts/UserLayout";

const SpecialtyPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ specialty }) => {
  const { data, fetchNextPage, hasNextPage, status, isFetchingNextPage } =
    api.doctor.getPaginatedTimings.useInfiniteQuery(
      {
        specialty,
        limit: 10,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );
  if (status === "success")
    return (
      <>
        {data.pages.map(({ doctors }) => {
          return doctors.map((doctor) => {
            <DoctorCard key={doctor.userId} />;
          });
        })}
      </>
    );
  return null;
};

export const getServerSideProps: GetServerSideProps<{
  specialty: string;
}> = async (ctx) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });

  const specialty = ctx.params?.specialty as string;

  await ssg.doctor.getPaginatedTimings.prefetchInfinite({
    specialty,
    limit: 10,
  });

  return {
    props: { trpcState: ssg.dehydrate(), specialty },
  };
};

SpecialtyPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default SpecialtyPage;
