import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
  type?: "website" | "article" | "service" | "case-study";
  publishedAt?: string;
  updatedAt?: string;
  schema?: object;
}

/**
 * SEO Component
 * Dynamically updates document head with meta tags, OpenGraph, Twitter Cards, and JSON-LD
 * Renders nothing to DOM (null)
 */
export function SEO({
  title,
  description,
  keywords,
  image,
  canonical,
  type = "website",
  publishedAt,
  updatedAt,
  schema,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to set or update meta tag
    const setMeta = (selector: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${selector}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, selector);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMeta("description", description);
    if (keywords && keywords.length > 0) {
      setMeta("keywords", keywords.join(", "));
    }

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute("href", canonical);
    }

    // OpenGraph tags
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    if (image) {
      setMeta("og:image", image, true);
    }
    if (canonical) {
      setMeta("og:url", canonical, true);
    }

    // Twitter Card tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (image) {
      setMeta("twitter:image", image);
    }

    // Article-specific meta tags
    if (type === "article" && publishedAt) {
      setMeta("article:published_time", publishedAt, true);
    }
    if (type === "article" && updatedAt) {
      setMeta("article:modified_time", updatedAt, true);
    }

    // JSON-LD Schema
    let schemaScript: HTMLScriptElement | null = null;
    if (schema) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.text = JSON.stringify(schema);
      schemaScript.id = "jsonld-schema";
      
      // Remove existing schema if present
      const existing = document.getElementById("jsonld-schema");
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(schemaScript);
    }

    // Cleanup function (optional - removes injected tags on unmount)
    return () => {
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, image, canonical, type, publishedAt, updatedAt, schema]);

  // Render nothing to DOM
  return null;
}
