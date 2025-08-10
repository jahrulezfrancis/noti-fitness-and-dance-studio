import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Award } from "lucide-react"
import ScrollAnimation from "@/components/ui/scroll-animation"
import PricingTable from "./pricing-table"

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-premium-gradient relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-subtle opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation animation="scale-in" className="text-center space-y-6 lg:space-y-8">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 border border-white/20">
              <Award className="h-3 w-3 lg:h-4 lg:w-4 text-gold-400" />
              <span className="text-white/90 text-xs lg:text-sm font-medium">Award-Winning Fitness Center</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <span className="text-gradient-premium block">Your Life?</span>
            </h2>
            <p className="text-base lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join Noti Fitness and Dance Studio today and start your journey towards a stronger, healthier, and more confident
              you. Your transformation begins with a single step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <ScrollAnimation animation="slide-right" delay={200}>
              <Button
                size="lg"
                className="bg-white text-navy-900 hover:bg-slate-50 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 group shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left" delay={400}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 group backdrop-blur-sm bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                Call Now
              </Button>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-up" delay={600} className="mt-8">
            <PricingTable />
          </ScrollAnimation>
          
        </ScrollAnimation>
      </div>
    </section>
  )
}
