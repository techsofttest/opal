import { BlogPost } from "@/lib/blogData";
import { FaCheck } from "react-icons/fa6";

interface BlogContentProps {
  post: BlogPost;
}

export const BlogContent = ({ post }: BlogContentProps) => {
  return (
    <article className="bg-paper p-7 sm:p-12 rounded-[10px]">
      <div className="prose prose-slate max-w-none text-ink">
        <p className="text-[1.12rem] leading-relaxed text-ink font-medium mb-8 pb-6">
          {post.content.intro}
        </p>

        {post.content.sections.map((section, idx) => (
          <div key={idx} className="mb-10 last:mb-0">
            <h2 className="heading-display text-[1.65rem] sm:text-[1.85rem] text-palm mb-4 mt-6">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, pIdx) => (
              <p
                key={pIdx}
                className="text-ink-2 text-[1rem] leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}

            {section.keyTakeaways && section.keyTakeaways.length > 0 && (
              <div className="my-6 p-5 sm:p-6 bg-sand rounded-[8px]">
                <div className="font-mono text-[0.75rem] uppercase tracking-wider text-palm font-bold mb-3">
                  Engineering Highlights
                </div>
                <ul className="space-y-2.5 m-0 p-0 list-none">
                  {section.keyTakeaways.map((item, kIdx) => (
                    <li
                      key={kIdx}
                      className="flex items-start gap-2.5 text-[0.93rem] text-ink"
                    >
                      <FaCheck className="text-leaf mt-1 shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="mt-10 pt-8">
          <h3 className="heading-display text-[1.4rem] text-palm mb-3">
            Conclusion &amp; Best Practice
          </h3>
          <p className="text-ink-2 text-[1.02rem] leading-relaxed italic">
            {post.content.conclusion}
          </p>
        </div>
      </div>
    </article>
  );
};

