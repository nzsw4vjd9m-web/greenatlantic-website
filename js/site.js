/* Green Atlantic PVC — site behavior. No libraries. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* mobile menu */
  var mb = $(".menu-btn"), nav = $(".nav");
  if (mb && nav) mb.addEventListener("click", function () {
    var open = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", open ? "true" : "false"); mb.textContent = open ? "Close" : "Menu";
  });
  $$(".yr").forEach(function (e) { e.textContent = new Date().getFullYear(); });

  /* ── section previews, drawn to scale ── */
  var NAVY = "#17325C", FILL = "#E7EDF5";
  function svg(vb, body) { return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">' + body + "</svg>"; }
  function poly(pts) { return '<polygon points="' + pts.map(function (p) { return p[0].toFixed(3) + "," + p[1].toFixed(3); }).join(" ") + '" fill="' + FILL + '" stroke="' + NAVY + '" stroke-width="1.4" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>'; }
  function draw(d) {
    var k = d[0];
    if (k === "board") {
      var t = d[1], w = d[2], det = d[3] || "", P;
      var r = Math.min(.45 * t, .375), q = Math.min(.5, w * .14);
      if (det === "siding") P = [[0,0],[w,0],[w,t*.55],[w-q,t*.55],[w-q,t],[0,t]];
      else if (det === "fin") P = [[0,0],[w,0],[w,t],[w*.82,t],[w*.82,t*.7],[w*.62,t*.7],[w*.62,t],[0,t]];
      else if (det === "both") P = [[0,0],[w,0],[w,t*.55],[w-q,t*.55],[w-q,t],[w*.62,t],[w*.62,t*.7],[w*.45,t*.7],[w*.45,t],[0,t]];
      else if (det === "notch") P = [[0,0],[w,0],[w,t],[w*.12+.5,t],[w*.12+.5,t-.25],[w*.12,t-.25],[w*.12,t],[0,t]];
      else if (det === "drip") P = [[0,0],[w,0],[w,t],[.35,t],[0,t-.25]];
      else P = [[0,0],[w,0],[w,t],[0,t]];
      /* every board on one shared scale (16.5" across), so sizes compare at a glance */
      var VW = Math.max(9, w * 1.08), VH = VW * .2;
      return svg((-(VW - w) / 2) + " " + (-(VH - t) / 2) + " " + VW + " " + VH, poly(P));
    }
    if (k === "sheet") {
      var t2 = d[1], kind = d[2] || "", W = 12, b = "";
      b += poly([[0,0],[W,0],[W - .25, t2 * .5],[W,t2],[0,t2]]);
      if (kind === "beaded") for (var i = 1; i < 6; i++) b += '<path d="M' + (i*2-.2) + ' 0 q.2 .22 .4 0" fill="none" stroke="' + NAVY + '" stroke-width="1.2" vector-effect="non-scaling-stroke"/>';
      if (kind === "vented") for (var j = 0; j < 3; j++) b += '<rect x="' + (2 + j * 3.2) + '" y="' + (-.02) + '" width="1.8" height="' + (t2 + .04) + '" fill="#fff" stroke="' + NAVY + '" stroke-width="1" stroke-dasharray="2 2" vector-effect="non-scaling-stroke"/>';
      return svg("-.6 " + (-1.2) + " 13.2 " + (t2 + 2.4), b);
    }
    if (k === "corner") {
      var tt = d[1], L = d[2], rb = d[3], A;
      A = rb ? [[0,0],[L,0],[L,tt*.5],[L-.5,tt*.5],[L-.5,tt],[tt,tt],[tt,L-.5],[tt*.5,L-.5],[tt*.5,L],[0,L]]
             : [[0,0],[L,0],[L,tt],[tt,tt],[tt,L],[0,L]];
      return svg("-.4 -.4 " + (L + .8) + " " + (L + .8), poly(A));
    }
    if (k === "ext") {
      var l = d[1], ang = d[2], th = .12;
      if (ang === 90) {
        var E = [[0,0],[l,0],[l,th],[l-.12,th],[l-.12,1.1],[l-.12-th,1.1],[l-.12-th,th],[th,th],[th,l-.12-th],[1.1,l-.12-th],[1.1,l-.12],[th,l-.12],[th,l],[0,l]];
        return svg("-.4 -.4 " + (l + .8) + " " + (l + .8), poly(E));
      }
      var c = Math.cos(Math.PI / 8), s = Math.sin(Math.PI / 8), hw = l / 2;
      var F = [[-hw*c,hw*s],[0,0],[hw*c,hw*s],[hw*c,hw*s+th],[0,th],[-hw*c,hw*s+th]];
      return svg((-hw - .4) + " -.5 " + (l + .8) + " " + (hw * s + 1.2), poly(F));
    }
    if (k === "inside") {
      var a = d[1], g = 1.5, h = .14, G;
      G = a === 90 ? [[0,g],[0,0],[g,0],[g,h],[h,h],[h,g]]
                   : [[0,g*.7],[g*.5,0],[g,g*.7],[g-h,g*.7],[g*.5,h*1.6],[h,g*.7]];
      return svg("-.3 -.3 " + (g + .6) + " " + (g + .6), poly(G));
    }
    return '<span class="pdf-tile"><svg viewBox="0 0 40 48" aria-hidden="true"><path d="M6 2h20l10 10v34H6z" fill="#fff" stroke="' + NAVY + '" stroke-width="1.6"/><path d="M26 2v10h10" fill="none" stroke="' + NAVY + '" stroke-width="1.6"/><path d="M12 24h16M12 30h16M12 36h10" stroke="' + NAVY + '" stroke-width="1.6"/></svg>PDF drawing</span>';
  }
  function preview(x, alt) {
    var d = x.d;
    if (d[0] === "img") return '<img src="profiles/' + d[1] + '.png" alt="' + alt + ' profile" loading="lazy">';
    /* live site: a thumbnail of the real drawing, made from the PDF itself */
    var th = x.f && window.GA_THUMBS && window.GA_THUMBS[x.f];
    if (th) return '<img class="dwg" src="/' + th + '" alt="' + alt + ' drawing" loading="lazy">';
    if (d[0] === "photo") return '<img class="photo" src="img/' + d[1] + '.jpg" alt="' + alt + '" loading="lazy">';
    return draw(d);
  }

  /* ── CAD library ── */
  var lib = $("#cad");
  if (lib && window.GA_CAD) {
    var q = $("#cad-q"), chips = $("#cad-chips"), count = $("#cad-count"), cur = "all";
    var groups = window.GA_GROUPS;
    chips.innerHTML = '<button type="button" data-g="all" aria-pressed="true">All</button>' +
      Object.keys(groups).map(function (g) { return '<button type="button" data-g="' + g + '" aria-pressed="false">' + groups[g] + "</button>"; }).join("");
    function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
    function render() {
      var term = (q.value || "").toLowerCase().trim(), words = term.split(/\s+/).filter(Boolean);
      var list = window.GA_CAD.filter(function (x) {
        if (cur !== "all" && x.g !== cur) return false;
        var hay = [x.c, x.n, x.s, groups[x.g]].join(" ").toLowerCase();
        return words.every(function (w) { return hay.indexOf(w) >= 0; });
      });
      count.textContent = list.length + (list.length === 1 ? " drawing" : " drawings");
      lib.innerHTML = list.length ? list.map(function (x) {
        var title = (x.c ? x.c + " " : "") + x.n;
        if (!x.f) return '<a href="/contact.html?topic=drawing"><div class="pv">' + preview(x, esc(title)) + '</div><div class="t"><b>' + esc(title) + "</b><span>" + esc(x.s) + "</span><em>Request drawing</em></div></a>";
        return '<a href="/' + x.f + '" target="_blank" rel="noopener"><div class="pv">' + preview(x, esc(title)) + '</div><div class="t"><b>' + esc(title) + "</b><span>" + esc(x.s) + "</span><em>Open drawing (PDF)</em></div></a>";
      }).join("") : '<div class="cad-empty">No drawings match "' + esc(q.value) + '". Try a size like 5/4 x 6, a product number like GA45, or a word like sill.</div>';
    }
    chips.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return; cur = b.getAttribute("data-g");
      $$("button", chips).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); render();
    });
    q.addEventListener("input", render);
    var h = (location.hash || "").replace("#", ""); if (groups[h]) { cur = h; $$("button", chips).forEach(function (x) { x.setAttribute("aria-pressed", x.getAttribute("data-g") === h ? "true" : "false"); }); }
    render();
  }

  /* ── documents list ── */
  var docs = $("#docs");
  if (docs && window.GA_DOCS) docs.innerHTML = window.GA_DOCS.map(function (x) {
    return '<a href="/' + x.f + '" target="_blank" rel="noopener"><b>' + x.n + "</b><span>" + x.t + "</span></a>";
  }).join("");

  /* ── the profile board: every moulding at the same scale ── */
  var board = $("#board");
  if (board && window.GA_PROFILES) {
    var PPI = window.innerWidth < 600 ? 30 : 46;
    board.innerHTML = window.GA_PROFILES.map(function (p) {
      return '<a class="bp" href="/cad.html#' + (p.g || "crown") + '" style="text-decoration:none"><figure><img src="profiles/' + p.img + '.png" alt="' + (p.c ? p.c + " " : "") + p.n + ' profile" width="' + Math.round(p.w * PPI) + '" height="' + Math.round(p.h * PPI) + '" loading="lazy"><figcaption><b>' + (p.c || "&nbsp;") + "</b>" + p.n + "</figcaption></figure></a>";
    }).join("");
    var sc = $("#board-scale"); if (sc) sc.querySelector("i").style.width = PPI + "px";
  }

  /* ── anatomy hotspots ── */
  $$(".anat").forEach(function (box) {
    var tip = document.createElement("div"); tip.className = "tip"; tip.hidden = true; box.appendChild(tip);
    $$("button", box).forEach(function (b) {
      function show() { $$("button", box).forEach(function (x) { x.setAttribute("aria-expanded", "false"); }); b.setAttribute("aria-expanded", "true");
        tip.innerHTML = "<b>" + b.dataset.t + "</b>" + b.dataset.d; tip.style.left = b.style.left; tip.style.top = b.style.top; tip.hidden = false; }
      b.addEventListener("mouseenter", show); b.addEventListener("focus", show); b.addEventListener("click", show);
    });
    box.addEventListener("mouseleave", function () { tip.hidden = true; $$("button", box).forEach(function (x) { x.setAttribute("aria-expanded", "false"); }); });
  });
})();
