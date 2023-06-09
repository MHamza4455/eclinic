import { NextApiRequest, NextApiResponse } from "next";

import { appRouter } from "~/server/api/root";
import cors from "nextjs-cors";
import { createContext } from "~/server/api/trpc";
import { createOpenApiNextHandler } from "trpc-openapi";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Setup CORS
  await cors(req, res);

  // Handle incoming OpenAPI requests
  return createOpenApiNextHandler({
    router: appRouter,
    createContext,
  })(req, res);
};

export default handler;
