import Link from "next/link";

const categories = [
  {
    slug: "change-background",
    title: "Change Background Prompts",
    description:
      "AI prompts for swapping backgrounds, including office, beach, and sunset sky edits.",
    pages: [
      { title: "Office Background", href: "/prompts/change-background/office" },
      { title: "Beach Background", href: "/prompts/change-background/beach" },
      { title: "Sunset Sky Background", href: "/prompts/change-background/sunset-sky" },
    ],
  },
  {
    slug: "portrait-enhancement",
    title: "Portrait Enhancement Prompts",
    description:
      "AI prompts for headshots, sharpening portraits, and magazine-style image edits.",
    pages: [
      { title: "Professional Headshot", href: "/prompts/portrait-enhancement/professional-headshot" },
      { title: "Sharpen Blurry Portrait", href: "/prompts/portrait-enhancement/sharpen-blurry-portrait" },
      { title: "Magazine Cover Look", href: "/prompts/portrait-enhancement/magazine-cover" },
    ],
  },
  {
    slug: "remove-elements",
    title: "Remove Elements Prompts",
    description: "AI prompts for removing people, watermarks, and unwanted objects.",
    pages: [
      { title: "Remove People", href: "/prompts/remove-elements/remove-people" },
      { title: "Remove Watermark", href: "/prompts/remove-elements/remove-watermark" },
    ],
  },
  {
    slug: "creative-mood",
    title: "Creative Mood Prompts",
    description: "AI prompts for cinematic color, mood lighting, and dramatic photo edits.",
    pages: [
      { title: "Cinematic Look", href: "/prompts/creative-mood/cinematic-look" },
      { title: "Add Mood Lighting", href: "/prompts/creative-mood/add-mood-lighting" },
    ],
  },
];

export const metadata = {
  title: "AI Image Prompt Categories | RemixKit",
  description:
    "Browse the best AI image editing prompt categories for background swaps, portrait enhancements, object removal, and cinematic mood edits.",
};

export default function PromptCategories() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
          Prompt Categories
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          AI Image Editing Prompts for Photo Retouching
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
          Fast, ready-to-copy AI prompt pages for everyday photo editing tasks like background changes, headshots, and cinematic effects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <section key={category.slug} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">
              {category.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {category.description}
            </p>
            <div className="mt-6 space-y-3">
              {category.pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="block rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-100"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
