import { NextResponse } from 'next/server'

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

        // HERE: Integrate with your email service (Resend, SendGrid, NodeMailer, etc.)
        // For now, we'll log it to these server logs (visible in terminal)
        console.log('--- NEW CONTACT FORM SUBMISSION ---')
        console.log('Name:', name)
        console.log('Email:', email)
        console.log('Subject:', subject)
        console.log('Message:', message)
        console.log('-----------------------------------')

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        return NextResponse.json({ success: true, message: 'Message sent successfully' })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
