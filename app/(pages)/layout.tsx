import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
