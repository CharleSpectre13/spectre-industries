import { chromium } from "playwright";
import { mkdirSync } from "fs";

mkdirSync("/workspace/screenshots", { recursive: true });
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e.message || e)));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle", timeout: 45000 });
await page.waitForTimeout(800);

const results = { steps: [], errors };

// 1) Filter chips
await page.locator("#work").scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
const before = await page.locator("#project-grid article").count();
await page.locator('[data-filter="agents"]').click();
await page.waitForTimeout(300);
const agents = await page.locator("#project-grid article").count();
const agentCats = await page.locator("#project-grid article").evaluateAll((els) =>
  els.map((e) => e.getAttribute("data-category"))
);
await page.screenshot({ path: "/workspace/screenshots/02-filter-agents.png" });
results.steps.push({ step: "1-filter", before, agents, agentCats, pass: agents > 0 && agents < before && agentCats.every((c) => c === "agents") });

await page.locator('[data-filter="gaming"]').click();
await page.waitForTimeout(200);
const gaming = await page.locator("#project-grid article").count();
results.steps.push({ step: "1b-gaming", gaming, pass: gaming === 1 });

await page.locator('[data-filter="all"]').click();
await page.waitForTimeout(200);

// 2) Hover reveal on project card
const card = page.locator("#project-grid article").first();
await card.scrollIntoViewIfNeeded();
await card.hover();
await page.waitForTimeout(500);
const revealBox = await card.locator("[data-reveal] p").first().boundingBox();
const revealText = await card.locator("[data-reveal] p").first().innerText();
const revealVisible = !!revealBox && revealBox.height > 8;
await page.screenshot({ path: "/workspace/screenshots/03-card-hover.png" });
results.steps.push({ step: "2-hover", revealVisible, revealBox, revealText: revealText.slice(0, 100), pass: revealVisible && revealText.length > 20 });

// 3) Agents section
await page.locator("#agents").scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
const agentCards = await page.locator("[data-agents-status] [data-agent-name]").count();
const liveCount = await page.locator('[data-agent-live="true"]').count();
const agentsTitle = await page.locator("#agents-title").innerText();
await page.screenshot({ path: "/workspace/screenshots/04-agents.png" });
results.steps.push({ step: "3-agents", agentCards, liveCount, agentsTitle, pass: agentCards === 4 && liveCount >= 3 && /Agents/i.test(agentsTitle) });

// 4) Contact form submit
await page.locator("#contact").scrollIntoViewIfNeeded();
await page.waitForTimeout(200);
await page.fill("#name", "QA Operator");
await page.fill("#email", "qa@spectre.industries");
await page.selectOption("#topic", "agents");
await page.fill("#message", "Requesting Spectre007 agent access for promo pipeline audit.");
await page.locator('#contact-form button[type="submit"]').click();
let statusText = "";
let statusType = "";
try {
  await page.waitForSelector("#form-status", { timeout: 12000 });
  statusText = await page.locator("#form-status").innerText();
  statusType = await page.locator("#form-status").getAttribute("data-status") || "";
} catch (e) {
  statusText = "timeout: " + String(e.message || e);
}
await page.screenshot({ path: "/workspace/screenshots/05-contact-submit.png" });
results.steps.push({ step: "4-contact", statusText, statusType, pass: statusType === "ok" && /Spectre007/i.test(statusText) });

// Mobile viewport
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle", timeout: 45000 });
await mobile.waitForTimeout(500);
const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
await mobile.screenshot({ path: "/workspace/screenshots/06-mobile.png" });
results.steps.push({ step: "mobile", overflow, pass: !overflow });
await mobile.close();

results.errors = errors;
results.allPass = results.steps.every((s) => s.pass) && errors.length === 0;
console.log(JSON.stringify(results, null, 2));
await browser.close();
process.exit(results.allPass ? 0 : 1);
