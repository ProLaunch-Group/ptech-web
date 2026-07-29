import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  companyName: z.string().min(2, { message: 'Please enter your company name' }),
  phone: z.string().optional().or(z.literal('')),
  ServiceOfInterest: z
    .string()
    .min(5, { message: 'Message must be at least 5 characters long.' }),

  challenge: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long.' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
