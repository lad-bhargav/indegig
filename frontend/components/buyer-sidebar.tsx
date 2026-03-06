import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, History, ShoppingCart, LogIn, UserPlus } from "lucide-react"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const menuItems = [
  { title: "Home", icon: Home, url: "/buyer/dashboard" },
  { title: "History", icon: History, url: "/buyer/history" },
  { title: "orders", icon: ShoppingCart, url: "/buyer/orders" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-semibold">IndeGig</h2>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-3 py-3 border-t">
          <SignedOut>
            <div className="flex flex-col gap-2">
              <SignInButton mode="modal">
                <button className="flex items-center cursor-pointer gap-2 w-full rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="flex items-center cursor-pointer gap-2 w-full rounded-md px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-3 px-1">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
              <span className="text-sm font-medium truncate">My Account</span>
            </div>
          </SignedIn>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}