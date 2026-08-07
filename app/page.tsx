"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Copy, Check, ImageIcon, Wand2, X } from "lucide-react";
import { supabase, type Prompt } from "@/lib/supabase";
import { FILTER_PILLS, categoryClass, categoryEmoji } from "@/lib/categories";
import { cn } from "@/lib/utils";

const PIN_ASPECTS = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[2/3]",
  "aspect-[5/4]",
  "aspect-[3/5]",
];

function pinAspect(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash + id.charCodeAt(i)) % PIN_ASPECTS.length;
  }
  return PIN_ASPECTS[hash];
}

export default function GalleryPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Prompt | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("prompts")
        .select("*")
        .order("created_at", { ascending: false });
      if (cancelled) return;
      if (error) {
        setError(error.message);
      } else {
        setPrompts((data as Prompt[]) ?? []);
      }
      setLoading(false);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  const handleCopy = useCallback(async (p: Prompt) => {
    try {
      await navigator.clipboard.writeText(p.prompt_text);
      setCopiedId(p.id);
      setTimeout(() => setCopiedId((id) => (id === p.id ? null : id)), 2000);
    } catch {
      setCopiedId(p.id);
      setTimeout(() => setCopiedId((id) => (id === p.id ? null : id)), 2000);
    }
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return prompts.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.prompt_text.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [prompts, activeCategory, query]);

  return (
    <div className="min-h-screen bg-white">
      <Header query={query} onQueryChange={setQuery} />

      <main className="mx-auto max-w-[1600px] px-3 pb-20 pt-4 sm:px-4 md:px-6 lg:px-8">
        {/* Category pills */}
        <div className="sticky top-[72px] z-30 -mx-3 mb-6 bg-white/95 px-3 py-3 backdrop-blur-sm sm:-mx-4 sm:px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
            {FILTER_PILLS.map((pill) => {
              const active = activeCategory === pill.value;
              return (
                <button
                  key={pill.value}
                  onClick={() => setActiveCategory(pill.value)}
                  className={cn(
                    "pill",
                    active ? "pill-active" : "pill-inactive",
                  )}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-4 text-sm text-neutral-500">
          {loading
            ? "Loading prompts..."
            : `${filtered.length} ${filtered.length === 1 ? "idea" : "ideas"}`}
        </p>

        {/* States */}
        {error ? (
          <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-10 text-center">
            <p className="text-sm font-medium text-red-700">
              Couldn&apos;t load prompts.
            </p>
            <p className="mt-1 text-xs text-red-500">{error}</p>
          </div>
        ) : loading ? (
          <MasonrySkeleton />
        ) : filtered.length === 0 ? (
          <EmptyState hasPrompts={prompts.length > 0} />
        ) : (
          <div className="masonry-grid">
            {filtered.map((p) => (
              <PinCard
                key={p.id}
                prompt={p}
                copied={copiedId === p.id}
                onCopy={() => handleCopy(p)}
                onOpen={() => setSelected(p)}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-neutral-100 py-8 text-center text-xs text-neutral-400">
        RemixKit — curated AI image editing prompts
      </footer>

      {selected && (
        <PinModal
          prompt={selected}
          copied={copiedId === selected.id}
          onCopy={() => handleCopy(selected)}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

function Header({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (v: string) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-3 py-3 sm:gap-4 sm:px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900">
            <Wand2 className="h-[18px] w-[18px] text-white" />
          </div>
          <span className="hidden text-xl font-bold tracking-tight text-neutral-900 sm:block">
            RemixKit
          </span>
        </Link>

        {/* Search — Pinterest-style centered bar */}
        <div className="relative mx-auto w-full max-w-2xl flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search for prompts"
            className="search-input"
          />
        </div>

        {/* Admin link */}
        <Link
          href="/admin"
          className="btn-primary hidden shrink-0 sm:inline-flex"
        >
          Create
        </Link>
        <Link
          href="/admin"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white sm:hidden"
          aria-label="Create prompt"
        >
          <Wand2 className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

function PinCard({
  prompt,
  onOpen,
}: {
  prompt: Prompt;
  copied: boolean;
  onCopy: () => void;
  onOpen: () => void;
}) {
  return (
    <article className="pin-card group masonry-item">
      <div className="pin-image-wrap">
        <button
          type="button"
          onClick={onOpen}
          className="block w-full cursor-pointer text-left"
          aria-label={`Preview ${prompt.title}`}
        >
          {prompt.image_url ? (
            <div className={cn("relative w-full", pinAspect(prompt.id))}>
              <Image
                src={prompt.image_url}
                alt={prompt.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div
              className={cn(
                "flex w-full items-center justify-center bg-neutral-100",
                pinAspect(prompt.id),
              )}
            >
              <ImageIcon className="h-8 w-8 text-neutral-300" />
            </div>
          )}
        </button>

        {/* Hover hint — desktop only */}
        <div className="pin-overlay hidden sm:flex pointer-events-none">
          <div />
          <div>
            <p className="line-clamp-2 text-sm font-semibold text-white drop-shadow">
              {prompt.title}
            </p>
            <span
              className={cn(
                "mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                categoryClass(prompt.category),
              )}
            >
              {categoryEmoji(prompt.category)} {prompt.category}
            </span>
          </div>
        </div>
      </div>

      {/* Title below pin — mobile */}
      <button
        type="button"
        onClick={onOpen}
        className="mt-2 w-full px-1 text-left sm:hidden"
      >
        <p className="line-clamp-2 text-sm font-semibold text-neutral-900">
          {prompt.title}
        </p>
        <span
          className={cn(
            "mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
            categoryClass(prompt.category),
          )}
        >
          {categoryEmoji(prompt.category)} {prompt.category}
        </span>
      </button>
    </article>
  );
}

function PinModal({
  prompt,
  copied,
  onCopy,
  onClose,
}: {
  prompt: Prompt;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-3 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={prompt.title}
    >
      <div
        className="relative flex w-full max-w-[360px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[min(88vh,480px)] sm:max-w-[640px] sm:flex-row md:max-w-[720px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 sm:right-3 sm:top-3"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image — full image visible, no crop */}
        <div className="flex h-[200px] shrink-0 items-center justify-center bg-neutral-100 p-2 sm:h-auto sm:w-[44%] sm:min-h-[320px] sm:max-h-[min(88vh,480px)] sm:p-3">
          {prompt.image_url ? (
            <div className="relative h-full w-full">
              <Image
                src={prompt.image_url}
                alt={prompt.title}
                fill
                sizes="(max-width: 640px) 340px, 320px"
                className="object-contain"
              />
            </div>
          ) : (
            <ImageIcon className="h-10 w-10 text-neutral-300" />
          )}
        </div>

        {/* Prompt + actions — fits without scroll */}
        <div className="flex min-h-0 flex-1 flex-col p-3.5 sm:p-4 sm:pr-5">
          <div className="mb-2 shrink-0 pr-6">
            <h2 className="line-clamp-1 text-sm font-bold text-neutral-900 sm:text-base">
              {prompt.title}
            </h2>
            <span
              className={cn(
                "mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px]",
                categoryClass(prompt.category),
              )}
            >
              {categoryEmoji(prompt.category)} {prompt.category}
            </span>
          </div>

          <div className="mb-3 min-h-0 flex-1 rounded-xl bg-neutral-50 px-3 py-2.5 sm:px-3.5 sm:py-3">
            <p className="line-clamp-[8] text-[11px] leading-[1.45] text-neutral-600 sm:line-clamp-[11] sm:text-xs sm:leading-[1.5]">
              {prompt.prompt_text}
            </p>
          </div>

          <button
            type="button"
            onClick={onCopy}
            className={cn(
              "flex w-full shrink-0 items-center justify-center gap-2 rounded-full py-2.5 text-xs font-semibold transition sm:py-3 sm:text-sm",
              copied
                ? "bg-emerald-500 text-white"
                : "bg-neutral-900 text-white hover:bg-neutral-700",
            )}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Copy Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function MasonrySkeleton() {
  return (
    <div className="masonry-grid">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="masonry-item animate-pulse">
          <div
            className={cn(
              "rounded-2xl bg-neutral-100",
              PIN_ASPECTS[i % PIN_ASPECTS.length],
            )}
          />
          <div className="mt-2 h-4 w-3/4 rounded bg-neutral-100 sm:hidden" />
        </div>
      ))}
    </div>
  );
}

function EmptyState({ hasPrompts }: { hasPrompts: boolean }) {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-neutral-200 bg-neutral-50 p-12 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
        <Wand2 className="h-7 w-7 text-neutral-700" />
      </div>
      <h3 className="text-lg font-bold text-neutral-900">
        {hasPrompts ? "No matches found" : "No prompts yet"}
      </h3>
      <p className="mt-2 text-sm text-neutral-500">
        {hasPrompts
          ? "Try a different category or search term."
          : "Create your first prompt to get started."}
      </p>
      {!hasPrompts && (
        <Link href="/admin" className="btn-primary mt-6">
          <Wand2 className="h-4 w-4" />
          Create Prompt
        </Link>
      )}
    </div>
  );
}
