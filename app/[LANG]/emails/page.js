
import { render } from '@react-email/render';
import AdminNotificationEmail from '@UI/email/subscriber_notification_admin';
import UserSubscriptionEmail from '@UI/email/subscriber_notification_user';

const defaultValue = {
    compaign_title: 'First Test Compaign',
    description:
        'Record #1\n\nDF549-D\n\nDiscard\nID\nDF549-D\nTitle\nFirst Test\nEmail Subject'
    ,
    compaignData: {
        coupon: 'CD3453',
        offer_name: 'First',
        discount_percent: '25.00',
        offer_expiry: `2025-12-25T16:15:00.000Z`,
        min_bill_limit: '1500.00',
        country: '',
        products_included: [],
        products_excluded: ['KPSE-KPFS-4100'],
        offer_note: null,
        productIDs: [
            'KPSE-BC-HV-B8',
            'KPSE-FL-KPS-3',
            'KPSE-Foundation-Service',
            'KPSE-Hl-KPT-2'
        ],
        productList: [
            {
                ID: 'KPSE-BC-HV-B8',
                description: 'The KPSE HelioVert B8 Series is a fully autonomous solar charging tower designed to meet the demands of modern e-bike and e-scooter mobility. Its sleek square tower profile combines compact design with reliable, off-grid charging—ideal for parks, bike paths, campuses, resorts, and remote outdoor spaces without electricity.',
                title: 'KPSE HelioVert B8 Series',
                price: '0.00',
                imageURL: 'KPSE-BC-HV-B8-01.jpg'
            },
            {
                ID: 'KPSE-FL-KPS-3',
                description: "Compatible with KPTL, KPPL, and KPGDGD Tower Light Series.~nThe Flashlight KPS3 is engineered for those who require dependable performance, rugged durability, and versatile functionality. Whether you're exploring the outdoors, managing emergencies, or simply need a reliable everyday light source, the KPS3 delivers exceptional brightness and efficiency in a compact, robust form.~nDesigned for seamless integration, the KPS3 is fully attachable to all KPTL, KPPL, and KPGDGD Tower Light series, enhancing your modular lighting systems with focused, directional or safety light. (not compatible with KPTL400, KPPS200, and KPPT models.)~nThe Flashlight KPS3 delivers powerful and focused illumination with its dual-mode brightness, offering up to 500 lumens in flashlight mode and 300 lumens in spotlight mode. It is designed to integrate effortlessly with compatible tower light systems, allowing for stationary or elevated lighting applications.Choose between high, medium, and low brightness levels, and easily switch between flood or flashlight mode, making it adaptable to any scenario.~nPowered by a high-capacity rechargeable lithium battery, the KPS3 provides up to 5 hours of continuous use in Boost Mode on a single charge. The rugged body, combined with IP66 water resistance, ensures durability and reliable performance in harsh environments. Despite its rugged build, the flashlight remains compact and lightweight, making it easy to carry in a pocket, backpack, or glove compartment. A built-in magnetic base allows for quick, hands-free attachment to metal surfaces, adding further convenience and flexibility in the field.",
                title: 'Flashlight KPS3',
                price: '23.00',
                imageURL: 'KPSE-FL-KPS-3-02.png'
            },
            {
                ID: 'KPSE-Foundation-Service',
                description: 'The KPSE-Designed Precast Foundation for Solar Lamps is a strong, secure, and efficient solution for modern solar lighting.~nMade from high-strength precast concrete, it features integrated thread sleeves for clean, flush lamp mounting—eliminating exposed thread bars. The integrated battery compartment offers excellent heat protection and theft resistance, with support for multiple batteries.~nDesigned for any location, it enables fast installation and easy leveling, reducing setup time and ensuring consistent alignment. Available in multiple sizes based on pole height and wind load, it delivers flexible, reliable performance in any environment.',
                title: 'KPSE Precast Foundation for Solar Lamps',
                price: '0.00',
                imageURL: 'KPSE-Foundation-Service-01.jpg'
            },
            {
                ID: 'KPSE-Hl-KPT-2',
                description: "The KPT2 Head Light is built for those who demand reliable, high-performance lighting in dynamic environments. Whether you're working in low-light conditions, navigating the outdoors, or managing hands-on tasks, the KPT2 provides dependable, adjustable illumination—right where you need it, without tying up your hands.~nFeaturing a high-performance LED beam, the KPT2 delivers bright, focused visibility for any situation. The 360° lighting coverage with a direction-adjustable head, allowing you to precisely control the angle and direction of the beam for optimal lighting in any task. With multiple lighting modes - you can adapt instantly to changing conditions or needs.~nPowered by a long-life rechargeable lithium battery, the KPT2 offers extended runtime for uninterrupted use, ensuring reliable performance across repeated uses. Its adjustable, secure-fit headband ensures comfort during long hours of wear, while the lightweight construction prevents fatigue. Designed to endure, the KPT2 is housed in durable, impact-resistant materials and rated IP66 water-resistant, making it suitable for both indoor and outdoor challenges.",
                title: 'KPT2 Head Light ',
                price: '20.00',
                imageURL: 'KPSE-Hl-KPT-2-02.png'
            }
        ]
    }
}
const emailTemplates = [
    {
        title: 'Payment Confirmation Preview',
        component: <UserSubscriptionEmail userName={'Ahmed Chauhdri'} />
    },
    {
        title: 'Status Update Preview',
        component: <AdminNotificationEmail userName={'Admed Chauhdri'} email={'ahmed@example.com'} />
    }
];

const EmailPreviewCard = ({ title, emailHtml }) => (
    <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div
            className="shadow-md shadow-gray-300 border border-blue-700 hover:border-blue-900 animate hover:bg-blue-100 p-3 rounded-2xl"
            dangerouslySetInnerHTML={{ __html: emailHtml }}
        />

    </div>
);

export default async function EmailPreview() {
    // Render emails asynchronously
    const emailPreviews = await Promise.all(
        emailTemplates.map(async ({ title, component }) => {
            const emailHtml = await render(component, { pretty: true });
            return { title, emailHtml };
        })
    );

    return (
        <main className='max-w-[1050px] mx-auto'>
            {emailPreviews.map(({ title, emailHtml }, index) => (
                <EmailPreviewCard key={index} title={title} emailHtml={emailHtml} />
            ))}
        </main>
    );
}
