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
  // Track which accordion item is currently open (null if all closed)
  const [openId, setOpenId] = useState<string | null>('gen-1');

  // Toggle function: Opens item if closed, or closes it if clicked again
  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Group FAQs by category using reduce
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
    <section className="py-16 md:py-24 bg-[#e8f3ff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          title="Got Questions?"
          subtitle="Frequently Asked Questions"
          description="Everything you need to know about our cloud, DevOps, software engineering,
        and infrastructure solutions."
          variant="secondary"
        />

        {/* Categories & Accordion List */}
        <div className="space-y-10 sm:space-y-12">
          {Object.entries(groupedFaqs).map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeUp}
              {...whileInViewProps}
              className="space-y-4"
            >
              {/* Category Subheader */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
                <h3 className="text-lg sm:text-xl font-bold font-sora text-deepNavy">
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
