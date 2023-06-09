import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/faq",
    "/privacy-policy",
    "/api/(.*)",
    "/services/doctor",
    "/specialities/doctor",
    "/specialities/doctor/(.*)",
    "/services/doctor/(.*)",
    "/bookAppoinment/(.*)",
    "/appointment",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
