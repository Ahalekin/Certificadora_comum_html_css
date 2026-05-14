export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  module: string;
  order: number;
  videoUrl: string;
  thumbnail: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "HTML e CSS",
    description: "Bem-vindo! Nesta aula você vai conhecer o que é HTML e CSS.",
    duration: "5:06",
    module: "Módulo 1 — Fundamentos",
    order: 1,
    videoUrl: "https://youtu.be/dcLLw-B9W6Q",
    thumbnail: "",
  },
  {
    id: "2",
    title: "Tag's",
    description: "Vamos explorar os conceitos básicos de Tag's.",
    duration: "7:13",
    module: "Módulo 1 — Fundamentos",
    order: 2,
    videoUrl: "https://youtu.be/qU5l9TOnk-U",
    thumbnail: "",
  },
  {
    id: "3",
    title: "Padrão HTML",
    description: "Vamos explorar o conceito básico do Padrão HTML.",
    duration: "1:03",
    module: "Módulo 1 — Fundamentos",
    order: 3,
    videoUrl: "https://youtu.be/RAcMQHG1Thc",
    thumbnail: "",
  },
  {
    id: "4",
    title: "Mini Teste",
    description: "Feito um mini teste com tudo que foi visto até agora.",
    duration: "5:06",
    module: "Módulo 2 — Prática",
    order: 4,
    videoUrl: "https://youtu.be/dcLLw-B9W6Q",
    thumbnail: "",
  },
  {
    id: "5",
    title: "Cores e Fundos",
    description: "Apresentação sobre background, hexadecimal e rgba.",
    duration: "5:13",
    module: "Módulo 1 — Fundamentos",
    order: 5,
    videoUrl: "https://youtu.be/hura9-RW-Ws",
    thumbnail: "",
  },
  {
    id: "6",
    title: "Apresentação CSS",
    description: "Apresentação CSS, diversos exemplos.",
    duration: "12:21",
    module: "Módulo 1 — Fundamentos",
    order: 6,
    videoUrl: "https://youtu.be/skOhf-SS-b4",
    thumbnail: "",
  },
  {
    id: "7",
    title: "Divs e Identificadores",
    description: "Apresentação sobre Div's, class e id. Link W3Schools: https://www.w3schools.com/html/html_intro.asp",
    duration: "6:59",
    module: "Módulo 1 — Fundamentos",
    order: 7,
    videoUrl: "https://youtu.be/BJw_jl0QfsM",
    thumbnail: "",
  },
  
];
