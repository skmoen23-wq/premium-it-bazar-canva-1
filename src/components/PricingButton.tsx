import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingButtonProps {
  duration: string;
  price: string;
  isSelected: boolean;
  onClick: () => void;
}

export const PricingButton = ({ duration, price, isSelected, onClick }: PricingButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={isSelected ? "default" : "outline"}
      className={cn(
        "w-full h-auto py-4 px-6 flex items-center justify-between transition-all duration-300",
        "hover:scale-105 hover:shadow-soft",
        isSelected && "bg-gradient-primary shadow-premium border-0"
      )}
    >
      <span className="font-semibold text-base">{duration}</span>
      <span className="text-lg font-bold">{price}</span>
    </Button>
  );
};
