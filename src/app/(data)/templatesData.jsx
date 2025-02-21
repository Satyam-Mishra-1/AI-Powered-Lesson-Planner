export const allTemplates = [
  {
    name: 'Lesson Planner',
    description:
      'An AI tool that generates Lessons based on your Topic and Requirement Structured Flow of Lesson',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4998/4998181.png',
    aiPrompt:
      'Generate a detailed Lesson blog based on the given Topic and Requirement Structured Flow of Lesson outline in Rich Text Editor Format.',
    slug: 'generate_blog_content',
    form: [
      {
        label: 'Enter your Lesson Topic',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Requirement Structured Flow of Lesson',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
];
