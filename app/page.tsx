import Link from "next/link";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import { Box, BarChart3, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default async function Home() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
              <Box className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">StockMaster</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/sign-in" className="text-sm font-semibold hover:text-purple-600 transition-colors">
              Sign In
            </Link>
            <Link
              href="/sign-in"
              className="bg-purple-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all shadow-md shadow-purple-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-8 border border-purple-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Zap className="w-4 h-4 mr-2 fill-purple-600" />
              Next-Gen Inventory Management
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              Manage your inventory with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">precision.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              The ultimate platform for modern businesses to track, analyze, and optimize their stock levels in real-time. Powerful insights, simplified workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <Link
                href="/sign-in"
                className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center group shadow-xl shadow-gray-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto bg-white text-gray-700 px-8 py-4 rounded-xl font-bold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                View Live Demo
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Built for businesses of all sizes, from local shops to global enterprises.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">Gain deep insights into your stock levels, turnover rates, and financial performance with interactive charts.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Your data is safe with us. We use industry-standard encryption and secure authentication protocols.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Box className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Sync</h3>
              <p className="text-gray-600">Updates happen instantly across all devices. Never worry about overselling or stock-out situations again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Box className="text-white w-5 h-5" />
            </div>
            <span className="font-bold">StockMaster</span>
          </div>
          <p className="text-sm text-gray-500 mb-8">© 2025 StockMaster Inc. Built for professional inventory management.</p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-600">Privacy</Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">Terms</Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
