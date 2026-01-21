export type EmailTemplate = {
  id: string;
  name: string;
  subject: string;
  html: string;
};

export const emailTemplates: Record<string, EmailTemplate> = {
  "modelo-01": {
    id: "modelo-01",
    name: "Modelo 01 - Bradesco",
    subject: "Bem Vindo Banco Bradesco S.A.",
    html: `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bradesco</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f5f5;font-family:Verdana,Geneva,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;">
      <tr>
        <td align="center" style="padding:20px 0;">
          <table role="presentation" style="max-width:700px;width:100%;background:#ffffff;" cellpadding="0" cellspacing="0">
            <tr>
              <!-- Barra vermelha esquerda - mais larga -->
              <td style="width:80px;min-width:80px;background:linear-gradient(180deg, #CC092F 0%, #E91E63 50%, #CC092F 100%);"></td>
              
              <!-- Conteúdo central -->
              <td style="padding:40px 24px;background:#ffffff;">
                <!-- Logo Bradesco -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding:0 0 40px 0;">
                      <img src="/bra.png" alt="Bradesco" style="display:block;max-width:350px;width:100%;height:auto;" />
                    </td>
                  </tr>
                </table>

                <!-- Título -->
                <h1 style="margin:0 0 32px 0;font-size:26px;font-weight:bold;color:#000000;text-align:center;font-family:Verdana,Geneva,sans-serif;">
                  Bem Vindo Banco Bradesco S.A.
                </h1>

                <!-- Conteúdo -->
                <div style="color:#333333;font-size:15px;line-height:1.7;font-family:Verdana,Geneva,sans-serif;">
                  <p style="margin:0 0 16px 0;">Olá, {{name}}</p>
                  
                  <!-- CONTEUDO SERA INSERIDO AQUI -->
                  <p style="margin:0 0 16px 0;">
                    Conteúdo do email será adicionado aqui.
                  </p>
                </div>

                <!-- Rodapé -->
                <div style="margin-top:48px;padding-top:24px;border-top:1px solid #e0e0e0;font-size:11px;color:#666666;text-align:center;font-family:Verdana,Geneva,sans-serif;">
                  <p style="margin:0;">Este é um email automático. Por favor, não responda.</p>
                </div>
              </td>
              
              <!-- Barra vermelha direita - mais larga -->
              <td style="width:80px;min-width:80px;background:linear-gradient(180deg, #CC092F 0%, #E91E63 50%, #CC092F 100%);"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  },
};

export const emailTemplateList = Object.values(emailTemplates);
