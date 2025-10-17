import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { SiteNavigationSchema, WebSiteSchema, AggregateRatingSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Restaurant Equipment Direct | Commercial Kitchen Equipment & Smallwares",
  description: "Commercial kitchen equipment, cooking equipment, and restaurant smallwares at wholesale prices. Ranges, ovens, refrigeration, prep tables, and more shipped direct from the source. Trusted by restaurants nationwide.",
  keywords: [
    "restaurant equipment direct",
    "commercial kitchen equipment",
    "restaurant cooking equipment",
    "commercial kitchen supplies",
    "restaurant equipment wholesale",
    "kitchen smallwares",
    "restaurant supply equipment",
    "commercial food service equipment",
  ],
  openGraph: {
    title: "Restaurant Equipment Direct | Commercial Kitchen Equipment & Smallwares",
    description: "Commercial kitchen equipment and restaurant smallwares at wholesale prices shipped direct from the source.",
    type: "website",
    siteName: "Restaurant Equipment Direct",
    url: "https://restaurantequipment-direct.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Equipment Direct | Commercial Kitchen Equipment",
    description: "Commercial kitchen equipment at wholesale prices shipped direct from the source.",
  },
  alternates: {
    canonical: "https://restaurantequipment-direct.com",
  },
};

// JSON-LD Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Restaurant Equipment Direct",
  "url": "https://restaurantequipment-direct.com",
  "logo": "https://restaurantequipment-direct.com/logo-full.svg",
  "description": "Commercial kitchen equipment and restaurant smallwares at wholesale prices",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Shure Hospitality Wholesale",
    "url": "https://www.shurehw.com"
  },
  "areaServed": "US",
  "serviceType": [
    "Commercial Kitchen Equipment",
    "Restaurant Equipment Wholesale",
    "Kitchen Smallwares"
  ]
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of restaurant supplies do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We carry a complete range of restaurant disposables including takeout containers, cups and lids, napkins, gloves, trash bags, eco-friendly packaging, and custom printed items. All products are available for bulk wholesale orders."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer wholesale pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer volume discounts and wholesale pricing on all products. The more you buy, the more you save. Contact us for custom quotes on large orders or multi-location accounts."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get custom printed packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer in-house custom printing on cups, napkins, takeout boxes, and bags. Our design team can help create branded packaging that showcases your restaurant's identity."
      }
    },
    {
      "@type": "Question",
      "name": "What are your minimum order quantities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum orders vary by product, typically starting at one case (100-500 units). Custom printing orders have higher minimums. Contact us for specific product MOQs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer eco-friendly and compostable options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We carry a wide selection of compostable takeout containers, sustainable packaging, and recyclable disposables that meet BPI and CMA compostability standards."
      }
    },
    {
      "@type": "Question",
      "name": "How fast is shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most orders ship within 1-3 business days. We offer standard ground shipping nationwide, with expedited options available. Los Angeles area customers can qualify for same-day delivery through Shure Hospitality Wholesale."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve restaurant groups and multi-location businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Through our partnership with Shure Hospitality Wholesale, we provide dedicated account management, volume pricing, and custom solutions for restaurant groups."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteNavigationSchema />
      <WebSiteSchema />
      <AggregateRatingSchema />
      <HomeContent />
    </>
  );
}
