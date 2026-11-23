/* VE2 feedback-generator — logica. Teksten staan in criteria.js. */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) if (c != null) node.append(c);
    return node;
  };

  // ---------- State ----------
  const state = {};
  function freshState() {
    LEARNING_OUTCOMES.forEach(lo => {
      state[lo.id] = { level: null, checked: new Set(), note: "", edited: false };
    });
  }
  freshState();

  // ---------- Text generation ----------
  function levelOf(value) { return LEVELS.find(l => l.value === value); }

  function buildLoText(lo) {
    const s = state[lo.id];
    const lines = [];
    const lvl = levelOf(s.level);
    const heading = `${lo.code} ${lo.title}` + (lvl ? ` – niveau ${lvl.value} (${lvl.label})` : "");
    lines.push(heading);
    if (lvl && lvl.text) lines.push(lvl.text.replaceAll("{lo}", lo.title));

    const good = lo.criteria.filter(c => s.checked.has(c.letter));
    const todo = lo.criteria.filter(c => !s.checked.has(c.letter));

    if (good.length) {
      lines.push(TEXTS.strengthsHeading);
      good.forEach(c => lines.push(`- ${c.positive}`));
    }
    if (todo.length) {
      lines.push(TEXTS.improveHeading);
      todo.forEach(c => lines.push(`- ${c.improve}`));
      if (lo.improveFooter) lines.push(lo.improveFooter);
    }
    const note = s.note.trim();
    if (note) lines.push(`${TEXTS.noteHeading} ${note}`);
    return lines.join("\n");
  }

  // Render text with **bold** markers safely (no innerHTML).
  function rich(text) {
    const frag = document.createDocumentFragment();
    String(text).split(/\*\*(.+?)\*\*/g).forEach((part, i) => {
      if (part) frag.append(i % 2 ? el("strong", { text: part }) : document.createTextNode(part));
    });
    return frag;
  }

  // ---------- Rendering ----------
  function renderJump() {
    const nav = $("#lo-jump");
    nav.innerHTML = "";
    LEARNING_OUTCOMES.forEach(lo => {
      const s = state[lo.id];
      const lvl = levelOf(s.level);
      nav.append(el("a", { href: `#lo-${lo.id}` }, [
        el("span", { text: lo.title }),
        el("span", { class: "count", text: `${s.checked.size}/${lo.criteria.length}` }),
        el("span", { class: "lvl" + (lvl ? " set" : ""), text: lvl ? `niv. ${lvl.value}` : "niv. –" })
      ]));
    });
  }

  function renderCard(lo) {
    const s = state[lo.id];

    // Level picker
    const levels = el("fieldset", { class: "levels" }, [el("legend", { text: `Niveau ${lo.title}` })]);
    LEVELS.forEach(l => {
      const id = `lvl-${lo.id}-${l.value}`;
      const input = el("input", { type: "radio", name: `lvl-${lo.id}`, id, value: String(l.value) });
      input.addEventListener("change", () => { s.level = l.value; update(lo); });
      levels.append(input, el("label", { for: id }, [el("strong", { text: String(l.value) }), el("span", { text: l.label })]));
    });

    // Criteria
    const list = el("ul", { class: "criteria" });
    lo.criteria.forEach(c => {
      const cbId = `cb-${lo.id}-${c.letter}`;
      const cb = el("input", { type: "checkbox", id: cbId, "data-letter": c.letter });
      const note = el("div", { class: "crit-note", hidden: "" }, rich(c.ve2Note));
      const toggle = el("button", { type: "button", class: "linklike", "aria-expanded": "false", text: "ℹ Wat verwachten we bij VE2?" });
      toggle.addEventListener("click", () => {
        const open = note.hasAttribute("hidden");
        note.toggleAttribute("hidden", !open);
        toggle.setAttribute("aria-expanded", String(open));
      });
      const li = el("li", { class: "crit" }, [
        el("label", { class: "crit-main", for: cbId }, [
          cb,
          el("span", { class: "crit-letter", text: c.letter }),
          el("span", { class: "crit-text" }, rich(c.text))
        ]),
        el("div", { class: "crit-tools" }, [toggle, note])
      ]);
      cb.addEventListener("change", () => {
        cb.checked ? s.checked.add(c.letter) : s.checked.delete(c.letter);
        li.classList.toggle("on", cb.checked);
        update(lo);
      });
      list.append(li);
    });

    const setAll = on => () => {
      list.querySelectorAll("input[type=checkbox]").forEach(cb => {
        cb.checked = on;
        cb.closest(".crit").classList.toggle("on", on);
        on ? s.checked.add(cb.dataset.letter) : s.checked.delete(cb.dataset.letter);
      });
      update(lo);
    };
    const checkAll = el("div", { class: "check-all" }, [
      el("button", { type: "button", class: "linklike", text: "Alles aanvinken", onclick: setAll(true) }),
      el("button", { type: "button", class: "linklike", text: "Alles uitvinken", onclick: setAll(false) })
    ]);

    // Note
    const noteId = `note-${lo.id}`;
    const noteArea = el("textarea", { id: noteId, class: "note", rows: "2", placeholder: "Persoonlijke toevoeging, bijv. een concreet voorbeeld uit een review…" });
    noteArea.addEventListener("input", () => { s.note = noteArea.value; update(lo); });

    // Preview
    const preview = el("textarea", { id: `preview-${lo.id}`, class: "preview", "aria-label": `Feedbacktekst ${lo.title}` });
    const badge = el("span", { class: "badge-edited", hidden: "", text: "handmatig aangepast" });
    const regen = el("button", { type: "button", class: "linklike", hidden: "", text: "↺ Opnieuw genereren" });
    const copyBtn = el("button", { type: "button", class: "btn", text: "Kopieer" });
    preview.addEventListener("input", () => { s.edited = true; syncEdited(lo); });
    regen.addEventListener("click", () => {
      if (!confirm("Je handmatige aanpassingen in deze tekst gaan verloren. Doorgaan?")) return;
      s.edited = false; update(lo);
    });
    copyBtn.addEventListener("click", () => copy(preview.value, copyBtn, `${lo.title} gekopieerd`));

    return el("section", { class: "lo-card", id: `lo-${lo.id}`, "aria-labelledby": `title-${lo.id}` }, [
      el("h2", { id: `title-${lo.id}` }, [el("span", { class: "code", text: lo.code }), el("span", { text: lo.title })]),
      el("details", { class: "summary" }, [el("summary", { text: "Hoofdlijn voor VE2" }), el("p", { text: lo.summary })]),
      el("div", { class: "section-label", text: "Niveau" }),
      levels,
      el("div", { class: "section-label", text: "Succescriteria — vink aan wat de student laat zien" }),
      list,
      checkAll,
      el("label", { class: "section-label", for: noteId, text: "Eigen opmerking (optioneel)" }),
      noteArea,
      el("div", { class: "preview-head" }, [
        el("div", { class: "section-label", text: "Feedbacktekst" }),
        el("div", { class: "preview-tools" }, [badge, regen, copyBtn])
      ]),
      preview
    ]);
  }

  function syncEdited(lo) {
    const card = $(`#lo-${lo.id}`);
    const edited = state[lo.id].edited;
    $(".preview", card).classList.toggle("edited", edited);
    $(".badge-edited", card).toggleAttribute("hidden", !edited);
    $(".preview-tools .linklike", card).toggleAttribute("hidden", !edited);
  }

  function update(lo) {
    if (!state[lo.id].edited) $(`#preview-${lo.id}`).value = buildLoText(lo);
    syncEdited(lo);
    renderJump();
  }

  // ---------- Copy ----------
  const toast = $("#toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  async function copy(text, btn, msg) {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (_) {
      const ta = el("textarea", { style: "position:fixed;top:-1000px;opacity:0" });
      ta.value = text;
      document.body.append(ta);
      ta.select();
      try { ok = document.execCommand("copy"); } catch (_) { ok = false; }
      ta.remove();
    }
    if (ok) {
      const old = btn.textContent;
      btn.textContent = "Gekopieerd ✓";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = old; btn.classList.remove("copied"); }, 1600);
      showToast(msg);
    } else {
      showToast("Kopiëren lukte niet — selecteer de tekst en gebruik Ctrl/Cmd+C");
    }
  }

  // ---------- Init ----------
  const cards = $("#lo-cards");
  function renderAll() {
    cards.innerHTML = "";
    LEARNING_OUTCOMES.forEach(lo => cards.append(renderCard(lo)));
    LEARNING_OUTCOMES.forEach(update);
  }
  renderAll();

  $("#reset-btn").addEventListener("click", () => {
    if (!confirm("Alle vinkjes, niveaus en opmerkingen wissen voor een nieuwe student?")) return;
    freshState();
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
