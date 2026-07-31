import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactEmailTemplate } from '@/components/email/ContactEmailTemplate';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not defined in process.env');
    return NextResponse.json(
      { error: 'Server misconfiguration: API key missing' },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { name, email, companyName, serviceOfInterest, challenge, phone } =
    body;

  if (!name || !email || !challenge || !companyName || !serviceOfInterest) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const template = (
    <ContactEmailTemplate
      name={name}
      email={email}
      challenge={challenge}
      companyName={companyName}
      phone={phone}
      ServiceOfInterest={serviceOfInterest}
    />
  );

  try {
    const resend = new Resend(apiKey);
    const emailHtml = await render(template);

    const { data, error } = await resend.emails.send({
      from: 'ProLaunch Technologies <tech@prolaunchgroup.org>',
      to: [process.env.TECH_INBOX_EMAIL || 'tech@prolaunchgroup.org'],
      replyTo: email,
      subject: `${serviceOfInterest} - New Inquiry from ${name}`,
      html: emailHtml,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
