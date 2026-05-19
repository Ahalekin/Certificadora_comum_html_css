export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
 
  correctIndex: number;
}

export type QuizMap = Record<string, QuizQuestion[]>;

// ---------- Aula 1: HTML e CSS ----------
const quiz1: QuizQuestion[] = [
  {
    id: "1-q1",
    question: "O que significa a sigla HTML?",
    options: [
      "HyperText Markup Language",
      "HighTech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Management Language",
    ],
    correctIndex: 0,
  },
  {
    id: "1-q2",
    question: "Qual é a principal função do CSS?",
    options: [
      "Estruturar o conteúdo da página",
      "Estilizar a aparência da página",
      "Adicionar interatividade com o usuário",
      "Conectar a página a um banco de dados",
    ],
    correctIndex: 1,
  },
  {
    id: "1-q3",
    question: "HTML e CSS trabalham juntos para:",
    options: [
      "Criar bancos de dados",
      "Definir a estrutura e o visual de páginas web",
      "Executar lógica de servidor",
      "Compilar código de máquina",
    ],
    correctIndex: 1,
  },
];

// ---------- Aula 2: Tag's ----------
const quiz2: QuizQuestion[] = [
  {
    id: "2-q1",
    question: "O que é uma tag em HTML?",
    options: [
      "Um arquivo de estilo",
      "Um elemento que marca uma parte do conteúdo",
      "Um tipo de banco de dados",
      "Um script de programação",
    ],
    correctIndex: 1,
  },
  {
    id: "2-q2",
    question: "Qual tag é usada para criar um título?",
    options: ["<div>", "<p>", "<span>", "<h1>"],
    correctIndex: 3,
  },
  {
    id: "2-q3",
    question: "A maioria das tags HTML precisa de:",
    options: [
      "Apenas abertura",
      "Apenas fechamento",
      "Abertura e fechamento",
      "Nenhuma das opções",
    ],
    correctIndex: 2,
  },
];

// ---------- Aula 3: Padrão HTML ----------
const quiz3: QuizQuestion[] = [
  {
    id: "3-q1",
    question: "Qual declaração deve aparecer na primeira linha de um documento HTML?",
    options: ["<html>", "<!DOCTYPE html>", "<head>", "<meta>"],
    correctIndex: 1,
  },
  {
    id: "3-q2",
    question: "Onde fica o conteúdo visível da página?",
    options: ["Dentro de <head>", "Dentro de <body>", "Dentro de <title>", "Dentro de <meta>"],
    correctIndex: 1,
  },
  {
    id: "3-q3",
    question: "A tag <head> serve para:",
    options: [
      "Mostrar o cabeçalho visível da página",
      "Conter metadados, título e links de estilo",
      "Definir o rodapé do site",
      "Inserir imagens principais",
    ],
    correctIndex: 1,
  },
];

// ---------- Aula 4: Mini Teste ----------
const quiz4: QuizQuestion[] = [
  {
    id: "4-q1",
    question: "Qual tag representa o maior título de uma página?",
    options: ["<h6>", "<h1>", "<title>", "<header>"],
    correctIndex: 1,
  },
  {
    id: "4-q2",
    question: "Para que serve a tag <a>?",
    options: [
      "Inserir uma imagem",
      "Criar um link",
      "Adicionar um parágrafo",
      "Definir um estilo",
    ],
    correctIndex: 1,
  },
  {
    id: "4-q3",
    question: "Qual estrutura mínima um documento HTML precisa ter?",
    options: [
      "<html>, <head> e <body>",
      "Apenas <body>",
      "Apenas <head>",
      "<style> e <script>",
    ],
    correctIndex: 0,
  },
];

// ---------- Aula 5: Cores e Fundos ----------
const quiz5: QuizQuestion[] = [
  {
    id: "5-q1",
    question: "Qual propriedade CSS define a cor de fundo de um elemento?",
    options: ["color", "background-color", "fill", "border-color"],
    correctIndex: 1,
  },
  {
    id: "5-q2",
    question: "O formato hexadecimal #FF0000 representa qual cor?",
    options: ["Verde", "Azul", "Vermelho", "Preto"],
    correctIndex: 2,
  },
  {
    id: "5-q3",
    question: "No formato rgba(0, 0, 0, 0.5), o último valor (0.5) controla:",
    options: ["O brilho", "A opacidade/transparência", "A saturação", "O contraste"],
    correctIndex: 1,
  },
];

// ---------- Aula 6: Divs e Identificadores ----------
const quiz6: QuizQuestion[] = [
  {
    id: "6-q1",
    question: "Para que serve a tag <div>?",
    options: [
      "Criar um link",
      "Agrupar e dividir blocos de conteúdo",
      "Inserir uma imagem",
      "Definir um título",
    ],
    correctIndex: 1,
  },
  {
    id: "6-q2",
    question: "Qual a diferença entre id e class?",
    options: [
      "Não há diferença",
      "id é único na página; class pode ser usada em vários elementos",
      "class é único; id pode se repetir",
      "Ambos só funcionam dentro de <head>",
    ],
    correctIndex: 1,
  },
  {
    id: "6-q3",
    question: "No CSS, como selecionamos um elemento pelo seu id?",
    options: [".meuId", "#meuId", "*meuId", "meuId"],
    correctIndex: 1,
  },
];

// ---------- Aula 7: Apresentação CSS ----------
const quiz7: QuizQuestion[] = [
  {
    id: "7-q1",
    question: "O que significa a sigla CSS?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Coded Style Sheets",
    ],
    correctIndex: 1,
  },
  {
    id: "7-q2",
    question: "Qual a forma recomendada de aplicar CSS a um site?",
    options: [
      "Inline em cada tag",
      "Dentro de <script>",
      "Em um arquivo .css externo, ligado pela tag <link>",
      "Dentro do <title>",
    ],
    correctIndex: 2,
  },
  {
    id: "7-q3",
    question: "Qual propriedade muda o tamanho da fonte?",
    options: ["text-size", "font-size", "font-style", "size"],
    correctIndex: 1,
  },
];

export const quizzes: QuizMap = {
  "1": quiz1,
  "2": quiz2,
  "3": quiz3,
  "4": quiz4,
  "5": quiz5,
  "6": quiz6,
  "7": quiz7,
};
