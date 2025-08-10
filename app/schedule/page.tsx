"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Users, MapPin, Filter } from "lucide-react"

const scheduleData = [
  {
    id: 1,
    name: "Morning HIIT",
    trainer: "Marcus Johnson",
    time: "6:00 AM - 6:45 AM",
    duration: 45,
    capacity: 12,
    booked: 8,
    type: "HIIT",
    level: "Intermediate",
    room: "Studio A",
  },
  {
    id: 2,
    name: "Strength Training",
    trainer: "Sarah Mitchell",
    time: "7:00 AM - 8:00 AM",
    duration: 60,
    capacity: 8,
    booked: 6,
    type: "Strength",
    level: "All Levels",
    room: "Weight Room",
  },
  {
    id: 3,
    name: "Yoga Flow",
    trainer: "Emma Wilson",
    time: "8:30 AM - 9:30 AM",
    duration: 60,
    capacity: 15,
    booked: 12,
    type: "Yoga",
    level: "Beginner",
    room: "Studio B",
  },
  {
    id: 4,
    name: "Cardio Blast",
    trainer: "Marcus Johnson",
    time: "12:00 PM - 12:30 PM",
    duration: 30,
    capacity: 10,
    booked: 7,
    type: "Cardio",
    level: "All Levels",
    room: "Studio A",
  },
  {
    id: 5,
    name: "Personal Training",
    trainer: "Abdul Rahman",
    time: "2:00 PM - 3:00 PM",
    duration: 60,
    capacity: 1,
    booked: 1,
    type: "Personal",
    level: "All Levels",
    room: "Private Room",
  },
  {
    id: 6,
    name: "Evening HIIT",
    trainer: "Sarah Mitchell",
    time: "6:00 PM - 6:45 PM",
    duration: 45,
    capacity: 12,
    booked: 10,
    type: "HIIT",
    level: "Advanced",
    room: "Studio A",
  },
  {
    id: 7,
    name: "Relaxing Yoga",
    trainer: "Emma Wilson",
    time: "7:30 PM - 8:30 PM",
    duration: 60,
    capacity: 15,
    booked: 9,
    type: "Yoga",
    level: "All Levels",
    room: "Studio B",
  },
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const classTypes = ["All", "HIIT", "Strength", "Yoga", "Cardio", "Personal"]

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [selectedType, setSelectedType] = useState("All")

  const filteredClasses = scheduleData.filter((classItem) => selectedType === "All" || classItem.type === selectedType)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Class Schedule</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Find the perfect class that fits your schedule. Book your spot and join our energetic fitness community.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-warm-600" />
              <span className="font-semibold text-warm-900">Filter Classes</span>
            </div>

            {/* Day Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-warm-700">Select Day:</label>
              <div className="flex flex-wrap gap-2">
                {days.map((day) => (
                  <Button
                    key={day}
                    variant={selectedDay === day ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDay(day)}
                    className={
                      selectedDay === day
                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                        : "border-warm-300 text-warm-700 hover:bg-warm-100"
                    }
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-warm-700">Class Type:</label>
              <div className="flex flex-wrap gap-2">
                {classTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={
                      selectedType === type
                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                        : "border-warm-300 text-warm-700 hover:bg-warm-100"
                    }
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-serif font-bold text-warm-900">
              {selectedDay} Classes
              {selectedType !== "All" && ` - ${selectedType}`}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-warm-900">{classItem.name}</h3>
                        <p className="text-primary-600 font-medium">{classItem.trainer}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          classItem.type === "HIIT"
                            ? "bg-accent-100 text-accent-700"
                            : classItem.type === "Strength"
                              ? "bg-primary-100 text-primary-700"
                              : classItem.type === "Yoga"
                                ? "bg-green-100 text-green-700"
                                : classItem.type === "Cardio"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gold-100 text-gold-700"
                        }`}
                      >
                        {classItem.type}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-warm-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{classItem.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-warm-600">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">
                          {classItem.booked}/{classItem.capacity} spots filled
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-warm-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{classItem.room}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-warm-100">
                      <span className="text-sm text-warm-600">{classItem.level}</span>
                      <Button
                        size="sm"
                        className={`rounded-full ${
                          classItem.booked >= classItem.capacity
                            ? "bg-warm-300 text-warm-600 cursor-not-allowed"
                            : "bg-primary-600 hover:bg-primary-700 text-white"
                        }`}
                        disabled={classItem.booked >= classItem.capacity}
                      >
                        {classItem.booked >= classItem.capacity ? "Full" : "Book Now"}
                      </Button>
                    </div>

                    {/* Progress bar for capacity */}
                    <div className="w-full bg-warm-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          (classItem.booked / classItem.capacity) > 0.8
                            ? "bg-accent-500"
                            : classItem.booked / classItem.capacity > 0.6
                              ? "bg-gold-500"
                              : "bg-primary-500"
                        }`}
                        style={{ width: `${(classItem.booked / classItem.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Schedule Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-warm-900 mb-6">Weekly Schedule Overview</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-warm-200">
                    <th className="text-left py-3 px-4 font-semibold text-warm-900">Time</th>
                    {days.map((day) => (
                      <th key={day} className="text-left py-3 px-4 font-semibold text-warm-900">
                        {day.slice(0, 3)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-100">
                    <td className="py-3 px-4 font-medium text-warm-700">6:00 AM</td>
                    <td className="py-3 px-4 text-warm-600">Morning HIIT</td>
                    <td className="py-3 px-4 text-warm-600">Strength</td>
                    <td className="py-3 px-4 text-warm-600">Morning HIIT</td>
                    <td className="py-3 px-4 text-warm-600">Yoga Flow</td>
                    <td className="py-3 px-4 text-warm-600">Strength</td>
                    <td className="py-3 px-4 text-warm-600">HIIT Bootcamp</td>
                    <td className="py-3 px-4 text-warm-600">-</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-3 px-4 font-medium text-warm-700">12:00 PM</td>
                    <td className="py-3 px-4 text-warm-600">Cardio Blast</td>
                    <td className="py-3 px-4 text-warm-600">Yoga</td>
                    <td className="py-3 px-4 text-warm-600">Cardio Blast</td>
                    <td className="py-3 px-4 text-warm-600">Strength</td>
                    <td className="py-3 px-4 text-warm-600">Cardio Blast</td>
                    <td className="py-3 px-4 text-warm-600">Yoga</td>
                    <td className="py-3 px-4 text-warm-600">Open Gym</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="py-3 px-4 font-medium text-warm-700">6:00 PM</td>
                    <td className="py-3 px-4 text-warm-600">Evening HIIT</td>
                    <td className="py-3 px-4 text-warm-600">Strength</td>
                    <td className="py-3 px-4 text-warm-600">Evening HIIT</td>
                    <td className="py-3 px-4 text-warm-600">Yoga</td>
                    <td className="py-3 px-4 text-warm-600">Evening HIIT</td>
                    <td className="py-3 px-4 text-warm-600">Mixed Training</td>
                    <td className="py-3 px-4 text-warm-600">Relaxing Yoga</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-warm-900 mb-6">How to Book Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-warm-900">Choose Your Class</h3>
              <p className="text-warm-600">
                Browse our schedule and find the perfect class for your fitness level and goals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-warm-900">Book Your Spot</h3>
              <p className="text-warm-600">Reserve your spot online or through our mobile app. Classes fill up fast!</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-warm-900">Show Up & Train</h3>
              <p className="text-warm-600">
                Arrive 10 minutes early, bring a towel and water bottle, and get ready to sweat!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
