
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      <ScrollArea className="w-full h-full">
        <main className="flex flex-col items-center justify-start w-full max-w-4xl mx-auto p-6 space-y-10">
          <header className="w-full text-center py-4 border-b border-neutral-300">
            <h1 className="text-2xl font-bold tracking-tight">Kisantu wa Mbongi</h1>
            <p className="text-sm text-neutral-500">Living Archive of the Nkisi Network</p>
          </header>
          {children}
        </main>
      </ScrollArea>
    </div>
  );
}
