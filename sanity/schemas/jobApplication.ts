import { defineField, defineType } from "sanity";

export const jobApplication = defineType({
  name: "jobApplication",
  title: "Candidaturas",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome Completo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Telefone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vacancy",
      title: "Vaga",
      type: "reference",
      to: [{ type: "jobVacancy" }],
    }),
    defineField({
      name: "vacancyTitle",
      title: "Título da Vaga",
      type: "string",
      description: "Backup do título da vaga caso a referência seja deletada",
    }),
    defineField({
      name: "message",
      title: "Mensagem / Apresentação",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "resume",
      title: "Currículo (PDF)",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn (opcional)",
      type: "url",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Nova", value: "new" },
          { title: "Em análise", value: "reviewing" },
          { title: "Entrevista agendada", value: "interview" },
          { title: "Aprovado", value: "approved" },
          { title: "Reprovado", value: "rejected" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "notes",
      title: "Notas internas",
      type: "text",
      description: "Anotações da equipe de RH (não visível para o candidato)",
    }),
    defineField({
      name: "appliedAt",
      title: "Data da Candidatura",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "vacancyTitle",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      const statusEmoji: Record<string, string> = {
        new: "🆕",
        reviewing: "👀",
        interview: "📅",
        approved: "✅",
        rejected: "❌",
      };
      return {
        title: `${statusEmoji[status] || "🆕"} ${title}`,
        subtitle: subtitle || "Vaga não especificada",
      };
    },
  },
  orderings: [
    {
      title: "Data de candidatura (mais recente)",
      name: "appliedAtDesc",
      by: [{ field: "appliedAt", direction: "desc" }],
    },
    {
      title: "Status",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
  ],
});

