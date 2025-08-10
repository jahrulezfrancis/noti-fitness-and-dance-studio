import Link from "next/link"
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern-subtle opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <Dumbbell className="h-8 w-8 text-primary-500 group-hover:text-primary-400 transition-colors" />
              <span className="font-serif text-xl font-bold group-hover:text-primary-400 transition-colors">
                Noti Fitness and Dance Studio
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Transform your fitness journey with our premium facilities, expert trainers, and personalized programs.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-navy-800 hover:bg-primary-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-navy-800 hover:bg-primary-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-navy-800 hover:bg-primary-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <div className="space-y-3">
              {["About", "Programs", "Membership", "Schedule", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-slate-300 hover:text-primary-400 transition-colors text-sm hover:translate-x-1 duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                 Opposite Plateau State Water Board, Jos, Plateau State 940100
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                  info@notifitness.com
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white">Stay Updated</h3>
            <p className="text-slate-300 text-sm">Subscribe to our newsletter for fitness tips and updates.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-navy-800/50 border-navy-700 text-white placeholder-slate-400 focus:border-primary-500 backdrop-blur-sm"
              />
              <Button className="w-full bg-accent-gradient hover:shadow-lg text-white rounded-full transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Noti Fitness and Dance Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
