import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, subject, message } = body

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        if (resend) {
            await resend.emails.send({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: 'dongduong80@gmail.com',
                subject: subject || `Portfolio Contact from ${name}`,
                replyTo: email,
                text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            })
        } else {
            // Fallback: log to console when RESEND_API_KEY is not set
            console.log('--- NEW CONTACT FORM SUBMISSION ---')
            console.log('To: dongduong80@gmail.com')
            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Subject:', subject)
            console.log('Message:', message)
            console.log('Note: Set RESEND_API_KEY env variable to enable email delivery')
            console.log('-----------------------------------')
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully' })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
