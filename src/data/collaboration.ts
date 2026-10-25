export interface AgencyItem {
  name: string;
  description: string;
  logo: string;
}

const logo = (slug: string) => `/images/partners/${slug}.png`;

export const collaborationData: Record<string, {
  internal: AgencyItem[];
  external: AgencyItem[];
}> = {
  es: {
    internal: [
      { name: "MES", description: "Ministerio de Educación Superior", logo: logo("mes") },
      { name: "MINED", description: "Ministerio de Educación", logo: logo("mined") },
      { name: "MINSAP", description: "Ministerio de Salud Pública", logo: logo("minsap") }
    ],
    external: [
      { name: "British Council", description: "Apoyo a la formación de profesores de inglés en Cuba, fondos de conectividad y organización de eventos.", logo: logo("british-council") },
      { name: "IATEFL", description: "International Association of Teachers of English as a Foreign Language. APC-ELI es una asociación asociada de IATEFL.", logo: logo("iatefl") },
      { name: "A. S. Hornby Educational Trust", description: "Proyectos de formación para profesores, talleres y publicaciones financiados mediante grants.", logo: logo("hornby-trust") },
      { name: "University of Westminster", description: "Universidad de Londres, Reino Unido.", logo: logo("university-of-westminster") },
      { name: "Cuba Solidarity Campaign", description: "Organización de solidaridad con Cuba radicada en el Reino Unido.", logo: logo("cuba-solidarity-campaign") },
      { name: "National Education Union", description: "Sindicato de maestros del Reino Unido.", logo: logo("national-education-union") },
      { name: "TESOL Spain", description: "Teachers of English to Speakers of Other Languages, España.", logo: logo("tesol-spain") }
    ]
  },
  en: {
    internal: [
      { name: "MES", description: "Ministry of Higher Education", logo: logo("mes") },
      { name: "MINED", description: "Ministry of Education", logo: logo("mined") },
      { name: "MINSAP", description: "Ministry of Public Health", logo: logo("minsap") }
    ],
    external: [
      { name: "British Council", description: "Support for English teacher training in Cuba, connectivity funds, and event organization.", logo: logo("british-council") },
      { name: "IATEFL", description: "International Association of Teachers of English as a Foreign Language. APC-ELI is an IATEFL Associate teaching association.", logo: logo("iatefl") },
      { name: "A. S. Hornby Educational Trust", description: "Teacher training projects, workshops, and publications funded through grants.", logo: logo("hornby-trust") },
      { name: "University of Westminster", description: "University in London, United Kingdom.", logo: logo("university-of-westminster") },
      { name: "Cuba Solidarity Campaign", description: "UK-based Cuba solidarity organisation.", logo: logo("cuba-solidarity-campaign") },
      { name: "National Education Union", description: "UK teachers' union.", logo: logo("national-education-union") },
      { name: "TESOL Spain", description: "Teachers of English to Speakers of Other Languages, Spain.", logo: logo("tesol-spain") }
    ]
  }
};
