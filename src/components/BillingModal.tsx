import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Shield } from "lucide-react";

interface BillingModalProps {
  open: boolean;
  onClose: () => void;
  selectedPlan: string;
  onSuccess: () => void;
}

export const BillingModal = ({ open, onClose, selectedPlan, onSuccess }: BillingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
    transactionId: "",
  });

  const handlePaymentMethodSelect = (method: string, number: string) => {
    setFormData({ ...formData, paymentMethod: `${method} - ${number}` });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    try {
      await fetch("https://formsubmit.co/skmoen18@gmail.com", {
        method: "POST",
        body: formDataToSend,
      });
      
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Billing Details
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm flex items-center justify-center gap-2 mt-2">
            <span className="inline-block w-2 h-2 bg-success rounded-full animate-pulse"></span>
            Secure Payment Gateway
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input type="hidden" name="_subject" value={`New Order: ${selectedPlan}`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="plan" value={selectedPlan} />

          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="01XXXXXXXXX"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-3">
            <Label>Payment Method *</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant={formData.paymentMethod.includes("Bkash") ? "default" : "outline"}
                className="h-14 text-base font-semibold"
                onClick={() => handlePaymentMethodSelect("Bkash", "01779148278")}
              >
                <span className="text-pink-600">📱</span> Bkash
              </Button>
              <Button
                type="button"
                variant={formData.paymentMethod.includes("Nagad") ? "default" : "outline"}
                className="h-14 text-base font-semibold"
                onClick={() => handlePaymentMethodSelect("Nagad", "01816885870")}
              >
                <span className="text-orange-600">📱</span> Nagad
              </Button>
            </div>
            {formData.paymentMethod && (
              <p className="text-sm text-center p-3 bg-secondary rounded-lg animate-fade-in">
                Send payment to: <strong>{formData.paymentMethod.split(" - ")[1]}</strong>
              </p>
            )}
          </div>

          {formData.paymentMethod && (
            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="transactionId">Transaction ID *</Label>
              <Input
                id="transactionId"
                name="transactionId"
                placeholder="Enter Transaction ID"
                required
                value={formData.transactionId}
                onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                className="h-12"
              />
            </div>
          )}

          <input type="hidden" name="paymentMethod" value={formData.paymentMethod} />

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 h-12 bg-gradient-primary font-semibold text-base shadow-premium hover:shadow-soft"
            >
              Complete Purchase
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
