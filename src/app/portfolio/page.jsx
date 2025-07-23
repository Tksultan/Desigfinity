'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ExternalLink,
  Heart, 
  Users, 
  Dumbbell, 
  UtensilsCrossed, 
  GraduationCap, 
  ShoppingBag,
  TrendingUp,
  Eye,
  MessageCircle
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

const portfolioItems = [
  {
    title: 'Viral Fitness Reel Campaign',
    category: 'Video Content',
    client: 'FitZone Gym',
    industry: 'Fitness',
    icon: Dumbbell,
    results: {
      views: '2.5M',
      engagement: '145K',
      leads: '850'
    },
    description: 'Created a series of motivational workout reels that went viral, resulting in massive brand awareness and gym membership signups.',
    tags: ['Reels', 'Fitness', 'Viral Content'],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Restaurant Social Media Makeover',
    category: 'Social Media Management',
    client: 'Spice Garden',
    industry: 'Restaurant',
    icon: UtensilsCrossed,
    results: {
      views: '890K',
      engagement: '67K',
      leads: '420'
    },
    description: 'Transformed a local restaurant\'s social presence with mouth-watering food photography and engaging stories.',
    tags: ['Social Media', 'Food Photography', 'Brand Growth'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Beauty Salon Lead Generation',
    category: 'Lead Generation',
    client: 'Glamour Studio',
    industry: 'Beauty',
    icon: Heart,
    results: {
      views: '450K',
      engagement: '89K',
      leads: '680'
    },
    description: 'Developed automated WhatsApp funnels and booking systems that increased appointment bookings by 300%.',
    tags: ['Lead Generation', 'WhatsApp Automation', 'Beauty'],
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    title: 'Life Coach Personal Brand',
    category: 'Brand Identity',
    client: 'Success Mindset',
    industry: 'Coaching',
    icon: GraduationCap,
    results: {
      views: '1.2M',
      engagement: '156K',
      leads: '950'
    },
    description: 'Built a complete personal brand identity with content strategy that positioned the coach as a thought leader.',
    tags: ['Personal Branding', 'Content Strategy', 'Coaching'],
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Medical Clinic Digital Presence',
    category: 'Complete Digital Marketing',
    client: 'HealthFirst Clinic',
    industry: 'Healthcare',
    icon: Users,
    results: {
      views: '750K',
      engagement: '98K',
      leads: '560'
    },
    description: 'Created educational content, patient testimonials, and appointment booking systems for increased trust and bookings.',
    tags: ['Healthcare Marketing', 'Educational Content', 'Trust Building'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Retail Store E-commerce Growth',
    category: 'E-commerce Marketing',
    client: 'StyleHub Boutique',
    industry: 'Retail',
    icon: ShoppingBag,
    results: {
      views: '620K',
      engagement: '78K',
      leads: '340'
    },
    description: 'Boosted online sales through product showcase reels, customer testimonials, and targeted social commerce.',
    tags: ['E-commerce', 'Product Marketing', 'Social Commerce'],
    gradient: 'from-purple-500 to-pink-500'
  }
];

const industries = [
  { name: 'Fitness Centers', icon: Dumbbell, count: '15+', color: 'bg-green-100 text-green-600' },
  { name: 'Beauty Salons', icon: Heart, count: '22+', color: 'bg-pink-100 text-pink-600' },
  { name: 'Clinics & Doctors', icon: Users, count: '18+', color: 'bg-blue-100 text-blue-600' },
  { name: 'Cafes & Restaurants', icon: UtensilsCrossed, count: '12+', color: 'bg-orange-100 text-orange-600' },
  { name: 'Coaches & Tutors', icon: GraduationCap, count: '25+', color: 'bg-purple-100 text-purple-600' },
  { name: 'Local Retail Shops', icon: ShoppingBag, count: '20+', color: 'bg-indigo-100 text-indigo-600' },
];

export default function Portfolio() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [portfolioRef, portfolioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [industriesRef, industriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
                Portfolio
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              See how we've helped local businesses achieve remarkable growth through strategic digital marketing campaigns.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center space-x-8 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">10M+</div>
                <div className="text-gray-600">Total Reach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">500%</div>
                <div className="text-gray-600">Avg Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={portfolioRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={portfolioInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Success Stories
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Real results from real businesses. Each project showcases our commitment to driving measurable growth.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={portfolioInView ? "animate" : "initial"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-white shadow-lg">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {item.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{item.client} • {item.industry}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Eye className="w-4 h-4 mr-1" />
                          </div>
                          <div className="font-bold">{item.results.views}</div>
                          <div className="text-xs opacity-75">Views</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <MessageCircle className="w-4 h-4 mr-1" />
                          </div>
                          <div className="font-bold">{item.results.engagement}</div>
                          <div className="text-xs opacity-75">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <TrendingUp className="w-4 h-4 mr-1" />
                          </div>
                          <div className="font-bold">{item.results.leads}</div>
                          <div className="text-xs opacity-75">Leads</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group">
                        View Case Study
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section ref={industriesRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate={industriesInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Industries We Serve
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We've successfully worked with businesses across various industries, helping them achieve digital success.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate={industriesInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                variants={fadeInUp}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <industry.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{industry.count}</div>
                    <p className="text-gray-600 text-sm">Projects Completed</p>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a campaign that drives real results for your business.
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
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}