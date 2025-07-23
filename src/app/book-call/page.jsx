'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  CheckCircle,
  Phone,
  Mail,
  User,
  Building,
  Target,
  Calendar,
  Clock,
  Star,
  ArrowRight
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

const benefits = [
  'Personalized growth strategy for your business',
  'Identify untapped opportunities in your market',
  'Learn proven tactics that drive 10x growth',
  'Get actionable insights you can implement immediately',
  'Discover how to automate your lead generation',
  'No sales pitch - just pure value and strategy'
];

export default function BookCall() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    currentChallenges: '',
    objectives: '',
    monthlyRevenue: '',
    marketingBudget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your free strategy call has been booked successfully!
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  We'll call you within 24 hours to schedule your session
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Receive a confirmation email with meeting details
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Get a custom growth strategy for your business
                </li>
              </ul>
            </div>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="lg"
            >
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

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
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full">
                <span className="text-green-700 font-semibold text-sm">🎯 100% FREE Strategy Call - No Strings Attached</span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Book Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Free Strategy Call
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              Get a personalized 30-minute consultation to discover how you can grow your business 10x faster with proven digital marketing strategies.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>30-Minute Call</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Target className="w-5 h-5 text-green-600" />
                <span>Actionable Insights</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Form and Benefits Section */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial="initial"
              animate={formInView ? "animate" : "initial"}
              variants={fadeInUp}
              className="lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Get From This Call
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Perfect for businesses that want to:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increase online visibility and brand awareness</li>
                  <li>• Generate more qualified leads consistently</li>
                  <li>• Improve social media engagement and followers</li>
                  <li>• Create viral content that drives sales</li>
                  <li>• Automate their marketing processes</li>
                </ul>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial="initial"
              animate={formInView ? "animate" : "initial"}
              variants={fadeInUp}
              className="lg:order-1"
            >
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    Book Your Free Call
                  </CardTitle>
                  <p className="text-blue-100">Fill out the form below and we'll contact you within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        Personal Information
                      </h3>
                      
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="mt-1"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="mt-1"
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="mt-1"
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                    </div>

                    {/* Business Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Business Information
                      </h3>

                      <div>
                        <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                          Business Name *
                        </Label>
                        <Input
                          id="businessName"
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => handleChange('businessName', e.target.value)}
                          className="mt-1"
                          placeholder="Your business name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                          Business Type *
                        </Label>
                        <Select onValueChange={(value) => handleChange('businessType', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="salon">Beauty Salon</SelectItem>
                            <SelectItem value="clinic">Medical Clinic</SelectItem>
                            <SelectItem value="gym">Fitness Center/Gym</SelectItem>
                            <SelectItem value="restaurant">Restaurant/Cafe</SelectItem>
                            <SelectItem value="coach">Coach/Consultant</SelectItem>
                            <SelectItem value="retail">Retail Store</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="services">Professional Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="monthlyRevenue" className="text-sm font-medium text-gray-700">
                          Monthly Revenue Range
                        </Label>
                        <Select onValueChange={(value) => handleChange('monthlyRevenue', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your monthly revenue" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-50k">₹0 - ₹50,000</SelectItem>
                            <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="1l-5l">₹1,00,000 - ₹5,00,000</SelectItem>
                            <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                            <SelectItem value="10l+">₹10,00,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="marketingBudget" className="text-sm font-medium text-gray-700">
                          Marketing Budget (Monthly)
                        </Label>
                        <Select onValueChange={(value) => handleChange('marketingBudget', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your marketing budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-10k">₹0 - ₹10,000</SelectItem>
                            <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                            <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                            <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="1l+">₹1,00,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Goals and Challenges */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Goals & Challenges
                      </h3>

                      <div>
                        <Label htmlFor="currentChallenges" className="text-sm font-medium text-gray-700">
                          Current Marketing Challenges
                        </Label>
                        <Textarea
                          id="currentChallenges"
                          value={formData.currentChallenges}
                          onChange={(e) => handleChange('currentChallenges', e.target.value)}
                          className="mt-1"
                          placeholder="What are your biggest marketing challenges right now?"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="objectives" className="text-sm font-medium text-gray-700">
                          Business Objectives *
                        </Label>
                        <Textarea
                          id="objectives"
                          value={formData.objectives}
                          onChange={(e) => handleChange('objectives', e.target.value)}
                          className="mt-1"
                          placeholder="What are your main business goals? What results do you want to achieve?"
                          rows={3}
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 mr-2 animate-spin" />
                          Booking Your Call...
                        </>
                      ) : (
                        <>
                          Book My Free Strategy Call
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to receive communication from Desigfinity. 
                      We respect your privacy and will never spam you.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Join 100+ Successful Business Owners
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Who have transformed their businesses with our proven strategies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Strategy Calls Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500%</div>
                <div className="text-blue-100">Average Growth Achieved</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24hrs</div>
                <div className="text-blue-100">Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}