import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Ready to start your fitness journey? Have questions about our programs? We're here to help you every step of
            the way.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl font-bold text-warm-900">Send Us a Message</h2>
                  <p className="text-warm-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-warm-700">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" className="border-warm-300 focus:border-primary-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-warm-700">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" className="border-warm-300 focus:border-primary-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-warm-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-warm-300 focus:border-primary-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-warm-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="border-warm-300 focus:border-primary-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-warm-700">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border border-warm-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="group-classes">Group Classes</option>
                      <option value="facilities">Facilities Tour</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-warm-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your fitness goals and how we can help you achieve them..."
                      rows={5}
                      className="border-warm-300 focus:border-primary-500"
                    />
                  </div>

                  <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-full text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-warm-900">Contact Information</h2>
                <p className="text-warm-600 leading-relaxed">
                  Get in touch with us through any of the following methods. We're here to answer your questions and
                  help you start your fitness journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1">Address</h3>
                    <p className="text-warm-600">
                      123 Fitness Street
                      <br />
                      Downtown District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1">Phone</h3>
                    <p className="text-warm-600">(555) 123-4567</p>
                    <p className="text-sm text-warm-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1">Email</h3>
                    <p className="text-warm-600">info@notifitness.com</p>
                    <p className="text-sm text-warm-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900 mb-1">Hours</h3>
                    <div className="text-warm-600 space-y-1">
                      <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
                      <p className="text-sm text-primary-600 font-medium">24/7 Access for Members</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-warm-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-colors">
                    <Facebook className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-colors">
                    <Instagram className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-colors">
                    <Twitter className="h-5 w-5 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-4xl font-bold text-warm-900">Find Us</h2>
            <p className="text-lg text-warm-600">
              Located in the heart of downtown, easily accessible by car or public transport.
            </p>
          </div>

          <div className="bg-warm-100 rounded-3xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-br from-warm-200 to-warm-300 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-warm-600 mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-warm-900">Interactive Map</h3>
                  <p className="text-warm-600">123 Fitness Street, Downtown District</p>
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-full">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-4xl font-bold text-warm-900">Frequently Asked Questions</h2>
            <p className="text-lg text-warm-600">Quick answers to common questions about Noti Fitness and Dance Studio.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">Do you offer free trials?</h3>
              <p className="text-warm-600">
                Yes! We offer a complimentary 3-day trial pass for new members to experience our facilities and
                programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">What should I bring for my first visit?</h3>
              <p className="text-warm-600">
                Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide all necessary
                equipment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">Do you have parking available?</h3>
              <p className="text-warm-600">
                Yes, we offer free parking for all members and visitors in our dedicated parking lot adjacent to the
                facility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-warm-900 mb-2">Can I schedule a facility tour?</h3>
              <p className="text-warm-600">
                Contact us to schedule a complimentary tour with one of our fitness consultants who can answer all your
                questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
