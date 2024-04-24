import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import {
  LeftSideBar,
  MainContainer,
  TopBar,
  RightSideBar,
  BottomBar,
} from "@/components/layout/index.js";
import "../globals.css";

export const metadata = {
  title: "Blog",
  description: "Next.js 14 Blog App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              <TopBar />
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
