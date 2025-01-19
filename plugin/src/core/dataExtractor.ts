export function detectDevice(): string {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/android/.test(userAgent)) return "android";
  if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
  return "desktop";
}

export function detectOS(): string {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("windows")) return "Windows";
  if (userAgent.includes("mac")) return "MacOS";
  if (userAgent.includes("linux")) return "Linux";
  if (userAgent.includes("android")) return "Android";
  if (userAgent.includes("iphone") || userAgent.includes("ipad")) return "iOS";
  return "Unknown";
}

export function getOrigin(): string {
  return window.location.origin;
}

let themeSwitchCount = 0;
let lastTheme: string | null = localStorage.getItem("theme");

export function trackThemeChanges(): void {
  setInterval(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme !== lastTheme) {
      themeSwitchCount++;
      lastTheme = currentTheme;
    }
  }, 1000);
}

export function getThemeSwitchCount(): number {
  return themeSwitchCount;
}

