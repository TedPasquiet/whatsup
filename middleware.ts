import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Personnalitation routes sans Auth
    publicRoutes:[
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};