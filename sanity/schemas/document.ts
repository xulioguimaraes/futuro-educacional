import { defineField, defineType } from "sanity";

export const siteDocument = defineType({
  name: "siteDocument",
  title: "Documentos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "file",
      title: "Arquivo PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "order",
      title: "Ordem de exibição",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});

