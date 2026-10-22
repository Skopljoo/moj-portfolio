import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Molimo popunite sva obavezna polja (ime, email, poruka)." },
        { status: 400 }
      );
    }

    const recipientEmail = "jusufskopljak2605@gmail.com";

    // Send via FormSubmit AJAX API directly to recipient email
    const formSubmitUrl = `https://formsubmit.co/ajax/${recipientEmail}`;
    const response = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://skopljoo.github.io/moj-portfolio",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: subject || `Nova poruka sa portfolija od: ${name}`,
        message: message,
        _template: "table",
        _captcha: "false",
      }),
    });

    const contentType = response.headers.get("content-type") || "";
    let result: any = {};

    if (contentType.includes("application/json")) {
      result = await response.json();
    } else {
      const text = await response.text();
      result = { message: text };
    }

    // FormSubmit returns { success: "true", message: "..." } or activation notice
    const isSuccess =
      result.success === "true" ||
      result.success === true ||
      (typeof result.message === "string" &&
        result.message.toLowerCase().includes("activation"));

    return NextResponse.json({
      success: isSuccess,
      message:
        result.message ||
        "Poruka je uspješno obrađena i proslijeđena na email adresu.",
      needsActivation:
        typeof result.message === "string" &&
        result.message.toLowerCase().includes("activation"),
    });
  } catch (err: any) {
    console.error("Greška u /api/contact:", err);
    return NextResponse.json(
      {
        error: "Greška na serveru prilikom slanja.",
        details: err?.message,
        fallback: true,
      },
      { status: 500 }
    );
  }
}
