import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const PIXEL_GIF = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const email = await prisma.sentEmail.findUnique({ where: { id } });

    if (email && !email.openedAt) {
      await prisma.sentEmail.update({
        where: { id },
        data: {
          status: "opened",
          openedAt: new Date(),
        },
      });
    }

    return new NextResponse(PIXEL_GIF, {
      status: 200,
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Erro no tracking:", error);
    return new NextResponse(PIXEL_GIF, {
      status: 200,
      headers: {
        "Content-Type": "image/gif",
      },
    });
  }
}
