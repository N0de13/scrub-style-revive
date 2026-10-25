import { beforeEach, expect, it } from "vitest";
import { initAnalytics, trackPageView } from "./analytics";

beforeEach(() => {
  window.dataLayer = [];
  document.head.querySelectorAll('script[src*="googletagmanager"]').forEach((script) => script.remove());
});

it("queues Google-compatible commands for the requested measurement ID", () => {
  initAnalytics();
  const commands = window.dataLayer as IArguments[];
  expect(Object.prototype.toString.call(commands[0])).toBe("[object Arguments]");
  expect(commands[1][0]).toBe("config");
  expect(commands[1][1]).toBe("G-NB8D3WQQMX");
  expect(commands[1][2]).toEqual({ send_page_view: true });
});

it("queues a page view when a visitor changes pages", () => {
  initAnalytics();
  trackPageView("/blog");
  const commands = window.dataLayer as IArguments[];
  expect(Object.prototype.toString.call(commands[2])).toBe("[object Arguments]");
  expect(commands[2][0]).toBe("event");
  expect(commands[2][1]).toBe("page_view");
  expect(commands[2][2]).toMatchObject({ page_path: "/blog" });
});