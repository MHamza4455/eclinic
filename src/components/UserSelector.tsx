import React, { useState } from "react";

import clsx from "clsx";
import { useUser } from "@clerk/nextjs";

export function UserSelector() {
  const [role, setRole] = useState<null | string>(null);
  const { user, isSignedIn } = useUser();
  return (
    <>
      {isSignedIn && !user?.unsafeMetadata?.role ? (
        <div className="fixed left-0 top-0 z-50 flex min-h-screen w-screen items-center justify-center bg-white">
          <div className="flex flex-col gap-2">
            <div>
              <button
                onClick={() => setRole("DOCTOR")}
                className={clsx(
                  "border-y border-l p-3 hover:bg-gray-200",
                  role === "DOCTOR" && "bg-gray-200"
                )}
              >
                Doctor
              </button>
              <button
                onClick={() => setRole("PATIENT")}
                className={clsx(
                  "border-y border-r p-3 hover:bg-gray-200",
                  role === "PATIENT" && "bg-gray-200"
                )}
              >
                Patient
              </button>
            </div>
            <button
              onClick={() => {
                void user.update({
                  unsafeMetadata: {
                    role,
                  },
                });
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
