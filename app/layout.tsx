'use client'

import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import { AppSidebar } from '@/components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
              <SidebarInset className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="h-6" />
                  <div className="font-semibold">Dashboard</div>
                </header>
                <main className="flex-1 overflow-auto p-6">
                  <div className="mx-auto max-w-7xl">{children}</div>
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

