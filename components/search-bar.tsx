"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Building2 } from "lucide-react"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search companies, reviews, or workplace issues..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-32 py-4 text-base border-2 border-slate-200 focus:border-blue-500 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm"
        />
        <Button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
        >
          <Building2 className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  )
}
