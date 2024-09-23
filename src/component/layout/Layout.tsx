import React from "react";
import Appbar from "./Appbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Appbar />
      <div className="flex-grow bg-white">
        <div className="mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
