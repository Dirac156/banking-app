import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
};

export default RootLayout;
