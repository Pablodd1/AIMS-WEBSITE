import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

// Supported locales
let locales = ['en', 'es'];

function getLocale(request) {
    let headers = { 'accept-language': 'en-US,en;q=0.5' };
    let languages = new Negotiator({ headers }).languages();
    let locales = ['en', 'es'];
    let defaultLocale = 'en';

    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Exclude paths that correspond to static files (public assets)
    const isStaticFile = pathname.startsWith('/_next/') || pathname.startsWith('/static/') || pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js)$/);

    // Skip locale redirection for static files
    if (isStaticFile) return;

    // Check if the current pathname already includes a supported locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // If the pathname has a locale, continue without redirecting
    if (pathnameHasLocale) return;

    // If the pathname does not have a locale, determine the user's preferred locale
    const locale = getLocale(request);

    // Update the pathname to include the chosen locale
    request.nextUrl.pathname = `/${locale}${pathname}`;

    // Redirect to the updated URL (with locale)
    return NextResponse.redirect(request.nextUrl);
}

// Configuration for the middleware
export const config = {
    matcher: [
        // Only apply the middleware to paths that are not static files
        '/((?!_next/static|_next/image|sitemap|svg|images|team|server-API|raster|video|public/).*)',
    ],
};
