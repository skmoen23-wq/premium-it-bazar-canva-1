import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PricingButton } from "@/components/PricingButton";
import { BillingModal } from "@/components/BillingModal";
import { SuccessModal } from "@/components/SuccessModal";
import { FeatureList } from "@/components/FeatureList";
import { Footer } from "@/components/Footer";
import { MessageCircle, Phone } from "lucide-react";
import canvaProImage from "@/assets/canva-pro-mockup.png";

const pricingPlans = [
  { duration: "1 Month", price: "30৳" },
  { duration: "1 Year", price: "50৳" },
  { duration: "2 Year", price: "150৳" },
  { duration: "3 Year", price: "200৳" },
  { duration: "Canva Owner Account", price: "500৳" },
];

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [billingModalOpen, setBillingModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleOrderClick = () => {
    if (selectedPlan) {
      setBillingModalOpen(true);
    }
  };

  const handleSuccess = () => {
    setSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Product Image */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
                <img
                  src={canvaProImage}
                  alt="Canva Pro Premium Design Tool"
                  className="relative w-full max-w-[500px] h-auto rounded-2xl shadow-premium hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Canva Pro – আপনার ডিজাইনের পারফেক্ট পার্টনার! 🌟
              </h1>

              {/* Pricing Options */}
              <div className="space-y-3">
                {pricingPlans.map((plan) => (
                  <PricingButton
                    key={plan.duration}
                    duration={plan.duration}
                    price={plan.price}
                    isSelected={selectedPlan === `${plan.duration} - ${plan.price}`}
                    onClick={() => setSelectedPlan(`${plan.duration} - ${plan.price}`)}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4">
                <Button
                  onClick={handleOrderClick}
                  disabled={!selectedPlan}
                  className="w-full h-14 text-lg font-bold bg-gradient-primary shadow-premium hover:shadow-soft transition-all duration-300 hover:scale-105"
                >
                  অর্ডার করুন
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 font-semibold border-success text-success hover:bg-success/10 transition-all duration-300"
                  >
                    <a
                      href="https://web.whatsapp.com/send?phone=8801925173511&text="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp অর্ডার
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 font-semibold hover:bg-secondary transition-all duration-300"
                  >
                    <a href="tel:01779148278" className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      📞 সরাসরি কল করুন
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeatureList />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BillingModal
        open={billingModalOpen}
        onClose={() => setBillingModalOpen(false)}
        selectedPlan={selectedPlan}
        onSuccess={handleSuccess}
      />

      <SuccessModal
        open={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
      />
    </div>
  );
};

export default Index;
