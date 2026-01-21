import { NextRequest, NextResponse } from "next/server";
import { emailTemplates } from "@/lib/templates";
import { sendEmail, getAbsoluteUrl } from "@/lib/brevo";

function renderTemplate(html: string, variables: Record<string, string>): string {
  let rendered = html;
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    rendered = rendered.replace(regex, value);
  }
  
  // Substituir URLs relativas por absolutas para imagens
  rendered = rendered.replace(
    /src="\/([^"]+)"/g,
    (match, path) => `src="${getAbsoluteUrl('/' + path)}"`
  );
  
  return rendered;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { templateId, recipientEmail, recipientName, subject } = body;

    const template = emailTemplates[templateId];
    if (!template) {
      return NextResponse.json(
        { error: "Template não encontrado" },
        { status: 404 }
      );
    }

    const html = renderTemplate(template.html, {
      name: recipientName || recipientEmail,
    });

    await sendEmail({
      to: recipientEmail,
      subject: subject || template.subject,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Email enviado com sucesso!",
      recipientEmail,
      subject: subject || template.subject,
    });
  } catch (error: unknown) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      {
        error: "Erro ao enviar email",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
