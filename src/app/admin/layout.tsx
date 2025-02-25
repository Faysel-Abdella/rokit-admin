"use client";
import type React from "react";
import { AdminLayout } from "@/components/admin-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminLayout>
        <div className="bg-[#141414] ">{children}</div>
      </AdminLayout>
    </div>
  );
}
