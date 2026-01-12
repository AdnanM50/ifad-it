import { getArticles } from "@/lib/api/blogAPI";
import { getSingleBlog } from "@/lib/api/blogDetailAPI";
import Image from "next/image";
import Link from "next/link";
import BlogSearch from "../_components/BlogSearch";
// import BlogSearch from "@/components/BlogSearch"; // Import the client component

export default async function SingleNewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getSingleBlog(slug);
  const recent = await getArticles();

  if (!article) {
    return (
      <div className="mt-[120px] text-center">
        <h1>No article found</h1>
      </div>
    );
  }

  const detailBlock = article.blocks?.find(
    (b: any) => b.__component === "blocks.news-detail-section"
  );

  // Prepare blog data for the search component
  const blogData = recent?.map((item: any) => ({
    slug: item.slug,
    title: item.title,
    image: item.image,
    createdAt: item.createdAt,
  })) || [];

  return (
    <section className="mt-[90px] lg:mt-[110px] py-16 sm:py-[120px]">
      <div className="container xl:px-0 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8">
            {article.image?.url && (
              <div className="relative w-full sm:w-[90%] h-auto sm:h-[420px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={article.image.url}
                  alt={article.image.alternativeText || article.title}
                  width={4000}
                  height={4000}
                  className="object-fill w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A1A1A] mb-6">
              {article.title}
            </h1>

            <p className="text-gray-600 font-inter! mb-6">
              {article.description}
            </p>

            {detailBlock && (
              <article className="prose max-w-none prose-p:leading-relaxed prose-p:text-gray-700">
                <p className="whitespace-pre-line">
                  {detailBlock.content}
                </p>
              </article>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-4">
            {/* Use the client component for search */}
            <BlogSearch allBlogs={blogData} />
          </aside>
        </div>
      </div>
    </section>
  );
}