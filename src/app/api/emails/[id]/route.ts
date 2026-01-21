import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/brevo";
import { addTrackingPixel } from "@/lib/render-template";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const email = await prisma.sentEmail.findUnique({ where: { id } });

    if (!email) {
      return NextResponse.json({ error: "Email não encontrado" }, { status: 404 });
    }

    const html = addTrackingPixel(email.htmlContent, email.id);

    await sendEmail({
      to: email.recipientEmail,
      subject: email.subject,
      html,
    });

    const updated = await prisma.sentEmail.update({
      where: { id },
      data: {
        sentAt: new Date(),
        status: "sent",
      },
    });

    return NextResponse.json(updated);
  } catch (error: unknown) {
    console.error("Erro ao reenviar email:", error);
    return NextResponse.json(
      { error: "Erro ao reenviar email", details: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 }
    );
  }
}
