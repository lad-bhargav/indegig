"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/seller-sidebar";


export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col w-full">
        <header className="flex items-center h-12 px-4 border-b">
        <SidebarTrigger className="cursor-pointer"/>
        </header>
        <div className="p-4">
        {children}
      </div>
      </main>
      </SidebarProvider>
   </div>
  );
}