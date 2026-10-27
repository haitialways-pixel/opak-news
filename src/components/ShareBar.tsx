import { useCallback, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { LocalizedText } from "../types";

interface Props {
  storyId: string;
  headline: LocalizedText;
  /** Compact icons for home cards; full row on story pages. */
  variant?: "detail" | "card";
}

function storyAbsoluteUrl(storyId: string): string {
  if (typeof window === "undefined") {
    return `https://opak-news.haitialways.workers.dev/story/${storyId}`;
  }
  return `${window.location.origin}/story/${storyId}`;
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.016 3.657 9.176 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.48h-1.26c-1.243 0-1.63.778-1.63 1.577v1.896h2.773l-.443 2.91h-2.33V22c4.781-.764 8.438-4.924 8.438-9.94z"
      />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zm8.75 1.75a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
      />
    </svg>
  );
}

export function ShareBar({ storyId, headline, variant = "detail" }: Props) {
  const { ui } = useLanguage();
  const [copied, setCopied] = useState(false);

  const url = storyAbsoluteUrl(storyId);
  // Prefer Creole headline for share text
  const shareText = headline.ht || headline.fr;

  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  const copyForInstagram = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2500);
      } finally {
        document.body.removeChild(ta);
      }
    }
  }, [url]);

  return (
    <div
      className={`share-bar share-bar--${variant}`}
      role="group"
      aria-label={ui.shareLabel}
    >
      {variant === "detail" && (
        <span className="share-bar-label">{ui.shareLabel}</span>
      )}
      <div className="share-bar-actions">
        <a
          className="share-btn share-btn--x"
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ui.shareOnX}
          title={ui.shareOnX}
        >
          <IconX className="share-icon" />
          {variant === "detail" && <span className="share-btn-text">X</span>}
        </a>
        <a
          className="share-btn share-btn--facebook"
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ui.shareOnFacebook}
          title={ui.shareOnFacebook}
        >
          <IconFacebook className="share-icon" />
          {variant === "detail" && (
            <span className="share-btn-text">Facebook</span>
          )}
        </a>
        <button
          type="button"
          className="share-btn share-btn--instagram"
          onClick={copyForInstagram}
          aria-label={ui.shareOnInstagram}
          title={ui.instagramHint}
        >
          <IconInstagram className="share-icon" />
          {variant === "detail" && (
            <span className="share-btn-text">Instagram</span>
          )}
        </button>
      </div>
      {variant === "detail" && (
        <p className="share-hint" aria-live="polite">
          {copied ? ui.linkCopied : ui.instagramHint}
        </p>
      )}
      {variant === "card" && copied && (
        <span className="share-copied-toast" aria-live="polite">
          {ui.linkCopied}
        </span>
      )}
    </div>
  );
}
