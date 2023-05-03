import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { z } from "zod";

export const doctorRouter = createTRPCRouter({
  getPaginatedTimings: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(),
        specialty: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 10;
      const { cursor } = input;
      const doctors = await ctx.prisma.doctor.findMany({
        take: limit + 1,
        cursor: cursor ? { userId: cursor } : undefined,
        where: {
          user: {
            blocked: false,
            emailVerified: true,
            phoneVerified: true,
          },
          active: true,
          specialties: {
            some: {
              specialtyName: {
                contains: input.specialty.toLowerCase(),
              },
            },
          },
        },
        include: {
          schedule: {
            include: {
              Appointment: true,
            },
          },
        },
      });
      const result: any = [];
      const results = doctors.map((doctor) => {
        const today = new Date();
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (doctors.length > limit) {
        const nextItem = doctors.pop();
        nextCursor = nextItem!.userId;
      }
      return {
        doctors,
        nextCursor,
      };
    }),
});
