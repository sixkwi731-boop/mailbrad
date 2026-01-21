export type EmailTemplate = {
  id: string;
  name: string;
  subject: string;
  html: string;
};

export const emailTemplates: Record<string, EmailTemplate> = {
  "boas-vindas": {
    id: "boas-vindas",
    name: "Boas-vindas",
    subject: "Bem-vindo ao MailBrad",
    html: `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boas-vindas</title>
  </head>
  <body style="margin:0;padding:0;background:#ffffff;color:#000000;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" style="max-width:600px;width:100%;" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:24px;border:1px solid #000000;">
                <h1 style="margin:0 0 12px 0;font-size:24px;">Olá, {{name}}</h1>
                <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;">
                  Obrigado por entrar em contato. Este é um exemplo de modelo simples, em preto e branco.
                </p>
                <p style="margin:0;font-size:12px;line-height:1.6;">
                  Se você não reconhece este email, pode ignorar esta mensagem.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  },
  "follow-up": {
    id: "follow-up",
    name: "Follow-up",
    subject: "Só passando para conferir",
    html: `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Follow-up</title>
  </head>
  <body style="margin:0;padding:0;background:#ffffff;color:#000000;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" style="max-width:600px;width:100%;" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:24px;border:1px solid #000000;">
                <h1 style="margin:0 0 12px 0;font-size:20px;">Olá, {{name}}</h1>
                <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;">
                  Estou retomando nosso contato para garantir que você recebeu a última mensagem.
                </p>
                <p style="margin:0;font-size:12px;line-height:1.6;">
                  Caso já tenha respondido, desconsidere este email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  },
  "modelo-01": {
    id: "modelo-01",
    name: "Modelo 01 - Bradesco",
    subject: "Bem-vindo Banco Bradesco S.A.",
    html: `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bradesco</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;">
      <tr>
        <td align="center" style="padding:0;">
          <table role="presentation" style="max-width:800px;width:100%;background:#ffffff;" cellpadding="0" cellspacing="0">
            <tr>
              <!-- Barra vermelha esquerda -->
              <td style="width:40px;background:linear-gradient(180deg, #CC092F 0%, #E91E63 100%);"></td>
              
              <!-- Conteúdo central -->
              <td style="padding:40px 24px;background:#ffffff;">
                <!-- Logo Bradesco -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding:0 0 32px 0;">
                      <img src="/bra.png" alt="Bradesco" style="display:block;max-width:300px;width:100%;height:auto;" />
                    </td>
                  </tr>
                </table>

                <!-- Título -->
                <h1 style="margin:0 0 24px 0;font-size:28px;color:#CC092F;text-align:center;">
                  Bem-vindo Banco Bradesco S.A.
                </h1>

                <!-- Conteúdo -->
                <div style="color:#333333;font-size:16px;line-height:1.6;">
                  <p style="margin:0 0 16px 0;">Olá, {{name}}</p>
                  
                  <!-- CONTEUDO SERA INSERIDO AQUI -->
                  <p style="margin:0 0 16px 0;">
                    Conteúdo do email será adicionado aqui.
                  </p>
                </div>

                <!-- Rodapé -->
                <div style="margin-top:40px;padding-top:24px;border-top:1px solid #e0e0e0;font-size:12px;color:#666666;text-align:center;">
                  <p style="margin:0;">Este é um email automático. Por favor, não responda.</p>
                </div>
              </td>
              
              <!-- Barra vermelha direita -->
              <td style="width:40px;background:linear-gradient(180deg, #E91E63 0%, #CC092F 100%);"></td>
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
