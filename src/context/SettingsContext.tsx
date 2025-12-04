import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getAllSiteSettings, type SiteSettingsMap } from "@/integrations/supabase/queries/siteSettings";

/**
 * Known setting keys from the site_settings table.
 * These provide type safety for common settings while allowing additional dynamic keys.
 */
export type KnownSettingKey =
  | "site_name"
  | "tagline"
  | "contact_email"
  | "contact_phone"
  | "contact_address"
  | "copyright_text"
  | "facebook_url"
  | "linkedin_url"
  | "instagram_url"
  | "twitter_url"
  | "github_url"
  | "seo_default_title"
  | "seo_default_description"
  | "primary_color"
  | "accent_color";

/**
 * Settings map type - strongly typed for known keys, flexible for additional keys
 */
export type SettingsMap = Partial<Record<KnownSettingKey, string>> & Record<string, string>;

/**
 * Validates if a string is a valid hex color
 */
const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

/**
 * Converts hex color to RGB values
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

interface SettingsContextType {
  settings: SettingsMap;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  getSetting: (key: KnownSettingKey | string, fallback?: string) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<SettingsMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await getAllSiteSettings();

      if (fetchError) {
        setError("Failed to load site settings. Using default values.");
        console.error("Settings fetch error:", fetchError);
      } else if (data) {
        setSettings(data as SettingsMap);
      }
    } catch (err) {
      setError("An unexpected error occurred while loading settings.");
      console.error("Settings fetch exception:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  // Wire branding colors to CSS variables (Phase C4)
  useEffect(() => {
    if (isLoading || !settings) return;

    const root = document.documentElement;
    const primaryColor = settings.primary_color;

    // Helper to update all theme-dependent CSS variables on both root and body
    const updateBrandingVariables = (rgb: { r: number; g: number; b: number }, color: string) => {
      const isLightMode = document.body.classList.contains("lightmode");
      const opacity = isLightMode ? 0.33 : 0.85;
      const accentColor6 = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
      
      // Accent color variants for borders/glows (visible in both themes)
      // --accent-color-3: used for card borders - should be visible accent tint
      const accentColor3 = isLightMode 
        ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)` // lighter tint for light mode
        : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`; // visible glow for dark mode
      
      // --accent-color-4: darker variant for gradients
      const accentColor4 = isLightMode
        ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`
        : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`;
      
      // --accent-color-5: for gradient overlays
      const accentColor5 = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`;
      
      // --accent-color-7: for light mode gradients
      const accentColor7 = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.08)`;
      
      // Full box-shadow definitions (matching original template style.css)
      const shadowTopLeft = `-3px -3px 7px 0px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.44)`;
      const shadowBottomRight = `3px 3px 7px 0px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.44)`;
      const shadowTopLeftWide = `-3px -3px 10px 0px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.44)`;
      const shadowBottomRightWide = `3px 3px 10px 0px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.44)`;

      // Set on root
      root.style.setProperty("--accent-color", color);
      root.style.setProperty("--accent-color-3", accentColor3);
      root.style.setProperty("--accent-color-4", accentColor4);
      root.style.setProperty("--accent-color-5", accentColor5);
      root.style.setProperty("--accent-color-6", accentColor6);
      root.style.setProperty("--accent-color-7", accentColor7);
      root.style.setProperty("--box-shadow-top-left", shadowTopLeft);
      root.style.setProperty("--box-shadow-bottom-right", shadowBottomRight);
      root.style.setProperty("--box-shadow-top-left-wide", shadowTopLeftWide);
      root.style.setProperty("--box-shadow-bottom-right-wide", shadowBottomRightWide);

      // Also set on body for higher specificity (overrides .lightmode rules)
      document.body.style.setProperty("--accent-color", color);
      document.body.style.setProperty("--accent-color-3", accentColor3);
      document.body.style.setProperty("--accent-color-4", accentColor4);
      document.body.style.setProperty("--accent-color-5", accentColor5);
      document.body.style.setProperty("--accent-color-6", accentColor6);
      document.body.style.setProperty("--accent-color-7", accentColor7);
      document.body.style.setProperty("--box-shadow-top-left", shadowTopLeft);
      document.body.style.setProperty("--box-shadow-bottom-right", shadowBottomRight);
      document.body.style.setProperty("--box-shadow-top-left-wide", shadowTopLeftWide);
      document.body.style.setProperty("--box-shadow-bottom-right-wide", shadowBottomRightWide);
    };

    // Only update if we have a valid hex color
    if (primaryColor && isValidHexColor(primaryColor)) {
      const rgb = hexToRgb(primaryColor);
      if (rgb) {
        // Set initial branding variables
        updateBrandingVariables(rgb, primaryColor);

        // Watch for theme changes and recompute variables
        const observer = new MutationObserver(() => {
          updateBrandingVariables(rgb, primaryColor);
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        // Cleanup observer on unmount or settings change
        return () => observer.disconnect();
      }
    }
    // If setting is missing/invalid, CSS fallback values remain in effect
  }, [isLoading, settings]);

  const refresh = async () => {
    await fetchSettings();
  };

  const getSetting = (key: KnownSettingKey | string, fallback: string = ""): string => {
    return settings[key] ?? fallback;
  };

  return (
    <SettingsContext.Provider value={{ settings, isLoading, error, refresh, getSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

/**
 * Hook to access site settings from any component.
 * Must be used within a SettingsProvider.
 */
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

/**
 * ============================================================================
 * FUTURE USAGE EXAMPLES
 * ============================================================================
 * 
 * This context provider is designed to be consumed in future phases when
 * wiring public-facing components to dynamic Supabase data.
 * 
 * Example 1: Footer.tsx
 * ---------------------
 * import { useSettings } from "@/context/SettingsContext";
 * 
 * export function Footer() {
 *   const { getSetting, isLoading } = useSettings();
 *   
 *   if (isLoading) return <div>Loading...</div>;
 *   
 *   return (
 *     <footer>
 *       <p>{getSetting("copyright_text", "© 2025 Devmart Suriname")}</p>
 *       <a href={`mailto:${getSetting("contact_email", "info@devmart.sr")}`}>
 *         {getSetting("contact_email", "info@devmart.sr")}
 *       </a>
 *       <a href={getSetting("facebook_url")} target="_blank">Facebook</a>
 *     </footer>
 *   );
 * }
 * 
 * Example 2: Header.tsx
 * ---------------------
 * import { useSettings } from "@/context/SettingsContext";
 * 
 * export function Header() {
 *   const { getSetting } = useSettings();
 *   
 *   return (
 *     <header>
 *       <img 
 *         src="/logo.png" 
 *         alt={getSetting("site_name", "Devmart Suriname")} 
 *       />
 *       <p>{getSetting("tagline", "Tech Solutions for Modern Businesses")}</p>
 *     </header>
 *   );
 * }
 * 
 * Example 3: ContactPage.tsx
 * --------------------------
 * import { useSettings } from "@/context/SettingsContext";
 * 
 * export function ContactPage() {
 *   const { getSetting } = useSettings();
 *   
 *   return (
 *     <div className="contact-info">
 *       <h3>Get In Touch</h3>
 *       <p>Email: {getSetting("contact_email", "info@devmart.sr")}</p>
 *       <p>Phone: {getSetting("contact_phone", "+597 854-1211")}</p>
 *       <p>Address: {getSetting("contact_address", "Paramaribo, Suriname")}</p>
 *     </div>
 *   );
 * }
 * 
 * Example 4: SEO Helper (Future Phase)
 * -------------------------------------
 * import { useSettings } from "@/context/SettingsContext";
 * import { useEffect } from "react";
 * 
 * export function useDynamicSEO(pageTitle?: string, pageDescription?: string) {
 *   const { getSetting } = useSettings();
 *   
 *   useEffect(() => {
 *     document.title = pageTitle || getSetting("seo_default_title", "Devmart Suriname");
 *     
 *     const metaDescription = document.querySelector('meta[name="description"]');
 *     if (metaDescription) {
 *       metaDescription.setAttribute(
 *         "content", 
 *         pageDescription || getSetting("seo_default_description", "")
 *       );
 *     }
 *   }, [pageTitle, pageDescription, getSetting]);
 * }
 * 
 * Example 5: Conditional Rendering Based on Settings
 * ---------------------------------------------------
 * import { useSettings } from "@/context/SettingsContext";
 * 
 * export function SocialLinks() {
 *   const { getSetting } = useSettings();
 *   
 *   const socialLinks = [
 *     { name: "Facebook", url: getSetting("facebook_url") },
 *     { name: "LinkedIn", url: getSetting("linkedin_url") },
 *     { name: "Instagram", url: getSetting("instagram_url") },
 *     { name: "Twitter", url: getSetting("twitter_url") },
 *     { name: "GitHub", url: getSetting("github_url") },
 *   ].filter(link => link.url); // Only render links that exist
 *   
 *   return (
 *     <div className="social-links">
 *       {socialLinks.map(link => (
 *         <a key={link.name} href={link.url} target="_blank">
 *           {link.name}
 *         </a>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * ============================================================================
 */
