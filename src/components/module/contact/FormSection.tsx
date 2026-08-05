import { ContactInfoSidebar } from '@/components/module/contact/ContactInfoSidebar';
import { ContactForm } from '@/components/module/contact/ContactFormUI';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import SectionTitle from '@/components/layout/SectionTitle';

export default function FormSection() {
  return (
    <StaggerContainer>
      <section className="py-16 md:py-24 bg-background text-foreground transition-colors duration-300">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          <SectionTitle
            title="HOW CAN WE HELP?"
            subtitle="Tell us about your business."
            description="Our team will review your requirements and connect with you to discuss the most effective path forward."
            variant="secondary"
          />
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
            {/* Left Column */}
            <div className="lg:col-span-4">
              <ContactInfoSidebar />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </article>
        </div>
      </section>
    </StaggerContainer>
  );
}
