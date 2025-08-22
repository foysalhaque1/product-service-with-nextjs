import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async(req) =>{
    const token = await getToken({req})
    if(token){

        return NextResponse.next()
    }else{
        return NextResponse.redirect(new URL('/signin',req.url))
    }
    // console.log("FROM MIDDLEWARE",req.nextUrl.pathname)
}

export const config = {
  matcher: ['/products/add'],
}