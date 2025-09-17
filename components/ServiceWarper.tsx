"use client";

import { usePathname } from "next/navigation";
import Services from "./services";

export default function ServicesWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isServicesRoute = pathname === "/services";

  if (isServicesRoute) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 overflow-auto">
        <div className="pt-[90px]">
          <Services />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
