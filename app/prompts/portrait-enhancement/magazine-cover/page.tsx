export const metadata = {
  title: "AI Prompt to Turn Photo into Magazine Cover | RemixKit",
  description:
    "Use this AI prompt to make a photo look like a glossy magazine cover with dramatic styling.",
};

const promptText = `Turn this photo into a polished magazine cover. Keep the subject prominent, add editorial lighting, soft shadow, and a stylish background with subtle text layout hints.`;

export default function MagazineCoverPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Turn Photo into Magazine Cover
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Copy this prompt to turn any portrait into a high-end magazine cover edit with editorial lighting and refined styling.
          </p>
        </header>

        <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-sm font-semibold text-neutral-900">Prompt</p>
          <pre className="mt-3 rounded-2xl bg-white p-5 text-sm text-neutral-700 ring-1 ring-neutral-200">
            {promptText}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Why this prompt works
          </h2>
          <p className="text-neutral-600 leading-7">
            It gives the AI clear editorial direction while preserving the subject's presence. Adding magazine-style lighting and subtle design details makes the result feel polished, not overdone.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>Upload a portrait with good face visibility.</li>
            <li>Select a photography or editorial style.</li>
            <li>Run the edit and check for strong lighting and a polished finish.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for magazine cover edits
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: editorial or fashion photography</li>
            <li>Resolution: 1080x1350 or 1200x1600</li>
            <li>Lighting: dramatic, high-contrast studio light</li>
            <li>Composition: subject centered with strong focal depth</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The final image should appear like a stylish magazine cover with polished skin, moody lighting, and a subtle editorial backdrop. It should remain natural and not overly filtered.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Related prompts</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/creative-mood/cinematic-look"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to create cinematic photo
            </a>
            <a
              href="/prompts/portrait-enhancement/professional-headshot"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to make selfie look professional headshot
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
