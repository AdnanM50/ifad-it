import { getArticles } from "@/lib/api/blogAPI";
import { getSingleBlog } from "@/lib/api/blogDetailAPI";
import Image from "next/image";
import Link from "next/link";

export default async function SingleNewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getSingleBlog(slug);
  const recent = await getArticles();
  console.log("🚀 ~ SingleNewsPage ~ recent:", recent)

  // const handelChange = (url: string) => {
    
  // };

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

  return (
    <section className="mt-[90px] lg:mt-[110px] py-16 sm:py-[120px]">
      <div className="container  xl:px-0 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 ">
          
          <div className="lg:col-span-8">
       
            {article.image?.url && (
              <div className="relative w-full h-[420px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={article.image.url}
                  alt={article.image.alternativeText || article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-[#1A1A1A] mb-6">
              {article.title}
            </h1>


            <p className="text-gray-600 font-inter! mb-6">
              {article.description}
            </p>

            {/* Content */}
            {detailBlock && (
              <article className="prose max-w-none prose-p:leading-relaxed prose-p:text-gray-700">
                <p className="whitespace-pre-line">
                  {detailBlock.content}
                </p>
              </article>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-4">
            
            <div className=" p-5 rounded-lg">
              <h3 className="font-semibold mb-4">Search Post</h3>
              <div className="flex">
                <input
                  name="search"
                  // onChange={handelChange}
                  type="text"
                  placeholder="Enter Keyword"
                  className="w-full border px-3 py-2 text-sm outline-none"
                />
                <button className="bg-orange-500 text-white px-4">
                  Search
                </button>
              </div>
            </div>
          
            <div className=" p-5 rounded-lg">
              <h3 className="font-semibold mb-4">Recent Post</h3>

              <div className="space-y-5">
                {recent?.map((item : any) => (
                  <div
                    key={item}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-20 h-16  bg-gray-200 rounded-md shrink-0" >
                      <Image
                        src={item.image?.url}
                        alt={item.image?.alternativeText || item.title}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full rounded-md transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <Link href={`/news-and-events/${item.slug}`} className="text-sm font-medium line-clamp-2 leading-snug group-hover:text-orange-500 transition">
                        {item.title}
                      </Link>
                      <p className="text-xs text-orange-500 mt-1">
                        February 28, 2024
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
