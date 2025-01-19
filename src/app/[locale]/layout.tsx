import Header from "@/components/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-16">
        {children}
      </div>
    </>
  );
}