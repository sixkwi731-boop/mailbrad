# MailBrad 📧

Sistema minimalista de envio de emails com design preto e branco.

## 🚀 Features

- ✅ Envio de emails via Brevo SMTP
- ✅ Templates hardcoded customizáveis
- ✅ Preview do email antes de enviar
- ✅ Design minimalista preto e branco
- ✅ Responsivo
- ✅ Sem banco de dados

## 🛠️ Tecnologias

- **Next.js 16** - Framework React
- **Tailwind CSS 4** - Estilização
- **Nodemailer** - Envio de emails
- **Brevo SMTP** - Serviço de envio
- **Radix Icons** - Ícones do sistema

## 📦 Instalação

```bash
npm install
```

## ⚙️ Configuração

Configure as variáveis de ambiente:

```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=seu-login@smtp-brevo.com
SMTP_PASS=sua-chave-smtp-brevo
SMTP_FROM=seu-email@dominio.com
```

### Como obter credenciais Brevo:

1. Crie uma conta em [Brevo](https://www.brevo.com/)
2. Vá em **Settings → SMTP & API**
3. Copie as credenciais SMTP

## 🏃 Executar

```bash
npm run dev
```

Acesse: http://localhost:3000

## 📝 Deploy na Vercel

1. Importe o repositório no Vercel
2. Configure as variáveis de ambiente (SMTP_*)
3. Deploy!

## 📧 Templates

Os templates estão hardcoded em `src/lib/templates.ts`. Para adicionar novos templates, edite esse arquivo.

## 🎨 Design

- Interface minimalista em preto e branco
- Ícones de sistema (Radix UI)
- Layout vertical com preview
- Responsivo para mobile

---

Made with ⚡ by G2 Conceito Soluções
