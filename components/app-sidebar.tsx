'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { LayoutDashboard, BookOpen, FileText, PenTool, Layout, HelpCircle, MessageSquare, Video, ClipboardCheck, Search, ChevronDown, Box, Book, ChevronsUpDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { 
    name: 'Preparation', 
    icon: BookOpen,
    showArrow: true,
    subItems: [
      { name: 'Generate Material', href: '/generate-material', icon: FileText },
      { name: 'Generate Lesson Plan', href: '/generate-lesson-plan', icon: PenTool },
      { name: 'Slides Reviewer', href: '/slides-reviewer', icon: Layout },
      { name: 'Interactive Lesson', href: '/interactive-lesson', icon: BookOpen },
      { name: 'Question Generator', href: '/question-generator', icon: HelpCircle },
      { name: 'Socratic Dialogues', href: '/discussion-prompt', icon: MessageSquare },
    ]
  },
  { name: 'Live Class', href: '/live-class', icon: Video },
  { name: 'Evaluation', href: '/evaluation', icon: ClipboardCheck },
  { name: 'Teacher Encyclopedia', href: 'encyclopedia', icon: Book}
]

export function AppSidebar() {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Sidebar className="border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <Box className="h-6 w-6" />
          <div className="flex flex-col">
            <h3 className="font-semibold">Engaged!</h3>
            <p className="text-xs text-muted-foreground">Your teaching assistant</p>
          </div>
        </div>
      </SidebarHeader>
      
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search" 
            className="pl-8 bg-muted/50 border-0 ring-offset-background placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring" 
          />
        </div>
      </div>

      <SidebarContent className="px-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              {item.subItems ? (
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="w-full justify-between hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarGroup>
                      <SidebarGroupContent className="pl-6">
                        {item.subItems.map((subItem) => (
                          <SidebarMenuItem key={subItem.name}>
                            <SidebarMenuButton 
                              asChild
                              className="hover:bg-muted/50"
                            >
                              <a href={subItem.href} className="flex items-center gap-2">
                                <subItem.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                                <span>{subItem.name}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SidebarMenuButton 
                  asChild
                  className="hover:bg-muted/50"
                >
                  <a href={item.href} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="border-t">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.scdn.co/image/ab6761610000e5ebbd0642ff425698afac5caffd" alt="Avatar" />
                <AvatarFallback>IU</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium">IU</p>
                <p className="text-xs text-muted-foreground">iu@edam.kr</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-muted/50">
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </div>
          {/* <ThemeToggle /> */}
        </div>
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
      className="hover:bg-muted/50"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
