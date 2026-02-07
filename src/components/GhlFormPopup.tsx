import { useEffect, useMemo, useState } from "react";

const FORM_URL =
  "https://link.nuvra-automation.com/widget/form/3co3chEFZbK0Oh7i6eGM?notrack=true";

// Ajuste ces valeurs si tu veux
const AUTO_OPEN_MS = 1200; // s’ouvre tout seul après 1.2s
const DISMISS_DAYS = 7;    // si la personne ferme, on ne réaffiche pas pendant 7 jours

export default function GhlFormPopup() {
  const [open, setOpen] = useState(false);

  const storageKey = useMemo(() => "nuvra_newsletter_popup_dismissed_until_v1", []);
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

  // Auto-open
  useEffect(() => {
    if (AUTO_OPEN_MS <= 0) return;
    if (isDismissed) return;

    const t = window.setTimeout(() => setOpen(true), AUTO_OPEN_MS);
    return () => window.clearTimeout(t);
  }, [isDismissed]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ✅ Fix décalage horizontal: lock scroll + compense la scrollbar
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

  return (
    <div
      style={s.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div style={s.modal} role="dialog" aria-modal="true">
        <button type="button" onClick={dismiss} style={s.close} aria-label="Fermer">
          ×
        </button>

        <div style={s.badge}>INFOLETTRE</div>
        <h2 style={s.title}>Reçois nos meilleurs insights (1–2x/semaine).</h2>
        <p style={s.subtitle}>
          Automatisation, IA, templates, et stratégies concrètes — zéro spam.
        </p>

        <div style={s.iframeWrap}>
          <iframe
            title="Nuvra Newsletter"
            src={FORM_URL}
            style={s.iframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div style={s.footerRow}>
          <button type="button" onClick={dismiss} style={s.secondary}>
            Pas maintenant
          </button>
        </div>

        <p style={s.fineprint}>
          En t’inscrivant, tu acceptes de recevoir des courriels. Désinscription en tout temps.
        </p>
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


