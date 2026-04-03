import {
  Sun,
  Heart,
  Target,
  Moon,
  Brain,
  Cloud,
  Bone,
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
  bone: Bone,
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
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
