import { type ReactElement } from "react";
import { UserLayout } from "~/layouts/UserLayout";
import { api } from "~/utils/api";
import { useUser } from "@clerk/nextjs";

export default function Appointment() {
  const { data, isSuccess } = api.api.getAppointment.useQuery();
  const { isSignedIn, user } = useUser();
  return (
    <>
      {isSuccess && isSignedIn && (
        <div className="flex min-h-screen w-screen items-center justify-center">
          <table className="border">
            <tr>
              <th className="border p-2">Id</th>
              <th className="border p-2">
                {user.unsafeMetadata.role === "PATIENT"
                  ? "Doctor Id"
                  : "Patient Id"}
              </th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">PhoneNo</th>
              <th className="border p-2">Email</th>
            </tr>
            {data.map((data, index) => (
              <tr key={index}>
                <td className="border p-2">{data.id}</td>
                <td className="border p-2">{data.doctorId}</td>
                <td className="border p-2">{data.name}</td>
                <td className="border p-2">{data.address}</td>
                <td className="border p-2">{data.phoneNo}</td>
                <td className="border p-2">{data.email}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </>
  );
}

Appointment.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
