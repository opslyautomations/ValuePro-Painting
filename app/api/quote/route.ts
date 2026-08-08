import { NextRequest, NextResponse } from "next/server";

// Single configurable endpoint for the quote form. Set QUOTE_WEBHOOK_URL
// in the environment once a GoHighLevel (or other CRM) webhook is ready —
// no page or component needs to change when it's added.
const WEBHOOK_URL = process.env.QUOTE_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, email, service, city, message } = body;

  if (!name || !phone || !service || !city) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const payload = {
    name,
    phone,
    email,
    service,
    city,
    message,
    source: "valuepropainting.com",
    submittedAt: new Date().toISOString(),
  };

  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      return NextResponse.json({ error: "Webhook delivery failed" }, { status: 502 });
    }
  } else {
    // No webhook configured yet — log so the lead isn't silently lost.
    console.log("New quote request (no webhook configured):", payload);
  }

  return NextResponse.json({ ok: true });
}
