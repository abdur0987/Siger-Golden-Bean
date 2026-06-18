import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { OriginDetailPage } from "@/components/origin-detail-page";
import { originProfiles } from "@/data/origin-profiles";

type OriginRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return originProfiles.map((profile) => ({
    slug: profile.slug
  }));
}

export default async function OriginRoute({ params }: OriginRouteProps) {
  const { slug } = await params;
  const profile = originProfiles.find((item) => item.slug === slug);

  if (!profile) {
    notFound();
  }

  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <OriginDetailPage profile={profile} />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
