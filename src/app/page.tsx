"use client";

import { useState } from "react";
import { emailTemplateList } from "@/lib/templates";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export default function SendPage() {
  const [templateId, setTemplateId] = useState(emailTemplateList[0].id);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [subject, setSubject] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const selectedTemplate = emailTemplateList.find((t) => t.id === templateId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessage("");

    try {
      const res = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateId,
          recipientEmail,
          recipientName,
          subject: subject || selectedTemplate?.subject,
        }),
      });

      if (res.ok) {
        setMessage("Email enviado com sucesso!");
        setRecipientEmail("");
        setRecipientName("");
        setSubject("");
      } else {
        const error = await res.json();
        setMessage(`Erro: ${error.error}`);
      }
    } catch (error) {
      setMessage(`Erro ao enviar: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Enviar Email</h2>

      <form onSubmit={handleSubmit} className="space-y-6 border border-black p-6">
        <div>
          <label className="block mb-2 font-medium">Modelo</label>
          <select
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value)}
            className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          >
            {emailTemplateList.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Email do Destinatário *</label>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
            className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="destinatario@exemplo.com"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Nome do Destinatário</label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Nome (opcional)"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Assunto</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder={selectedTemplate?.subject}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-black text-white px-6 py-3 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
        >
          <PaperPlaneIcon />
          {sending ? "Enviando..." : "Enviar Email"}
        </button>

        {message && (
          <div
            className={`p-4 border ${
              message.includes("sucesso")
                ? "border-green-600 bg-green-50 text-green-800"
                : "border-red-600 bg-red-50 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
      </form>

      {selectedTemplate && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Preview do Email</h3>
          <div className="border border-black p-6 bg-gray-50">
            <div
              dangerouslySetInnerHTML={{
                __html: selectedTemplate.html.replace(
                  /\{\{name\}\}/g,
                  recipientName || recipientEmail || "Nome"
                ),
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
