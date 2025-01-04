import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
// import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Workflow", href: "/workflow" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
];

export const testimonials = [
  {
    user: "Elena Doe",
    company: "Automotive Collector and Blogger",
    image: user1,
    text: "VinReview changed everything for me! As a car enthusiast, I’ve always struggled to trust the history of vehicles. Now, with VinReview’s detailed reports and real-time updates, I feel confident buying every car I own. It's the magic of transparency!",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Dylan Johnson",
    company: "Used Car Dealer",
    image: user3,
    text: "I've tried every VIN report service out there, but nothing compares to VinReview. Their market value insights are a game-changer! I now make smarter, more profitable buying decisions, and I'm never left in the dark about a car's history.",
  },
  {
    user: "Jordan Brown",
    company: "Car Rental & Buyer",
    image: user4,
    text: "VinReview is a lifesaver! Their comprehensive reports gave me the peace of mind I needed before purchasing my dream car. From accident history to real-time recalls, I now have the power to make fully informed choices. It's like having a magic wand for vehicle research!",
  },
  {
    user: "Carla Wilson",
    company: "AutoMax Rentals",
    image: user5,
    text: "As a fleet manager, VinReview has revolutionized how I track and manage our vehicles. The seamless integration into our systems saved us hours each week, and the real-time updates keep us ahead of any potential issues. VinReview is a true game-changer!.",
  },
  {
    user: "Emily Davis",
    company: "Auto Sales Executive",
    image: user6,
    text: "VinReview is the gold standard in vehicle history reports. Their tailored local market insights allowed me to sell cars quicker and at higher prices. I’m amazed by how they can predict market trends before they even happen!.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Comprehensive Vehicle History",
    description:
      "Get detailed reports on accidents, title history, and ownership records to make informed decisions.",
  },
  {
    icon: <Fingerprint />,
    text: "Odometer Verification",
    description:
      "Ensure the accuracy of the vehicle’s mileage to avoid odometer fraud.",
  },
  {
    icon: <ShieldHalf />,
    text: "Accident and Damage Records",
    description:
      "The Accident and Damage Records feature reveals any past accidents, repair history, and damage types, including salvage or rebuilt titles. It helps assess the vehicle's safety and reliability before purchase.",
  },
  {
    icon: <BatteryCharging />,
    text: "Title and Registration Status",
    description:
      "The `Title and Registration Status` feature verifies if the vehicle has a clean title or if it’s salvaged, rebuilt, or marked as junk.",
  },
  {
    icon: <PlugZap />,
    text: "Recall Information",
    description:
      "The `Recall Information` feature identifies any manufacturer-issued safety recalls for the vehicle.",
  },
  {
    icon: <GlobeLock />,
    text: "Market Value Estimation",
    description:
      "The feature offers an estimated value based on the vehicle’s condition, make, model, and specifications.",
  },
];

export const checklistItems = [
  {
    title: "Real-Time Updates",
    description:
      "Unlike many competitors, we provide real-time updates, ensuring that customers always have the most current information about a vehicle, including any new recalls or changes in its status.",
  },
  {
    title: "Innovative Market Insights",
    description:
      "Our advanced algorithm dynamically generates market value estimates based on real-time trends, offering more accurate and up-to-date pricing predictions compared to static reports from other providers.",
  },
  {
    title: "Tailored to Local Markets",
    description:
      "We cater to specific regions, providing insights and reports that are relevant to different countries and local regulations, making our service more applicable and useful for users around the world.",
  },
  {
    title: "Seamless Integration for Businesses",
    description:
      "For dealerships and fleet managers, we offer seamless integration to generate bulk VIN reports quickly and efficiently, streamlining operations and saving valuable time for businesses.",
  },
];

export const pricingOptions = [
  {
    title: "Silver",
    price: "$35",
    features: [
      "1 Vehicle Report",
      "Ownership Costs",
      "Market Value Range",
      "Owner's History",
    ],
  },
  {
    title: "Gold",
    price: "$45",
    features: [
      "1 Vehicle Report",
      "Ownership Costs",
      "Market Value Range",
      "Owner's History",
      "Vehicle Specifications",
      "Safety Recall Status",
    ],

  },
  {
    title: "Platinum",
    price: "$65",
    features: [
      "1 Vehicle Report",
      "Ownership Costs",
      "Market Value Range",
      "Owner's History",
      "Vehicle Specifications",
      "Safety Recall Status",
      "Warranties",
    ],
    
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
