import { Typography } from "@/components/ui/typography";
import { Coffee } from "lucide-react";

export function RecommendationLoader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 text-center">
      <Coffee className="h-12 w-12 animate-spin text-accent" />
      <Typography.H3>Brewing Your Perfect Match</Typography.H3>
      <Typography.P>
        Our AI is analyzing your preferences to find the perfect coffee for you...
      </Typography.P>
    </div>
  );
}