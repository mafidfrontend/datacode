import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/pages/components/Button";

const HomePage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            >
              <h1 className="text-2xl md:text-3xl lg:text-[40px] text-gray-900 mb-6">
                Kuchli IT bilimlari uchun to&apos;g&apos;ri <br /> manzil – <span className="font-bold italic">DataAcademy!</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                IT bilimlaringizni interaktiv darslar, amaliy loyihalar va
                mentorlik dasturlari orqali rivojlantiring.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button>
                  Kurslarni tanlash
                </Button>
                <Button>
                  Bepul darslarni ko&apos;rish
                </Button>
              </div>
            </motion.div>
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative">
                <Image
                  src="/hero_img.png"
                  alt="Developer working on laptop"
                  width={600}
                  height={500}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
