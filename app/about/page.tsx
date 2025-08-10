import Image from "next/image"
import { Award, Target, Heart, Users, MapPin, Phone, CheckCircle, Star, Trophy, Clock } from "lucide-react"
import ScrollAnimation from "@/components/ui/scroll-animation"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from our equipment to our service, ensuring you receive the highest quality fitness experience.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our passion for fitness and wellness drives us to continuously innovate and help you achieve your personal best every single day.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in building a supportive, inclusive community that motivates, inspires, and celebrates every member's journey.",
  },
  {
    icon: Award,
    title: "Results",
    description:
      "We are committed to helping you achieve real, lasting results through proven methods, expert guidance, and unwavering support.",
  },
]

const trainers = [
  {
    name: "Abdul Rahman",
    role: "Founder & Head Trainer",
    image: "/placeholder.svg?height=400&width=300",
    bio: "With over 15 years of experience in fitness and nutrition, Abdul founded the center with a vision to create a premium fitness experience that transforms lives. His expertise spans strength training, nutrition coaching, and business leadership.",
    certifications: ["NASM-CPT", "Nutrition Specialist", "Strength & Conditioning", "Business Leadership"],
    specialties: ["Strength Training", "Nutrition Coaching", "Weight Management", "Athletic Performance"],
  },
  {
    name: "Sarah Mitchell",
    role: "Personal Training Director",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Sarah specializes in strength training and corrective exercise, having helped hundreds of clients achieve their fitness goals through personalized programs. She brings 12 years of experience and a passion for functional movement.",
    certifications: ["ACSM-CPT", "Corrective Exercise Specialist", "Olympic Lifting Coach", "TRX Certified"],
    specialties: ["Personal Training", "Corrective Exercise", "Olympic Lifting", "Functional Movement"],
  },
  {
    name: "Marcus Johnson",
    role: "HIIT & Cardio Specialist",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Marcus brings high energy and expertise to our group fitness classes, specializing in HIIT and cardiovascular training. His dynamic approach and motivational style have made him a member favorite.",
    certifications: ["HIIT Certified", "Group Fitness Instructor", "Athletic Performance", "Spin Certified"],
    specialties: ["HIIT Training", "Group Fitness", "Cardio Conditioning", "Athletic Performance"],
  },
  {
    name: "Emma Wilson",
    role: "Yoga & Wellness Director",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Emma leads our yoga and wellness programs with over 10 years of experience in various yoga styles and mindfulness practices. She focuses on the mind-body connection and holistic wellness.",
    certifications: ["RYT-500", "Meditation Teacher", "Prenatal Yoga", "Yin Yoga Specialist"],
    specialties: ["Hatha Yoga", "Vinyasa Flow", "Meditation", "Stress Management"],
  },
]

const milestones = [
  {
    year: "2014",
    title: "Foundation",
    description: "Noti Fitness and Dance Studio was founded with a vision to create a premium fitness experience.",
  },
  {
    year: "2016",
    title: "Expansion",
    description: "Added state-of-the-art equipment and expanded our training programs.",
  },
  {
    year: "2018",
    title: "Community Growth",
    description: "Reached 200+ members and introduced group fitness classes.",
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Launched virtual training programs and mobile app during the pandemic.",
  },
  {
    year: "2022",
    title: "Premium Upgrade",
    description: "Complete facility renovation with luxury amenities and 24/7 access.",
  },
  {
    year: "2024",
    title: "Excellence Recognition",
    description: "Awarded 'Best Fitness Center' and reached 500+ satisfied members.",
  },
]

const achievements = [
  {
    icon: Trophy,
    title: "Best Fitness Center 2024",
    description: "Awarded by the National Fitness Association",
  },
  {
    icon: Star,
    title: "5-Star Rating",
    description: "Consistently rated 5 stars by our members",
  },
  {
    icon: Users,
    title: "500+ Members",
    description: "Growing community of fitness enthusiasts",
  },
  {
    icon: Clock,
    title: "10 Years Excellence",
    description: "A decade of transforming lives through fitness",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-premium-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-subtle opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="h-4 w-4 text-gold-400" />
                <span className="text-white/90 text-sm font-medium">Our Story</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Noti Fitness and Dance Studio
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Founded on the belief that fitness should be accessible, enjoyable, and transformative for everyone.
                Discover our journey, values, and the passionate team dedicated to your success.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollAnimation animation="slide-right">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2">
                    <Target className="h-4 w-4 text-primary-600" />
                    <span className="text-primary-600 text-sm font-medium">Our Mission</span>
                  </div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">
                    Empowering Your Fitness Journey
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Our mission is to provide a world-class fitness experience that empowers individuals to achieve
                    their health and wellness goals in a supportive, motivating environment. We believe everyone
                    deserves access to premium facilities, expert guidance, and a community that celebrates their
                    success.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-primary-50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                    <div className="text-sm text-slate-600">Lives Transformed</div>
                  </div>
                  <div className="text-center p-6 bg-gold-50 rounded-xl">
                    <div className="text-3xl font-bold text-gold-600 mb-2">95%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-gold-100 rounded-full px-4 py-2">
                    <Heart className="h-4 w-4 text-gold-600" />
                    <span className="text-gold-600 text-sm font-medium">Our Vision</span>
                  </div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">
                    Building a Healthier Community
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    We envision a community where fitness is not just a routine, but a lifestyle that brings joy,
                    confidence, and lasting health benefits. Our goal is to be the premier fitness destination that sets
                    the standard for excellence in health and wellness services.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Premium fitness experience for all",
                    "Innovative training methodologies",
                    "Sustainable health transformations",
                    "Community-centered approach",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollAnimation animation="slide-right">
              <div className="space-y-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">
                  The Noti Fitness and Dance Studio Journey
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    What started as a dream to create the perfect fitness environment has grown into a thriving
                    community of fitness enthusiasts. Noti Fitness and Dance Studio was founded in 2014 with a simple mission: to
                    provide world-class fitness facilities and expert guidance in a welcoming, supportive environment.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Our founder, Abdul Rahman, recognized that many people were intimidated by traditional gyms or
                    frustrated by the lack of personalized attention. He envisioned a space where everyone—from
                    beginners to advanced athletes—could feel comfortable, supported, and motivated to achieve their
                    goals.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Today, we're proud to be the premier fitness destination in our community, with over 500 satisfied
                    members and a team of certified trainers who are passionate about helping you succeed. Our journey
                    continues as we constantly evolve to meet the changing needs of our members.
                  </p>
                </div>
                <Button className="bg-accent-gradient hover:shadow-lg text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Join Our Community
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={300}>
              <div className="relative">
                <Image
                  src="https://cdn.pixabay.com/photo/2021/02/03/11/32/gym-5977600_1280.jpg?height=600&width=500"
                  alt="Noti Fitness and Dance Studio founder"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl hover-lift-subtle w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float-gentle"></div>
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl animate-float-gentle"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">Our Journey Through Time</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to becoming the premier fitness destination, here's how we've grown over the years.
            </p>
          </ScrollAnimation>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollAnimation
                  key={index}
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                  delay={index * 100}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="card-premium p-6 lg:p-8 rounded-2xl hover-lift-subtle">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                          {milestone.year.slice(-2)}
                        </div>
                        <div>
                          <div className="text-sm text-primary-600 font-semibold">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-navy-900">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>

                  <div className="flex-1"></div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative">
        <div className="absolute inset-0 bg-pattern-subtle opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental values guide everything we do and shape the experience we create for our members.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-in"
                delay={index * 150}
                className="card-premium p-8 rounded-2xl hover-lift-subtle border-elegant group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">Our Achievements</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl hover-lift-subtle"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-slate-600">{achievement.description}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">Meet Our Expert Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our certified trainers and wellness experts are passionate professionals dedicated to helping you achieve
              your fitness goals safely and effectively.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {trainers.map((trainer, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-in"
                delay={index * 200}
                className="card-premium rounded-3xl overflow-hidden hover-lift-subtle border-elegant group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      width={300}
                      height={400}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 lg:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-navy-900 group-hover:text-primary-600 transition-colors">
                        {trainer.name}
                      </h3>
                      <p className="text-primary-600 font-medium">{trainer.role}</p>
                    </div>

                    <p className="text-slate-700 leading-relaxed text-sm lg:text-base">{trainer.bio}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-navy-900 mb-2">Certifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {trainer.certifications.map((cert, certIndex) => (
                            <span
                              key={certIndex}
                              className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full border border-primary-200"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-navy-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {trainer.specialties.map((specialty, specIndex) => (
                            <span
                              key={specIndex}
                              className="px-3 py-1 bg-gold-100 text-gold-700 text-xs rounded-full border border-gold-200"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">Visit Our Facility</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Come experience our premium facilities and meet our team. We'd love to show you around and help you start
              your fitness journey.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="slide-right" delay={100}>
              <div className="text-center p-8 card-premium rounded-2xl hover-lift-subtle">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Location</h3>
                <p className="text-slate-600 leading-relaxed">
                  123 Fitness Street
                  <br />
                  Downtown District
                  <br />
                  City, State 12345
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center p-8 card-premium rounded-2xl hover-lift-subtle">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Phone</h3>
                <p className="text-slate-600 leading-relaxed">
                  (555) 123-4567
                  <br />
                  Available 24/7
                  <br />
                  for emergencies
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={300}>
              <div className="text-center p-8 card-premium rounded-2xl hover-lift-subtle">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Hours</h3>
                <p className="text-slate-600 leading-relaxed">
                  Mon-Fri: 5AM - 11PM
                  <br />
                  Sat-Sun: 6AM - 10PM
                  <br />
                  <span className="text-primary-600 font-medium">24/7 Member Access</span>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="scale-in">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">Ready to Join Our Community?</h2>
              <p className="text-lg lg:text-xl text-primary-100">
                Experience the Noti Fitness and Dance Studio difference. Schedule a tour today and see why we're the premier choice
                for fitness enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                >
                  Schedule a Tour
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
