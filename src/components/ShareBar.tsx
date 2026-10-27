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
    <svg className={className} viewBox="002424" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.2442.25h3.308l-7.2278.268.50211.24H16.17l-5.214-6.817L4.9921.75H1.68l7.73-8.835L1.2542.25H8.08l4.7136.231zm-1.16117.52h1.833L7.0844.126H5.117z"
      />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="002424" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M2212.06C226.50517.5232122S26.505212.06c05.0163.6579.1768.4389.94v-7.03H7.898v-2.91h2.54V9.845c0-2.5221.492-3.9153.777-3.9151.09402.238.1972.238.197v2.48h-1.26c-1.2430-1.63.778-1.631.577v1.896h2.773l-.4432.91h-2.33V22c4.781-.7648.438-4.9248.438-9.94z"
      />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="002424" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M7.752h8.5A5.755.75001227.75v8.5A5.755.7500116.2522h-8.5A5.755.75001216.25v-8.5A5.755.750017.752zm01.5A4.254.250003.57.75v8.5a4.254.250004.254.25h8.5a4.254.250004.25-4.25v-8.5a4.254.25000-4.25-4.25h-8.5zm8.751.75a1.1251.12501102.251.1251.1250010-2.25zM127a55011010550010-10zm01.5a3.53.5010073.53.50000-7z"
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
