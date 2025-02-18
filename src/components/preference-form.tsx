import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";

const formSchema = z.object({
  tastePreference: z.string(),
  roastLevel: z.string(),
  brewMethod: z.string(),
  caffeinePreference: z.string(),
});

interface PreferenceFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tastePreference: "",
      roastLevel: "",
      brewMethod: "",
      caffeinePreference: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <Typography.H2>Coffee Preferences</Typography.H2>
        <Typography.P>
          Tell us your preferences and we'll recommend the perfect coffee for you.
        </Typography.P>

        <FormField
          control={form.control}
          name="tastePreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Taste Preference</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your taste preference" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="sweet">Sweet & Smooth</SelectItem>
                  <SelectItem value="bold">Bold & Rich</SelectItem>
                  <SelectItem value="fruity">Fruity & Bright</SelectItem>
                  <SelectItem value="nutty">Nutty & Chocolate</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="roastLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roast Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select roast level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="light">Light Roast</SelectItem>
                  <SelectItem value="medium">Medium Roast</SelectItem>
                  <SelectItem value="dark">Dark Roast</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brewMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Brewing Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brewing method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="drip">Drip Coffee</SelectItem>
                  <SelectItem value="espresso">Espresso</SelectItem>
                  <SelectItem value="french">French Press</SelectItem>
                  <SelectItem value="pourover">Pour Over</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="caffeinePreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caffeine Preference</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select caffeine preference" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="decaf">Decaf</SelectItem>
                  <SelectItem value="halfcaf">Half Caf</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Get Recommendations
        </Button>
      </form>
    </Form>
  );
}