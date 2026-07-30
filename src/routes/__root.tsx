import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Spectre Industries — Business Consultation & AI Integration",
      },
      {
        name: "description",
        content:
          "Business Consultation and AI integration. We design and give you the tools you need to go neck and neck with any corporate industry leader as a mom and pops shop — all for 1/100000th fraction of the corporate cost, scaling has never been cheaper.",
      },
      { name: "theme-color", content: "#0a0a0b" },
      {
        property: "og:title",
        content: "Spectre Industries — Business Consultation & AI Integration",
      },
      {
        property: "og:description",
        content:
          "Mom-and-pops systems. Corporate-grade outcomes. All for 1/100000th fraction of the corporate cost — scaling has never been cheaper.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg text-fg">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
