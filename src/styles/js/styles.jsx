

export const styles = {
    infoButton: {
        position: 'absolute',
        top: '5px',
        right: '20px',
        fontSize: '35px',
        cursor: 'pointer',
    },
    form: {
        minWidth: 'auto',
        maxWidth: '80vw',
        width: '100%',
        margin: 2,
        marginTop: 5,
        display: 'flex',
        gap: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    submitButton: {
        margin: '10px',
        padding: '8px 16px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    inputStyle: {
        width: '100%',
        backdropFilter: 'blur(3px)',
        margin: 2
    },
    logoPopUp: {
        width: '100%'
    },
    secondaryButton: {
        fontWeight: 700,
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        backgroundColor: '#fff',
        borderRadius: 1,
        color: '#000',
        margin: 1,
        paddingLeft: 2,
        paddingRight: 2,
        width: 'auto',
        height: '1.5rem',
        "&:hover": {
            backgroundColor: '#000',
            color: '#fff',
            boxShadow: '1px 3px 5px #888'
        }
    },
    navItem: {
        fontFamily: 'Exo',
        fontWeight: '550',
        textTransform: 'uppercase',
        color: '#fff',
        textDecoration: 'none',
        letterSpacing: '0.1rem',
        paddingLeft: 1,
        paddingRight: 1,
        border: '1px solid #fff0',
        transition: 'all 0.3s ease-out',
        "&:hover": {
            borderBottom: '2px inset #efefef',
            borderRadius: '0px',
            letterSpacing: '0.3rem'
        }
    },
    nav: {
        maxHeight: '180px',
        height: 'fit-content',
        minHeight: '80px',
        backgroundColor: '#000 ',
        boxShadow: '1px 1px 35px #4299e1dd',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        position: 'sticky',
        top: 0, zIndex: 20,
        transition: 'all 0.3s linear',
    },
    nav2: {
        position: 'sticky',
        top: 0, zIndex: 20,
        backgroundColor: '#4299e1dd',
        boxShadow: '3px 5px 5px #2c5282',
        height: '60px',
        color: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        transition: 'all 0.3s linear',
    },
    navLinks: {
        justifyContent: 'flex-end',
        height: '100%',
        alignItems: 'center',
        width: 'auto',
        m: 'auto',
        transition: 'all 0.7s linear',
        '& #navLink': {
            textDecoration: 'none',
        }

    },
    logoCont: {
        justifyContent: "flex-start",
        alignSelf: "center",
        display: 'flex',
        transition: 'all 0.5s ease-in-out',
        width: '100%', height: '100%', p: 0, m: 0

    },
    'aboutUS-button': {
        fontWeight: 700,
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        backgroundColor: '#000',
        color: '#fff',
        width: '220px',
        "&:hover": {
            backgroundColor: '#fff',
            color: '#000'
        }
    },
    techActions: {
        pt: 30, pb: 30,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto auto'

    }, contHIW: {
        mb: 25,
    },
    HIWHead: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        transition: 'all 0.5s ease-in-out',
    },
    box: {
        fontWeight: 400,
        color: '#000',
        margin: 'auto',
        width: '100%',
        maxWidth: {
            xs: '80vw',
            sm: '560px',
            md: '860px',
            lg: '1080px'
        },
        minWidth: 'auto',
        padding: 'auto',
        borderRadius: '50px',
        overflow: 'hidden',
        transition: 'all 2.5s ease-in-out',
    },
    content: {
        fontWeight: 700,
        textTransform: 'uppercse',
        letterSpacing: 1.5,
        fontSize: {
            xs: '12px',
            sm: '2rem',
            md: '2.2rem',
            lg: '2.5rem'
        },
        fontFamily: 'Exo',
        m: 'auto'
    },
    pointsH: {
        margin: 1,
        padding: 'auto',
        display: 'flex',
        textAlign: 'center',
        alignSelf: 'center',
        direction: {
            xs: 'column',
            lg: 'row'
        },
        fontSize: {
            xs: '11px',
            sm: '13px',
            lg: '1rem'
        },
        color: '#888',
        textTransform: 'uppercase',
        listStyleType: 'none'
    }, aboutUS: {
        padding: 5,
        maxWidth: '100vw',
        overflow: 'hidden'
    },
    'aboutUS-para': {
        // textAlign: 'justify',
        maxWidth: '550px',
        margin: 'auto'
    },
    'aboutus-imgCont': {
        m: 'auto',
        p: 2,
        overflow: 'hidden'
    },
    'aboutUS-img': {
        overflow: 'hidden',
        p: 2,
        width: '100%',
        "&:hover": {
            '& img': {
                overflow: 'hidden',
                position: 'relative',
            },
        },
    },
    'aboutUS-worldwideH1': {
        fontWeight: 700,
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        textAlign: 'center',
        m: 'auto',
    },
    'worldMap-container': {
        minWidth: '90vw',
        maxWidth: '100vw',
        height: 'auto',
        overflow: 'auto',
        m: 'auto',

    },
    customers: {
        display: 'flex',
        flexDirection: {
            xs: "column",
            lg: "row",
        },
        pt: 5, pb: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        gap: 10,
        color: '#fff',
        width: '100%',
        height: 'fit-content',
        backgroundImage: 'linear-gradient(to left, #00796b22 ,#00796bee ,#00796b22)',
        margin: '25px auto 5px',
    },
    ceocontainerStyle: {
        padding: '2rem',
        width: '100%',
    },
    ceoimagecontainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '7px double #00796b'
    },
    ceoimageStyle: {
        width: '100%',
        height: 'auto',
    },
    teamContainer: {
        marginTop: 20,
        marginBottom: 20,
        maxWidth: '100vw'
    }, container: {
        marginBottom: 15,
        backgroundImage: 'linear-gradient(to top, #fff,#4FC3F7)',
        maxWidth: '100%',

    },
    sectionTitle: {
        marginBottom: '16px',
        fontWeight: 'bold',
        color: '#000',
    },
    headerCC: {
        width: '100%',
        padding: 'auto', pt: 20,
        margin: 'auto',
        height: '480px',
        backgroundColor: '#0091EA',
        borderRadius: '0 0 180px 00px',
        marginBottom: 15,
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
    },
    headerTitle: {
        marginBottom: '12px',
        textAlign: 'center',
    }, searchCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        pb: 10

    },
    searchInput: {
        width: '100%',
        maxWidth: '1020px',
        padding: '14px',
        margin: 'auto',
        // border: '1px solid #ccc',
        borderRadius: '50px',
    },
    faqSection: {
        p: 5,
        overflow: 'auto',
        alignSelf: 'flex-start',
    },
    accordians: {
        backgroundColor: '#fffff077',
        maxWidth: '920px',
        m: 2

    },
    faqTitle: {
        fontWeight: 'bold',
        color: '#333',
        backgroundColor: '#0000',
    },
    faqItems: {
        width: '100%',
        maxWidth: '1020px',
        backgroundColor: '#0000',

    },
    dropdown: {
        width: '100%',
        maxWidth: '980px',
        padding: 3, pt: 0,
        height: '40vmin',
        overflow: 'auto',
        borderRadius: '0 0 50px 50px',
        mt: 55,
        position: 'absolute',
        backgroundColor: '#fffff0',
        zIndex: '1',
    },
    listItemSearch: {
        backgroundColor: 'transparent',
        color: '#555',
        mt: 1, mb: 1, p: 0,
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#ffe'
        }
    }, articlesBox: {
        m: 2,
        p: 2

    },
    articlesHeader: {
        backgroundColor: '#000',
        color: '#fffff0',
        textAlign: 'center',
        m: 0,
        pt: 3, pb: 3
    },
    articlesBody: {
        p: '5%'
    },
    articlesImage: {
        objectFit: 'cover',
        position: 'center center',
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '550px',
    },
    searchCounts: {
        fontSize: '1rem',
        color: '#888',

    },
    articleCard: {
        backgroundColor: '#fff4',
        // backgroundImage: 'linear-gradient(to bottom,#5abcef,#FFFFF0, #48b1bfaa ,#06beb622 )',
        borderRadius: '8px',
        m: 'auto',
        width: '540px',
        minWidth: 'auto',
        maxWidth: '80vw',
        display: 'flex',
        flexDirection: 'column',
    },
    dialogTitle: {
        // color: '#000a',
        color: '#000',
        width: '98%',
        // color: '#0047AB',
        overflow: 'hidden',
        ml: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    articleTitle: {
        fontWeight: 'bold',
        color: '#0047AB',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        // display: '-webkit-box',
        // '-webkit-line-clamp': 2,
        // '-webkit-box-orient': 'vertical',
    },
    articleDescription: {
        color: '#111',
        // maxHeight: '3rem', 
        overflow: 'hidden',
        // textAlign: 'justify',
        textOverflow: 'ellipsis',
        // display: '-webkit-box',
        // '-webkit-line-clamp': 2,
        // '-webkit-box-orient': 'vertical',
    },
    articleLink: {
        color: '#007bff',
        textDecoration: 'none',
    },
    listDialogue: {
        overflowY: 'auto',
        flexSearchBox: {
            ml: 'auto',
            mr: 'auto',
            // display:'flex',
            // alignItems:'center',
            // justifyContent:'center',
        },
        articlesCardAction: {
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
    }, sellingPointsContainer: {
        marginTop: '50px',
        padding: '20px',
        marginBottom: 10,
        backgroundColor: '#f9f9f9f9',
    },
    sellingPointsHeading: {
        marginBottom: '30px',
        textAlign: 'center',
        fontFamily: 'Exo',
        color: '#333',
    },
    sellingPointItem: {
        fontFamily: 'Exo',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    logoMediaAI: {
        width: 'fit-content',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        p: 1, border: 0, boxShadow: 0,
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10%',
        mt: 5
    },
    aiMediaSeg: {
        width: 'fit-content',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        mt: 'auto',
        mb: 5,
        ml: 'auto',
        mr: 5,
        bottom: '5%',
        right: '5%',
        border: 0,
        boxShadow: 0,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    aiTextCont: {
        color: '#fffff0',
        fontWeight: 400,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10%'

    },

    // AI Images
    aiImageCont: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: ' auto 90%',
        height: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 0,
    },

    // Tech Details
    techDetail: {
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: 'blur(1px)',
    },
    techCont: {
        pt: 25, pb: 15, pl: 5, pr: 5,
        backgroundColor: '#000',
        color: '#fff', zIndex: 1,
        boxShadow: '5px 5px 150px #5abcef',
    },
    techHEad: {
        textAlign: 'center',
        marginBottom: 25,
    },

    // Container Segment
    containerSeg: {
        borderRadius: '50px',
        width: 'max-content',
        maxWidth: '75vw',
        ml: 'auto', mr: 'auto',
        mb: 5,
        '&:hover': {
            backgroundColor: '#5abcef',
            boxShadow: '5px 15px 50px #5abcef',
            transform: 'scale(1.02)',
            '& p': {
                color: '#eee',
            },
            '& #content': {
                color: '#fff',
            },
        },
    },
    contContentSeg: {
        width: 'fit-content',
        maxWidth: '780px',
    },
    headsSeg: {
        fontWeight: 700,
        letterSpacing: '0.2rem',
        p: 1,
        pb: 1,
    },
    txtsSeg: {
        pt: 1,
        p: 1,
        color: "#696969",
    },
    imageSeg: {
        transition: 'all 0.1s ease-in-out',
        alignSelf: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '240px',
    },
    contactItem: {
        textAlign: 'center',
        maxWidth: '300px',
        padding: '20px',
        borderRadius: '10px',
    },
    teamImgCont: {
        borderRadius: '50% 50% 25px 25px',
        backgroundColor: '#fff0',
        border: '1px solid #0000',
        height: '250px',
        width: '250px',
        overflow: 'hidden',
        '&:hover': {
            backgroundImage: 'linear-gradient(to top, #5abcef33,#fce44d33 )',
            boxShadow: '0px 5px 120px #fce44d33',
        }
    },
    teamImg: {
        backgroundColor: '#fff0',
        height: '250px',
        width: '250px',
    },
}