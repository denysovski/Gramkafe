/**
 * Get the correct image path with basePath prefix for GitHub Pages
 * @param path - The image path (e.g., "images/showcase1.jpg")
 * @returns The full path with basePath if needed
 */
export function getImagePath(path: string): string {
  // Check if running in GitHub Actions (during build or on deployed site)
  const onGitHub = process.env.GITHUB_ACTIONS === "true" || 
                   (typeof window !== "undefined" && window.location.hostname.includes("github"))
  
  if (onGitHub) {
    if (!path.startsWith("/Gramkafe")) {
      return `/Gramkafe${path}`
    }
  }
  
  return path
}





