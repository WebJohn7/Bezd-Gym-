import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react"

export default function FitnessCenterPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#f5f5f5]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#45c6eb] rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-[#000000] font-medium text-sm">BELA GYM</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
            Gym
          </a>
          <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
            O nás
          </a>
          <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
            Ceník
          </a>
          <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
            Galerie
          </a>
          <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
            Kontakt
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 bg-[#45c6eb] rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4 text-balance">
            Moderní Fitness Centrum
            <br />
            Ve Vašem Městě
          </h1>

          <p className="text-[#777777] text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Join our community of athletes, personal trainers, and wellness experts committed to helping you achieve
            your best self.
          </p>

          <Button className="bg-[#323232] hover:bg-[#000000] text-white px-8 py-3 mb-8">O nás</Button>

          <div className="flex items-center justify-center gap-4">
            <Instagram className="w-6 h-6 text-[#8e8e8e]" />
            <Facebook className="w-6 h-6 text-[#8e8e8e]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/two-people-exercising-in-modern-gym.jpg"
              alt="People exercising in gym"
              className="rounded-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#000000] text-white px-4 py-2 rounded-lg text-sm font-medium">
              O nás
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Be The Greatest Version
              <br />
              Of You
            </h2>

            <p className="text-[#45c6eb] font-medium mb-6">In a fully equipped sports training facility</p>

            <p className="text-[#777777] mb-8 leading-relaxed">
              Designed to meet the specific needs of every driven athlete, our new high-performance physical and
              cognitive training center helps individuals increase their performance and achieve their goals. Our
              facility is equipped with the following:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#45c6eb] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#777777] text-sm">Free weights, machines, & TRX system</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#45c6eb] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#777777] text-sm">Free weights, machines, & TRX system</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#45c6eb] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#777777] text-sm">Free weights, machines, & TRX system</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#45c6eb] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#777777] text-sm">Free weights, machines, & TRX system</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#45c6eb] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#777777] text-sm">Free weights, machines, & TRX system</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#45c6eb] rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#777777] text-sm">Free weights, machines, & TRX system</span>
              </div>
            </div>

            <Button className="bg-[#44b4ff] hover:bg-[#45c6eb] text-white px-8 py-3">Let's go</Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#45c6eb] font-medium mb-4">Ceník</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">Choose the right plan for you</h2>
          <p className="text-[#777777] mb-12 max-w-2xl mx-auto">
            Find the membership that fits your fitness goals. Select from flexible options to access the facilities and
            services that matter to you.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#d9d9d9] p-8 rounded-2xl h-64"></Card>
            <Card className="bg-[#d9d9d9] p-8 rounded-2xl h-64"></Card>
            <Card className="bg-[#d9d9d9] p-8 rounded-2xl h-64"></Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
              src="/modern-gym-interior-with-equipment-and-lighting.jpg"
              alt="Modern gym interior"
              className="rounded-2xl w-full h-[400px] object-cover"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#323232] rounded-full flex items-center justify-center text-white">
              ‹
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#323232] rounded-full flex items-center justify-center text-white">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f5] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#45c6eb] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#000000] mb-2">Masarykova náměstí 25</h3>
              <p className="text-[#777777] text-sm">8610 pod Blaníkem, 256 21</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#45c6eb] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#000000] mb-2">Po - Ne</h3>
              <p className="text-[#777777] text-sm">6:00 - 22:00</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#45c6eb] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#000000] mb-2">Email: bela@gymservice.com</h3>
              <p className="text-[#777777] text-sm">Tel. číslo: +420 000 000 000</p>
            </div>
          </div>

          <div className="border-t border-[#d9d9d9] mt-12 pt-8">
            <div className="flex items-center justify-between">
              <p className="text-[#8e8e8e] text-sm">© 2024 Bela Gym</p>
              <nav className="flex items-center gap-6">
                <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
                  Gym
                </a>
                <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
                  O nás
                </a>
                <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
                  Ceník
                </a>
                <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
                  Galerie
                </a>
                <a href="#" className="text-[#777777] hover:text-[#000000] text-sm">
                  Kontakt
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
