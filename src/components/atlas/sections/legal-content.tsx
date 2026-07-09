export type AtlasLegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalContent({
  sections,
}: {
  sections: AtlasLegalSection[];
}) {
  return (
    <section className="py-[100px] bg-white">
      <div className="atlas-container flex flex-col gap-[64px]">
        {sections.map((section) => (
          <article key={section.title} className="flex flex-col gap-6">
            <h2 className="text-[32px] font-medium leading-[1.2] text-black m-0">{section.title}</h2>
            <div className="flex flex-col gap-4">
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-[1.6] font-normal text-atlas-muted-text m-0 max-w-[800px]">
                  {paragraph}
                </p>
              ))}
              {section.bullets?.map((bullet) => (
                <p key={bullet} className="text-lg leading-[1.6] font-normal text-atlas-muted-text m-0 max-w-[800px]">
                  • {bullet}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
