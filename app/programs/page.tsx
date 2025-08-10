import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users, TrendingUp, ArrowRight, Check } from "lucide-react"
const programs = [
  {
    title: "Strength Training",
    description: "Build muscle mass and increase overall strength with our comprehensive weight training programs.",
    image: "https://cdn.pixabay.com/photo/2017/04/26/09/44/sport-2262083_1280.jpg?height=400&width=600",
    duration: "45-60 min",
    level: "All Levels",
    intensity: "High",
    price: "₦25,000/month",
    features: [
      "Free weights and machines",
      "Progressive overload programs",
      "Form correction and guidance",
      "Strength assessment tracking",
      "Nutrition guidance included",
    ],
    benefits: ["Increased muscle mass", "Improved bone density", "Enhanced metabolism", "Better functional strength"],
  },
  {
    title: "HIIT Classes",
    description: "High-intensity interval training designed for maximum calorie burn and cardiovascular improvement.",
    image: "https://cdn.pixabay.com/photo/2024/02/23/13/13/asian-8592037_1280.jpg?height=300&width=400",
    duration: "30-45 min",
    level: "Intermediate+",
    intensity: "Very High",
    price: "₦20,000/month",
    features: [
      "Small group classes (max 12)",
      "Varied workout formats",
      "Heart rate monitoring",
      "Modification options",
      "Post-workout nutrition tips",
    ],
    benefits: ["Rapid fat loss", "Improved cardiovascular health", "Increased endurance", "Time-efficient workouts"],
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored specifically to your goals, fitness level, and preferences.",
    image: "https://cdn.pixabay.com/photo/2016/03/31/03/23/fitness-1291997_1280.jpg?height=300&width=400",
    duration: "60 min",
    level: "All Levels",
    intensity: "Customized",
    price: "₦15,000/session",
    features: [
      "Personalized workout plans",
      "Goal-specific programming",
      "Flexible scheduling",
      "Progress tracking",
      "Nutritional counseling",
    ],
    benefits: ["Faster results", "Proper form and technique", "Accountability and motivation", "Injury prevention"],
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Improve flexibility, balance, and mental well-being through various yoga styles and stretching routines.",
    image: "https://cdn.pixabay.com/photo/2017/07/31/11/30/people-2557460_1280.jpg?height=400&width=600",
    duration: "60-75 min",
    level: "All Levels",
    intensity: "Low-Medium",
    price: "₦15,000/month",
    features: [
      "Multiple yoga styles",
      "Meditation sessions",
      "Flexibility assessments",
      "Props provided",
      "Relaxation techniques",
    ],
    benefits: ["Improved flexibility", "Stress reduction", "Better posture", "Enhanced mind-body connection"],
  },
  {
    title: "Cardio Conditioning",
    description: "Improve cardiovascular health and endurance through varied cardio workouts and equipment.",
    image: "https://cdn.pixabay.com/photo/2024/02/01/12/18/man-8545861_1280.jpg?height=400&width=600",
    duration: "30-45 min",
    level: "All Levels",
    intensity: "Medium-High",
    price: "₦18,000/month",
    features: [
      "Treadmills, bikes, ellipticals",
      "Interval training programs",
      "Heart rate zone training",
      "Virtual training classes",
      "Progress tracking",
    ],
    benefits: ["Improved heart health", "Increased stamina", "Weight management", "Better sleep quality"],
  },
  {
    title: "Functional Fitness",
    description: "Train movements that help you perform daily activities more efficiently and safely.",
    image: "https://cdn.pixabay.com/photo/2016/02/04/23/02/gym-room-1180062_1280.jpg?height=400&width=600",
    duration: "45 min",
    level: "All Levels",
    intensity: "Medium",
    price: "₦22,000/month",
    features: [
      "Movement pattern training",
      "Balance and coordination",
      "Core strengthening",
      "Injury rehabilitation",
      "Age-appropriate modifications",
    ],
    benefits: ["Better daily function", "Injury prevention", "Improved balance", "Enhanced quality of life"],
  },
];


export default function ProgramsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Fitness Programs</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover the perfect program to match your fitness goals and lifestyle. From strength training to yoga, we
            have something for everyone.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-semibold">
                    {program.price}
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-bold text-warm-900">{program.title}</h3>
                    <p className="text-warm-600 leading-relaxed">{program.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-warm-100">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                      <div className="text-sm font-medium text-warm-900">{program.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                      <div className="text-sm font-medium text-warm-900">{program.level}</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                      <div className="text-sm font-medium text-warm-900">{program.intensity}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-warm-900">What's Included:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <Check className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-warm-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-warm-900">Benefits:</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-warm-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white rounded-full py-3 group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-warm-900 mb-6">Not Sure Which Program is Right for You?</h2>
          <p className="text-lg text-warm-600 mb-8">
            Our expert trainers are here to help you choose the perfect program based on your goals, fitness level, and
            preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
