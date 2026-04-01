import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trackContact } from '../lib/analytics';
import ScrollAnimate from '../components/ScrollAnimate';
import { Phone, Heart, MessageCircle } from 'lucide-react';

const Aromatics = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Full-width fixed header */}
      <Header />
      
      {/* Main content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="container mx-auto px-6">
            <ScrollAnimate className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-normal leading-tight text-foreground mb-6 font-rocaone">
                Essential Oil Pillow & Room Mists
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create a calming atmosphere with our signature essential oil blends
              </p>
            </ScrollAnimate>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/aromatics-products.jpg"
                    alt="Essential Oil Pillow & Room Mists"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-300 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-200 rounded-full opacity-40"></div>
              </div>

              {/* Right side - Content */}
              <ScrollAnimate className="space-y-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-6 font-rocaone tracking-tight">
                    Essential Oil Pillow & Room Mists
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Available directly from me in our classes or on <a href="tel:07814487281" className="text-purple-600 hover:text-purple-700 font-medium">0781 4487281</a>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our 100ml bottles are £8.95 with a choice of different blends including:
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-foreground text-lg">Sleep</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-foreground text-lg">Yoga</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-foreground text-lg">Balance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-foreground text-lg">Woodland Walk</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                    <p className="text-foreground font-medium mb-2">Price: £8.95 per 100ml bottle</p>
                    <p className="text-muted-foreground text-sm">
                      Perfect for creating a calming atmosphere at home or enhancing your yoga practice.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:07814487281" 
                    className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium text-lg hover:scale-105 transform text-center whitespace-nowrap flex items-center justify-center gap-2"
                    onClick={() => trackContact('Call for Aromatics', 'Aromatics Page')}
                  >
                    <Phone className="w-5 h-5" />
                    Call 0781 4487281
                  </a>
                  <a 
                    href="/zoom-booking"
                    className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105 transform text-center flex items-center justify-center gap-2"
                    onClick={() => trackContact('Message', 'Aromatics Page')}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Message
                  </a>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 lg:py-32 bg-purple-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-6 font-rocaone">
                Enhance Your Wellness Journey
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our essential oil pillow and room mists are carefully crafted to support your wellbeing. Whether you're looking to improve sleep, create a calming yoga space, find balance, or connect with nature, we have a blend for you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Available at all our yoga classes or contact me directly to place an order.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Aromatics;

