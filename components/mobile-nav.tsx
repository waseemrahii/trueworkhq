"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Building2, AlertTriangle, Users, Shield } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    {
      href: "/companies",
      label: "Companies",
      icon: Building2,
      description: "Browse company reviews",
    },
    {
      href: "/report-issue",
      label: "Report Issues",
      icon: AlertTriangle,
      description: "Report workplace problems",
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
      description: "Connect with others",
    },
    {
      href: "/support",
      label: "Support & Legal Aid",
      icon: Shield,
      description: "Get help and legal support",
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden p-2 hover:bg-slate-100 rounded-xl">
          <Menu className="h-6 w-6 text-slate-700" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] p-0 bg-white">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
            <Logo showTagline={false} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-white/50 rounded-xl"
            >
              <X className="h-5 w-5 text-slate-600" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                    onClick={() => setOpen(false)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 text-base">{item.label}</div>
                      <div className="text-sm text-slate-500">{item.description}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer Actions */}
          <div className="p-6 border-t bg-slate-50 space-y-3">
            <Button variant="outline" className="w-full bg-white hover:bg-slate-50 border-slate-200" asChild>
              <Link href="/login" onClick={() => setOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href="/signup" onClick={() => setOpen(false)}>
                Join TrueWorkHQ
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
