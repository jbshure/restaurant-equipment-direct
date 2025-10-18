interface ProductSchemaProps {
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  sku?: string;
  brand?: string;
}

export default function ProductSchema({
  name,
  description,
  price,
  category,
  image = "https://restaurantequipment-direct.com/logo-full.svg",
  sku,
  brand = "Restaurant Equipment Direct"
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "image": image,
    "offers": {
      "@type": "Offer",
      "price": price.replace('$', '').split('.')[0],
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder",
      "url": "https://www.restaurantsuppliesdirect.com/contact",
      "seller": {
        "@type": "Organization",
        "name": "Restaurant Equipment Direct"
      }
    },
    ...(sku && { "sku": sku }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
