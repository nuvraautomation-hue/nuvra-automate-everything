import { useEffect, useMemo, useState } from "react";

const FORM_URL =
  "https://link.nuvra-automation.com/widget/form/3co3chEFZbK0Oh7i6eGM?notrack=true";

export default function GhlFormPopup() {
  const [open, setOpen] = useState(false);

  const storageKey = useMemo(() => "nuvra_ghl_popup_dismissed_until_v1", []);
  const isDismissed = useMemo(() => {
    const raw = localStorage.getItem(storageKey);
    const until = raw ? Number(raw) : 0;
    return Number.isFinite(until) && until > Date.now();
  }, [storageKey]);

  const dismiss = () => {
    const days = 3;
    const until = Date.now() + days * 24 * 60 * 60 * 1000;
    localStorage.setItem(storageKey, String(until));
    setOpen(false);
  };

  const openPopup = () => {
    if (!isDismissed) setOpen(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <button type="button" onClick={openPopup} style={s.trigger}>
        Obtenir l’analyse
      </button>

      {open && (
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

            <div style={s.badge}>FORMULAIRE</div>
            <h2 style={s.title}>Remplis ça en 60 secondes.</h2>
            <p style={s.subtitle}>Après l’envoi, tu peux fermer cette page.</p>

            <div style={s.iframeWrap}>
              <iframe
                title="Nuvra Form"
                src={FORM_URL}
                style={s.iframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="clipboard-write; fullscreen"
              />
            </div>

            <div style={s.footerRow}>
              <button type="button" onClick={dismiss} style={s.secondary}>
                Fermer
              </button>
            </div>

            <p style={s.fineprint}>
              En continuant, tu acceptes de recevoir des communications par courriel/SMS.
              Désinscription en tout temps.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  trigger: {
    position: "fixed",
    right: 18,
    bottom: 18,
    zIndex: 9998,
    borderRadius: 14,
    padding: "12px 14px",
    fontWeight: 800,
    border: "1px solid rgba(212,175,55,.35)",
    background: "linear-gradient(135deg, rgba(212,175,55,1), rgba(170,130,20,1))",
    color: "#0b0b0b",
    cursor: "pointer",
  },
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
    width: "min(900px, 100%)",
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
    height: "min(78vh, 720px)",
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

