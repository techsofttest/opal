
export const BlogContent = ({ post }: { post: string }) => {
  return (
    <article className="bg-paper p-7 sm:p-12 rounded-[10px]">
      <div className="prose prose-slate max-w-none text-ink">
        <div
          className="
            [&_p]:text-ink-2 [&_p]:text-[1rem] [&_p]:leading-relaxed [&_p]:mb-4

            [&_p_strong]:text-[1.12rem] [&_p_strong]:leading-relaxed [&_p_strong]:text-ink [&_p_strong]:font-medium
            [&_h2]:heading-display [&_h2]:text-[1.65rem] sm:[&_h2]:text-[1.85rem] [&_h2]:text-palm [&_h2]:font-[family-name:var(--display)] [&_h2]:mb-4 [&_h2]:mt-6
            [&_h3]:heading-display [&_h3]:text-[1.4rem] [&_h3]:text-palm [&_h3]:mb-3 [&_h3]:font-[family-name:var(--display)]
            [&_h4]:heading-display [&_h4]:text-[1.4rem] [&_h4]:text-palm [&_h3]:mb-3 [&_h4]:font-[family-name:var(--display)] [&_hr]:hidden
            [&_hr:has(+_h4)]:block [&_hr:has(+_h4)]:border-0 [&_hr:has(+_h4)]:h-0 [&_hr:has(+_h4)]:mt-8 [&_hr:has(+_h4)]:mb-0
            [&_h4:has(+_ul)]:bg-sand [&_h4:has(+_ul)]:font-mono [&_h4:has(+_ul)]:text-[0.75rem] [&_h4:has(+_ul)]:uppercase [&_h4:has(+_ul)]:tracking-wider [&_h4:has(+_ul)]:text-palm [&_h4:has(+_ul)]:font-bold [&_h4:has(+_ul)]:px-6 [&_h4:has(+_ul)]:pt-6 [&_h4:has(+_ul)]:pb-3 [&_h4:has(+_ul)]:mb-0

            [&_h4+ul]:bg-sand [&_h4+ul]:px-6 [&_h4+ul]:pt-2 [&_h4+ul]:pb-6 [&_h4+ul]:m-0 [&_h4+ul]:list-none [&_h4+ul]:rounded-b-[8px]
            [&_ul]:space-y-2.5 [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:text-[0.93rem] [&_li]:text-ink

            [&_li]:before:content-['✓'] [&_li]:before:text-leaf [&_li]:before:font-bold [&_li]:before:shrink-0
          "
          dangerouslySetInnerHTML={{ __html: post }}
        />
      </div>
    </article>
  );
};
