import {
  Sun,
  Heart,
  Target,
  Moon,
  Brain,
  Cloud,
  Flame,
  BatteryLow,
  Scale,
  Leaf,
  Apple,
  Wind,
  Dumbbell,
  Droplets,
  Flower2,
  Activity,
  Microscope,
  Sparkles,
  BookOpen,
  Users,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  sun: Sun,
  heart: Heart,
  target: Target,
  moon: Moon,
  brain: Brain,
  cloud: Cloud,
  flame: Flame,
  "battery-low": BatteryLow,
  scale: Scale,
  leaf: Leaf,
  apple: Apple,
  wind: Wind,
  dumbbell: Dumbbell,
  droplets: Droplets,
  flower: Flower2,
  activity: Activity,
  microscope: Microscope,
  sparkles: Sparkles,
  "book-open": BookOpen,
  users: Users,
};

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    /*
      Rendering nothing is the right production behaviour — a missing icon must
      never break a page. But it is silent, and a typo'd or unmapped name
      passes lint and build cleanly while shipping a chip with no icon. This
      warning is how that gets noticed in development instead of in production.
    */
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Icon] no icon mapped for "${name}" — add it to iconMap.`);
    }
    return null;
  }
  return <IconComponent {...props} />;
}
