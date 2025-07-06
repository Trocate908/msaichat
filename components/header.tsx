"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src="/images/msai-logo.png" alt="MSAI Logo" fill className="object-cover" />
          </div>
          <span className="text-2xl font-bold">MSAI</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Kumba
          </Link>
          <Link href="/chat" className="text-sm font-medium hover:underline underline-offset-4">
            Taura neAI
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            Nezvedu
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/chat" className="hidden md:block">
            <Button>Tanga Kutaura</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src="/images/msai-logo.png" alt="MSAI Logo" fill className="object-cover" />
              </div>
              <span className="text-2xl font-bold">MSAI</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 px-4 pb-8 pt-4">
            <Link
              href="/"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Kumba
            </Link>
            <Link
              href="/chat"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Taura neAI
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Nezvedu
            </Link>
            <Link href="/chat" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Tanga Kutaura</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
