export const getSkillLogo = (skill: string) => {
  const logos: Record<string, string> = {
    "HTML": "/logo/HTML.webp",
    "CSS": "/logo/css.webp",
    "JavaScript": "/logo/javascript.png",
    "TypeScript": "/logo/Typescript.webp",
    "React": "/logo/react.webp",
    "React.js": "/logo/react.webp",
    "Next.js": "/logo/next-js.png",
    "Tailwind CSS": "/logo/Tailwind.webp",
    "PHP": "/logo/php.webp",
    "Laravel": "/logo/laravel.webp",
    "Blade": "/logo/blade.png",
    "Laravel Blade": "/logo/blade.png",
    "NodeJS": "/logo/nodejs.webp",
    "C#": "/logo/csharp.webp",
    "MySQL": "/logo/mysql.webp",
    "Figma": "/logo/figma.webp",
    "Flutter": "/logo/flutter.png",
  };
  return logos[skill] || null;
};
