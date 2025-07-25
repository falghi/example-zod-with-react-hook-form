import { parseInteger } from "@/utils/number";
import { z } from "zod";

const numberRegex = /^[－-]?(?:[０-９\d][,，０-９\d]*(?:[．\.][\d０-９]+)?)?$/;

const isNumber = z.string().refine(value => numberRegex.test(value), {
  message: "Invalid number",
});

export const itemSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  quantity: z.number(),
  price: isNumber
    .refine(value => parseInteger(value) >= -2000000000, {
      message: "Number must be greater than or equal to -2000000000",
    })
    .refine(value => parseInteger(value) <= 2000000000, {
      message: "Number must be less than or equal to 2000000000",
    }),
});

export type ItemData = z.infer<typeof itemSchema>;
