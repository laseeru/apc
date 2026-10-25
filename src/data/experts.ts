export interface Expert {
  name: string;
  photo: string;
  expertise?: string;
  detail?: string;
}

const photo = (slug: string) => `/images/experts/${slug}.jpg`;

export const expertsData: Record<string, Expert[]> = {
  es: [
    { name: "Rob Williams", photo: photo("rob-williams"), expertise: "Webinars", detail: "Ha impartido webinars para profesores de APC-ELI." },
    { name: "Hugh Dellar", photo: photo("hugh-dellar"), expertise: "Lexical Teaching", detail: "Co-fundador de Lexical Lab, co-autor de 'Teaching Lexically'." },
    { name: "Jeremy Harmer", photo: photo("jeremy-harmer"), expertise: "ELT Methodology", detail: "Autor de 'The Practice of English Language Teaching', referente mundial en la formación de profesores de inglés." },
    { name: "Barry Tomalin", photo: photo("barry-tomalin") },
    { name: "Ken Wilson", photo: photo("ken-wilson"), expertise: "Autor y Trainer ELT", detail: "Autor de más de 30 títulos ELT. Orador principal en el National ELT Colloquium." },
    { name: "Dede Wilson", photo: photo("dede-wilson") },
    { name: "Chaz Pugliese", photo: photo("chaz-pugliese") },
    { name: "Venice Irving", photo: photo("venice-irving"), expertise: "Webinars", detail: "Ha impartido webinars para profesores de APC-ELI." },
    { name: "Carol Harvey", photo: photo("carol-harvey"), expertise: "English Communication", detail: "Coach de comunicación en inglés de Manitoba, Canadá. Desarrolló el webinar 'Planning for Success' sobre Growth Mindset." },
    { name: "Joan Cutting", photo: photo("joan-cutting"), expertise: "Interculturalidad", detail: "Profesora universitaria retirada de Escocia. Lideró una sesión sobre interculturalidad Escocia-Cuba durante el English Language Festival 2021." },
    { name: "Michelle Laufer", photo: photo("michelle-laufer") },
    { name: "Sue Piper", photo: photo("sue-piper"), expertise: "Reading / Hands Up Project", detail: "Líder del Hands Up Project. Ha participado en varios webinars de APC-ELI sobre Reading." },
    { name: "Julia Simpkins", photo: photo("julia-simpkins"), expertise: "Storytelling", detail: "Profesora retirada de Escocia. Lideró un taller de 2 días sobre storytelling en el curso de invierno en la sede de APC." }
  ],
  en: [
    { name: "Rob Williams", photo: photo("rob-williams"), expertise: "Webinars", detail: "Has delivered webinars for APC-ELI teachers." },
    { name: "Hugh Dellar", photo: photo("hugh-dellar"), expertise: "Lexical Teaching", detail: "Co-founder of Lexical Lab, co-author of 'Teaching Lexically'." },
    { name: "Jeremy Harmer", photo: photo("jeremy-harmer"), expertise: "ELT Methodology", detail: "Author of 'The Practice of English Language Teaching', world reference in English teacher training." },
    { name: "Barry Tomalin", photo: photo("barry-tomalin") },
    { name: "Ken Wilson", photo: photo("ken-wilson"), expertise: "Author and ELT Trainer", detail: "Author of over 30 ELT titles. Keynote speaker at the National ELT Colloquium." },
    { name: "Dede Wilson", photo: photo("dede-wilson") },
    { name: "Chaz Pugliese", photo: photo("chaz-pugliese") },
    { name: "Venice Irving", photo: photo("venice-irving"), expertise: "Webinars", detail: "Has delivered webinars for APC-ELI teachers." },
    { name: "Carol Harvey", photo: photo("carol-harvey"), expertise: "English Communication", detail: "English communication coach from Manitoba, Canada. Developed the webinar 'Planning for Success' on Growth Mindset." },
    { name: "Joan Cutting", photo: photo("joan-cutting"), expertise: "Interculturality", detail: "Retired university professor from Scotland. Led a session on Scotland-Cuba interculturality during the English Language Festival 2021." },
    { name: "Michelle Laufer", photo: photo("michelle-laufer") },
    { name: "Sue Piper", photo: photo("sue-piper"), expertise: "Reading / Hands Up Project", detail: "Leader of the Hands Up Project. Has participated in several APC-ELI webinars on Reading." },
    { name: "Julia Simpkins", photo: photo("julia-simpkins"), expertise: "Storytelling", detail: "Retired teacher from Scotland. Led a 2-day workshop on storytelling at the winter course at APC headquarters." }
  ]
};
