import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService"

type TRole = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ['/login', '/register'];
const roleBasedPrivateRoutes = {
    user: [/^\/user/, /^\/create-shop/],
    admin: [/^\/admin/],
}
export const middleware = async (request: NextRequest) => {
    const {pathname} = request.nextUrl;
    const userInof = await getCurrentUser();
    if(!userInof) {
        if(authRoutes.includes(pathname)){
            return NextResponse.next(); 
        }
        else {
            return NextResponse.redirect(new URL(`http://localhost:3000/login?redirectpath=${pathname}`, request.url))
        }
    }
    if(userInof.role && roleBasedPrivateRoutes[ userInof?.role as TRole ]) {
        const routers = roleBasedPrivateRoutes[ userInof?.role as TRole ];
        if(routers.some(roure => pathname.match(roure))) {
            return NextResponse.next();
        }
    }
    return NextResponse.redirect(new URL('/', request.url))
}
export const config = {
    matcher: [
        '/login',
        '/create-shop',
        '/admin',
        '/admin/:page',
        '/user',
        '/user/:page'
    ]
}