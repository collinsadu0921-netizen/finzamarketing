/**
 * Fires optional GA4 / GTM events when `gtag` or `dataLayer` exist.
 * Load GA in the document (e.g. via GTM) so clicks can be compared to page views.
 */
export function trackFinzaEvent(
  action: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  if (typeof window === "undefined") return;

  const payload: Record<string, unknown> = {
    ...params,
    page_path: window.location.pathname,
  };

  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", action, payload);
  }

  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: action, ...payload });
  }
}
