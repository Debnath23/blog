import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

export default clerkMiddleware({
  publicRoutes: ["/api/webhook"]
});

// export function middleware(request) {
//     const path = request.nextUrl.pathname

//     const isPublicPath = path === '/sign-in' || path === '/sign-up'

//     const token = request.cookies.get("token")?.value

//     if (isPublicPath && token) {
//         return NextResponse.redirect(new URL('/', request.url))
//     }

//     if (!isPublicPath && !token) {
//         return NextResponse.redirect(new URL('/sign-in', request.url))
//     }
// }
 
// export const config = {
//   matcher: [
//     '/',
//     '/sign-up',
//     '/sign-in',
//     // '/verifyemail',
//     // '/profile',
//     "/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"
//   ]
// }

export const config = {
  matcher: [
    "/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"
  ]
}