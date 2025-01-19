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
  
  export function trackThemeChanges(): void {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
    mediaQuery.addEventListener("change", () => {
      themeSwitchCount++;
    });
  }
  
  export function getThemeSwitchCount(): number {
    return themeSwitchCount;
  }
  