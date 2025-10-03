import { NextResponse } from 'next/server';
import { sendEmailNotification } from '@UTILS/sendEmail';
import { render } from "@react-email/render";
import UserSubscriptionEmail from '@UI/email/subscriber_notification_user';
import AdminNotificationEmail from '@UI/email/subscriber_notification_admin';

export async function POST(request) {
    try {
        const body = await request.json();

        // Optionally validate input
        if (!body.email || !body.fullName) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        const user_email = await render(
            <UserSubscriptionEmail
                {...{
                    userName: body.fullName,
                }}
            />,
            { pretty: true }
        );
        const admin_email = await render(
            <AdminNotificationEmail
                {...{
                    userName: body.fullName,
                    email: body.email
                }}
            />,
            { pretty: true }
        );

        // Call your function
        const result_admin = await sendEmailNotification([process.env.ADMIN], `A New Subscriber Just Joined AI Medical Scribe!`, admin_email);
        const result_user = await sendEmailNotification([body.email], `Thanks for Joining AI Medical Scribe – Let’s Get Started!`, user_email);
        console.log(result_admin, result_user)

        return NextResponse.json({ success: true, });
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
