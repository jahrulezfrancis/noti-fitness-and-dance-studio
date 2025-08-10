import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Zap } from "lucide-react"
import ScrollAnimation from "@/components/ui/scroll-animation"

const plans = [
  {
    name: "Basic",
    icon: Zap,
    price: 25000,
    period: "month",
    description: "Perfect for getting started with your fitness journey",
    features: [
      "Access to gym equipment",
      "Locker room facilities",
      "Basic fitness assessment",
      "Mobile app access",
      "Community support",
    ],
    popular: false,
    color: "warm",
  },
  {
    name: "Premium",
    icon: Star,
    price: 45000,
    period: "month",
    description: "Our most popular plan with comprehensive features",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Personal training session (1/month)",
      "Nutrition consultation",
      "Priority booking",
      "Guest passes (2/month)",
      "Towel service",
    ],
    popular: true,
    color: "primary",
  },
  {
    name: "Elite",
    icon: Crown,
    price: 75000,
    period: "month",
    description: "Premium experience with exclusive benefits",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Massage therapy (2/month)",
      "VIP locker room access",
      "Meal planning service",
      "Recovery suite access",
      "Unlimited guest passes",
      "Concierge service",
    ],
    popular: false,
    color: "gold",
  },
]

const benefits = [
  "No joining fees or hidden costs",
  "30-day money-back guarantee",
  "Freeze membership option",
  "Cancel anytime with 30 days notice",
  "24/7 gym access",
  "Free parking",
  "Member events and workshops",
]

export default function MembershipPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-premium-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-subtle opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Crown className="h-4 w-4 text-gold-400" />
                <span className="text-white/90 text-sm font-medium">Membership Plans</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Choose Your Plan
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect membership plan that fits your lifestyle and fitness goals. All plans include access
                to our premium facilities.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-in"
                delay={index * 200}
                className={`relative card-premium rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? "ring-4 ring-primary-500 scale-105" : "hover:scale-105"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-6 lg:p-8 ${plan.popular ? "pt-12 lg:pt-16" : ""}`}>
                  <div className="text-center space-y-4 mb-6 lg:mb-8">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 mx-auto rounded-full flex items-center justify-center ${
                        plan.color === "primary"
                          ? "bg-primary-100"
                          : plan.color === "gold"
                            ? "bg-gold-100"
                            : "bg-slate-100"
                      }`}
                    >
                      <plan.icon
                        className={`h-7 w-7 lg:h-8 lg:w-8 ${
                          plan.color === "primary"
                            ? "text-primary-600"
                            : plan.color === "gold"
                              ? "text-gold-600"
                              : "text-slate-600"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-navy-900">{plan.name}</h3>
                    <p className="text-sm lg:text-base text-slate-600">{plan.description}</p>
                    <div className="space-y-1">
                      <div className="text-3xl lg:text-4xl font-bold text-navy-900">
                        ₦{plan.price.toLocaleString()}
                        <span className="text-base lg:text-lg font-normal text-slate-600">/{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check
                          className={`h-4 w-4 lg:h-5 lg:w-5 mt-0.5 flex-shrink-0 ${
                            plan.color === "primary"
                              ? "text-primary-600"
                              : plan.color === "gold"
                                ? "text-gold-600"
                                : "text-slate-600"
                          }`}
                        />
                        <span className="text-sm lg:text-base text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary-600 hover:bg-primary-700 text-white hover:scale-105"
                        : "bg-slate-100 hover:bg-slate-200 text-navy-900 hover:scale-105"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-8 lg:mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">Membership Benefits</h2>
            <p className="text-base lg:text-lg text-slate-600">
              Every membership comes with these amazing benefits at no extra cost.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimation
                key={index}
                animation="slide-right"
                delay={index * 100}
                className="flex items-center space-x-3 p-4 lg:p-6 bg-slate-50 rounded-xl hover-lift-subtle"
              >
                <Check className="h-4 w-4 lg:h-5 lg:w-5 text-primary-600 flex-shrink-0" />
                <span className="text-sm lg:text-base text-slate-700">{benefit}</span>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center space-y-4 mb-8 lg:mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900">Frequently Asked Questions</h2>
          </ScrollAnimation>

          <div className="space-y-4 lg:space-y-6">
            {[
              {
                question: "Can I freeze my membership?",
                answer:
                  "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.",
              },
              {
                question: "Is there a contract?",
                answer:
                  "No long-term contracts required. You can cancel your membership anytime with 30 days written notice.",
              },
              {
                question: "Can I bring guests?",
                answer:
                  "Premium and Elite members receive guest passes each month. Basic members can purchase day passes for guests.",
              },
              {
                question: "What if I'm not satisfied?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your membership fee.",
              },
            ].map((faq, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="card-premium p-4 lg:p-6 rounded-xl shadow-sm hover-lift-subtle"
              >
                <h3 className="text-base lg:text-lg font-semibold text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-sm lg:text-base text-slate-600">{faq.answer}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="scale-in">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="text-lg lg:text-xl text-primary-100 mb-8">
                Join Noti Fitness and Dance Studio today and take the first step towards a healthier, stronger you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-primary-50 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                >
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Schedule Tour
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
