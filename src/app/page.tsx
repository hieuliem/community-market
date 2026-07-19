import { Hero } from "@/components/sections/Hero";
import { CarWash } from "@/components/sections/CarWash";
import { AoDai } from "@/components/sections/AoDai";
import { BestSellers } from "@/components/sections/BestSellers";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OrderForm } from "@/components/sections/OrderForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <CarWash />
      <AoDai />
      <WhyChooseUs />
      <OrderForm />
      <Testimonials />
      <Footer />
    </main>
  );
}
