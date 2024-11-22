'use client'

import * as React from 'react'
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
import '/app/globals.css'

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { 
    name: 'Preparation', 
    icon: BookOpen,
    showArrow: true,
    subItems: [
      { name: 'Generate Material', href: '/preparation/generate-material', icon: FileText },
      { name: 'Generate Lesson Plan', href: '/preparation/lesson-plan', icon: PenTool },
      { name: 'Slides Reviewer', href: '/preparation/review-slides', icon: Layout },
      { name: 'Interactive Lesson', href: '/preparation/interactive-lesson', icon: BookOpen },
      { name: 'Socratic Dialogues', href: '/preparation/socratic-dialoque', icon: MessageSquare },
      { name: 'Activities Generator', href: '/preparation/activities-generator', icon: HelpCircle },
    ]
  },
  { name: 'Live Class', href: '/live-class', icon: Video },
  { name: 'Evaluation', href: '/evaluation', icon: ClipboardCheck },
  { name: 'Teacher Encyclopedia', href: '/teacher-encyclopedia', icon: Book}
]

export function AppSidebar() {

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
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}