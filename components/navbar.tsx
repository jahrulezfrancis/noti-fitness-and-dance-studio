"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/public/plain_logo.png"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Membership", href: "/membership" },
  { name: "Schedule", href: "/schedule" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine navbar styling based on scroll state and page
  const getNavbarClasses = () => {
    if (isScrolled) {
      return "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
    }
    if (isHomePage) {
      return "bg-transparent"
    }
    return "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
  }

  // Determine text color based on scroll state and page
  const getTextColor = (isActive = false) => {
    if (isScrolled || !isHomePage) {
      return isActive ? "text-primary-600" : "text-slate-700 hover:text-primary-600"
    }
    // On home page when not scrolled
    return isActive ? "text-white font-semibold" : "text-white/90 hover:text-white"
  }

  const getBrandColor = () => {
    if (isScrolled || !isHomePage) {
      return "text-navy-900 group-hover:text-primary-600"
    }
    return "text-white group-hover:text-primary-200"
  }

  const getIconColor = () => {
    if (isScrolled || !isHomePage) {
      return "text-primary-600 group-hover:text-primary-700"
    }
    return "text-primary-400 group-hover:text-primary-300"
  }

  const getMobileButtonColor = () => {
    if (isScrolled || !isHomePage) {
      return "text-slate-700 hover:text-primary-600 hover:bg-slate-100"
    }
    return "text-white/90 hover:text-white hover:bg-white/10"
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${getNavbarClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            {/* <div className="relative">
              <Dumbbell className={`h-8 w-8 transition-colors duration-300 ${getIconColor()}`} />
            </div> */}
            <Image src={Logo.src} alt="Noti Fitness Logo" width={150} height={40} className="hidden md:block" />
          
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 font-medium relative group ${getTextColor(isActive)}`}
                >
                  {item.name}
                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isActive
                        ? `w-full ${isScrolled || !isHomePage ? "bg-primary-600" : "bg-white"}`
                        : `w-0 group-hover:w-full ${isScrolled || !isHomePage ? "bg-primary-600" : "bg-white"}`
                    }`}
                  />
                </Link>
              )
            })}
            <Button
              className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled || !isHomePage
                  ? "bg-accent-gradient hover:shadow-lg text-white"
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              }`}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 p-2 rounded-lg ${getMobileButtonColor()}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden card-premium border-t border-slate-200 rounded-b-2xl shadow-lg animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-primary-600 bg-primary-50 font-semibold"
                        : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="px-3 py-2">
                <Button className="w-full bg-accent-gradient hover:shadow-lg text-white rounded-full transition-all duration-300">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
