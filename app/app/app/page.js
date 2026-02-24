'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Lock, 
  Zap,
  ChevronRight,
  Menu,
  X,
  Bitcoin,
  Wallet,
  LineChart
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { label: 'Total Users', value: '2.5M+', icon: Users },
    { label: 'Trading Volume', value: '$8.2B', icon: TrendingUp },
    { label: 'Countries', value: '150+', icon: Globe },
    { label: 'Security Score', value: '99.9%', icon: Shield },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      desc: 'Military-grade encryption and multi-signature wallets protect your assets 24/7.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      desc: 'Execute trades in milliseconds with our high-performance matching engine.'
    },
    {
      icon: LineChart,
      title: 'Advanced Analytics',
      desc: 'Real-time market data and AI-powered insights for smarter decisions.'
    },
    {
      icon: Wallet,
      title: 'Multi-Currency',
      desc: 'Support for 100+ cryptocurrencies and fiat currencies worldwide.'
    }
  ]

  return (
    <div className="min-h-screen bg-crypto-darker overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-crypto-dark/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-crypto-accent to-crypto-purple rounded-xl flex items-center justify-center">
              <Bitcoin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              FreeCoin<span className="text-crypto-accent">Global</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Security', 'Roadmap', 'Tokenomics'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-crypto-accent transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-crypto-accent to-crypto-purple px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-crypto-accent/25 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-crypto-dark border-t border-white/10 p-6"
          >
            {['Features', 'Security', 'Roadmap', 'Tokenomics'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-3 text-gray-300 hover:text-crypto-accent">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crypto-accent/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crypto-accent/10 border border-crypto-accent/20 text-crypto-accent mb-6">
                  <span className="w-2 h-2 bg-crypto-accent rounded-full animate-pulse" />
                  Blockchain Vault Protocol v2.0 Live
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  Secure Your <br />
                  <span className="text-gradient">Digital Assets</span>
                </h1>
                
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                  The next-generation cryptocurrency platform with institutional-grade security, 
                  lightning-fast execution, and comprehensive portfolio management tools.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-crypto-accent to-crypto-purple px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-crypto-accent/25 transition-all flex items-center justify-center gap-2">
                    Start Trading <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/5 transition-all">
                    View Demo
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-crypto-accent to-crypto-purple rounded-3xl blur-3xl opacity-30 animate-pulse-slow" />
                <div className="relative glass-effect rounded-3xl p-8 animate-float">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-gray-400 text-sm">Portfolio Value</p>
                      <p className="text-3xl font-bold text-white">$124,592.00</p>
                    </div>
                    <div className="text-green-400 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      +12.5%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {['Bitcoin', 'Ethereum', 'Solana'].map((coin, i) => (
                      <div key={coin} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-blue-500' : 'bg-purple-500'}`}>
                            <span className="font-bold text-white">{coin[0]}</span>
                          </div>
                          <div>
                            <p className="font-semibold">{coin}</p>
                            <p className="text-sm text-gray-400">{i === 0 ? 'BTC' : i === 1 ? 'ETH' : 'SOL'}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${(45000 - i * 12000).toLocaleString()}</p>
                          <p className="text-sm text-green-400">+{2.4 + i}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-crypto-dark/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-crypto-accent mx-auto mb-4" />
                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-gradient">FreeCoin</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience the future of digital asset management with our cutting-edge platform features.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-crypto-accent to-crypto-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-32 bg-crypto-dark/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-crypto-accent/20 rounded-3xl blur-3xl" />
                <div className="relative glass-effect rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Lock className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Security Status</p>
                      <p className="text-2xl font-bold text-green-400">Protected</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {['Cold Storage', '2FA Authentication', 'Biometric Login', 'Insurance Coverage'].map((item, i) => (
                      <div key={item} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="flex-1">{item}</span>
                        <span className="text-green-400 text-sm">Active</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Military-Grade <span className="text-gradient">Security</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                Your assets are protected by the same security protocols used by leading financial institutions. 
                We employ multi-layered encryption, cold storage solutions, and 24/7 monitoring.
              </p>
              
              <div className="space-y-6">
                {[
                  '95% of assets stored in offline cold wallets',
                  'Real-time threat detection and prevention',
                  '$100M insurance coverage from Lloyd\'s of London',
                  'Regular third-party security audits'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-crypto-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-3 h-3 text-crypto-accent" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-crypto-accent/10 to-crypto-purple/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Crypto Journey?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join millions of users worldwide who trust FreeCoin Global for their digital asset management.
          </p>
          <button className="bg-gradient-to-r from-crypto-accent to-crypto-purple px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-crypto-accent/25 transition-all">
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-crypto-dark border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bitcoin className="w-6 h-6 text-crypto-accent" />
                <span className="text-xl font-bold">FreeCoinGlobal</span>
              </div>
              <p className="text-gray-400 text-sm">
                The most trusted platform for trading and managing digital assets securely.
              </p>
            </div>
            
            {[
              { title: 'Product', links: ['Exchange', 'Wallet', 'Institutional', 'Fees'] },
              { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
              { title: 'Resources', links: ['Blog', 'Help Center', 'API Docs', 'Status'] }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-bold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-crypto-accent transition-colors text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 FreeCoin Global. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
              }
