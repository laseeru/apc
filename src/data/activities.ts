export interface ActivityItem {
  title: string;
  description: string;
  image: string;
}

export const activitiesData: Record<string, ActivityItem[]> = {
  es: [
    {
      title: "Webinars con Expertos Internacionales",
      description: "APC-ELI organiza webinars con expertos internacionales de renombre como Ken Wilson (autor de más de 30 títulos ELT), Jeremy Harmer (autor de The Practice of English Language Teaching), Hugh Dellar (co-fundador de Lexical Lab), y Carol Harvey (coach de comunicación en inglés).",
      image: "/images/gallery/image11.jpg"
    },
    {
      title: "Cursos de Invierno",
      description: "Cursos presenciales intensivos de desarrollo profesional en la sede de la APC, con la participación de talleristas internacionales como Julia Simpks (Escocia), quien lideró un taller de 2 días sobre storytelling.",
      image: "/images/gallery/image14.png"
    },
    {
      title: "English Language Festival",
      description: "Festival anual del idioma inglés con actividades interculturales, incluyendo sesiones sobre temas como Escocia y Cuba a cargo de expertos como Joan Cutting, profesora universitaria retirada de Escocia.",
      image: "/images/gallery/image31.jpeg"
    },
    {
      title: "Actividades Sociales y Comunitarias",
      description: "Jóvenes profesores y estudiantes participan activamente en actividades sociales y comunitarias para ayudar a personas enfermas y vulnerables, demostrando el compromiso social de APC-ELI.",
      image: "/images/gallery/image7.png"
    },
    {
      title: "Hands Up Project",
      description: "En colaboración con Susan Piper, líder del Hands Up Project, se desarrollaron sesiones de lectura para estudiantes del programa de maestría de la Universidad Pedagógica Varona y webinars sobre Reading en el National ELT Colloquium.",
      image: "/images/gallery/image35.png"
    }
  ],
  en: [
    {
      title: "Webinars with International Experts",
      description: "APC-ELI organizes webinars with renowned international experts such as Ken Wilson (author of over 30 ELT titles), Jeremy Harmer (author of The Practice of English Language Teaching), Hugh Dellar (co-founder of Lexical Lab), and Carol Harvey (English communication coach).",
      image: "/images/gallery/image11.jpg"
    },
    {
      title: "Winter Courses",
      description: "Intensive on-site professional development courses at APC headquarters, featuring international workshop leaders such as Julia Simpks (Scotland), who led a 2-day workshop on storytelling.",
      image: "/images/gallery/image14.png"
    },
    {
      title: "English Language Festival",
      description: "Annual English language festival with intercultural activities, including sessions on topics such as Scotland and Cuba led by experts like Joan Cutting, retired university professor from Scotland.",
      image: "/images/gallery/image31.jpeg"
    },
    {
      title: "Social and Community Activities",
      description: "Young teachers and students actively participate in social and community activities to help sick and vulnerable people, demonstrating APC-ELI's social commitment.",
      image: "/images/gallery/image7.png"
    },
    {
      title: "Hands Up Project",
      description: "In collaboration with Susan Piper, leader of the Hands Up Project, reading sessions were developed for students of the Master's program at Universidad Pedagógica Varona, along with webinars on Reading at the National ELT Colloquium.",
      image: "/images/gallery/image35.png"
    }
  ]
};
