"use client";

import { useEffect, useState } from "react";
import { ReloadIcon, CheckCircledIcon, CircleIcon, CrossCircledIcon } from "@radix-ui/react-icons";

type SentEmail = {
  id: string;
  templateId: string;
  recipientEmail: string;
  recipientName: string | null;
  subject: string;
  status: string;
  sentAt: string | null;
  openedAt: string | null;
  createdAt: string;
};

export default function HistoryPage() {
  const [emails, setEmails] = useState<SentEmail[]>([]);
  const [loading, setLoading] = useState(true);
  const [resending, setResending] = useState<string | null>(null);

  const loadEmails = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/emails");
      if (!res.ok) {
        const text = await res.text();
        console.error("Erro na API:", text);
        throw new Error(`API retornou ${res.status}`);
      }
      const data = await res.json();
      setEmails(data);
    } catch (error) {
      console.error("Erro ao carregar emails:", error);
      setEmails([]);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async (id: string) => {
    setResending(id);
    try {
      await fetch(`/api/emails/${id}`, { method: "POST" });
      await loadEmails();
    } catch (error) {
      console.error("Erro ao reenviar:", error);
    } finally {
      setResending(null);
    }
  };

  useEffect(() => {
    loadEmails();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "opened":
        return <CheckCircledIcon className="text-green-600" />;
      case "sent":
        return <CircleIcon />;
      case "failed":
        return <CrossCircledIcon className="text-red-600" />;
      default:
        return <CircleIcon />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "opened":
        return "Aberto";
      case "sent":
        return "Enviado";
      case "failed":
        return "Falhou";
      default:
        return status;
    }
  };

  if (loading) {
    return <div className="text-center py-8">Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Histórico de Emails</h2>
        <button
          onClick={loadEmails}
          className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors flex items-center gap-2"
        >
          <ReloadIcon />
          Atualizar
        </button>
      </div>

      {emails.length === 0 ? (
        <div className="border border-black p-8 text-center text-gray-600">
          Nenhum email enviado ainda.
        </div>
      ) : (
        <div className="border border-black overflow-hidden">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="text-left p-4 font-medium">Destinatário</th>
                <th className="text-left p-4 font-medium">Assunto</th>
                <th className="text-left p-4 font-medium">Modelo</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Enviado</th>
                <th className="text-left p-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, idx) => (
                <tr
                  key={email.id}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-4">
                    <div>
                      <div className="font-medium">{email.recipientName || "-"}</div>
                      <div className="text-sm text-gray-600">{email.recipientEmail}</div>
                    </div>
                  </td>
                  <td className="p-4">{email.subject}</td>
                  <td className="p-4 text-sm text-gray-600">{email.templateId}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(email.status)}
                      <span>{getStatusText(email.status)}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {email.sentAt
                      ? new Date(email.sentAt).toLocaleString("pt-BR")
                      : "-"}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleResend(email.id)}
                      disabled={resending === email.id}
                      className="px-3 py-1 border border-black text-sm hover:bg-black hover:text-white transition-colors disabled:bg-gray-300 disabled:border-gray-300"
                    >
                      {resending === email.id ? "Reenviando..." : "Reenviar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
