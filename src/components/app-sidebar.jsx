import * as React from "react"
import { GalleryVerticalEnd, Power, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      items: [
        { title: "Formulario",         url: "/formulario"},
        { title: "Formulario Context", url: "/formulariocontext"},
        { title: "Formulario Redux",   url: "/formularioredux"},
        { title: "Patterns",           url: "/patterns"},
        { title: "Shadcn",             url: "/shadcn"},
        { title: "Forms",              url: "/forms"},
        { title: "Shadcn Forms",       url: "/shadcnform"},
        { title: "Tareas",             url: "/tareas"},
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {

  const navigate = useNavigate()

  const {email} = jwtDecode(localStorage.getItem('token'))
  
  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }  

  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Mi Proyecto</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <Link to={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="border-t p-4">
          <div className="flex items-center gap-2 mb-2">
            <Power className="cursor-pointer" color="red" onClick={() => handleClick()}/>
            <User className="h-8 w-8 text-gray-500" />
          </div>
          <span className="text-sm font-medium">{email}</span>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
    )
  );
}
