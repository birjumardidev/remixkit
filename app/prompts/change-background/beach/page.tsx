export const metadata = {
  title: "AI Prompt to Replace Background with Beach | RemixKit",
  description:
    "Copy this AI prompt to transform any photo background into a tropical beach scene.",
};

const promptText = `Replace the background with a bright beach scene. Keep the subject in focus, include soft sand, ocean waves, palm trees, and warm golden hour light.`;

export default function BeachPromptPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Replace Background with Beach
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Use a ready-made prompt that turns any portrait or product photo into a realistic beach setting.
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
            It tells the model to preserve the original subject while adding specific beach details like sand, waves, and palm trees. The warm golden hour lighting reduces harshness and makes the transition appear natural.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>Upload the photo and choose a clear, high-resolution result.</li>
            <li>Select a style such as realistic, travel, or lifestyle.</li>
            <li>Run the edit and verify the subject blends with the beach scene.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for beach background edits
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: realistic or travel photography</li>
            <li>Resolution: 1920x1080 or higher</li>
            <li>Lighting: warm golden hour</li>
            <li>Composition: clear horizon and natural shadowing</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            The final output should look like the subject was photographed at the beach, with soft sand and ocean depth behind them, while keeping skin tones and details intact.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Related prompts</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/change-background/office"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to change background to office
            </a>
            <a
              href="/prompts/change-background/sunset-sky"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to change sky to sunset
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
