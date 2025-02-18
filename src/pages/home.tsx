import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { PreferenceForm } from "@/components/preference-form";
import { RecommendationLoader } from "@/components/recommendation-loader";
import { CoffeeCard } from "@/components/coffee-card";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Coffee } from "lucide-react";

interface CoffeeRecommendation {
  title: string;
  description: string;
  strength: string;
  roastLevel: string;
}

const mockRecommendations: CoffeeRecommendation[] = [
  {
    title: "Ethiopian Yirgacheffe",
    description: "A bright, fruity coffee with floral notes and a wine-like acidity. Perfect for those who enjoy complex, nuanced flavors.",
    strength: "Medium",
    roastLevel: "Light",
  },
  {
    title: "Colombian Supremo",
    description: "A well-balanced coffee with caramel sweetness, nutty undertones, and a smooth finish. Great for everyday drinking.",
    strength: "Medium",
    roastLevel: "Medium",
  },
  {
    title: "Sumatra Mandheling",
    description: "A full-bodied coffee with earthy, spicy notes and a rich, complex flavor. Ideal for those who prefer bold tastes.",
    strength: "Strong",
    roastLevel: "Dark",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CoffeeRecommendation[]>([]);

  const handlePreferenceSubmit = async (values: any) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setRecommendations(mockRecommendations);
    setIsLoading(false);
  };

  const handleSelectCoffee = (coffee: CoffeeRecommendation) => {
    // Handle coffee selection (e.g., add to cart, save preference, etc.)
    console.log("Selected coffee:", coffee);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-accent" />
          <Typography.H1>AI Coffee Recommender</Typography.H1>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
          </Card>

          <div className="space-y-6">
            {isLoading ? (
              <RecommendationLoader />
            ) : recommendations.length > 0 ? (
              <div className="space-y-6">
                <Typography.H2>Your Perfect Matches</Typography.H2>
                <div className="grid gap-6">
                  {recommendations.map((coffee, index) => (
                    <CoffeeCard
                      key={index}
                      {...coffee}
                      onSelect={() => handleSelectCoffee(coffee)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <Card className="flex flex-col items-center justify-center p-8 text-center">
                <Coffee className="mb-4 h-12 w-12 text-accent" />
                <Typography.H3>Welcome to Your Coffee Journey</Typography.H3>
                <Typography.P className="mt-2">
                  Fill out your preferences, and we'll help you discover your perfect coffee match.
                </Typography.P>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}