const baseURL = process.env.EXPO_PUBLIC_API_URL ?? "";

export async function askAI(prompt: string): Promise<string> {
  const res = await fetch(`${baseURL}/ai`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) throw new Error(`AI request failed: ${res.status}`);
  const data = (await res.json()) as { text?: string };
  return data.text ?? "";
}
