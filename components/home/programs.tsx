import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, TrendingUp, Star } from "lucide-react"
import ScrollAnimation from "@/components/ui/scroll-animation"

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with our comprehensive weight training programs.",
    image: "https://cdn.pixabay.com/photo/2017/04/26/09/44/sport-2262083_1280.jpg?height=300&width=400",
    duration: "45-60 min",
    level: "All Levels",
    intensity: "High",
    features: ["Free Weights", "Machines", "Personal Guidance"],
    popular: false,
  },
  {
    title: "HIIT Classes",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
    image: "https://cdn.pixabay.com/photo/2024/02/23/13/13/asian-8592037_1280.jpg?height=300&width=400",
    duration: "30-45 min",
    level: "Intermediate",
    intensity: "Very High",
    features: ["Group Classes", "Cardio Focus", "Fat Burning"],
    popular: true,
  },
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals and fitness level.",
    image: "https://cdn.pixabay.com/photo/2016/03/31/03/23/fitness-1291997_1280.jpg?height=300&width=400",
    duration: "60 min",
    level: "All Levels",
    intensity: "Customized",
    features: ["1-on-1 Coaching", "Custom Plans", "Progress Tracking"],
    popular: false,
  },
]

export default function Programs() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-12 lg:mb-20">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our Programs</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900">
            Fitness Programs for Every Goal
          </h3>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to build strength, lose weight, or improve overall fitness, we have the perfect
            program for you.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <ScrollAnimation
              key={index}
              animation="scale-in"
              delay={index * 200}
              className={`card-premium rounded-3xl overflow-hidden hover-lift-subtle group relative ${
                program.popular ? "ring-2 ring-primary-200 scale-105" : ""
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-accent-gradient text-white px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="h-3 w-3 lg:h-4 lg:w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={400}
                  height={300}
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="space-y-2 lg:space-y-3">
                  <h4 className="text-xl lg:text-2xl font-serif font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {program.title}
                  </h4>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{program.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 lg:gap-4 py-3 lg:py-4 border-t border-slate-100">
                  <div className="text-center">
                    <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-primary-600 mx-auto mb-1" />
                    <div className="text-xs lg:text-sm font-medium text-navy-900">{program.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-4 w-4 lg:h-5 lg:w-5 text-primary-600 mx-auto mb-1" />
                    <div className="text-xs lg:text-sm font-medium text-navy-900">{program.level}</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-4 w-4 lg:h-5 lg:w-5 text-primary-600 mx-auto mb-1" />
                    <div className="text-xs lg:text-sm font-medium text-navy-900">{program.intensity}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      <span className="text-xs lg:text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-accent-gradient hover:shadow-lg text-white rounded-full py-2 lg:py-3 group transition-all duration-300 text-sm lg:text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={600} className="text-center mt-12 lg:mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            View All Programs
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
