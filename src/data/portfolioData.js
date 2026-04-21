// Troque apenas os textos e links deste arquivo para personalizar o portfolio.
// A estrutura React ja esta pronta para renderizar tudo automaticamente.
export const portfolioData = {
  profile: {
    name: 'Brunno Perfeito',
    initials: 'BP',
    role: 'Desenvolvedor fullstack em formação',
    location: 'Rio das Ostras/RJ, Brasil',
    summary:
      ' Desenvolvedor focado em desenvolvimento backend com Node.js e Express, em constante evolução tecnica. Estou me especializando na criação de APIs, integração de sistemas e construção de aplicações escaláveis e eficientes. Busco oportunidades para aplicar meus conhecimentos, contribuir com soluções robustas e crescer profissionalmente na área da tecnologia.',
    focus:
      'Estudando Node.js, JavaScript moderno, criação de APIs, integrações de sistemas, construção de aplicações escaláveis e eficientes, React, responsividade e boas praticas de estrutura.',
    availability: 'Disponivel para vagas de estágio e junior',
    email: 'mailto:brunnoperfeito.92@gmail.com',
    github: 'https://github.com/bperfeito',
    linkedin: 'https://www.linkedin.com/in/brunno-perfeito/',
    instagram: 'https://www.instagram.com/bperfeito.dev/'
  },
  highlights: [
    { value: '01', label: 'Portfolio pessoal em React e Vite' },
    { value: '100%', label: 'aprendizado baseado em pratica' },
    { value: '3x', label: 'espacos reservados para futuros cases' },
  ],
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Node.js',
    'Express',
    'APIs',
    'React',
    'Vite',
    'JSX',
    'Componentes',
    'Flexbox',
    'CSS Grid',
    'Responsividade',
  ],
  projects: [
    {
      name: 'Portfolio pessoal em React',
      status: 'Em desenvolvimento',
      description:
        'Portfolio para apresentar minha trajetoria, habilidades, links e projetos de forma clara e atraente.',
      stack: ['React', 'Vite', 'CSS'],
      result:
        'Projeto ideal para colocar em pratica e aprender React, estrutura e design.',
      link: '#inicio',
    },
    {
      name: 'Formulário de cadastro com validação',
      status: 'Pronto',
      description:
        'Formulário de cadastro com validação responsivo.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      result:
        'Uma simples tela de formulario de cadastro, que pode ser usada para cadastros e criação de contas em sites.',
      link: '#projetos',
    },
    {
      name: 'Em breve!',
      status: 'Futuro',
      description:
        'Espaco para um projeto mais interativo, com filtros, consumo de API ou gerenciamento de estado.',
      stack: ['Node', 'Express', 'APIs',],
      link: '#projetos',
    },
  ],
}
