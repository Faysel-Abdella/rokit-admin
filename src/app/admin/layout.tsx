"use client";
import type React from "react";
import { AdminLayout } from "@/components/admin-layout";
import { HeroUIProvider } from "@heroui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeroUIProvider>
        <AdminLayout>
          <div className="bg-[#141414] ">{children}</div>
        </AdminLayout>
      </HeroUIProvider>
    </div>
  );
}
