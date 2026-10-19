// Inserta datos estructurados (schema.org). El "<" se escapa para que el JSON no pueda cerrar el <script>.
export const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
   <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
   />
)
