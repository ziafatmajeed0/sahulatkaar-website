declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface Window {
  dataLayer: Array<Record<string, unknown>>;
  fbq: (...args: unknown[]) => void;
  gtag: (...args: unknown[]) => void;
}
