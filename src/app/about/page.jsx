'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, BookOpen, Users, Zap } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const values = [
  {
    title: 'Results Over Buzzwords',
    icon: Target,
    description: 'We focus on measurable outcomes that directly impact your bottom line, not industry jargon.'
  },
  {
    title: 'Creative Meets Conversion',
    icon: Zap,
    description: 'Our designs are not just beautiful—they are strategic tools that drive customer action.'
  },
  {
    title: 'Education + Execution',
    icon: BookOpen,
    description: 'We teach you the strategies while implementing them, empowering your team for long-term success.'
  },
  {
    title: 'AI-First, Human-Touched',
    icon: Users,
    description: 'We leverage cutting-edge AI tools while maintaining the human creativity that makes brands memorable.'
  }
];

export default function About() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Desigfinity
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We're on a mission to democratize digital marketing and help every local business owner thrive in the digital age.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={visionInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To help every local business owner in India and beyond become a strong digital brand and earn 10x more through smart, automated marketing systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where small businesses have the same digital marketing advantages as large corporations, leveling the playing field through innovative strategies and accessible tools.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-blue-100 leading-relaxed">
                  We started Desigfinity to solve a common problem: local businesses struggle with online visibility, while big brands dominate the market. 
                </p>
                <br />
                <p className="text-blue-100 leading-relaxed">
                  Our founders witnessed countless talented entrepreneurs with amazing products and services who couldn't reach their target audience effectively. That's when we decided to bridge this gap with creative, data-driven digital marketing solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you achieve 10x growth with our proven strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
              onClick={() => window.location.href = '/book-call'}
            >
              Get Your Free Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}