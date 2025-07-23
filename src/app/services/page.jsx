'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Video, 
  Share2, 
  Zap, 
  MessageSquare,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Target
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

const services = [
  {
    title: 'AI-Powered Visuals',
    subtitle: 'Infographics & AI Carousels',
    icon: BarChart3,
    description: 'Create stunning data visualizations and carousel posts that engage your audience and drive shares.',
    features: [
      'Custom infographic design',
      'AI-generated carousel content',
      'Data visualization',
      'Brand-consistent templates',
      'Social media optimization'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Short Reels & Storytelling',
    subtitle: 'Instagram, YouTube, Facebook Reels',
    icon: Video,
    description: 'Viral-worthy video content that tells your brand story and reaches millions organically.',
    features: [
      'Viral reel concepts',
      'Professional video editing',
      'Trending audio integration',
      'Cross-platform optimization',
      'Performance analytics'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Social Media Management',
    subtitle: 'Posting, Captions, Calendar, Growth',
    icon: Share2,
    description: 'Complete social media strategy with daily content management and community engagement.',
    features: [
      'Content calendar planning',
      'Daily posting schedule',
      'Engaging captions',
      'Community management',
      'Growth strategies'
    ],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Lead Generation Funnels',
    subtitle: 'WhatsApp Funnel, DM to Booking System, Landing Pages',
    icon: Zap,
    description: 'Automated systems that convert prospects into paying customers through strategic funnels.',
    features: [
      'WhatsApp automation',
      'Landing page creation',
      'Email sequences',
      'Booking systems',
      'Conversion optimization'
    ],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Business Monetization Coaching',
    subtitle: 'Turn Content into Revenue',
    icon: MessageSquare,
    description: 'Strategic guidance to scale your business and transform your content into consistent revenue streams.',
    features: [
      '1-on-1 coaching sessions',
      'Revenue optimization',
      'Business scaling strategies',
      'Content monetization',
      'Performance tracking'
    ],
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function Services() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Comprehensive digital marketing solutions designed to transform your business and drive measurable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
            className="space-y-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} items-center justify-center mb-6`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-lg text-gray-500 mb-4">{service.subtitle}</p>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                        
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-700">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300 w-fit`}
                          size="lg"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className={`bg-gradient-to-br ${service.gradient} p-8 lg:p-12 flex items-center justify-center min-h-[400px]`}>
                        <div className="text-center text-white">
                          <service.icon className="w-24 h-24 mx-auto mb-6 opacity-80" />
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                              <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                              <p className="font-semibold">Growth Focused</p>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                              <Users className="w-6 h-6 mx-auto mb-2" />
                              <p className="font-semibold">Audience Driven</p>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                              <Target className="w-6 h-6 mx-auto mb-2" />
                              <p className="font-semibold">Results Oriented</p>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                              <Sparkles className="w-6 h-6 mx-auto mb-2" />
                              <p className="font-semibold">Creative Edge</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a custom digital marketing strategy tailored to your business goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg shadow-lg"
                onClick={() => window.location.href = '/book-call'}
              >
                Get Your Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}