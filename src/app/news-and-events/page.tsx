import { getArticles } from "@/lib/api/blogAPI";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export default async function Page() {
  const articles = await getArticles();
  // const route = useRouter();

  return (
    <div className="mt-[85px] lg:mt-[100px]">
      <section className="bg-[#7A7673] py-24 sm:py-[120px] text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          News & Events
        </h1>
      </section>

      <section className="py-20 sm:py-[120px]">
        <div className="container xl:px-0 px-2">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((item: any) => (
              <div
                key={item.id}
                className="group border font-inter border-[#EBECF0] bg-white rounded-xl overflow-hidden transition hover:shadow-lg h-[480px] flex flex-col"
              >
              <Link
                  href={`/news-and-events/${item.slug}`}
                  className="relative h-80 w-full block overflow-hidden"
                >
                  <Image
                    src={item.image?.url}
                    alt={item.image?.alternativeText || item.title}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* TEXT */}
                <div className="p-6 flex flex-col h-full">
                  <Link href={`/news-and-events/${item.slug}`} className="text-lg md:text-xl font-semibold text-[#1A1A1A] leading-snug">
                    {item.title}
                  </Link>

                  <p className="mt-3 text-sm md:text-base text-[#6F7377] leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
{/* <h1 className="sm:text-xl mb-1 text-lg font-inter"><span className="text-orange-500">{item?.type}</span> . {format(item?.createdAt, "dd MMM yyyy")}</h1> */}
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/news-and-events/${item.slug}`}
                      className="inline-flex items-center text-[#F36A10] font-medium group"
                    >
                      <span>Read More</span>
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}