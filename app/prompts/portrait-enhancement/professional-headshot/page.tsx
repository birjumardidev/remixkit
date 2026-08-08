export const metadata = {
  title: "AI Prompt to Make Selfie Look Professional Headshot | RemixKit",
  description:
    "Use this AI prompt to convert a selfie into a polished professional headshot.",
};

const promptText = `Transform this selfie into a polished professional headshot. Keep skin texture natural, adjust lighting for studio clarity, add soft focus to the background, and keep the subject centered.`;

export default function ProfessionalHeadshotPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Make Selfie Look Professional Headshot
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Copy this prompt to turn a casual selfie into a clean, professional
            headshot with natural lighting and studio polish.
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
            It instructs the model to keep the person’s natural features while
            applying studio-level lighting and background blur. That combination
            produces a professional result without making the face look
            over-processed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI tool.</li>
            <li>Upload a selfie and choose a headshot or portrait style.</li>
            <li>Select a clean backdrop or soft-focus background option.</li>
            <li>
              Run the edit and check for clear facial detail and balanced light.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for professional headshots
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: portrait, studio, or headshot</li>
            <li>Resolution: 1080x1350 or higher</li>
            <li>Lighting: soft, even studio lighting</li>
            <li>Composition: subject centered with clean background</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The edit should show a crisp, well-lit headshot with soft background
            blur and natural skin tones. The final image should look ready for
            LinkedIn, resumes, or corporate bios.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Related prompts
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/portrait-enhancement/sharpen-blurry-portrait"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to sharpen blurry portrait
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
