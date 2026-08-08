export const metadata = {
  title: "AI Prompt to Create Cinematic Photo | RemixKit",
  description:
    "Use this AI prompt to give your photo a cinematic mood with dramatic lighting and color.",
};

const promptText = `Make this photo cinematic with dramatic lighting, deep contrast, subtle film grain, and moody color tones. Keep the subject sharp and preserve natural shadows.`;

export default function CinematicLookPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Create Cinematic Photo
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Copy this prompt to turn any image into a cinematic scene with moody
            color grading and strong lighting.
          </p>
        </header>

        <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-sm font-semibold text-neutral-900">Prompt</p>
          <pre className="mt-3 rounded-2xl bg-white p-5 text-sm text-neutral-700 ring-1 ring-neutral-200 whitespace-pre-wrap break-words">
            {promptText}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Why this prompt works
          </h2>
          <p className="text-neutral-600 leading-7">
            The prompt is tuned for cinematic color tones, controlled contrast,
            and mood lighting. That encourages the model to keep the subject
            crisp while rendering a stylized movie-like finish.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>Upload the photo and choose a cinematic or film style.</li>
            <li>Select a medium-to-high contrast setting.</li>
            <li>
              Run the edit and inspect the lighting depth and color saturation.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for cinematic edits
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: cinematic, film, or editorial</li>
            <li>Resolution: 1920x1080 or higher</li>
            <li>Lighting: dramatic and directional</li>
            <li>Color: muted highlights, deep shadows</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The output should look like a still from a film, with strong mood,
            cinematic depth, and a natural subject. The shot should feel
            intentional, not oversaturated.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Related prompts
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/creative-mood/add-mood-lighting"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to add mood lighting to portrait
            </a>
            <a
              href="/prompts/portrait-enhancement/magazine-cover"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to turn photo into magazine cover
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
