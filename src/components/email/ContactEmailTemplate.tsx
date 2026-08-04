import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Font,
  Row,
  Column,
  Link,
} from '@react-email/components';

export interface ContactEmailProps {
  name: string;
  email: string;
  challenge: string;
  companyName: string;
  phone?: string;
  ServiceOfInterest: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  challenge,
  companyName,
  phone,
  ServiceOfInterest,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head>
        {/* Sora for Headings */}
        <Font
          fontFamily="Sora"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://fonts.gstatic.com/s/sora/v12/sBfdC51ppacV1D2mfC5u.woff2',
            format: 'woff2',
          }}
          fontWeight={600}
          fontStyle="normal"
        />
        {/* DM Sans for Body */}
        <Font
          fontFamily="DM Sans"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.gstatic.com/s/dmsans/v15/r42Y2j86lM6688gud36O.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Body style={main}>
        <Container style={container}>
          {/* Header Banner */}
          <Section style={header}>
            <Text style={brandBadge}>PROLAUNCH TECHNOLOGIES</Text>
            <Heading style={headerTitle}>New Project Inquiry</Heading>
          </Section>

          {/* Core Content */}
          <Section style={content}>
            {/* Service Highlight Badge */}
            {ServiceOfInterest && (
              <Section style={serviceBadgeContainer}>
                <Text style={serviceLabel}>SERVICE OF INTEREST</Text>
                <Text style={serviceValue}>{ServiceOfInterest}</Text>
              </Section>
            )}

            <Text style={sectionTitle}>Contact Details :</Text>

            {/* Sender Grid */}
            <Section style={infoGrid}>
              <Row style={infoRow}>
                <Column style={infoColumn}>
                  <Text style={metaLabel}>Full Name :</Text>
                  <Text style={metaValue}>{name}</Text>
                </Column>
                <Column style={infoColumn}>
                  <Text style={metaLabel}>Company :</Text>
                  <Text style={metaValue}>{companyName}</Text>
                </Column>
              </Row>
              <Row style={infoRow}>
                <Column style={infoColumn}>
                  <Text style={metaLabel}>Email Address :</Text>
                  <Link href={`mailto:${email}`} style={linkValue}>
                    {email}
                  </Link>
                </Column>
                <Column style={infoColumn}>
                  <Text style={metaLabel}>Phone Number</Text>
                  <Text style={metaValue}>{phone || 'Not provided'}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={divider} />

            {/* Challenge / Requirement Box */}
            <Text style={sectionTitle}>Big Challenge :</Text>
            <Section style={challengeBox}>
              <Text style={challengeText}>{challenge}</Text>
            </Section>

            {/* Quick Action Button */}
            <Section style={actionContainer}>
              <Link href={`mailto:${email}`} style={replyButton}>
                Reply Directly to {name}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>ProLaunch Technologies</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles object for email layout
const main = {
  backgroundColor: '#0f172a',
  padding: '30px 10px',
  fontFamily: '"DM Sans", Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  maxWidth: '600px',
  margin: '0 auto',
  border: '1px solid #1e293b',
};

const header = {
  backgroundColor: '#090d16',
  padding: '32px 32px 24px 32px',
  borderBottom: '2px solid #2563eb',
};

const brandBadge = {
  fontSize: '11px',
  letterSpacing: '1.5px',
  fontWeight: '700' as const,
  color: '#38bdf8',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px 0',
  fontFamily: '"Sora", Helvetica, sans-serif',
};

const headerTitle = {
  fontSize: '24px',
  fontWeight: '600' as const,
  color: '#ffffff',
  margin: '0',
  fontFamily: '"Sora", Helvetica, sans-serif',
};

const content = {
  padding: '32px',
};

const serviceBadgeContainer = {
  backgroundColor: '#f0f9ff',
  border: '1px solid #bae6fd',
  borderRadius: '8px',
  padding: '12px 16px',
  marginBottom: '24px',
};

const serviceLabel = {
  fontSize: '10px',
  fontWeight: '700' as const,
  color: '#0284c7',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px 0',
  fontFamily: '"Sora", Helvetica, sans-serif',
};

const serviceValue = {
  fontSize: '16px',
  fontWeight: '600' as const,
  color: '#0369a1',
  margin: '0',
  fontFamily: '"Sora", Helvetica, sans-serif',
};

const sectionTitle = {
  fontSize: '14px',
  fontWeight: '600' as const,
  color: '#0f172a',
  margin: '0 0 12px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  fontFamily: '"Sora", Helvetica, sans-serif',
};

const infoGrid = {
  marginBottom: '20px',
};

const infoRow = {
  marginBottom: '12px',
};

const infoColumn = {
  width: '50%',
  verticalAlign: 'top',
};

const metaLabel = {
  fontSize: '12px',
  color: '#64748b',
  margin: '0 0 4px 0',
};

const metaValue = {
  fontSize: '14px',
  fontWeight: '500' as const,
  color: '#1e293b',
  margin: '0',
};

const linkValue = {
  fontSize: '14px',
  fontWeight: '500' as const,
  color: '#2563eb',
  textDecoration: 'none',
  margin: '0',
};

const divider = {
  borderColor: '#e2e8f0',
  margin: '24px 0',
};

const challengeBox = {
  backgroundColor: '#f8fafc',
  borderLeft: '4px solid #2563eb',
  borderRadius: '4px',
  padding: '16px',
};

const challengeText = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#334155',
  whiteSpace: 'pre-wrap' as const,
  margin: '0',
};

const actionContainer = {
  marginTop: '28px',
  textAlign: 'center' as const,
};

const replyButton = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600' as const,
  textDecoration: 'none',
  padding: '12px 24px',
  borderRadius: '6px',
  display: 'inline-block',
  fontFamily: '"Sora", Helvetica, sans-serif',
};

const footer = {
  backgroundColor: '#f8fafc',
  borderTop: '1px solid #e2e8f0',
  padding: '16px 32px',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '12px',
  color: '#94a3b8',
  margin: '0',
};
