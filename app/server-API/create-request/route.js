import { NextResponse } from 'next/server';
import { sendEmailNotification } from '@UTILS/sendEmail';
import { render } from "@react-email/render";
import SupportRequestEmailAdmin from '@UI/email/support_notification_admin';
import SupportRequestEmailUser from '@UI/email/support_notification_user';
import UserConfirmationEmail from '@UI/email/get_started_notification_user';
import AdminNotificationEmailGS from '@UI/email/get_started_notification_admin';

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate input
        if (!body.email || !body.firstName || !body.organization) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Generate the user email
        const user_email = await render(
            <UserConfirmationEmail data={{ ...body }} />,
            { pretty: true }
        );

        // Generate the admin email
        const admin_email = await render(
            <AdminNotificationEmailGS data={{ ...body }} />,
            { pretty: true }
        );

        // Send email to the admin
        await sendEmailNotification(
            [process.env.ADMIN],
            `New Lead Submission – ${body.organization || "No Org Provided"}`,
            admin_email
        );
        // Send email to the user
        await sendEmailNotification(
            [body.email],
            `Thanks, ${body.firstName}! Your request is successfully submitted.`,
            user_email
        );


        return NextResponse.json({ success: true, status: 'success' });

    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
