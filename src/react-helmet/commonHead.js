import React from 'react';
import { Helmet } from 'react-helmet';

const CommonHeadTags = () => {
    const currentUrl = window.location.href.replace(/^http:/, 'https:');

    return (
        <Helmet>

            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={currentUrl} />
        
            <link rel="prefetch" href="/page-to-prefetch" />
 


            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Your Organization Name",
                    "url": "https://www.yourwebsite.com",
                    "logo": "https://www.yourwebsite.com/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-123-456-7890",
                        "contactType": "customer service",
                        "availableLanguage": ["English"]
                    }
                })}
            </script>

            {/* Other Head Tags */}
            {/* Add other required head tags here */}
        </Helmet>
    );
};

export default CommonHeadTags;
