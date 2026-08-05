'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/libs/validations/contact';
import { fadeDown, whileInViewProps } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      companyName: '',
      phone: '',
      ServiceOfInterest: '',
      challenge: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const payload = {
      name: data.fullName,
      email: data.email,
      companyName: data.companyName,
      serviceOfInterest: data.ServiceOfInterest,
      challenge: data.challenge,
      phone: data.phone,
    };

    try {
      const response = await fetch('/contact/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      if (result.success) {
        toast.success('Inquiry Sent Successfully!', {
          description: "We'll be in touch with you shortly.",
          className:
            '!bg-emerald-600 !text-white !border-emerald-700 !flex !flex-col !items-center !justify-center !text-center mt-16',
          descriptionClassName: '!text-emerald-100 !text-center font-sora',
        });
      }
      reset();
    } catch {
      toast.error('Failed to Send Inquiry!', {
        description: 'Something went wrong. Please try again shortly.',
        className:
          '!bg-red-600 !text-white !border-red-700 !flex !flex-col !items-center !justify-center !text-center',
        descriptionClassName: '!text-red-100 !text-center font-sora',
      });
    }
  };

  return (
    <motion.div
      variants={fadeDown}
      {...whileInViewProps}
      className="w-full bg-slate-900 dark:bg-deepNavy/90 border border-slate-700/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl transition-colors duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-6 font-sora">
        Send Us a Message
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Contact us form"
        className="space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-slate-200"
            >
              Full Name{' '}
              <span className="text-amberGold" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your full name"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              {...register('fullName')}
              className={`w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-[#0d1b32] text-white placeholder:text-slate-400 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-amberGold focus:ring-amberGold'
                  : 'border-slate-700 focus:ring-electricBlue'
              }`}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className="text-xs text-amberGold font-medium mt-0.5"
                role="alert"
              >
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-200"
            >
              Email Address{' '}
              <span className="text-amberGold" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              {...register('email')}
              className={`w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-[#0d1b32] text-white placeholder:text-slate-400 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-amberGold focus:ring-amberGold'
                  : 'border-slate-700 focus:ring-electricBlue'
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-xs text-amberGold font-medium mt-0.5"
                role="alert"
              >
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Company Name & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="companyName"
              className="text-sm font-medium text-slate-200"
            >
              Company Name{' '}
              <span className="text-amberGold" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Your company"
              aria-invalid={!!errors.companyName}
              aria-describedby={
                errors.companyName ? 'companyName-error' : undefined
              }
              {...register('companyName')}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-[#0d1b32] text-white placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all text-sm font-medium"
            />
            {errors.companyName && (
              <p
                id="companyName-error"
                className="text-xs text-amberGold font-medium mt-0.5"
                role="alert"
              >
                {errors.companyName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate-200"
            >
              Phone Number{' '}
              <span className="text-xs text-slate-400">(Optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+234 000 000 0000"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              {...register('phone')}
              className={`w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-[#0d1b32] text-white placeholder:text-slate-400 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-amberGold focus:ring-amberGold'
                  : 'border-slate-700 focus:ring-electricBlue'
              }`}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="text-xs text-amberGold font-medium mt-0.5"
                role="alert"
              >
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Service of Interest */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="serviceOfInterest"
            className="text-sm font-medium text-slate-200"
          >
            Service of Interest{' '}
            <span className="text-amberGold" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="serviceOfInterest"
            type="text"
            placeholder="Cloud Migration / DevOps Implementation / Custom Software / IT Infrastructure Solutions"
            aria-invalid={!!errors.ServiceOfInterest}
            aria-describedby={
              errors.ServiceOfInterest ? 'serviceOfInterest-error' : undefined
            }
            {...register('ServiceOfInterest')}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-[#0d1b32] text-white placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all text-sm font-medium"
          />
          {errors.ServiceOfInterest && (
            <p
              id="serviceOfInterest-error"
              className="text-xs text-amberGold font-medium mt-0.5"
              role="alert"
            >
              {errors.ServiceOfInterest.message}
            </p>
          )}
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="challenge"
            className="text-sm font-medium text-slate-200"
          >
            Tell us your biggest technology challenge{' '}
            <span className="text-amberGold" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id="challenge"
            rows={5}
            placeholder="e.g. Our servers keep going down, and we don't have an IT team to manage them. We need a reliable solution..."
            aria-required="true"
            aria-invalid={!!errors.challenge}
            aria-describedby={errors.challenge ? 'challenge-error' : undefined}
            {...register('challenge')}
            className={`w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-[#0d1b32] text-white placeholder:text-slate-400 border transition-all text-sm font-medium resize-none focus:outline-none focus:ring-2 ${
              errors.challenge
                ? 'border-amberGold focus:ring-amberGold'
                : 'border-slate-700 focus:ring-electricBlue'
            }`}
          />
          {errors.challenge && (
            <p
              id="challenge-error"
              className="text-xs text-amberGold font-medium mt-0.5"
              role="alert"
            >
              {errors.challenge.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            id="contact-submit-btn"
            type="submit"
            disabled={isSubmitting}
            aria-label="Send contact message"
            className="px-7 py-3.5 rounded-xl bg-electricBlue hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-500/25 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-sora"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
