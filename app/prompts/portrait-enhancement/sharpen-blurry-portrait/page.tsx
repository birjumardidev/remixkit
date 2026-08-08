export const metadata = {
  title: "AI Prompt to Sharpen Blurry Portrait | RemixKit",
  description:
    "Use this AI prompt to sharpen and clarify a blurry portrait while preserving natural features.",
};

const promptText = `Sharpen the portrait and clarify facial details. Keep skin texture natural, reduce blur, maintain original lighting, and preserve the subject's expression.`;

export default function SharpenBlurryPortraitPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Sharpen Blurry Portrait
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Apply this prompt to improve a soft or unfocused portrait without creating an over-processed result.
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
            It asks the model to sharpen details while preserving natural skin texture and lighting. This prevents the AI from producing overly smooth or artificial skin while improving clarity.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>Upload a portrait that needs sharpening.</li>
            <li>Choose a realistic or photography style.</li>
            <li>Run the edit and verify facial details are clearer without harsh artifacts.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for portrait sharpening
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: portrait or photography</li>
            <li>Resolution: 1080x1350 or higher</li>
            <li>Lighting: natural or soft studio light</li>
            <li>Detail: medium to high clarity</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The edited image should show sharper eyes, lips, and hair without a plastic or oversmoothed finish. The subject should still look natural and not over-edited.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Related prompts</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/portrait-enhancement/professional-headshot"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to make selfie look professional headshot
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
