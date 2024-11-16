'use client'

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { ThemeProvider } from "@/components/ui/theme-provider"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <SidebarProvider>
        <div className="flex min-h-screen">
        <AppSidebar />
        {/* <SidebarTrigger /> */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        <ThemeProvider
            attribute="class"
            defaultTheme="default"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        </div>
      </main>
        </div>
    </SidebarProvider>
      </body>
    </html>
    
  )
}


// import { BookOpen, Home, Video, FileSpreadsheet } from 'lucide-react'
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarProvider,
// } from "@/components/ui/sidebar"
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const pathname = usePathname()

//   return (
//     <html lang="en">
//       <body>
//         <SidebarProvider>
//           <div className="flex min-h-screen">
//             <Sidebar>
//               <SidebarHeader>
//                 <SidebarMenu>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton asChild>
//                       <Link href="/">
//                         <BookOpen className="w-4 h-4 mr-2" />
//                         <span>EduDashboard</span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 </SidebarMenu>
//               </SidebarHeader>
//               <SidebarContent>
//                 <SidebarMenu>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton asChild>
//                       <Link href="/" className={pathname === '/' ? 'bg-accent' : ''}>
//                         <Home className="w-4 h-4 mr-2" />
//                         <span>Home</span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton asChild>
//                       <Link href="/live-class" className={pathname === '/live-class' ? 'bg-accent' : ''}>
//                         <Video className="w-4 h-4 mr-2" />
//                         <span>Live Class</span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                   <SidebarMenuItem>
//                     <SidebarMenuButton asChild>
//                       <Link href="/evaluation" className={pathname === '/evaluation' ? 'bg-accent' : ''}>
//                         <FileSpreadsheet className="w-4 h-4 mr-2" />
//                         <span>Evaluation</span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 </SidebarMenu>
//               </SidebarContent>
//             </Sidebar>
//             <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
//               <div className="max-w-7xl mx-auto">
//                 {children}
//               </div>
//             </main>
//           </div>
//         </SidebarProvider>
//       </body>
//     </html>
//   )
// }