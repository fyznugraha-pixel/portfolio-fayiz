export const getSkillLogo = (skill: string) => {
  const logos: Record<string, string> = {
    "HTML": "/logo/HTML.webp",
    "CSS": "/logo/css.webp",
    "JavaScript": "/logo/javascript.png",
    "TypeScript": "/logo/Typescript.webp",
    "React": "/logo/react.webp",
    "React.js": "/logo/react.webp",
    "Next.js": "/next-icon.svg",
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
    "UI Design": "/logo/ui-design.svg",
    "Mobile UI": "/logo/mobile-ui.svg",
    "Prototyping": "/logo/prototyping.svg",
    "UX Flow": "/logo/ux-flow.svg",
    "Design System": "/logo/design-system.svg",
    "REST API": "/logo/rest-api.svg",
    "Supabase": "/logo/supabase.svg",
  };
  return logos[skill] || null;
};
