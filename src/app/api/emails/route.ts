import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { emailTemplates } from "@/lib/templates";
import { renderTemplate, addTrackingPixel } from "@/lib/render-template";
import { sendEmail } from "@/lib/brevo";

export async function GET() {
  const emails = await prisma.sentEmail.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(emails);
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

    let html = renderTemplate(template.html, {
      name: recipientName || recipientEmail,
    });

    const sentEmail = await prisma.sentEmail.create({
      data: {
        templateId,
        recipientEmail,
        recipientName,
        subject: subject || template.subject,
        htmlContent: html,
        status: "sent",
        sentAt: new Date(),
      },
    });

    html = addTrackingPixel(html, sentEmail.id);

    await sendEmail({
      to: recipientEmail,
      subject: subject || template.subject,
      html,
    });

    return NextResponse.json(sentEmail);
  } catch (error: unknown) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar email", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
