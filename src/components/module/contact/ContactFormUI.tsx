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
import { ArrowRight } from 'lucide-react';

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
          description:
            'We will get back to you within 24 hours, Monday – Friday.',
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
      className="w-full bg-deepNavy dark:bg-[#07152b] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl text-white"
    >
      <div className="mb-6">
        <span className="text-amberGold text-xs font-bold uppercase tracking-widest block font-sora mb-1">
          CONTACT FORM
        </span>
        <h3 className="text-2xl font-bold font-sora text-white">
          Send Us a Message
        </h3>
        <p className="text-xs text-slate-300 font-sans mt-1">
          We will get back to you within 24 hours, Monday – Friday.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Contact us form"
        className="space-y-5 font-sans"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="fullName"
              className="text-sm font-semibold text-slate-100"
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
              className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-amberGold focus:ring-amberGold'
                  : 'border-slate-300 dark:border-slate-700 focus:ring-electricBlue'
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

          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="companyName"
              className="text-sm font-semibold text-slate-100"
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
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all text-sm font-medium"
            />
            {errors.companyName && (
              <p
                className="text-xs text-amberGold font-medium mt-0.5"
                role="alert"
              >
                {errors.companyName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-100"
            >
              Company Email{' '}
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
              className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-amberGold focus:ring-amberGold'
                  : 'border-slate-300 dark:border-slate-700 focus:ring-electricBlue'
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

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-slate-100"
            >
              Phone Number{' '}
              <span className="text-amberGold" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+234 000 000 0000"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              {...register('phone')}
              className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-amberGold focus:ring-amberGold'
                  : 'border-slate-300 dark:border-slate-700 focus:ring-electricBlue'
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

        {/* Service of interest Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="ServiceOfInterest"
            className="text-sm font-semibold text-slate-100"
          >
            Service of Interest{' '}
            <span className="text-amberGold" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="ServiceOfInterest"
            aria-invalid={!!errors.ServiceOfInterest}
            {...register('ServiceOfInterest')}
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all text-sm font-medium"
          >
            <option value="" disabled>
              Select a service of interest...
            </option>
            <option value="Cloud Migration & Management">
              Cloud Migration & Management
            </option>
            <option value="DevOps Implementation">DevOps Implementation</option>
            <option value="Custom Software Development">
              Custom Software Development
            </option>
            <option value="IT Infrastructure Solutions">
              IT Infrastructure Solutions
            </option>
            <option value="Not sure yet — I need advice">
              Not sure yet — I need advice
            </option>
          </select>
          {errors.ServiceOfInterest && (
            <p
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
            className="text-sm font-semibold text-slate-100"
          >
            Tell us your biggest technology challenge{' '}
            <span className="text-amberGold" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id="challenge"
            rows={4}
            placeholder="e.g. Our servers keep going down, and we don't have an IT team to manage them. We need a reliable solution..."
            aria-required="true"
            aria-invalid={!!errors.challenge}
            aria-describedby={errors.challenge ? 'message-error' : undefined}
            {...register('challenge')}
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 border transition-all text-sm font-medium resize-none focus:outline-none focus:ring-2 ${
              errors.challenge
                ? 'border-amberGold focus:ring-amberGold'
                : 'border-slate-300 dark:border-slate-700 focus:ring-electricBlue'
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
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Send contact message"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-electricBlue hover:bg-amberGold text-white font-sora font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
