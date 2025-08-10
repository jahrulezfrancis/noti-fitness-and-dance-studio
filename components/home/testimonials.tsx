import Image from "next/image"
import { Star, Quote } from "lucide-react"
import ScrollAnimation from "../ui/scroll-animation"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Noti Fitness and Dance Studio transformed my fitness journey completely. The trainers are incredibly knowledgeable and the facilities are top-notch. I've never felt stronger or more confident!",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The 24/7 access is perfect for my schedule. The equipment is always clean and well-maintained. The community here is so supportive and motivating.",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I love the variety of programs offered. From HIIT classes to personal training, there's something for everyone. The results speak for themselves!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-slate-50 relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 lg:w-32 lg:h-32 bg-primary-400/5 rounded-full blur-2xl animate-float-gentle"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 lg:w-40 lg:h-40 bg-navy-400/5 rounded-full blur-2xl animate-float-gentle"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-12 lg:mb-20">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Testimonials</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900">What Our Members Say</h3>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our amazing community of members who have transformed their
            lives.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={index * 200}
              className="card-premium p-6 lg:p-8 rounded-3xl hover-lift-subtle border-elegant group relative"
            >
              <Quote className="absolute top-4 lg:top-6 right-4 lg:right-6 h-6 w-6 lg:h-8 lg:w-8 text-primary-200 group-hover:text-primary-300 transition-colors" />

              <div className="space-y-4 lg:space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 text-gold-500 fill-current" />
                  ))}
                </div>

                <p className="text-sm lg:text-base text-slate-700 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="flex items-center space-x-3 lg:space-x-4 pt-3 lg:pt-4 border-t border-slate-100">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 lg:w-15 lg:h-15 rounded-full object-cover ring-2 ring-primary-100"
                  />
                  <div>
                    <div className="text-sm lg:text-base font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-xs lg:text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
