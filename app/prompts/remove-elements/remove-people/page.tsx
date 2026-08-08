export const metadata = {
  title: "AI Prompt to Remove People from Photo | RemixKit",
  description:
    "Use this AI prompt to remove people or subjects from a photo cleanly and naturally.",
};

const promptText = `Remove all people from the scene while preserving the original background. Fill the empty space naturally, keeping textures and lighting consistent.`;

export default function RemovePeoplePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Remove People from Photo
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Copy this prompt to erase people from a photo while reconstructing
            the background naturally.
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
            It focuses the AI on removing people while reconstructing the
            background in place. That avoids generating unrelated content and
            keeps the edit looking seamless.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>Upload the original photo with people you want removed.</li>
            <li>Select an inpainting or background repair mode.</li>
            <li>
              Run the edit and inspect the filled background for consistency.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for removing people
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: inpainting or photo repair</li>
            <li>Resolution: 1920x1080 or higher</li>
            <li>Lighting: match existing scene lighting</li>
            <li>Detail: preserve texture and background depth</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The final image should show the scene without people, with natural
            background continuation and no obvious repairs. Shadows and textures
            should remain consistent with the original photo.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Related prompts
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/remove-elements/remove-watermark"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to remove watermark from image
            </a>
            <a
              href="/prompts/change-background/office"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to change background to office
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
