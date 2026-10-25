export interface ActivityItem {
  title: string;
  description: string;
  image: string;
}

export const activitiesData: Record<string, ActivityItem[]> = {
  es: [
    {
      title: "Webinars con Expertos Internacionales",
      description: "APC-ELI organiza webinars con expertos internacionales de renombre como Ken Wilson (autor de más de 30 títulos ELT), Jeremy Harmer (autor de The Practice of English Language Teaching), Hugh Dellar (co-fundador de Lexical Lab), Carol Harvey (coach de comunicación en inglés), la Prof. Venice Irving y Rob Williams.",
      image: "/images/activities/webinar-rob-williams.jpg"
    },
    {
      title: "Cursos de Invierno",
      description: "Cursos presenciales intensivos de desarrollo profesional en la sede de la APC, con la participación de talleristas internacionales como Julia Simpkins (Escocia), quien lideró un taller de 2 días sobre storytelling.",
      image: "/images/events/event-01.jpg"
    },
    {
      title: "English Language Festival",
      description: "Festival anual con actividades culturales y académicas para celebrar el idioma inglés. Se celebra en diferentes provincias, con actividades interculturales como sesiones sobre Escocia y Cuba a cargo de expertos como Joan Cutting, profesora universitaria retirada de Escocia.",
      image: "/images/festival/festival-01.jpg"
    },
    {
      title: "The British Week",
      description: "Actividades organizadas junto a la Embajada Británica en Cuba durante The British Week, como el Culture Club y el concurso de cuentos cortos en inglés.",
      image: "/images/festival/culture-club-01.jpg"
    },
    {
      title: "Actividades Sociales y Comunitarias",
      description: "Jóvenes profesores y estudiantes participan activamente en actividades sociales y comunitarias para ayudar a personas enfermas y vulnerables, demostrando el compromiso social de APC-ELI.",
      image: "/images/gallery/image41.jpeg"
    },
    {
      title: "Hands Up Project",
      description: "APC-ELI apoya el Hands Up Project en el Complejo Educacional Ciudad Libertad. En colaboración con Sue Piper, líder del proyecto, se desarrollaron además sesiones de lectura para estudiantes de la maestría de la Universidad Pedagógica Varona y webinars sobre Reading en el National ELT Colloquium.",
      image: "/images/activities/hands-up-1.jpg"
    }
  ],
  en: [
    {
      title: "Webinars with International Experts",
      description: "APC-ELI organizes webinars with renowned international experts such as Ken Wilson (author of over 30 ELT titles), Jeremy Harmer (author of The Practice of English Language Teaching), Hugh Dellar (co-founder of Lexical Lab), Carol Harvey (English communication coach), Prof. Venice Irving, and Rob Williams.",
      image: "/images/activities/webinar-rob-williams.jpg"
    },
    {
      title: "Winter Courses",
      description: "Intensive on-site professional development courses at APC headquarters, featuring international workshop leaders such as Julia Simpkins (Scotland), who led a 2-day workshop on storytelling.",
      image: "/images/events/event-01.jpg"
    },
    {
      title: "English Language Festival",
      description: "Annual festival with cultural and academic activities to celebrate the English language. Held in different provinces, with intercultural sessions on topics such as Scotland and Cuba led by experts like Joan Cutting, retired university professor from Scotland.",
      image: "/images/festival/festival-01.jpg"
    },
    {
      title: "The British Week",
      description: "Activities organized with the British Embassy in Cuba during The British Week, such as the Culture Club and the English short story competition.",
      image: "/images/festival/culture-club-01.jpg"
    },
    {
      title: "Social and Community Activities",
      description: "Young teachers and students actively participate in social and community activities to help sick and vulnerable people, demonstrating APC-ELI's social commitment.",
      image: "/images/gallery/image41.jpeg"
    },
    {
      title: "Hands Up Project",
      description: "APC-ELI supports the Hands Up Project at Ciudad Libertad Educational Complex. In collaboration with project leader Sue Piper, reading sessions were also developed for Master's students at Universidad Pedagógica Varona, along with webinars on Reading at the National ELT Colloquium.",
      image: "/images/activities/hands-up-1.jpg"
    }
  ]
};
