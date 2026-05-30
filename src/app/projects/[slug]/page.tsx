import ProjectDetailClient from "./ProjectDetailClient";

const projectSlugs = [
  "campus-care",
  "literaplus",
  "proteksindo",
  "upself",
  "sistem-parkir",
];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return <ProjectDetailClient slug={slug} />;
}