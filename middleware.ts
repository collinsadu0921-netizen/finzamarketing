import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

function missingConfigResponse(): NextResponse {
  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><title>CMS — configuration</title></head>
<body style="font-family:system-ui,sans-serif;max-width:36rem;margin:3rem auto;padding:0 1rem;color:#27272a">
  <h1 style="font-size:1.25rem">Admin / CMS unavailable</h1>
  <p>This deployment is missing Supabase environment variables. Add these in your host (e.g. Vercel → Project → Settings → Environment Variables) for <strong>Production</strong> (and Preview if needed), then redeploy:</p>
  <ul>
    <li><code>NEXT_PUBLIC_SUPABASE_URL</code></li>
    <li><code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>
  </ul>
  <p>Copy values from Supabase → Project Settings → API. See <code>.env.local.example</code> in the repo.</p>
</body>
</html>`;
  return new NextResponse(html, {
    status: 503,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function middleware(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) {
    return missingConfigResponse();
  }

  try {
    let response = NextResponse.next({
      request,
    });

    const supabase = createServerClient(url, key, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value }) => {
              request.cookies.set(name, value);
            });
          } catch {
            /* request cookies may be immutable in some Edge runtimes */
          }
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { pathname } = request.nextUrl;
    const isAdminPath = pathname.startsWith("/admin");
    const isLoginPath = pathname === "/admin/login";

    if (isAdminPath && !isLoginPath && !user) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (isLoginPath && user) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    return response;
  } catch (err) {
    console.error("[middleware] /admin", err);
    return new NextResponse(
      `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Error</title></head><body style="font-family:system-ui;padding:2rem"><p>Admin middleware failed. Check server logs and Supabase configuration.</p></body></html>`,
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
