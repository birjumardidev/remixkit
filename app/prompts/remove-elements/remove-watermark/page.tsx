export const metadata = {
  title: "AI Prompt to Remove Watermark from Image | RemixKit",
  description:
    "Use this AI prompt to remove a watermark from an image while preserving the original background.",
};

const promptText = `Remove the watermark from the image. Reconstruct the background naturally and preserve the original colors, lighting, and texture.`;

export default function RemoveWatermarkPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Remove Watermark from Image
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Copy this prompt to cleanly remove a watermark while keeping the image’s original background intact.
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
            It tells the AI to remove only the watermark and restore the background. This reduces the chance of the tool altering the rest of the image while keeping details consistent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>Upload the image with the watermark.</li>
            <li>Select inpainting or repair mode.</li>
            <li>Run the edit and verify the watermark area is filled naturally.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for watermark removal
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: inpainting or photo repair</li>
            <li>Resolution: same as the original image</li>
            <li>Lighting: match existing image lighting</li>
            <li>Detail: preserve texture and fine edges</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The final image should look identical to the original, except the watermark is gone and the removed area blends seamlessly with the surrounding background.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Related prompts</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/remove-elements/remove-people"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to remove people from photo
            </a>
            <a
              href="/prompts/creative-mood/cinematic-look"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to create cinematic photo
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
