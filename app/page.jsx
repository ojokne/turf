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
  Menu,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm py-3">
        <div className="container max-w-7xl mx-auto flex h-8 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-primary text-xl">TurfBook</span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/turfs"
                className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
              >
                Turfs
              </Link>
             
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-primary"
            >
              <Link href="/login">Log in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/turfs"
                    className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    Turfs
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <div className="pt-4 space-y-4">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full text-gray-900 hover:text-primary"
                    >
                      <Link href="/login">Log in</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-primary text-white hover:bg-primary/90"
                    >
                      <Link href="/signup">Sign up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

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

      <footer className="bg-gray-900 text-white py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About TurfBook</h3>
              <p className="text-gray-400">
                We connect football enthusiasts with the best turfs in town.
                Book, play, and enjoy!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/turfs"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Find Turfs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register-turf"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Register Your Turf
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest offers and news
              </p>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  type="submit"
                  className="bg-primary text-white rounded-r-md hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </form>
            </div> */}
          </div>
          <div className="mt-12 pt-12 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TurfBook. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <TurfDialog
        turf={selectedTurf}
        open={selectedTurf !== null}
        onOpenChange={(open) => setSelectedTurf(open ? selectedTurf : null)}
      />
    </div>
  );
}
