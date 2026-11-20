// components/landingPage/platforms/Shared/icons.ts
import * as LucideIcons from 'lucide-react';

// Map icon string names to actual Lucide components
export const iconMap: Record<string, React.ComponentType<any>> = {
  // Common
  Zap: LucideIcons.Zap,
  Search: LucideIcons.Search,
  Brain: LucideIcons.Brain,
  GitBranch: LucideIcons.GitBranch,
  RefreshCw: LucideIcons.RefreshCw,
  Shield: LucideIcons.Shield,
  DollarSign: LucideIcons.DollarSign,
  Award: LucideIcons.Award,
  AlertTriangle: LucideIcons.AlertTriangle,
  EyeOff: LucideIcons.EyeOff,
  // Industries
  Home: LucideIcons.Home,
  Heart: LucideIcons.Heart,
  BrainCircuit: LucideIcons.BrainCircuit,
  Building: LucideIcons.Building,
  Briefcase: LucideIcons.Briefcase,
  GraduationCap: LucideIcons.GraduationCap,
  // Platform specific
  Microphone: LucideIcons.Mic,  // Map 'Microphone' to 'Mic'
  Phone: LucideIcons.Phone,
  Calendar: LucideIcons.Calendar,
  Database: LucideIcons.Database,
  Link2: LucideIcons.Link2,
  Target: LucideIcons.Target,
  MessageSquare: LucideIcons.MessageSquare,
  FileText: LucideIcons.FileText,
  Clipboard: LucideIcons.Clipboard,
  Scale: LucideIcons.Scale,
  Truck: LucideIcons.Truck,
  Users: LucideIcons.Users,
  Check: LucideIcons.Check,
  // Add more if needed
  ArrowRight: LucideIcons.ArrowRight,
  ChevronDown: LucideIcons.ChevronDown,
  Menu: LucideIcons.Menu,
  X: LucideIcons.X,
  Sparkle: LucideIcons.BrainCircuit, // if used
  Settings: LucideIcons.Settings,
  // ... etc
};

// Helper to get icon component by name with fallback
export const getIcon = (iconName: string): React.ComponentType<any> | null => {
  return iconMap[iconName] || null;
};

// Re-export all icons as named exports for convenience (optional)
export {
  LucideIcons as Icons,
};