function createElement(tagName, className, text) {
  const node = document.createElement(tagName);

  if (className) {
    node.className = className;
  }

  if (typeof text === "string") {
    node.textContent = text;
  }

  return node;
}

function createLink(href, className, text) {
  const link = createElement("a", className, text);
  link.href = href;
  return link;
}

function hasAppStoreUrl() {
  return typeof APP_DATA.app.appStoreUrl === "string" && APP_DATA.app.appStoreUrl.trim() !== "";
}

function createStoreBadgeLink(className) {
  if (!hasAppStoreUrl()) {
    return null;
  }

  const link = createLink(APP_DATA.app.appStoreUrl, className);
  const badge = createElement("img", "store-badge");

  badge.src = APP_DATA.app.appStoreBadge;
  badge.alt = APP_DATA.app.appStoreLabel;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", APP_DATA.app.appStoreLabel);
  link.append(badge);

  return link;
}

function createList(items, className) {
  const list = createElement("ul", className);

  items.forEach((item) => {
    list.append(createElement("li", "", item));
  });

  return list;
}

function createContentCard(item) {
  const card = createElement("article", "content-card");

  card.append(createElement("h3", "card-title", item.title));

  (item.paragraphs || []).forEach((paragraph) => {
    card.append(createElement("p", "card-copy", paragraph));
  });

  if (item.lines && item.lines.length > 0) {
    card.append(createList(item.lines, "card-list"));
  }

  return card;
}

function renderHeader(activePage) {
  const header = document.getElementById("site-header");
  const wrapper = createElement("div", "container header-inner");
  const brand = createLink("index.html", "brand");
  const brandIcon = createElement("img", "brand-icon");
  const brandText = createElement("div", "brand-text");
  const brandTitle = createElement("span", "brand-title", APP_DATA.app.name);
  const brandSubtitle = createElement("span", "brand-subtitle", "iOS Board Game");
  const menuButton = createElement("button", "menu-toggle");
  const menuLabel = createElement("span", "visually-hidden", "Toggle navigation");
  const nav = createElement("nav", "site-nav");
  const menuBars = createElement("span", "menu-toggle-bars");

  brandIcon.src = APP_DATA.app.icon;
  brandIcon.alt = APP_DATA.app.name + " app icon";
  nav.setAttribute("aria-label", "Primary navigation");
  nav.id = "site-nav";
  nav.setAttribute("data-open", "false");
  menuButton.type = "button";
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-controls", "site-nav");
  menuButton.setAttribute("aria-label", "Toggle navigation");
  menuButton.append(menuBars, menuLabel);

  brandText.append(brandTitle, brandSubtitle);
  brand.append(brandIcon, brandText);

  APP_DATA.navigation.forEach((item) => {
    const link = createLink(item.href, "nav-link", item.label);

    if (item.id === activePage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", () => {
      nav.setAttribute("data-open", "false");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.classList.remove("is-open");
    });

    nav.append(link);
  });

  menuButton.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";

    nav.setAttribute("data-open", String(!isOpen));
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.classList.toggle("is-open", !isOpen);
  });

  wrapper.append(brand, menuButton, nav);
  header.append(wrapper);
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  const wrapper = createElement("div", "container footer-inner");
  const meta = createElement(
    "p",
    "footer-copy",
    "© " + new Date().getFullYear() + " - " + APP_DATA.app.name
  );
  const actions = createElement("div", "footer-actions");
  const links = createElement("div", "footer-links");
  const storeLink = createStoreBadgeLink("store-button footer-store-button");

  APP_DATA.navigation.forEach((item) => {
    links.append(createLink(item.href, "footer-link", item.label));
  });

  actions.append(links);

  if (storeLink) {
    actions.append(storeLink);
  }

  wrapper.append(meta, actions);
  footer.append(wrapper);
}

function renderHero(parent) {
  const section = createElement("section", "hero");
  const container = createElement("div", "container hero-inner");
  const icon = createElement("img", "hero-icon");
  const title = createElement("h1", "hero-title", APP_DATA.app.name);
  const summary = createElement("p", "hero-copy", APP_DATA.app.summary);
  const tagline = createElement("p", "hero-subcopy", APP_DATA.app.tagline);
  const storeLink = createStoreBadgeLink("store-button");

  icon.src = APP_DATA.app.icon;
  icon.alt = APP_DATA.app.name + " app icon";

  container.append(icon, title, summary, tagline);

  if (storeLink) {
    container.append(storeLink);
  }

  section.append(container);
  parent.append(section);
}

function renderCarousel(parent) {
  if (!Array.isArray(APP_DATA.screenshots) || APP_DATA.screenshots.length === 0) {
    return;
  }

  const section = createElement("section", "screenshot-section");
  const container = createElement("div", "container");
  const viewport = createElement("div", "carousel-viewport");
  const track = createElement("div", "carousel-track");
  const items = APP_DATA.screenshots;

  items.forEach((shot, index) => {
    const card = createElement("div", "screenshot-card");
    const image = createElement("img", "screenshot-image");

    image.src = shot.src;
    image.alt = shot.alt;
    image.loading = index === 0 ? "eager" : "lazy";

    card.append(image);
    track.append(card);
  });

  viewport.append(track);
  container.append(viewport);
  section.append(container);
  parent.append(section);
}

function renderCardSection(parent, cards, title) {
  const section = createElement("section", "content-section");
  const container = createElement("div", "container");
  const grid = createElement("div", "card-grid");

  if (title) {
    container.append(createElement("h2", "section-title", title));
  }

  cards.forEach((item) => {
    grid.append(createContentCard(item));
  });

  container.append(grid);
  section.append(container);
  parent.append(section);
}

function renderOfferSection(parent) {
  const section = createElement("section", "content-section");
  const container = createElement("div", "container");
  const grid = createElement("div", "card-grid");
  const note = createElement("p", "section-note", APP_DATA.app.inspiration);

  APP_DATA.home.offerCards.forEach((item) => {
    grid.append(createContentCard(item));
  });

  container.append(grid, note);
  section.append(container);
  parent.append(section);
}

function renderSecondaryCta(parent) {
  const section = createElement("section", "cta-section");
  const container = createElement("div", "container cta-card");
  const text = createElement("div", "cta-copy");
  const actions = createElement("div", "cta-actions");

  text.append(
    createElement("h2", "", APP_DATA.home.secondaryCta.title),
    createElement("p", "section-copy", APP_DATA.home.secondaryCta.body)
  );

  APP_DATA.home.secondaryCta.links.forEach((item, index) => {
    const className = index === 0 ? "button button-primary" : "button button-secondary";
    actions.append(createLink(item.href, className, item.label));
  });

  container.append(text, actions);
  section.append(container);
  parent.append(section);
}

function renderSupportPage(parent) {
  const hero = createElement("section", "page-hero");
  const heroContainer = createElement("div", "container");
  const label = createElement("p", "eyebrow", "Support");
  const title = createElement("h1", "page-title", APP_DATA.app.name + " support");
  const body = createElement("p", "section-copy", APP_DATA.support.intro);
  const cards = createElement("div", "contact-grid");
  const faqSection = createElement("section", "content-section");
  const faqContainer = createElement("div", "container");
  const faqTitle = createElement("h2", "section-title", "FAQ");
  const faqList = createElement("div", "faq-list");

  heroContainer.append(label, title, body);

  APP_DATA.support.contactCards.forEach((item) => {
    const card = createElement("article", "contact-card");
    const cardLabel = createElement("p", "contact-label", item.label);
    const value = item.href
      ? createLink(item.href, "contact-value", item.value)
      : createElement("p", "contact-value", item.value);

    if (item.href && item.href.startsWith("mailto:")) {
      value.setAttribute("aria-label", item.label + ": " + item.value);
    }

    card.append(cardLabel, value);
    cards.append(card);
  });

  heroContainer.append(cards);
  hero.append(heroContainer);
  parent.append(hero);

  renderCardSection(parent, APP_DATA.support.helpGroups, "Game Help");

  APP_DATA.support.faqs.forEach((item) => {
    const faq = createElement("details", "faq-item");
    const summary = createElement("summary", "", item.question);
    const answer = createElement("p", "", item.answer);

    faq.append(summary, answer);
    faqList.append(faq);
  });

  faqContainer.append(faqTitle, faqList);
  faqSection.append(faqContainer);
  parent.append(faqSection);
}

function renderPrivacyPage(parent) {
  const hero = createElement("section", "page-hero");
  const heroContainer = createElement("div", "container");
  const label = createElement("p", "eyebrow", "Privacy Policy");
  const title = createElement("h1", "page-title", APP_DATA.app.name + " Privacy Policy");
  const body = createElement("p", "section-copy", APP_DATA.privacy.intro);
  const updated = createElement(
    "p",
    "page-meta",
    "Last updated: " + APP_DATA.app.lastUpdated
  );
  const section = createElement("section", "content-section");
  const container = createElement("div", "container policy-card");

  heroContainer.append(label, title, body, updated);
  hero.append(heroContainer);

  APP_DATA.privacy.sections.forEach((item) => {
    const block = createElement("article", "policy-section");

    block.append(createElement("h2", "", item.title));

    item.paragraphs.forEach((paragraph) => {
      block.append(createElement("p", "", paragraph));
    });

    container.append(block);
  });

  section.append(container);
  parent.append(hero, section);
}

function renderHomePage(parent) {
  renderHero(parent);
  renderCarousel(parent);
  renderCardSection(parent, APP_DATA.home.primaryCards);
  renderOfferSection(parent);
  renderSecondaryCta(parent);
}

function applyTheme() {
  const root = document.documentElement;
  const theme = APP_DATA.theme;

  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-strong", theme.accentStrong);
  root.style.setProperty("--accent-soft", theme.accentSoft);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--surface-alt", theme.surfaceAlt);
  root.style.setProperty("--ink", theme.ink);
  root.style.setProperty("--muted", theme.muted);
}

function setDocumentTitle(page) {
  const pageLabel = APP_DATA.navigation.find((item) => item.id === page)?.label;
  document.title = page === "home" ? APP_DATA.app.name : pageLabel + " | " + APP_DATA.app.name;
}

function renderPage() {
  const page = document.body.dataset.page;
  const main = document.getElementById("page-content");

  applyTheme();
  setDocumentTitle(page);
  renderHeader(page);
  renderFooter();

  if (page === "home") {
    renderHomePage(main);
    return;
  }

  if (page === "support") {
    renderSupportPage(main);
    return;
  }

  if (page === "privacy") {
    renderPrivacyPage(main);
  }
}

document.addEventListener("DOMContentLoaded", renderPage);
