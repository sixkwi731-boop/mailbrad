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
    subject: "Atualização de Chave de Segurança",
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
        <td align="center" style="padding:20px 10px;">
          <table role="presentation" style="max-width:700px;width:100%;background:#ffffff;" cellpadding="0" cellspacing="0">
            <tr>
              <!-- Barra vermelha esquerda - mais larga e visível -->
              <td style="width:100px;min-width:100px;background:linear-gradient(180deg, #CC092F 0%, #E91E63 50%, #CC092F 100%);"></td>
              
              <!-- Conteúdo central -->
              <td style="padding:0;background:#ffffff;">
                <!-- GIF animado - sem padding, colado nas bordas -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0;line-height:0;">
                      <img src="/unnamed.gif" alt="" style="display:block;width:100%;height:auto;margin:0;" />
                    </td>
                  </tr>
                </table>

                <!-- Logo Bradesco -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding:32px 32px 40px 32px;">
                      <img src="/bra.png" alt="Bradesco" style="display:block;max-width:400px;width:100%;height:auto;" />
                    </td>
                  </tr>
                </table>

                <!-- Título -->
                <h1 style="margin:0 0 40px 0;padding:0 32px;font-size:24px;font-weight:bold;color:#000000;text-align:center;font-family:Verdana,Geneva,sans-serif;line-height:1.4;">
                  Bem Vindo Banco Bradesco S.A.
                </h1>

                <!-- Conteúdo -->
                <div style="padding:0 32px;color:#333333;font-size:14px;line-height:1.8;font-family:Verdana,Geneva,sans-serif;">
                  <p style="margin:0 0 20px 0;font-weight:bold;text-align:center;">Prezado(a) Cliente,</p>
                  
                  <p style="margin:0 0 20px 0;text-align:center;">
                    Informamos que, para manter a segurança de seus acessos digitais, será necessário realizar a atualização de sua <strong>chave de segurança</strong>. Pedimos que acesse o nosso portal oficial e siga as instruções disponíveis em "<strong>Atualização de Chaves de Segurança</strong>".
                  </p>

                  <!-- Botão -->
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0;">
                    <tr>
                      <td align="center">
                        <a href="{{link}}" style="display:inline-block;background:#CC092F;color:#ffffff;text-decoration:none;padding:16px 48px;border-radius:8px;font-family:Verdana,Geneva,sans-serif;font-size:15px;font-weight:bold;">
                          www.bradesco.com.br
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Assinatura -->
                  <p style="margin:32px 0 0 0;text-align:center;color:#666666;font-size:13px;">
                    Atenciosamente,<br/>
                    Equipe Bradesco S.A.
                  </p>
                </div>

                <!-- Rodapé -->
                <div style="margin-top:40px;padding:24px 32px;background:#CC092F;font-size:12px;color:#ffffff;text-align:center;font-family:Verdana,Geneva,sans-serif;">
                </div>
              </td>
              
              <!-- Barra vermelha direita - mais larga e visível -->
              <td style="width:100px;min-width:100px;background:linear-gradient(180deg, #CC092F 0%, #E91E63 50%, #CC092F 100%);"></td>
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
