import { css } from '@emotion/react';

const stylesFooter = {
    fContainer: css({
        height: 'max-content',
        color: '#fff',
    }),
    fWraper: css({
        width: 'auto',
        p: 'auto',
        mt: '100px',
        m: 'auto',
        backgroundSize: {
            xs: 'auto 100%',
            md: '100% 100%',
            lg: '100% auto'
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
            xs: 'top center',
            lg: 'top'
        },
        p: 'auto',
        pb: 5,
        pt: {
            xs: '180px',
            md: '50px'
        },
        justifyContent: 'flex-end',
        '& > *:last-child': {
            m: 'auto',
            mt: 0,
            mb: 0,
            p: 'auto',
            pt: 0
        }
    }),
    footerLogo: css({
        height: '180px',
        width: 'auto',
        paddingBottom: '15px'
    }),
    'fL&D': css({
        width: 'max-content',
        maxWidth: '320px',
        minWidth: '220px',
        m: 'auto',
        p: 'auto',
    }),
    fDescrip: css({
        textAlign: 'justify',
        width: '50px',
        p: 5,
        m: 'auto',
        mt: 2
    }),
    fLinks: css({
        m: 5,
        mb: 1,
        p: 'auto',
        borderTop: '1px solid #fff',
    }),
    flegal: css({
        m: 1,
        mb: 5,
        mt: 1,
        p: 'auto',
        pt: 0,
        textDecoration: 'none',
        '& a': {
            textDecoration: 'none',
            color: '#fff',
        },
    }),
};

export default stylesFooter;
