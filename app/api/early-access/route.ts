import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        // Email content
        const emailHtml = `
      <h2>New Early Access Request - SolarFlow</h2>
      
      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Company:</strong> ${formData.company}</li>
        <li><strong>Role:</strong> ${formData.role}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
      </ul>

      <h3>Business Details</h3>
      <ul>
        <li><strong>Monthly Installations:</strong> ${formData.monthlyInstallations}</li>
        <li><strong>Biggest Problem:</strong> ${formData.biggestProblem}</li>
        <li><strong>Willing to Pay:</strong> ${formData.willingToPay}</li>
      </ul>

      ${formData.problemDetails ? `
        <h3>Additional Details</h3>
        <p>${formData.problemDetails}</p>
      ` : ''}

      <hr />
      <p style="color: #666; font-size: 12px;">
        Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      </p>
    `;

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'SolarFlow <onboarding@resend.dev>', // You'll need to verify your domain
            to: ['tkarthikeyan@gmail.com'],
            subject: `New Early Access Request - ${formData.company}`,
            html: emailHtml,
            replyTo: formData.email,
        });

        return NextResponse.json(
            { success: true, message: 'Form submitted successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to submit form', error: String(error) },
            { status: 500 }
        );
    }
}
