export interface AgencyItem {
  name: string;
  description: string;
}

export interface SupportMember {
  name: string;
  expertise: string;
  detail: string;
}

export const collaborationData: Record<string, {
  internal: AgencyItem[];
  external: AgencyItem[];
  supportTeam: SupportMember[];
}> = {
  es: {
    internal: [
      { name: "MES", description: "Ministerio de Educación Superior" },
      { name: "MINED", description: "Ministerio de Educación" },
      { name: "MINSAP", description: "Ministerio de Salud Pública" }
    ],
    external: [
      { name: "British Council", description: "Apoyo a la formación de profesores de inglés en Cuba, fondos de conectividad y organización de eventos." },
      { name: "IATEFL", description: "International Association of Teachers of English as a Foreign Language" },
      { name: "Hornby Trust", description: "Proyectos de formación para profesores de zonas rurales y montañosas." }
    ],
    supportTeam: [
      { name: "Joan Cutting", expertise: "Interculturalidad", detail: "Profesora universitaria retirada de Escocia. Lideró una sesión sobre interculturalidad Escocia-Cuba durante el English Language Festival 2021." },
      { name: "Julia Simpks", expertise: "Storytelling", detail: "Profesora retirada de Escocia. Lideró un taller de 2 días sobre storytelling en el curso de invierno en la sede de APC." },
      { name: "Susan Piper", expertise: "Reading / Hands Up Project", detail: "Líder del Hands Up Project. Ha participado en varios webinars de APC-ELI sobre Reading." },
      { name: "Ken Wilson", expertise: "ELT Methodology", detail: "Autor de más de 30 títulos ELT. Orador principal en el National ELT Colloquium." },
      { name: "Carol Harvey", expertise: "English Communication", detail: "Coach de comunicación en inglés de Manitoba, Canadá. Desarrolló el webinar 'Planning for Success' sobre Growth Mindset." },
      { name: "Hugh Dellar", expertise: "Lexical Teaching", detail: "Co-fundador de Lexical Lab, co-autor de 'Teaching Lexically'." },
      { name: "Jeremy Harmer", expertise: "ELT Methodology", detail: "Autor de 'The Practice of English Language Teaching', referente mundial en la formación de profesores de inglés." }
    ]
  },
  en: {
    internal: [
      { name: "MES", description: "Ministry of Higher Education" },
      { name: "MINED", description: "Ministry of Education" },
      { name: "MINSAP", description: "Ministry of Public Health" }
    ],
    external: [
      { name: "British Council", description: "Support for English teacher training in Cuba, connectivity funds, and event organization." },
      { name: "IATEFL", description: "International Association of Teachers of English as a Foreign Language" },
      { name: "Hornby Trust", description: "Training projects for teachers in rural and mountainous areas." }
    ],
    supportTeam: [
      { name: "Joan Cutting", expertise: "Interculturality", detail: "Retired university professor from Scotland. Led a session on Scotland-Cuba interculturality during the English Language Festival 2021." },
      { name: "Julia Simpks", expertise: "Storytelling", detail: "Retired teacher from Scotland. Led a 2-day workshop on storytelling at the winter course at APC headquarters." },
      { name: "Susan Piper", expertise: "Reading / Hands Up Project", detail: "Leader of the Hands Up Project. Has participated in several APC-ELI webinars on Reading." },
      { name: "Ken Wilson", expertise: "ELT Methodology", detail: "Author of over 30 ELT titles. Keynote speaker at the National ELT Colloquium." },
      { name: "Carol Harvey", expertise: "English Communication", detail: "English communication coach from Manitoba, Canada. Developed the webinar 'Planning for Success' on Growth Mindset." },
      { name: "Hugh Dellar", expertise: "Lexical Teaching", detail: "Co-founder of Lexical Lab, co-author of 'Teaching Lexically'." },
      { name: "Jeremy Harmer", expertise: "ELT Methodology", detail: "Author of 'The Practice of English Language Teaching', world reference in English teacher training." }
    ]
  }
};
