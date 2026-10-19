/* Meta Pixel 940829541718246. PageView automático, sem aviso na abertura.
 * Não vincular eventos a nomes de pacientes, prescrições ou exercícios.
 * Respeita recusas salvas; preferências aparecem somente por ação no rodapé.
 */
(() => {
  if (window.__fisioPixelConsentReady) return;
  window.__fisioPixelConsentReady = true;
  const PIXEL_ID = "940829541718246";
  const STORAGE_KEY = "fisio-express-marketing-consent-v1";
  let pageViewSent = false;
  let panel;

  function readChoice() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function activate() {
    // O carregamento assíncrono segue o inicializador oficial da Meta.
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("consent", "grant");
    if (!pageViewSent) {
      // Desativa eventos automáticos e correspondência avançada por formulário.
      window.fbq("set", "autoConfig", false, PIXEL_ID);
      window.fbq("init", PIXEL_ID);
      window.fbq("track", "PageView");
      pageViewSent = true;
    }
  }

  function choose(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* Escolha vale nesta sessão. */
    }
    if (value === "accepted") activate();
    else if (window.fbq) window.fbq("consent", "revoke");
    panel?.remove();
    panel = undefined;
  }

  function showPreferences() {
    if (panel) return;
    panel = document.createElement("section");
    panel.className = "fisio-cookie-panel";
    panel.setAttribute("aria-labelledby", "fisio-cookie-title");
    panel.innerHTML = `<div><h2 id="fisio-cookie-title">Sua privacidade</h2><p>Podemos usar o Meta Pixel para medir visitas e o desempenho dos anúncios. Você decide se permite cookies de publicidade. O aplicativo funciona com qualquer opção. <a href="/privacidade" target="_blank" rel="noreferrer">Política de privacidade</a></p></div><div class="fisio-cookie-actions"><button type="button" data-choice="rejected">Recusar publicidade</button><button type="button" data-choice="accepted">Aceitar publicidade</button></div>`;
    for (const button of panel.querySelectorAll("[data-choice]")) {
      button.addEventListener("click", () => choose(button.dataset.choice));
    }
    document.body.appendChild(panel);
  }

  const style = document.createElement("style");
  style.textContent = `.fisio-cookie-panel{position:fixed;z-index:90;bottom:16px;left:16px;right:16px;max-width:1080px;margin:auto;padding:20px 24px;display:flex;align-items:center;gap:24px;border:1px solid #b8dace;border-radius:18px;background:#fff;box-shadow:0 10px 50px #12344d30;color:#19384b;font:13px/1.6 system-ui,sans-serif}.fisio-cookie-panel h2{font-size:16px;font-weight:750;margin:0 0 5px}.fisio-cookie-panel p{margin:0}.fisio-cookie-panel a{color:#08785e;text-decoration:underline;text-underline-offset:3px}.fisio-cookie-actions{display:flex;gap:10px;flex-shrink:0}.fisio-cookie-actions button{font:700 12px/1.4 system-ui,sans-serif;padding:12px 14px;border:1px solid #08785e;border-radius:9px;cursor:pointer;background:#fff;color:#08785e;min-height:44px}.fisio-cookie-actions button[data-choice=accepted]{background:#08785e;color:#fff}.fisio-cookie-panel :focus-visible{outline:3px solid #39b89a;outline-offset:3px}@media(max-width:767px){.fisio-cookie-panel{left:10px;right:10px;bottom:10px;padding:16px;flex-direction:column;align-items:stretch;gap:12px;max-height:70vh;overflow:auto}.fisio-cookie-actions{display:grid;grid-template-columns:1fr 1fr}}`;
  document.head.appendChild(style);
  window.addEventListener("fisio:privacy", showPreferences);
  if (readChoice() !== "rejected") activate();
})();
