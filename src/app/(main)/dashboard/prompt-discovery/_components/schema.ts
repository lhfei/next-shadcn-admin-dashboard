import { z } from "zod";

export const promptSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  category: z.string(),
  description: z.string(),
  content: z.string().min(10, "Prompt content must be substantial"),
  version: z.string(),
  updatedAt: z.string(),
});

export type Prompt = z.infer<typeof promptSchema>;
