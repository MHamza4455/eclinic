import { createTRPCRouter, protectedProcedure } from "../trpc";

import { clerkClient } from "@clerk/nextjs";

export const apiRouter = createTRPCRouter({
  getAppointment: protectedProcedure.query(async ({ ctx }) => {
    const user = await clerkClient.users.getUser(ctx.auth.userId);
    const email = user.emailAddresses[0]?.emailAddress as unknown as string;
    const result = await ctx.prisma.bookAppoinment.findMany({
      where: {
        email: {
          equals: email,
        },
      },
    });
    return result;
  }),
});
