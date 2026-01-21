export function renderTemplate(
  html: string,
  variables: Record<string, string>
): string {
  let rendered = html;
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    rendered = rendered.replace(regex, value);
  }
  return rendered;
}

export function addTrackingPixel(html: string, emailId: string): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const pixel = `<img src="${appUrl}/api/track/${emailId}" width="1" height="1" style="display:block;" alt="" />`;
  return html.replace("</body>", `${pixel}</body>`);
}
