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
};

export const emailTemplateList = Object.values(emailTemplates);
