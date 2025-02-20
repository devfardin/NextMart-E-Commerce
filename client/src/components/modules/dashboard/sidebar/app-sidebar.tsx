"use client"
import * as React from "react"
import {
  AudioWaveform,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  ShoppingBagIcon,
  SquareTerminal,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-switcher"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { useUser } from "@/context/UserContext"

// This is sample data.
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user: currentUser } = useUser();
  const data = {
    user: {
      name: currentUser?.name as string,
      email: currentUser?.email as string,
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Next Marth",
        logo: GalleryVerticalEnd,
        plan: "E-commerce",
      }
    ],

    navMain: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        title: "Shop",
        url: "/user/shop/all-products",
        icon: ShoppingBagIcon,
        items: [
          {
            title: "Manage Products",
            url: "/user/shop/all-products",
          },
          {
            title: "Manage Categories",
            url: "/user/shop/category",
          },
          {
            title: "Manage Brands",
            url: "/user/shop/brand",
          },
        ],
      },
      {
        title: "Setting",
        url: "/user/setting/all-products",
        icon: ShoppingBagIcon,
        items: [
          {
            title: "Manage Products",
            url: "/user/shop/all-products",
          },
          {
            title: "Manage Categories",
            url: "/user/shop/category",
          },
          {
            title: "Manage Brands",
            url: "/user/shop/brand",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
