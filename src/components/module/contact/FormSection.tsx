import { ContactInfoSidebar } from '@/components/module/contact/ContactInfoSidebar';
import { ContactForm } from '@/components/module/contact/ContactFormUI';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import SectionTitle from '@/components/layout/SectionTitle';

export default function FormSection() {
  return (
    <StaggerContainer>
      <section className="py-8 md:py-16 bg-[#e8f3ff]">
        <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
          <div className="px-6">
            <SectionTitle
              title="HOW CAN WE HELP?"
              subtitle="Tell us about your business."
              description="Our team will review your requirements and connect with you to discuss the most effective path forward."
              variant="secondary"
            />
          </div>
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start p-8 rounded-3xl  border border-white/5 backdrop-blur-md">
            {/* Left Column*/}
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
