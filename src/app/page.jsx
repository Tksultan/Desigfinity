'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Users, 
  Heart, 
  Dumbbell, 
  UtensilsCrossed, 
  GraduationCap, 
  ShoppingBag,
  Globe,
  Smartphone,
  BarChart3,
  Video,
  Share2,
  Zap,
  MessageSquare,
  MessageCircle,
  Palette,
  Search,
  Star,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  PlayCircle,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const industries = [
  { name: 'Salons', icon: Heart, color: 'bg-pink-100 text-pink-600' },
  { name: 'Clinics', icon: Users, color: 'bg-blue-100 text-blue-600' },
  { name: 'Gyms', icon: Dumbbell, color: 'bg-green-100 text-green-600' },
  { name: 'Restaurants', icon: UtensilsCrossed, color: 'bg-orange-100 text-orange-600' },
  { name: 'Coaches', icon: GraduationCap, color: 'bg-purple-100 text-purple-600' },
  { name: 'Retail Stores', icon: ShoppingBag, color: 'bg-indigo-100 text-indigo-600' },
];

const services = [
  { 
    title: 'Website Development', 
    icon: Globe,
    description: 'Modern, responsive websites that convert visitors into customers'
  },
  { 
    title: 'App Development', 
    icon: Smartphone,
    description: 'Custom mobile applications for iOS and Android platforms'
  },
  { 
    title: 'Infographics & AI Carousels', 
    icon: BarChart3,
    description: 'Data-driven visuals that tell your brand story effectively'
  },
  { 
    title: 'Viral Reels & Video Content', 
    icon: Video,
    description: 'Engaging video content that reaches millions organically'
  },
  { 
    title: 'Social Media Management', 
    icon: Share2,
    description: 'Complete social media strategy and daily content management'
  },
  { 
    title: 'Lead Generation Funnels', 
    icon: Zap,
    description: 'Automated systems that convert prospects into paying customers'
  },
  { 
    title: 'Business Coaching & Online Monetization', 
    icon: MessageSquare,
    description: 'Strategic guidance to scale your business and increase revenue'
  },
  { 
    title: 'Logo & Brand Identity', 
    icon: Palette,
    description: 'Professional branding that makes your business memorable'
  },
  { 
    title: 'SEO', 
    icon: Search,
    description: 'Get found on Google and drive organic traffic to your business'
  },
];

const stats = [
  { number: '100+', label: 'Happy Clients', icon: Users },
  { number: '10M+', label: 'Total Reach', icon: TrendingUp },
  { number: '500%', label: 'Average Growth', icon: Rocket },
  { number: '24/7', label: 'Support', icon: Clock },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    business: 'Glamour Beauty Salon',
    rating: 5,
    text: 'Desigfinity transformed our social media presence! Our bookings increased by 300% in just 3 months. Their viral reels strategy is incredible.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Rajesh Kumar',
    business: 'FitZone Gym',
    rating: 5,
    text: 'The lead generation funnel they created brought us 200+ new members. ROI was amazing - we recovered our investment in the first month!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Dr. Anita Patel',
    business: 'HealthFirst Clinic',
    rating: 5,
    text: 'Professional, creative, and results-driven. They helped us build trust online and attract quality patients through educational content.',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
];

const whyChooseUs = [
  {
    title: 'Proven Results',
    description: 'Track record of 10x growth for 100+ local businesses',
    icon: Award,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'AI-Powered Strategies',
    description: 'Cutting-edge AI tools combined with human creativity',
    icon: Lightbulb,
    color: 'from-blue-400 to-purple-500'
  },
  {
    title: 'Local Market Expertise',
    description: 'Deep understanding of Indian local business challenges',
    icon: Target,
    color: 'from-green-400 to-teal-500'
  },
  {
    title: 'End-to-End Solutions',
    description: 'From strategy to execution, we handle everything',
    icon: CheckCircle,
    color: 'from-pink-400 to-red-500'
  },
];

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whoWeHelpRef, whoWeHelpInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyChooseRef, whyChooseInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-semibold text-sm">🚀 #1 Digital Marketing Agency for Local Businesses</span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Grow Your Local Business{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                10x Faster
              </span>{' '}
              with Desigfinity
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Digital marketing made simple: Reels, AI Carousels, Lead Gen, Social Media & More
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/book-call'}
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                See Our Work
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-sm text-gray-500"
            >
              ⭐ Trusted by 100+ local businesses • 10M+ total reach • 500% average growth
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section ref={whoWeHelpRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={whoWeHelpInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              We help local businesses grow online
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Attract more customers and increase income 10x through powerful digital strategies.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={whoWeHelpInView ? "animate" : "initial"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                variants={fadeInUp}
                className="text-center group"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white shadow-md">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              What We Offer
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive digital marketing solutions to transform your business
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
              >
                <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={whyChooseInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Why Choose Desigfinity?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We're not just another agency. We're your growth partners with a proven track record.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={whyChooseInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white shadow-lg">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={testimonialsInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Real stories from real businesses that achieved remarkable growth with us.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={testimonialsInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.business}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to 10x Your Business Growth?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 100+ successful local businesses who transformed their growth with our proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
                onClick={() => window.location.href = '/book-call'}
              >
                Get Your Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5 inline" />
                WhatsApp Us Now
              </motion.button>
            </div>
            <div className="mt-8 text-blue-100 text-sm">
              💯 No commitment required • Free 30-minute consultation • Instant response
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}