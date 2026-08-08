export const metadata = {
  title: "AI Prompt to Add Mood Lighting to Portrait | RemixKit",
  description:
    "Use this AI prompt to add mood lighting to a portrait for a cinematic effect.",
};

const promptText = `Add mood lighting to the portrait with soft colored highlights and subtle shadows. Keep the face natural, preserve the original pose, and create a dramatic yet realistic look.`;

export default function AddMoodLightingPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Add Mood Lighting to Portrait
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Copy this prompt to apply cinematic mood lighting to any portrait
            while preserving the subject’s natural look.
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
            It instructs the AI to add mood lighting intentionally, rather than
            randomly adjust brightness. This helps produce a dramatic image with
            natural shadows and highlights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>
              Upload a portrait and choose a cinematic or editorial style.
            </li>
            <li>Set lighting to soft or moody.</li>
            <li>Run the edit and confirm the subject still looks natural.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for mood lighting
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: cinematic or portrait</li>
            <li>Resolution: 1080x1350 or higher</li>
            <li>Lighting: soft directional or colored highlights</li>
            <li>Color: cool shadows, warm highlights</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The edited photo should have visible mood lighting effects while
            keeping the face clean and properly lit. The result should feel
            cinematic and professional.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Related prompts
          </h2>
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
