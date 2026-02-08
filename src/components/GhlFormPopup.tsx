import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FORM_URL_FR =
  "https://link.nuvra-automation.com/widget/form/3co3chEFZbK0Oh7i6eGM?notrack=true";

const FORM_URL_EN =
  "https://link.nuvra-automation.com/widget/form/ndyQYG75r4lh6U0m6STZ?notrack=true";

const AUTO_OPEN_MS = 1200;
const DISMISS_DAYS = 7;

export default function GhlFormPopup() {
  const { language } = useLanguage(); // suppose "fr" | "en"
  const [open, setOpen] = useState(false);

  const formUrl = language === "en" ? FORM_URL_EN : FORM_URL_FR;

  const storageKey = useMemo(
    () => `nuvra_newsletter_popup_dismissed_until_v3_${language}`,
    [language]
  );

  const isDismissed = useMemo(() => {
    const raw = localStorage.getItem(storageKey);
    const until = raw ? Number(raw) : 0;
    return Number.isFinite(until) && until > Date.now();
  }, [storageKey]);

  const dismiss = () => {
    const until = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(storageKey, String(until));
    setOpen(false);
  };

  // Auto-open (selon langue courante)
  useEffect(() => {
    if (AUTO_OPEN_MS <= 0) return;
    if (isDismissed) return;

    const t = window.setTimeout(() => setOpen(true), AUTO_OPEN_MS);
    return () => window.clearTimeout(t);
  }, [isDismissed]);

  // Ouvre automatiquement si la personne switch en anglais
  const prevLangKey = "nuvra_prev_lang_v1";
  useEffect(() => {
    const prev = localStorage.getItem(prevLangKey) || "fr";
    if (prev !== language) {
      localStorage.setItem(prevLangKey, language);
      if (language === "en" && !isDismissed) setOpen(true);
    }
  }, [language, isDismissed]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Lock scroll + compense scrollbar (anti-shift)
  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const html = document.documentElement;

    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - html.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  if (!open) return null;

  const badge = language === "en" ? "NEWSLETTER" : "INFOLETTRE";
  const title =
    language === "en"
      ? "Get our best insights (1–2x/week)."
      : "Reçois nos meilleurs insights (1–2x/semaine).";
  const subtitle =
    language === "en"
      ? "Automation, AI, templates, and practical strategies — no spam."
      : "Automatisation, IA, templates, et stratégies concrètes — zéro spam.";
  const notNow = language === "en" ? "Not now" : "Pas maintenant";
  const fineprint =
    language === "en"
      ? "By subscribing, you agree to receive emails. Unsubscribe anytime."
      : "En t’inscrivant, tu acceptes de recevoir des courriels. Désinscription en tout temps.";

  return (
    <div
      style={s.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div style={s.modal} role="dialog" aria-modal="true">
        <button type="button" onClick={dismiss} style={s.close} aria-label="Close">
          ×
        </button>

        <div style={s.badge}>{badge}</div>
        <h2 style={s.title}>{title}</h2>
        <p style={s.subtitle}>{subtitle}</p>

        <div style={s.iframeWrap}>
          <iframe
            title="Nuvra Newsletter"
            src={formUrl}
            style={s.iframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={s.footerRow}>
          <button type="button" onClick={dismiss} style={s.secondary}>
            {notNow}
          </button>
        </div>

        <p style={s.fineprint}>{fineprint}</p>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    background: "rgba(0,0,0,.68)",
    backdropFilter: "blur(8px)",
  },
  modal: {
    width: "min(860px, 100%)",
    background: "rgba(12,12,12,.94)",
    border: "1px solid rgba(212,175,55,.35)",
    borderRadius: 18,
    boxShadow: "0 24px 90px rgba(0,0,0,.55)",
    padding: 18,
    position: "relative",
    color: "#fff",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  close: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 38,
    height: 38,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    color: "#fff",
    fontSize: 22,
    cursor: "pointer",
  },
  badge: {
    display: "inline-block",
    fontSize: 12,
    letterSpacing: ".12em",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(212,175,55,.5)",
    color: "#D4AF37",
    marginBottom: 10,
  },
  title: { margin: "0 0 6px", fontSize: 22, lineHeight: 1.2 },
  subtitle: { margin: "0 0 14px", color: "rgba(255,255,255,.78)", fontSize: 14.5 },
  iframeWrap: {
    width: "100%",
    height: "min(72vh, 680px)",
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.08)",
    background: "rgba(255,255,255,.03)",
  },
  iframe: { width: "100%", height: "100%", border: 0 },
  footerRow: { display: "flex", justifyContent: "flex-end", marginTop: 12 },
  secondary: {
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.12)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700,
  },
  fineprint: {
    margin: "12px 0 0",
    fontSize: 12,
    color: "rgba(255,255,255,.55)",
  },
};


