/* ============================================================
   自我介绍网页 · 脚本
   ------------------------------------------------------------
   ★★★ 你只需要改下面 CONFIG 里的内容，页面就会自动更新 ★★★
   所有 【】 都是占位文字，替换成你自己的即可。
   没有填写（留空 ""）的条目页面会自动隐藏，不会出现空白。
   ============================================================ */

const CONFIG = {
  /* ---------- 1. 基本身份 ---------- */
  name: "师金明",
  brandMark: "✧",                       // 导航栏左侧小图标，可用 emoji
  greeting: "你好，很高兴认识你",
  status: "杭州电子科技大学大一在读",
  avatar: "assets/img/avatar.png",       // 头像图片路径，留空则显示姓名首字
  avatarFit: "contain",                  // contain 完整显示 / cover 铺满（会裁掉四周）
  avatarScale: 1.15,                     // 头像缩放，1 为原始大小
  tagline: "萍水相逢即是缘。我叫师金明，是一名刚上路的大一学生。",
  nowDoing: "努力学习 C 语言以及 AI",
  typed: [                               // 首屏打字机轮播的身份，可写 3~6 条
    "软件工程大一学生",
    "C 语言初学者",
    "想做出点东西的人",
    "终身学习者",
  ],
  heroTags: ["📍 杭州 · 下沙", "🎓 杭州电子科技大学 · 软件工程", "💻 C 语言入门中", "🤖 正在摸索 AI", "☕ 咖啡续命中"],

  /* ---------- 2. 社交链接 ---------- */
  social: [
    { icon: "📮", label: "邮箱", url: "mailto:2735640976@qq.com" },
  ],

  /* ---------- 3. 数字看板 ---------- */
  stats: [
    { num: 4, suffix: " 门", label: "本学期课程" },
    { num: 4, suffix: " 年", label: "本科在读" },
    { num: 1, suffix: " 个", label: "正在写的程序" },
    { num: 100, suffix: "%", label: "还愿意接着学" },
  ],

  /* ---------- 4. 关于我 ---------- */
  about: [
    "我是师金明，杭州电子科技大学软件工程专业大一学生。从河南来到杭州，第一次离开家长期生活，也是第一次真正开始自己安排学习和生活。眼下最重要的两件事：把 C 语言学扎实，把 AI 摸明白。",
    "选计算机类专业是我认真想清楚之后的决定——我好奇那些每天都在用的软件到底是怎么被做出来的，也想有一天自己做出一个有人愿意用的东西。所以我愿意花时间坐在电脑前，从一个分号、一个报错开始啃。",
    "我做事偏踏实，答应的事会给回音；也爱主动跟人打交道，班里有活动基本都在。河南人那种直来直去、能扛事的劲儿，我认为是自己身上最靠得住的部分。",
    "学习之外，我打游戏、爱往外跑。旅游对我来说不是打卡，是换个地方看看别人怎么生活，回来往往对很多事都更想得开。",
  ],
  facts: [
    { k: "姓名", v: "师金明" },
    { k: "家乡", v: "河南" },
    { k: "现居", v: "杭州 · 下沙" },
    { k: "学校专业", v: "杭州电子科技大学 · 软件工程" },
    { k: "当前身份", v: "大一在读" },
    { k: "正在学", v: "C 语言程序设计 · 高等数学 · AI 工具" },
    { k: "想要的", v: "把基础打扎实，做出第一个真正有人用的东西" },
  ],
  values: [
    { icon: "🧱", title: "踏实", desc: "基础不好就多敲几遍。不会的题先自己想，想不出来再去问，问明白了一定自己再写一遍。" },
    { icon: "🤝", title: "真诚", desc: "不爱绕弯子，做得好就说好，做错了就认，然后改。" },
    { icon: "🚀", title: "爱折腾", desc: "看到新工具就想上手试试。现在在折腾 AI，让它帮我学得更快一点。" },
  ],
  highlight: "目前最让自己满意的一件事，其实很小：第一次独立写出一段能跑通、结果也对的 C 程序。上机前我在纸上把每一步都推了一遍，编译通过、输出正确的那一刻，比想象中有成就感。现在期中考试还没到，我知道自己离「会写」还远，但至少确认了一件事——我坐得住，也愿意一遍遍改。",

  /* ---------- 5. 技能 ---------- */
  skills: [
    { name: "C 语言基础（语法 · 流程控制）", level: 30 },
    { name: "WPS / Office 办公软件", level: 70 },
    { name: "打字与信息检索", level: 75 },
    { name: "AI 工具使用与提问", level: 55 },
    { name: "学习计划与自我管理", level: 50 },
  ],
  softSkills: ["主动沟通", "团队协作", "抗压能力", "自我驱动", "执行到底", "不怕问、不怕错"],
  toolbox: ["Dev-C++", "VS Code", "WPS", "Notion", "ChatGPT", "DeepSeek"],
  certs: [
    "中文：母语，表达清晰",
    "英语：大一在读，正在准备 CET-4",
    "正在学：C 语言程序设计",
  ],

  /* ---------- 6. 成长轨迹 ---------- */
  timeline: [
    {
      time: "2026 — 现在",
      title: "软件工程在读",
      org: "杭州电子科技大学",
      desc: "大一上学期。这个学期先主修 C 语言程序设计、高等数学等基础课，把打底子放在第一位；同时开始用 AI 工具帮自己答疑和查资料。",
      tags: ["C 语言", "高数", "打基础"],
    },
    {
      time: "2023 — 2026",
      title: "高中三年",
      org: "河南",
      desc: "在河南读完高中。这三年交到了几个到现在还常联系的朋友，也从周围人身上学到了什么叫吃苦耐劳——这段经历到现在还在影响我面对难题时的态度。",
      tags: ["高中", "挚友", "吃苦耐劳"],
    },
    {
      time: "2025.09",
      title: "从河南到杭州，开始独立生活",
      org: "杭州 · 下沙",
      desc: "第一次长期离家。学会自己安排时间、管好生活费、主动认识新同学——这些事比我想象中更锻炼人。",
      tags: ["独立生活", "新城市"],
    },
    {
      time: "2025.06",
      title: "高考志愿：选定计算机方向",
      org: "河南",
      desc: "填志愿时把计算机相关专业全部排在前面。理由很朴素：我想知道每天都在用的软件是怎么被做出来的，也想有一天自己做出一个有人愿意用的东西。",
      tags: ["转折点", "选择"],
    },
  ],

  /* ---------- 7. 作品集 ---------- */
  projects: [
    {
      cover: "📘", cat: "学习记录", year: "2026",
      title: "我的 C 语言课堂笔记",
      desc: "把课堂例题和自己的错题整理在一起，按「知识点 → 例题 → 我错在哪」记录，方便考前回看。内容还在增长，现在的目标是先把这个学期的基础打牢。",
      result: "进行中 · 目前以课堂例题和作业题为主",
      tags: ["C 语言", "学习笔记", "进行中"],
      links: [],
    },
    {
      cover: "🖥️", cat: "进行中", year: "2026",
      title: "第一个命令行小程序（开发中）",
      desc: "结合 C 语言课上学的内容，尝试写一个能在命令行里用的小程序：目前做到菜单显示和输入校验，接下来准备学数组与函数，把数据存起来、能反复操作。",
      result: "进行中 · 已完成菜单与输入校验部分",
      tags: ["C 语言", "命令行", "开发中"],
      links: [],
    },
  ],

  /* ---------- 8. 兴趣爱好（翻牌卡片） ---------- */
  hobbies: [
    { emoji: "🎮", name: "打游戏", hint: "点我看背面", detail: "常玩无畏契约和王者荣耀。打游戏其实很练心态——逆风局怎么稳住、怎么和陌生人配合，都比想象中难。" },
    { emoji: "🧳", name: "旅游", hint: "点我看背面", detail: "喜欢往外跑，不是为了打卡拍照，是想看看别的地方的人怎么生活。来杭州后最爱的一次是西湖边的清晨。" },
    { emoji: "🎵", name: "听歌", hint: "点我看背面", detail: "写代码和学习时几乎一直戴着耳机，歌单很杂，从老歌到说唱都有。" },
    { emoji: "💻", name: "折腾电脑", hint: "点我看背面", detail: "喜欢研究各种软件和 AI 工具，装系统、调环境、试新插件，经常一个下午就没了。" },
    { emoji: "🏸", name: "打球", hint: "点我看背面", detail: "偶尔和同学打羽毛球，纯属娱乐水平，胜在出出汗、聊聊天。" },
    { emoji: "🍜", name: "找好吃的", hint: "点我看背面", detail: "来杭州之后的一大任务：把学校周边和市区值得吃的店挨个试一遍。" },
  ],
  funFacts: [
    "写代码时必须戴耳机，但里面经常什么都没放——只是需要一个「与外界隔开」的信号。",
    "遇到报错会先把英文提示逐字看一遍，而不是直接问人——这个习惯是学 C 语言之后才养成的。",
    "去一个陌生城市，第一件事是找当地菜市场和早餐店，而不是景点。",
  ],

  /* ---------- 9. 性格 ---------- */
  mbti: "ENFJ",                          // 不想写可以留空 ""
  mbtiDesc: "不太迷信测试，但 ENFJ 那句「天生的组织者、在意别人的感受」确实挺像我：班里的事我爱张罗，也受不了气氛冷下来。",
  mbtiAxes: [
    { left: "内向 I", right: "外向 E", value: 72 },   // value = 靠右侧的百分比
    { left: "实感 S", right: "直觉 N", value: 58 },
    { left: "思考 T", right: "情感 F", value: 66 },
    { left: "知觉 P", right: "判断 J", value: 61 },
  ],
  traits: [
    { word: "开朗", desc: "主动打招呼，不怕生" },
    { word: "踏实", desc: "不会就多练几遍" },
    { word: "好奇", desc: "什么都想上手试试" },
    { word: "能扛", desc: "河南人，轴得住" },
    { word: "爱张罗", desc: "班里的事愿意挑头" },
    { word: "直脾气", desc: "有话当面说清" },
  ],
  selfQuote: "我希望别人对我的印象是：交给他的事会有回音，不懂的地方会主动问，而不是拖着不动。",
  otherQuote: "其实我也会焦虑——同届厉害的人太多了。我的办法是不跟人比进度，只跟自己比：这个月比上个月多懂一点，就算数。",

  /* ---------- 10. 座右铭 ---------- */
  quotes: [
    { text: "慢慢来，比较快。着急的人走不远。", author: "—— 师金明" },
    { text: "不怕慢，只怕站。", author: "—— 师金明" },
    { text: "萍水相逢即是缘。", author: "—— 师金明" },
  ],

  /* ---------- 11. 联系方式 ---------- */
  contacts: [
    { icon: "📮", label: "邮箱", value: "2735640976@qq.com", url: "mailto:2735640976@qq.com", copy: true },
  ],

  /* ---------- 12. 页脚 ---------- */
  footerSub: "感谢你看到这里。我还是个大一新生，这份简历会跟着我一起长大——愿我们都有想做的事，和做下去的力气。",

  /* ---------- 13. 主题（设置面板会覆盖这里的值） ---------- */
  theme: {
    mode: "dark",                        // dark | light
    accent: 0,                           // 对应 palette 的下标
  },
  palette: [
    { name: "星辰紫", c1: "#6c5ce7", c2: "#00d2ff", c3: "#ff6ba9" },
    { name: "日落橙", c1: "#ff6b35", c2: "#ffb703", c3: "#ff2e63" },
    { name: "薄荷绿", c1: "#00b894", c2: "#55efc4", c3: "#00cec9" },
    { name: "樱花粉", c1: "#e84393", c2: "#fd79a8", c3: "#a29bfe" },
    { name: "深海蓝", c1: "#0984e3", c2: "#74b9ff", c3: "#6c5ce7" },
    { name: "岩灰橙", c1: "#e17055", c2: "#fab1a0", c3: "#d63031" },
  ],
};

/* ============================================================
   以下为功能代码，一般不需要修改
   ============================================================ */
(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isFilled = (v) => v != null && String(v).trim() !== "";
  const STORE_KEY = "myself-page-prefs-v1";

  /* ---------------- 通用文本绑定 data-cfg ---------------- */
  function bindText() {
    const map = {
      name: CONFIG.name,
      brandMark: CONFIG.brandMark,
      greeting: CONFIG.greeting,
      status: CONFIG.status,
      tagline: CONFIG.tagline,
      nowDoing: CONFIG.nowDoing,
      highlight: CONFIG.highlight,
      mbti: CONFIG.mbti || "—",
      mbtiDesc: CONFIG.mbtiDesc,
      avatar: CONFIG.avatar,
    };
    $$("[data-cfg]").forEach((node) => {
      const key = node.getAttribute("data-cfg");
      const val = map[key];
      if (val == null) return;
      if (key === "avatar") return;
      node.textContent = val;
    });
    if (CONFIG.name) document.title = CONFIG.name + " · 自我介绍";
  }

  /* ---------------- 头像 ---------------- */
  function renderAvatar() {
    const box = $("#avatar");
    if (!box) return;
    const initial = (CONFIG.name || "我").trim().charAt(0);
    $("#avatarInitial").textContent = initial;
    if (isFilled(CONFIG.avatar)) {
      box.classList.add("has-image");
      box.style.backgroundImage = 'url("' + CONFIG.avatar + '")';
    }
  }

  /* ---------------- 首屏标签 / 社交 ---------------- */
  function renderHeroTags() {
    const wrap = $("#heroTags");
    if (!wrap) return;
    wrap.innerHTML = "";
    (CONFIG.heroTags || []).filter(isFilled).forEach((t) => wrap.appendChild(el("span", "tag-pill", esc(t))));
  }

  function renderSocial() {
    const list = $("#heroSocial");
    if (!list) return;
    list.innerHTML = "";
    (CONFIG.social || []).forEach((s) => {
      if (!s || !isFilled(s.url)) return;
      const li = el("li");
      const a = el("a", null, '<span>' + esc(s.icon || "🔗") + "</span><span>" + esc(s.label || "链接") + "</span>");
      a.href = s.url;
      if (/^https?:/i.test(s.url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  /* ---------------- 数字看板 + 滚动计数 ---------------- */
  function renderStats() {
    const box = $("#stats");
    if (!box) return;
    box.innerHTML = "";
    (CONFIG.stats || []).forEach((s) => {
      const item = el("div", "stat");
      item.innerHTML =
        '<div class="stat-num" data-target="' + Number(s.num) + '" data-suffix="' + esc(s.suffix || "") + '">0</div>' +
        '<div class="stat-label">' + esc(s.label) + "</div>";
      box.appendChild(item);
    });
  }

  function animateCount(node) {
    const target = parseFloat(node.getAttribute("data-target")) || 0;
    const suffix = node.getAttribute("data-suffix") || "";
    const duration = 1400;
    const decimals = String(target).indexOf(".") > -1 ? 1 : 0;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- 关于我 ---------------- */
  function renderAbout() {
    const box = $("#aboutParagraphs");
    if (!box) return;
    box.innerHTML = "";
    const paras = (CONFIG.about || []).filter(isFilled);
    paras.forEach((p, i) => {
      const node = el("p", i >= 2 ? "extra-para" : null, esc(p));
      box.appendChild(node);
    });
    const story = $(".about-story");
    const btn = $("#readMore");
    if (!btn) return;
    if (paras.length <= 2) { btn.style.display = "none"; return; }
    story.classList.add("collapsed");
    btn.addEventListener("click", () => {
      const collapsed = story.classList.toggle("collapsed");
      btn.textContent = collapsed ? "展开全文 ↓" : "收起 ↑";
    });
  }

  function renderFacts() {
    const dl = $("#factList");
    if (!dl) return;
    dl.innerHTML = "";
    (CONFIG.facts || []).forEach((f) => {
      if (!f || !isFilled(f.v)) return;
      const row = el("div");
      row.innerHTML = "<dt>" + esc(f.k) + "</dt><dd>" + esc(f.v) + "</dd>";
      dl.appendChild(row);
    });
  }

  function renderValues() {
    const ul = $("#valueList");
    if (!ul) return;
    ul.innerHTML = "";
    (CONFIG.values || []).forEach((v) => {
      const li = el("li");
      li.innerHTML =
        '<span class="value-icon">' + esc(v.icon || "★") + "</span>" +
        "<div><h4>" + esc(v.title) + "</h4><p>" + esc(v.desc) + "</p></div>";
      ul.appendChild(li);
    });
  }

  /* ---------------- 技能 ---------------- */
  function renderSkills() {
    const box = $("#skillBars");
    if (!box) return;
    box.innerHTML = "";
    (CONFIG.skills || []).forEach((s) => {
      const level = Math.max(0, Math.min(100, Number(s.level) || 0));
      const row = el("div", "skill-row");
      row.innerHTML =
        '<div class="skill-top"><span>' + esc(s.name) + '</span><span class="skill-pct">' + level + "%</span></div>" +
        '<div class="skill-track"><div class="skill-fill" data-level="' + level + '"></div></div>';
      box.appendChild(row);
    });

    const chips = (id, arr) => {
      const wrap = $(id);
      if (!wrap) return;
      wrap.innerHTML = "";
      (arr || []).filter(isFilled).forEach((t) => wrap.appendChild(el("span", "chip", esc(t))));
    };
    chips("#softSkills", CONFIG.softSkills);
    chips("#toolbox", CONFIG.toolbox);

    const certs = $("#certs");
    if (certs) {
      certs.innerHTML = "";
      const list = (CONFIG.certs || []).filter(isFilled);
      list.forEach((c) => certs.appendChild(el("li", null, esc(c))));
      const card = certs.closest(".card");
      if (card && !list.length) card.style.display = "none";
    }
  }

  /* ---------------- 时间线 ---------------- */
  function renderTimeline() {
    const ol = $("#timelineList");
    if (!ol) return;
    ol.innerHTML = "";
    (CONFIG.timeline || []).forEach((t) => {
      const li = el("li", "tl-item reveal");
      const tags = (t.tags || []).filter(isFilled).map((x) => "<span>" + esc(x) + "</span>").join("");
      li.innerHTML =
        '<span class="tl-dot"></span>' +
        '<div class="tl-card">' +
        '<span class="tl-time">' + esc(t.time) + "</span>" +
        '<h3 class="tl-title">' + esc(t.title) + "</h3>" +
        (isFilled(t.org) ? '<p class="tl-org">' + esc(t.org) + "</p>" : "") +
        '<p class="tl-desc">' + esc(t.desc) + "</p>" +
        (tags ? '<div class="tl-tags">' + tags + "</div>" : "") +
        "</div>";
      ol.appendChild(li);
    });
  }

  /* ---------------- 作品集 ---------------- */
  const PROJECT_GRADIENTS = [
    ["#6c5ce7", "#00d2ff"], ["#ff6b35", "#ffb703"], ["#00b894", "#55efc4"],
    ["#e84393", "#a29bfe"], ["#0984e3", "#74b9ff"], ["#d63031", "#fab1a0"],
  ];

  function renderProjects() {
    const grid = $("#projectGrid");
    const filters = $("#projectFilters");
    if (!grid) return;
    grid.innerHTML = "";
    if (filters) filters.innerHTML = "";

    const cats = ["全部"];
    (CONFIG.projects || []).forEach((p) => { if (isFilled(p.cat) && cats.indexOf(p.cat) === -1) cats.push(p.cat); });

    if (filters) {
      cats.forEach((c, i) => {
        const b = el("button", "filter-btn" + (i === 0 ? " active" : ""), esc(c));
        b.type = "button";
        b.dataset.cat = c;
        filters.appendChild(b);
      });
    }

    (CONFIG.projects || []).forEach((p, i) => {
      const g = PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length];
      const card = el("article", "project-card reveal");
      card.dataset.cat = p.cat || "";
      card.style.setProperty("--g1", g[0]);
      card.style.setProperty("--g2", g[1]);

      const coverIsImg = isFilled(p.cover) && /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(p.cover);
      const cover = coverIsImg
        ? '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + ' 封面" loading="lazy">'
        : '<span class="pj-emoji">' + esc(p.cover || "📦") + "</span>";

      const tags = (p.tags || []).filter(isFilled).map((t) => "<span>" + esc(t) + "</span>").join("");
      const links = (p.links || []).filter((l) => l && isFilled(l.url)).map((l) =>
        '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + " ↗</a>"
      ).join("");

      card.innerHTML =
        '<div class="pj-cover">' + cover + (isFilled(p.year) ? '<span class="pj-year">' + esc(p.year) + "</span>" : "") + "</div>" +
        '<div class="pj-body">' +
        (isFilled(p.cat) ? '<span class="pj-cat">' + esc(p.cat) + "</span>" : "") +
        '<h3 class="pj-title">' + esc(p.title) + "</h3>" +
        '<p class="pj-desc">' + esc(p.desc) + "</p>" +
        (isFilled(p.result) ? '<p class="pj-result">✨ ' + esc(p.result) + "</p>" : "") +
        (tags ? '<div class="pj-tags">' + tags + "</div>" : "") +
        (links ? '<div class="pj-links">' + links + "</div>" : "") +
        "</div>";
      grid.appendChild(card);
    });

    if (filters) {
      filters.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        $$(".filter-btn", filters).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.cat;
        $$(".project-card", grid).forEach((c) => {
          const show = cat === "全部" || c.dataset.cat === cat;
          c.classList.toggle("hide", !show);
        });
      });
    }
  }

  /* ---------------- 兴趣翻牌 ---------------- */
  function renderHobbies() {
    const grid = $("#hobbyGrid");
    if (!grid) return;
    grid.innerHTML = "";
    (CONFIG.hobbies || []).forEach((h) => {
      const card = el("div", "flip reveal");
      card.setAttribute("tabindex", "0");
      card.innerHTML =
        '<div class="flip-inner">' +
        '<div class="flip-face flip-front">' +
        '<span class="h-emoji">' + esc(h.emoji || "✨") + "</span>" +
        "<h4>" + esc(h.name) + "</h4><p>" + esc(h.hint || "悬停看看") + "</p>" +
        "</div>" +
        '<div class="flip-face flip-back">' +
        "<h5>" + esc(h.name) + "</h5><p>" + esc(h.detail) + "</p>" +
        "</div></div>";
      const toggle = () => card.classList.toggle("flipped");
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
      grid.appendChild(card);
    });

    const ul = $("#funFacts");
    if (ul) {
      ul.innerHTML = "";
      const list = (CONFIG.funFacts || []).filter(isFilled);
      list.forEach((f) => ul.appendChild(el("li", null, esc(f))));
      const card = ul.closest(".fun-box");
      if (card && !list.length) card.style.display = "none";
    }
  }

  /* ---------------- 性格 ---------------- */
  function renderTraits() {
    const mbtiCard = $(".mbti-card");
    if (mbtiCard && !isFilled(CONFIG.mbti)) {
      const axesBox = $("#mbtiAxes");
      if (axesBox) axesBox.innerHTML = "";
      const label = $(".mbti-label", mbtiCard);
      if (label) label.textContent = "性格概览";
      const code = $(".mbti-code", mbtiCard);
      if (code) code.textContent = "ME";
    }
    const axes = $("#mbtiAxes");
    if (axes) {
      axes.innerHTML = "";
      (CONFIG.mbtiAxes || []).forEach((a) => {
        const row = el("div", "axis");
        row.innerHTML =
          '<div class="axis-top"><span>' + esc(a.left) + "</span><span>" + esc(a.right) + "</span></div>" +
          '<div class="axis-track"><div class="axis-fill" data-level="' + Math.max(0, Math.min(100, Number(a.value) || 0)) + '"></div></div>';
        axes.appendChild(row);
      });
    }

    const cloud = $("#traitCloud");
    if (cloud) {
      cloud.innerHTML = "";
      (CONFIG.traits || []).forEach((t) => {
        const n = el("div", "trait", esc(t.word) + "<small>" + esc(t.desc || "") + "</small>");
        cloud.appendChild(n);
      });
    }

    const pair = $("#quotePair");
    if (pair) {
      pair.innerHTML = "";
      [CONFIG.otherQuote, CONFIG.selfQuote].filter(isFilled).forEach((q, i) => {
        pair.appendChild(el("div", "mini-quote", "<strong>" + (i === 0 ? "👥 别人眼中的我" : "🪞 我眼中的自己") + "</strong>" + esc(q)));
      });
    }
  }

  /* ---------------- 座右铭 ---------------- */
  let quoteIndex = 0;
  function renderQuote(animate) {
    const list = (CONFIG.quotes || []).filter((q) => q && isFilled(q.text));
    if (!list.length) return;
    const q = list[quoteIndex % list.length];
    const text = $("#quoteText");
    const author = $("#quoteAuthor");
    if (!text) return;
    text.textContent = q.text;
    if (author) author.textContent = q.author || "";
    if (animate) {
      text.classList.remove("swap");
      void text.offsetWidth;                     // 触发重排以重播动画
      text.classList.add("swap");
    }
  }

  function setupQuote() {
    renderQuote(false);
    const next = $("#nextQuote");
    if (next) {
      next.addEventListener("click", () => {
        const list = (CONFIG.quotes || []).filter((q) => q && isFilled(q.text));
        if (list.length > 1) quoteIndex = (quoteIndex + 1) % list.length;
        renderQuote(true);
      });
    }
    const copy = $("#copyQuote");
    if (copy) copy.addEventListener("click", () => copyText($("#quoteText").textContent, "这句话已复制"));
  }

  /* ---------------- 联系方式 ---------------- */
  function renderContacts() {
    const box = $("#contactCards");
    if (!box) return;
    box.innerHTML = "";
    (CONFIG.contacts || []).forEach((c) => {
      if (!c || !isFilled(c.value)) return;
      const item = el("div", "contact-item reveal");
      item.innerHTML =
        '<span class="contact-icon">' + esc(c.icon || "🔗") + "</span>" +
        '<div class="contact-meta"><span>' + esc(c.label) + "</span><strong>" + esc(c.value) + "</strong></div>" +
        (c.copy ? '<button class="contact-copy" type="button">复制</button>' : (isFilled(c.url) ? '<span class="contact-copy">前往 ↗</span>' : ""));
      const btn = $(".contact-copy", item);
      if (c.copy && btn) btn.addEventListener("click", () => copyText(c.value, "已复制 " + c.label));
      if (!c.copy && isFilled(c.url)) {
        item.style.cursor = "pointer";
        item.addEventListener("click", () => window.open(c.url, /^https?:/i.test(c.url) ? "_blank" : "_self"));
      }
      box.appendChild(item);
    });
  }

  /* ---------------- 联系表单（走邮件客户端） ---------------- */
  function setupForm() {
    const form = $("#contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const from = String(data.get("from") || "").trim();
      const mail = String(data.get("email") || "").trim();
      const msg = String(data.get("message") || "").trim();
      if (!from || !msg) { toast("请先填写你的名字和想说的话 🙂"); return; }
      const to = (CONFIG.contacts.find((c) => c.url && c.url.indexOf("mailto:") === 0) || {}).url;
      if (!to) { toast("还没配置收件邮箱，请在 CONFIG.contacts 里填写"); return; }
      const subject = encodeURIComponent("来自个人主页的留言 · " + from);
      const body = encodeURIComponent(msg + "\n\n—— " + from + (mail ? " <" + mail + ">" : ""));
      window.location.href = to + "?subject=" + subject + "&body=" + body;
      toast("正在打开你的邮件客户端…");
    });
  }

  /* ---------------- 打字机 ---------------- */
  function setupTyped() {
    const node = $("#typed");
    if (!node) return;
    const list = (CONFIG.typed || []).filter(isFilled);
    if (!list.length) return;
    let i = 0, j = 0, deleting = false;

    function step() {
      const word = list[i % list.length];
      j += deleting ? -1 : 1;
      node.textContent = word.slice(0, j);

      let delay = deleting ? 45 : 105;
      if (!deleting && j === word.length) { delay = 1500; deleting = true; }
      else if (deleting && j === 0) { deleting = false; i++; delay = 320; }
      setTimeout(step, delay);
    }
    setTimeout(step, 700);
  }

  /* ---------------- 滚动：进度条 / 导航 / 入场动画 ---------------- */
  function setupScroll() {
    const bar = $("#scrollProgress");
    const nav = $("#nav");
    const toTop = $("#toTop");

    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (bar) bar.style.width = (p * 100).toFixed(2) + "%";
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
      if (toTop) toTop.classList.toggle("show", window.scrollY > 520);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // 入场动画
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("in");
          revealObserver.unobserve(en.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    const observeReveals = () => $$(".reveal:not(.in)").forEach((n) => revealObserver.observe(n));
    observeReveals();

    // 进度条 / 折线填充动画
    const fillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const target = en.target;
          const level = target.getAttribute("data-level") || "0";
          setTimeout(() => { target.style.width = level + "%"; }, 120);
          fillObserver.unobserve(target);
        });
      },
      { threshold: 0.35 }
    );
    const observeFills = () => $$(".skill-fill:not([data-done]), .axis-fill:not([data-done])").forEach((n) => {
      n.setAttribute("data-done", "1");
      fillObserver.observe(n);
    });
    observeFills();

    // 数字滚动
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          animateCount(en.target);
          countObserver.unobserve(en.target);
        });
      },
      { threshold: 0.5 }
    );
    $$(".stat-num").forEach((n) => countObserver.observe(n));

    // 导航高亮（scroll spy）
    const links = $$(".nav-links a[data-spy]");
    const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    observeReveals();
    observeFills();

    return { observeReveals, observeFills };
  }

  /* ---------------- 背景星点 ---------------- */
  function renderStars() {
    const box = $("#stars");
    if (!box) return;
    const count = window.innerWidth < 700 ? 40 : 90;
    let html = "";
    for (let i = 0; i < count; i++) {
      html += '<i class="star" style="left:' + (Math.random() * 100).toFixed(2) + "%;top:" +
        (Math.random() * 100).toFixed(2) + "%;animation-delay:" + (Math.random() * 3).toFixed(2) + "s\"></i>";
    }
    box.innerHTML = html;
  }

  /* ---------------- 复制 / 提示 ---------------- */
  let toastTimer = null;
  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  function copyText(text, okMsg) {
    if (!isFilled(text)) { toast("这里还没有内容哦"); return; }
    const done = () => toast(okMsg || "已复制到剪贴板");
    const fallback = () => {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        done();
      } catch (err) { toast("复制失败，请手动选择文本"); }
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  function setupCopyButtons() {
    const btn = $("#copyEmail");
    if (btn) {
      btn.addEventListener("click", () => {
        const mail = (CONFIG.contacts.find((c) => c.url && c.url.indexOf("mailto:") === 0) || {}).value || "";
        copyText(mail, "邮箱已复制：" + mail);
      });
    }
  }

  /* ---------------- 移动端菜单 ---------------- */
  function setupNav() {
    const burger = $("#burger");
    const links = $("#navLinks");
    if (!burger || !links) return;
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      links.classList.toggle("open");
    });
    $$("a", links).forEach((a) => a.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    }));
  }

  /* ---------------- 设置面板 ---------------- */
  const prefs = Object.assign(
    { mode: CONFIG.theme.mode, accent: CONFIG.theme.accent, font: 1, anim: true, glow: true },
    (() => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; } })()
  );

  function savePrefs() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(prefs)); } catch (e) { /* 忽略 */ }
  }

  function applyPrefs() {
    const html = document.documentElement;
    html.setAttribute("data-theme", prefs.mode === "light" ? "light" : "dark");
    const p = CONFIG.palette[prefs.accent] || CONFIG.palette[0];
    html.style.setProperty("--c1", p.c1);
    html.style.setProperty("--c2", p.c2);
    html.style.setProperty("--c3", p.c3);
    html.style.setProperty("--font-scale", prefs.font);
    document.body.classList.toggle("no-anim", !prefs.anim);
    document.body.classList.toggle("no-glow", !prefs.glow);

    const themeBtn = $("#themeToggle");
    if (themeBtn) themeBtn.textContent = prefs.mode === "light" ? "☀️" : "🌙";
    $$("#themeSeg button").forEach((b) => b.classList.toggle("active", b.dataset.themeVal === prefs.mode));
    $$("#fontSeg button").forEach((b) => b.classList.toggle("active", Number(b.dataset.font) === Number(prefs.font)));
    $$("#swatches .swatch").forEach((s, i) => s.classList.toggle("active", i === Number(prefs.accent)));
    const anim = $("#animToggle");
    const glow = $("#glowToggle");
    if (anim) anim.checked = !!prefs.anim;
    if (glow) glow.checked = !!prefs.glow;
  }

  function setupPanel() {
    const panel = $("#panel");
    const mask = $("#panelMask");
    if (!panel) return;

    const open = (v) => {
      panel.classList.toggle("open", v);
      if (mask) mask.classList.toggle("show", v);
    };
    const toggleBtn = $("#panelToggle");
    const closeBtn = $("#panelClose");
    if (toggleBtn) toggleBtn.addEventListener("click", () => open(!panel.classList.contains("open")));
    if (closeBtn) closeBtn.addEventListener("click", () => open(false));
    if (mask) mask.addEventListener("click", () => open(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") open(false); });

    const themeBtn = $("#themeToggle");
    if (themeBtn) themeBtn.addEventListener("click", () => {
      prefs.mode = prefs.mode === "light" ? "dark" : "light";
      applyPrefs(); savePrefs();
    });

    const themeSeg = $("#themeSeg");
    if (themeSeg) themeSeg.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      prefs.mode = b.dataset.themeVal;
      applyPrefs(); savePrefs();
    });

    const swatches = $("#swatches");
    if (swatches) {
      swatches.innerHTML = "";
      CONFIG.palette.forEach((p, i) => {
        const b = el("button", "swatch");
        b.type = "button";
        b.title = p.name;
        b.style.background = "linear-gradient(135deg," + p.c1 + "," + p.c2 + ")";
        b.addEventListener("click", () => { prefs.accent = i; applyPrefs(); savePrefs(); toast("已切换主题色：" + p.name); });
        swatches.appendChild(b);
      });
    }

    const fontSeg = $("#fontSeg");
    if (fontSeg) fontSeg.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      prefs.font = Number(b.dataset.font);
      applyPrefs(); savePrefs();
    });

    const anim = $("#animToggle");
    if (anim) anim.addEventListener("change", () => { prefs.anim = anim.checked; applyPrefs(); savePrefs(); });
    const glow = $("#glowToggle");
    if (glow) glow.addEventListener("change", () => { prefs.glow = glow.checked; applyPrefs(); savePrefs(); });

    const reset = $("#resetPrefs");
    if (reset) reset.addEventListener("click", () => {
      prefs.mode = CONFIG.theme.mode; prefs.accent = CONFIG.theme.accent; prefs.font = 1; prefs.anim = true; prefs.glow = true;
      applyPrefs(); savePrefs(); toast("已恢复默认设置");
    });
  }

  /* ---------------- 引导条 ---------------- */
  function setupHint() {
    const hint = $("#fillHint");
    const close = $("#fillHintClose");
    if (!hint) return;
    let hidden = false;
    try { hidden = localStorage.getItem("myself-page-hint") === "off"; } catch (e) { /* 忽略 */ }
    if (hidden) hint.classList.add("hidden");
    if (close) close.addEventListener("click", () => {
      hint.classList.add("hidden");
      try { localStorage.setItem("myself-page-hint", "off"); } catch (e) { /* 忽略 */ }
    });
  }

  /* ---------------- 页脚 ---------------- */
  function renderFooter() {
    const y = $("#footerYear");
    if (y) y.textContent = new Date().getFullYear();
    const sub = $("#footerSub");
    if (sub) sub.textContent = CONFIG.footerSub;
    const views = $("#visitCount");
    if (views) {
      // 纯本地统计：记录本机访问次数（不联网、不上传）
      let n = 1;
      try {
        n = (parseInt(localStorage.getItem("myself-page-visits") || "0", 10) || 0) + 1;
        localStorage.setItem("myself-page-visits", String(n));
      } catch (e) { /* 忽略 */ }
      views.textContent = "第 " + n + " 次（本机记录）";
    }
  }

  /* ---------------- 启动 ---------------- */
  function init() {
    applyPrefs();

    bindText();
    renderAvatar();
    renderHeroTags();
    renderSocial();
    renderStats();
    renderAbout();
    renderFacts();
    renderValues();
    renderSkills();
    renderTimeline();
    renderProjects();
    renderHobbies();
    renderTraits();
    setupQuote();
    renderContacts();
    setupForm();
    setupTyped();
    renderStars();
    setupCopyButtons();
    setupNav();
    setupPanel();
    setupHint();
    renderFooter();
    setupScroll();

    // 设置面板放在最后应用一次，确保动态生成的内容也拿到主题
    applyPrefs();

    console.log("%c✨ 自我介绍网页已加载", "color:#00d2ff;font-weight:700", "\n改内容请编辑 assets/js/script.js 顶部的 CONFIG");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
