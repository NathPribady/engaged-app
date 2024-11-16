// 'use client'

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/ui/app-sidebar"
// import { ThemeProvider } from "@/components/ui/theme-provider"

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//       <SidebarProvider>
//         <div className="flex min-h-screen">
//         <AppSidebar />
//         <SidebarTrigger />
//       <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
        
//         <ThemeProvider
//             attribute="class"
//             defaultTheme="default"
//             enableSystem
//             disableTransitionOnChange
//           >
//         {children}
//         </ThemeProvider>
//         </div>
//       </main>
//         </div>
//     </SidebarProvider>
//       </body>
//     </html>
    
//   )
// }

'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { GalleryVerticalEnd, Search, LayoutDashboard, Video, ClipboardCheck } from 'lucide-react'
import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Engaged!',
  description: 'Your Teaching Assistant',
}

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Live Class', href: '/live-class', icon: Video },
  { name: 'Evaluation', href: '/evaluation', icon: ClipboardCheck },
]

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <GalleryVerticalEnd className="mr-2 h-4 w-4" />
              <span className="font-semibold">My Workspace</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-4 py-2">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <a href={item.href} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}

function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
      </body>
    </html>
  )
}