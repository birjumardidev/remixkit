export const metadata = {
  title: "AI Prompt to Change Background to Office | RemixKit",
  description:
    "Use this AI prompt to change any photo background into a realistic office scene quickly.",
};

const promptText = `Replace the current background with a bright, modern office interior. Keep the subject natural, add desktop monitors, glass walls, warm lighting, and subtle depth blur.`;

export default function OfficePromptPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Change Background to Office
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Copy this ready-made AI prompt to transform a portrait or product
            photo into a professional office environment.
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
            This prompt is built for AI tools that understand scene composition
            and lighting. It tells the model to keep your subject natural while
            replacing the background with office-specific details like monitors,
            glass walls, and warm interior lighting.
          </p>
          <p className="text-neutral-600 leading-7">
            That combination helps avoid artificial cutouts and keeps the final
            image suitable for professional profiles, team pages, and
            work-related social media posts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>
              Paste the prompt into your AI image editor or text-to-image tool.
            </li>
            <li>
              Upload the original photo and choose a high-resolution output.
            </li>
            <li>Set the style to realistic or photo-realistic.</li>
            <li>Run the edit and review the office background quality.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for office background edits
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: realistic or professional photography</li>
            <li>Resolution: 1920x1080 or higher</li>
            <li>Lighting: warm, soft interior light</li>
            <li>
              Composition: keep subject centered and keep office depth visible
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The result should show the original person or product in a polished
            office scene with clear desk elements, subtle reflections, and
            natural shadows. Avoid harsh transitions between the subject and the
            new background by keeping the lighting consistent.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Related prompts
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/change-background/beach"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to replace background with beach
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
