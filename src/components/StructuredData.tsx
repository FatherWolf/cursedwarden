import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'person' | 'service' | 'breadcrumb' | 'website';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data = {} }) => {
  const getStructuredData = () => {
    const baseUrl = 'https://cursedwardenlabs.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cursed Warden Labs",
          "alternateName": "CWL",
          "url": baseUrl,
          "logo": `${baseUrl}/logo512.png`,
          "sameAs": [
            "https://linkedin.com/in/dev-engle",
            "https://github.com/cursedwardenlabs"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Maiden",
            "addressRegion": "NC",
            "addressCountry": "US"
          },
          "founder": {
            "@type": "Person",
            "name": "Austin Engle"
          },
          "foundingDate": "2020",
          "description": "Professional web development company specializing in custom React applications, WordPress websites, and SEO optimization services in Charlotte NC."
        };

      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Austin Engle",
          "jobTitle": "Full Stack Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Cursed Warden Labs"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Maiden",
            "addressRegion": "NC",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://linkedin.com/in/dev-engle",
            `${baseUrl}/about`
          ],
          "knowsAbout": [
            "React.js",
            "JavaScript",
            "TypeScript",
            "WordPress",
            "SEO",
            "Web Development",
            "Material-UI",
            "Node.js"
          ],
          "yearsOfExperience": "6+"
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Web Development Services",
          "description": data.description || "Professional web development services including React applications, WordPress websites, and SEO optimization.",
          "provider": {
            "@type": "Organization",
            "name": "Cursed Warden Labs",
            "url": baseUrl
          },
          "areaServed": [
            "Charlotte, NC",
            "Gastonia, NC", 
            "Concord, NC",
            "Maiden, NC",
            "North Carolina"
          ],
          "serviceType": "Web Development",
          "offers": {
            "@type": "Offer",
            "priceRange": "$300-$3500",
            "priceCurrency": "USD"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Cursed Warden Labs",
          "url": baseUrl,
          "description": "Professional web development company in Charlotte NC specializing in React, WordPress, and SEO services.",
          "inLanguage": "en-US",
          "copyrightYear": "2024",
          "author": {
            "@type": "Person",
            "name": "Austin Engle"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${baseUrl}${item.url}`
          })) || []
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;