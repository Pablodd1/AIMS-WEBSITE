import { Html, Head, Preview, Body, Section, Img, Link, Row, Column, Text, Container } from '@react-email/components';
import { contactIcons } from '@UI/assets/data/resources';

const links = [
    { href: `${process.env.BASE_URL}/Shop`, label: 'Shop' },
    { href: `${process.env.BASE_URL}/Products`, label: 'Products' },
    { href: `${process.env.BASE_URL}/about`, label: 'About' },
];

export default function EmailLayout({ title = 'AIMS Notification', children }) {
    return (
        <Html>
            <Head />
            <Preview>{title}</Preview>
            <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F8F8F8', margin: 0, padding: 0, width: '100%', maxWidth: '1024px', }}>

                {/* Header */}

                <Section
                    style={{
                        paddingTop: 40,
                        paddingBottom: 40,
                        paddingLeft: 32,
                        paddingRight: 32,
                    }}
                >
                    <Row>
                        <Column style={{ width: '80%' }}>
                            <Img
                                alt="AI Medical Scriber Logo"
                                height={42} width={60}
                                src={`${process.env.BASE_URL}/logo.png`}
                            />
                        </Column>
                        <Column align="right">
                            <Row align="right">
                                {contactIcons.map(x => (
                                    <Column key={x.title}>
                                        <Link href={x.link || ''} target="_blank">
                                            <Img
                                                alt={x.title}
                                                src={`${process.env.BASE_URL}/svg/${x.color}-AIMS-social-media-contact.svg`}
                                                className='items-center flex'
                                                style={{ maxWidth: '24px', height: '24px',width:'auto', display: 'flex', }}
                                            />
                                        </Link>
                                    </Column>
                                ))}
                            </Row>
                        </Column>
                    </Row>
                </Section>

                {/* Main Content */}
                <Container style={{ paddingTop: '40px', display: 'block', padding: '40px 20px 75px', backgroundColor: 'inherit', width: '100%', maxWidth: 'fit-content', margin: '0 auto' }}>
                    {children}
                </Container>

                {/* Footer */}
                <Section style={{ backgroundColor: '#e2e2e2', textAlign: 'center', borderRadius: '0 0 10px 10px' }}>
                    <table role="presentation" width="100%" style={{ maxWidth: '1200px', margin: '15px auto 0', padding: 0 }}>
                        {/* <tr>
                            <td align="center" style={{ paddingTop: '20px' }}>
                                <Img
                                    alt="AI Medical logo logo"
                                    height="42"
                                    width="150"
                                    src={`${process.env.BASE_URL}/logo.png`}
                                    style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                                />
                            </td>
                        </tr> */}
                        <tr>
                            <td align="center">
                                <Text style={{ fontWeight: 'bold', fontSize: '18px', color: '#333' }}>AI Medical Scribe</Text>
                                <Text style={{ fontSize: '16px', color: '#555' }}>AI Powered — Medical Notes </Text>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <table role="presentation" width="100%" style={{ width: 'fit-content', maxWidth: '1024px', margin: '20px auto 0', padding: 0 }}>
                                    <tr>
                                        {contactIcons.map((x, i) => (
                                            <td key={i} style={{ padding: '0 10px' }}>
                                                <Link href={x.link || ''} target="_blank">
                                                    <Img
                                                        alt={x.title}
                                                        height="36"
                                                        src={`${process.env.BASE_URL}/svg/${x.color}-AIMS-social-media-contact.svg`}
                                                        style={{ maxWidth: '24px', height: 'auto', display: 'block' }}
                                                    />
                                                </Link>
                                            </td>
                                        ))}
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <table role="presentation" width="100%" style={{ maxWidth: '1024px', marginTop: '30px', padding: 0 }}>
                                    <tr>
                                        <td style={{ width: '50%', textAlign: 'left', paddingLeft: '20px' }}>
                                            <Text style={{ fontSize: '14px', color: '#333', fontFamily: 'Arial, sans-serif' }}>
                                                Copyright 2025 | All Rights Reserved
                                            </Text>
                                        </td>
                                        <td style={{ width: '50%', textAlign: 'right', paddingRight: '20px' }}>
                                            <Link href={`${process.env.BASE_URL}/features`} style={{ fontSize: '14px', color: '#333', textDecoration: 'none' }}>
                                                Features
                                            </Link>
                                            <span style={{ fontSize: '12px', color: '#333', paddingLeft: '10px' }}>|</span>
                                            <Link href={`${process.env.BASE_URL}/about`} style={{ fontSize: '14px', color: '#333', textDecoration: 'none', paddingLeft: '10px' }}>
                                                About
                                            </Link>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </Section>
            </Body>
        </Html>
    );
}
