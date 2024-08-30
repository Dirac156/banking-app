import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const loggedIn = { firstName: "Dirac", lastName: "Murairi" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src={"/icons/logo.svg"}
            width={30}
            height={30}
            alt="menu icon"
          />

          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
