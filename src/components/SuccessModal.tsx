import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ open, onClose }: SuccessModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] animate-scale-in text-center">
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center animate-scale-in">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
            <p className="text-muted-foreground">
              Your message has been sent successfully.
            </p>
            <p className="text-sm text-muted-foreground">
              We'll contact you shortly with your Canva Pro access details.
            </p>
          </div>

          <Button
            onClick={onClose}
            variant="outline"
            className="mt-4 border-success text-success hover:bg-success/10"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
