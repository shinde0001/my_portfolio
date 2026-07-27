import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parth Shinde — Robotics & Automation Engineer",
  description:
    "Portfolio of Parth Shinde — Robotics and Automation Engineer specializing in AGVs, ROS 2, SLAM, computer vision, drone systems, and AI-driven perception.",
  keywords: [
    "Parth Shinde",
    "Robotics Engineer",
    "ROS 2",
    "SLAM",
    "AGV",
    "Autonomous Navigation",
    "Computer Vision",
    "Drone Systems",
    "PX4",
    "Python",
  ],
  authors: [{ name: "Parth Shinde" }],
  openGraph: {
    title: "Parth Shinde — Robotics & Automation Engineer",
    description:
      "Building intelligent autonomous systems with AI, ROS 2, and computer vision.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Shinde — Robotics & Automation Engineer",
    description:
      "Building intelligent autonomous systems with AI, ROS 2, and computer vision.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC on dark theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
