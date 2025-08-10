import Image from "next/image"
import { Star, Quote, Award, TrendingUp, Heart } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "Noti Fitness and Dance Studio completely transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence in just 6 months!",
    achievement: "Lost 30 lbs in 6 months",
    program: "Personal Training + HIIT",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "As someone who works long hours, the 24/7 access is perfect for my schedule. The equipment is always clean and well-maintained. The community here is incredibly supportive and motivating.",
    achievement: "Gained 15 lbs muscle mass",
    program: "Strength Training",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "I love the variety of programs offered. From HIIT classes to personal training, there's something for everyone. The results speak for themselves - I've never felt stronger or more energetic!",
    achievement: "Improved overall fitness by 40%",
    program: "Mixed Programs",
  },
  {
    name: "David Thompson",
    role: "Business Owner",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "The personal training sessions are worth every penny. My trainer created a customized program that fit my busy schedule and specific goals. I've achieved results I never thought possible.",
    achievement: "Reduced body fat by 25%",
    program: "Personal Training",
  },
  {
    name: "Lisa Park",
    role: "Nurse",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "After years of struggling with consistency, Noti Fitness and Dance Studio changed everything. The supportive environment and expert guidance helped me develop healthy habits that stick.",
    achievement: "Consistent workout routine for 1+ year",
    program: "Group Classes",
  },
  {
    name: "James Wilson",
    role: "Retired",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "At 65, I thought my best fitness days were behind me. The trainers here proved me wrong! They adapted exercises for my needs and helped me regain strength and mobility I had lost.",
    achievement: "Improved mobility and strength",
    program: "Functional Fitness",
  },
]

const stats = [
  {
    icon: Award,
    number: "500+",
    label: "Success Stories",
    description: "Members who achieved their goals",
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Satisfaction Rate",
    description: "Members who would recommend us",
  },
  {
    icon: Heart,
    number: "85%",
    label: "Retention Rate",
    description: "Members who stay with us long-term",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Real transformations from real people. Discover how Noti Fitness and Dance Studio has helped our members achieve their
            fitness goals and transform their lives.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-warm-50 rounded-2xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-warm-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-warm-900 mb-2">{stat.label}</div>
                <div className="text-warm-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-900">What Our Members Say</h2>
            <p className="text-lg text-warm-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here are real stories from our amazing community of members who have
              transformed their lives at Noti Fitness and Dance Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200 group-hover:text-primary-300 transition-colors" />

                <div className="space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-warm-700 leading-relaxed italic text-lg">"{testimonial.text}"</p>

                  <div className="flex items-center space-x-4 pt-4 border-t border-warm-200">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-warm-900 text-lg">{testimonial.name}</div>
                      <div className="text-warm-600 mb-2">{testimonial.role}</div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-primary-600">{testimonial.achievement}</div>
                        <div className="text-sm text-warm-500">{testimonial.program}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl font-bold text-warm-900">Video Success Stories</h2>
            <p className="text-lg text-warm-600 max-w-3xl mx-auto">
              Watch our members share their transformation journeys in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Video testimonial ${video}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-warm-900/40 group-hover:bg-warm-900/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-warm-900">Sarah's 6-Month Transformation</h3>
                  <p className="text-warm-600 text-sm">Watch how Sarah lost 30 pounds and gained confidence</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-4xl font-bold text-warm-900">Transformation Gallery</h2>
            <p className="text-lg text-warm-600 max-w-3xl mx-auto">
              See the incredible physical transformations our members have achieved through dedication and our expert
              guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((transformation, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=150`}
                      alt="Before transformation"
                      width={150}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-warm-900/80 text-white px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=150`}
                      alt="After transformation"
                      width={150}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-warm-900">Member #{transformation}</h3>
                  <p className="text-sm text-warm-600">6 months • Lost 25 lbs • Gained muscle</p>
                  <p className="text-xs text-warm-500">Personal Training + HIIT Classes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of satisfied members who have transformed their lives at Noti Fitness and Dance Studio. Your journey
            starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
