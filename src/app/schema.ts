import { z } from "zod";

export const formSchema = z.object({
  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export type FormData = z.infer<typeof formSchema>;
