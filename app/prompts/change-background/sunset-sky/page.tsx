export const metadata = {
  title: "AI Prompt to Change Sky to Sunset | RemixKit",
  description:
    "Copy this AI prompt to replace a photo sky with a dramatic sunset while keeping the subject intact.",
};

const promptText = `Change the sky to a vibrant sunset with orange, pink, and purple tones. Preserve the subject and foreground detail, and keep the lighting harmonious with the new sky.`;

export default function SunsetSkyPromptPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">
            AI Image Prompt
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            AI Prompt to Change Sky to Sunset
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            Transform any outdoor photo by replacing the sky with a warm, cinematic sunset scene.
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
            The prompt directs the model to replace only the sky and maintain the subject, which helps prevent the tool from redesigning the whole scene. Including color tones and lighting cues makes the sunset look realistic.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            How to use this prompt
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Paste the prompt into your AI editor.</li>
            <li>Upload the photo with a visible sky area.</li>
            <li>Choose a realistic or cinematic style.</li>
            <li>Run the edit and verify the sky colors match the subject lighting.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Best settings for sunset sky edits
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-600 leading-7">
            <li>Model: realistic, cinematic, or landscape</li>
            <li>Resolution: 1920x1080 or higher</li>
            <li>Lighting: warm sunset shadows</li>
            <li>Composition: keep horizon straight and sky detail rich</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Example result
          </h2>
          <p className="text-neutral-600 leading-7">
            Expect an edited sky with vivid pink and orange clouds, softer light, and a natural transition between the sky and foreground. The subject should retain original texture and color tones.
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Related prompts</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/prompts/change-background/beach"
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              AI prompt to replace background with beach
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
