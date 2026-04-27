import { cn } from "@/lib/utils";

const variantStyles = {
  // ── Display (Instrument Serif, Regular) ──
  hero: "font-serif font-normal text-hero    leading-hero",
  page: "font-serif font-normal text-page    leading-page",
  section: "font-serif font-normal text-section leading-section",

  // ── Headings (Geist, Medium) ──
  h1: "font-sans font-medium text-h1 leading-h1",
  h2: "font-sans font-medium text-h2 leading-h2",
  h3: "font-sans font-medium text-h3 leading-h3",
  h4: "font-sans font-medium text-h4 leading-h4",

  // ── Body (Geist, Regular) ──
  "body-lg": "font-sans font-normal text-body-lg leading-body-lg",
  "body-md": "font-sans font-normal text-body-md leading-body-md",
  "body-sm": "font-sans font-normal text-body-sm leading-body-sm",

  // ── Labels (Geist, Regular) ──
  "label-md": "font-sans font-normal text-label-md leading-label-md",
  "label-sm": "font-sans font-normal text-label-sm leading-label-sm",

  // ── Buttons (Geist, Regular) ──
  "btn-md": "font-sans font-normal text-btn-md leading-btn-md",
  "btn-sm": "font-sans font-normal text-btn-sm leading-btn-sm",

  // ── Captions ──
  caption: "font-sans font-normal text-caption leading-caption", // Geist
  "caption-mono": "font-code font-normal text-caption leading-caption", // JetBrains Mono

  // ── Code (JetBrains Mono, Regular) ──
  "mono-md": "font-code font-normal text-code-md leading-code-md",
  "mono-sm": "font-code font-normal text-code-sm leading-code-sm",
} as const;

// ─────────────────────────────────────────────
// Default HTML element per variant
// ─────────────────────────────────────────────

const defaultElement: Record<keyof typeof variantStyles, string> = {
  hero: "h1",
  page: "h1",
  section: "h2",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-lg": "p",
  "body-md": "p",
  "body-sm": "p",
  "label-md": "span",
  "label-sm": "span",
  "btn-md": "span",
  "btn-sm": "span",
  caption: "span",
  "caption-mono": "span",
  "mono-md": "code",
  "mono-sm": "code",
};

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type Variant = keyof typeof variantStyles;

type TypographyProps = {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  /**
   * Override the default HTML element.
   * e.g. render an h2 variant as an h3 for SEO without changing the visual style.
   */
  as?: React.ElementType;
};

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export function Typography({
  variant,
  children,
  className,
  as,
}: TypographyProps) {
  const Tag = as ?? defaultElement[variant];

  return (
    <Tag className={cn(variantStyles[variant], className)}>{children}</Tag>
  );
}

// const howtoUse = () => {
//     import { Typography } from "@/components/ui/typography";

//     export default function Page() {
//       return (
//         <div>
//           {/* Display */}
//           <Typography variant="hero">Welcome to VibeCraft</Typography>
//           <Typography variant="page">Our Story</Typography>
//           <Typography variant="section">What We Offer</Typography>

//           {/* Headings */}
//           <Typography variant="h1">Getting Started</Typography>
//           <Typography variant="h2">Features</Typography>
//           <Typography variant="h3">Details</Typography>
//           <Typography variant="h4">Note</Typography>

//           {/* Body */}
//           <Typography variant="body-lg">Large body text here</Typography>
//           <Typography variant="body-md">Regular paragraph text</Typography>
//           <Typography variant="body-sm">Smaller supporting text</Typography>

//           {/* Labels */}
//           <Typography variant="label-md">Form label</Typography>
//           <Typography variant="label-sm">Small label</Typography>

//           {/* Buttons text */}
//           <Typography variant="btn-md">Click Me</Typography>
//           <Typography variant="btn-sm">Learn More</Typography>

//           {/* Caption */}
//           <Typography variant="caption">Last updated April 2026</Typography>

//           {/* Mono */}
//           <Typography variant="mono-md">npm install</Typography>
//           <Typography variant="mono-sm">v1.0.4</Typography>

//           {/* With accent color */}
//           <Typography variant="hero" className="text-accent">
//             Highlighted Hero
//           </Typography>

//           {/* Override element */}
//           <Typography variant="h2" as="h3">
//             SEO friendly heading
//           </Typography>
//         </div>
//       );
//     }
// }
