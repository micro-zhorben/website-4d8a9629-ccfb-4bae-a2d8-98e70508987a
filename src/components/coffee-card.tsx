import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

interface CoffeeCardProps {
  title: string;
  description: string;
  strength: string;
  roastLevel: string;
  onSelect: () => void;
}

export function CoffeeCard({
  title,
  description,
  strength,
  roastLevel,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-accent" />
          <Typography.H3>{title}</Typography.H3>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <Typography.P>{description}</Typography.P>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <Typography.Small>Strength:</Typography.Small>
            <Typography.Small className="font-bold">{strength}</Typography.Small>
          </div>
          <div className="flex justify-between">
            <Typography.Small>Roast Level:</Typography.Small>
            <Typography.Small className="font-bold">{roastLevel}</Typography.Small>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant="default"
          onClick={onSelect}
        >
          Select This Blend
        </Button>
      </CardFooter>
    </Card>
  );
}