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

    console.log('Front end payload being sent:', payload);

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
            '!bg-emerald-600 !text-white !border-emerald-700 !flex !flex-col !items-center !justify-center !text-center',
          descriptionClassName: '!text-emerald-100 !text-center font-sora',
        });
      }
      reset();
    } catch (error) {
      console.error('Submission failed:', error);
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
      className="w-full bg-[#1e3a6e] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl"
    >
      <h3 className="text-xl font-bold text-[#e8f3ff] mb-6">
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
              className="text-sm font-medium text-[#e8f3ff]"
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
              className={`w-full px-4 py-3 rounded-lg bg-[#e8f3ff] text-[#1e3a6e] placeholder:text-[#1e3a6e]/50 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-[#f5a623] focus:ring-[#f5a623]'
                  : 'border-transparent focus:ring-[#0a84ff]'
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
              className="text-sm font-medium text-[#e8f3ff]"
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
              className={`w-full px-4 py-3 rounded-lg bg-[#e8f3ff] text-[#1e3a6e] placeholder:text-[#1e3a6e]/50 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-[#f5a623] focus:ring-[#f5a623]'
                  : 'border-transparent focus:ring-[#0a84ff]'
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

        {/*  Company Name & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="companyName"
              className="text-sm font-medium text-[#e8f3ff]"
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
              {...register('companyName')}
              className="w-full px-4 py-3 rounded-lg bg-[#e8f3ff] text-[#1e3a6e] placeholder:text-[#1e3a6e]/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a84ff] transition-all text-sm font-medium"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-[#e8f3ff]"
            >
              Phone Number{' '}
              <span className="text-xs text-[#e8f3ff]/60">(Optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+234 000 000 0000"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              {...register('phone')}
              className={`w-full px-4 py-3 rounded-lg bg-[#e8f3ff] text-[#1e3a6e] placeholder:text-[#1e3a6e]/50 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-[#f5a623] focus:ring-[#f5a623]'
                  : 'border-transparent focus:ring-[#0a84ff]'
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
        {/* Service of interest */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="Service of interest"
            className="text-sm font-medium text-[#e8f3ff]"
          >
            Service of Interest{' '}
            <span className="text-amberGold" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="Service of interest"
            type="text"
            placeholder="Cloud Migration & Management / DevOps Implementation / Custom Software Development / IT Infrastructure Solutions / Not sure yet — I need advice"
            aria-invalid={!!errors.ServiceOfInterest}
            {...register('ServiceOfInterest')}
            className="w-full px-4 py-3 rounded-lg bg-[#e8f3ff] text-[#1e3a6e] placeholder:text-[#1e3a6e]/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#0a84ff] transition-all text-sm font-medium"
          />
        </div>

        {/*  Message Textarea */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="challenge"
            className="text-sm font-medium text-[#e8f3ff]"
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
            aria-describedby={errors.challenge ? 'message-error' : undefined}
            {...register('challenge')}
            className={`w-full px-4 py-3 rounded-lg bg-[#e8f3ff] text-[#1e3a6e] placeholder:text-[#1e3a6e]/50 border transition-all text-sm font-medium resize-none focus:outline-none focus:ring-2 ${
              errors.challenge
                ? 'border-[#f5a623] focus:ring-[#f5a623]'
                : 'border-transparent focus:ring-[#0a84ff]'
            }`}
          />
          {errors.challenge && (
            <p
              id="message-error"
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
            type="submit"
            disabled={isSubmitting}
            aria-label="Send contact message"
            className="px-6 py-3 rounded-lg bg-[#0a84ff] hover:bg-[#0a84ff]/90 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#0a84ff]/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
