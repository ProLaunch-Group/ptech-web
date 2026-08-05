'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { faqData } from '@/constants/service';
import { FaqCategory, FaqItem } from '@/types/service.types';
import { AccordionItem } from '@/components/common/AccordionItem';
import { fadeUp, whileInViewProps } from '@/libs/motion-variants';
import { ShieldCheckIcon } from 'lucide-react';
import SectionTitle from '@/components/layout/SectionTitle';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('gen-1');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const groupedFaqs = faqData.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<FaqCategory, FaqItem[]>
  );

  return (
    <section className="py-16 md:py-24 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <SectionTitle
          title="Got Questions?"
          subtitle="Frequently Asked Questions"
          description="Everything you need to know about our cloud, DevOps, software engineering, and infrastructure solutions."
          variant="secondary"
        />

        {/* Categories & Accordion List */}
        <div className="space-y-10 sm:space-y-12 max-w-5xl mx-auto mt-8">
          {Object.entries(groupedFaqs).map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeUp}
              {...whileInViewProps}
              className="space-y-4"
            >
              {/* Category Subheader */}
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amberGold" />
                <h3 className="text-lg sm:text-xl font-bold font-sora text-slate-900 dark:text-white">
                  {category}
                </h3>
              </div>

              {/* Accordion Group */}
              <ul className="space-y-3">
                {items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    title={item.question}
                    description={item.answer}
                    isOpen={openId === item.id}
                    onToggle={() => handleToggle(item.id)}
                    icon={
                      <ShieldCheckIcon
                        className="h-4 w-4 text-amberGold"
                        aria-hidden="true"
                      />
                    }
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
