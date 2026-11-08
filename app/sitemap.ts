import type { MetadataRoute } from "next"
import { SITE_URL } from "@/constants/site"

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
      { url: `${SITE_URL}/desarrollo-con-ia`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/como-operamos-con-ia`, changeFrequency: "yearly", priority: 0.7 },
      { url: `${SITE_URL}/infraestructura`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE_URL}/landing`, changeFrequency: "monthly", priority: 0.8 },
   ]
}
