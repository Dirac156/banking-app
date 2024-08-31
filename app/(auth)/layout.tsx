import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen h-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <Image
          src={"/icons/auth-image.svg"}
          alt="Auth Image"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};

export default AuthLayout;
