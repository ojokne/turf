"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { StarRating } from "@/components/star-rating";
import { TurfDialog } from "@/components/turf-dialog";

export default function LandingPage() {
  const [selectedTurf, setSelectedTurf] = useState(null);

  const turfs = [
    {
      id: 1,
      name: "Green Valley Turf",
      price: 50,
      description: "A lush, well-maintained turf with excellent drainage.",
      facilities: ["Floodlights", "Changing Rooms", "Parking"],
      rating: 4.5,
      totalReviews: 128,
      location: {
        address: "123 Green Valley Road",
        city: "Kampala",
        coordinates: { lat: 51.5074, lng: -0.1278 },
      },
    },
    {
      id: 2,
      name: "City Central Field",
      price: 55,
      description:
        "Located in the heart of the city, perfect for after-work games.",
      facilities: ["Floodlights", "Cafe", "Public Transport"],
      rating: 4.5,
      totalReviews: 128,
      location: {
        address: "123 Central Road",
        city: "Kampala",
        coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
      },
    },
    {
      id: 3,
      name: "Riverside Pitch",
      price: 45,
      description: "A scenic turf by the river with a great atmosphere.",
      facilities: ["Spectator Seating", "Barbecue Area", "Parking"],
      rating: 4.5,
      totalReviews: 128,
      location: {
        address: "123 Riverside Road",
        city: "Kampala",
        coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
      },
    },
    {
      id: 4,
      name: "Sunset Arena",
      price: 60,
      description: "Premium turf with state-of-the-art facilities.",
      facilities: ["Floodlights", "Gym", "Cafe", "Changing Rooms"],
      rating: 4.5,
      totalReviews: 128,
      location: {
        address: "Arena Street",
        city: "Kampala",
        coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
      },
    },
    {
      id: 5,
      name: "Mountain View Ground",
      price: 40,
      description:
        "A budget-friendly option with a beautiful mountain backdrop.",
      facilities: ["Basic Changing Rooms", "Parking"],
      rating: 4.5,
      totalReviews: 128,
      location: {
        address: "123 Mountain View Road",
        city: "Kampala",
        coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
      },
    },
    {
      id: 6,
      name: "Tech Park Turf",
      price: 65,
      description: "High-tech turf with advanced booking system and analytics.",
      facilities: ["Smart Lighting", "Performance Tracking", "Changing Rooms"],
      rating: 4.5,
      totalReviews: 128,
      location: {
        address: "Green Valley Road",
        city: "Kampala",
        coordinates: { lat: 51.5074, lng: -0.1278 }, // Optional for map integration
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
    

      <main className="flex-1">
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
          {/* <Image
            src="/turf-3.jpeg"
            alt="Football field"
            fill
            className="object-cover object-center opacity-20 z-0"
          /> */}
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="px-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Book Your Perfect <span className="text-primary">Turf</span>
              </h1>
              <p className="px-3 mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Find and book the best football turfs in your area. Play on
                quality pitches and enjoy your game with ease.
              </p>
              <div className="mx-5 mt-8 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
                >
                  <Link href="/book-turf">Book Now</Link>
                </Button>
                
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Why Footballers Love Us
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Search,
                  title: "Easy Booking",
                  description: "Book your favorite turf with just a few clicks",
                },
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  description:
                    "Choose from a wide range of available time slots",
                },
                {
                  icon: MapPin,
                  title: "Convenient Locations",
                  description:
                    "Find turfs near you with our location-based search",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "Join a thriving community of football enthusiasts",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg transition-all hover:shadow-md"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/10">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Turf Owners, Join Our Network
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Maximize your turf's potential and boost your earnings by
                  joining our platform. Reach more players and manage your
                  bookings effortlessly.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Link href="/register-turf">Register Your Turf</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <Image
                    key={index}
                    src={`/turf-2.jpeg`}
                    alt={`Turf image ${index}`}
                    width={250}
                    height={250}
                    className="rounded-lg object-cover w-full h-40"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured turfs section */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Turfs
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {turfs.map((turf) => (
                <div
                  key={turf.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                >
                  <Image
                    src={`/turf-2.jpeg`}
                    alt={`Turf ${turf.id}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {turf.name}
                      </h3>
                      <StarRating
                        rating={turf.rating}
                        totalReviews={turf.totalReviews}
                      />
                    </div>
                    {/* Add location display */}
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {turf.location.address}, {turf.location.city}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{turf.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">
                        ${turf.price}/hour
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedTurf(turf)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/book-turf">View All Turfs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* testimonial section */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Users Say
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Doe",
                  role: "Amateur Player",
                  content:
                    "TurfBook made it incredibly easy to find and book great football turfs. Highly recommended!",
                },
                {
                  name: "Jane Smith",
                  role: "Turf Owner",
                  content:
                    "Since joining TurfBook, our bookings have increased significantly. The platform is a game-changer.",
                },
                {
                  name: "Mike Johnson",
                  role: "Team Captain",
                  content:
                    "We use TurfBook for all our team practices. It's reliable, convenient, and has a great selection of turfs.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* how it works section */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Search,
                  title: "Find a Turf",
                  description: "Search for available turfs in your area",
                },
                {
                  icon: Calendar,
                  title: "Choose a Time",
                  description: "Select your preferred date and time slot",
                },
                {
                  icon: DollarSign,
                  title: "Make Payment",
                  description: "Securely pay for your booking online",
                },
                {
                  icon: CheckCircle,
                  title: "Play & Enjoy",
                  description: "Arrive at the turf and enjoy your game",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-24 bg-secondary/10">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              {[
                {
                  question: "How do I book a turf?",
                  answer:
                    "You can easily book a turf by searching for available slots, selecting your preferred time, and making a secure online payment.",
                },
                {
                  question: "Can I cancel my booking?",
                  answer:
                    "Yes, you can cancel your booking up to 24 hours before the scheduled time for a full refund.",
                },
                {
                  question: "Are there any additional fees?",
                  answer:
                    "All fees are included in the displayed price. There are no hidden charges.",
                },
                {
                  question: "How do I become a turf owner on the platform?",
                  answer:
                    "To register your turf, click on the 'Register Your Turf' button and follow the simple steps to list your venue.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Book Your Perfect Turf?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of happy players and start booking today!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>

      

      <TurfDialog
        turf={selectedTurf}
        open={selectedTurf !== null}
        onOpenChange={(open) => setSelectedTurf(open ? selectedTurf : null)}
      />
    </div>
  );
}
