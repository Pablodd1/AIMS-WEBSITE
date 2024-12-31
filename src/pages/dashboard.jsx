import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { formatDateForMsg, shortMonth } from '../components/crm.slaves/servicesName';
import { MdReceiptLong } from "react-icons/md";
import { RiQuestionnaireFill, RiWhatsappLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstLetters, getRandomColor } from '../components/crm.slaves/dashboard.slaves';
import axios from 'axios';
import DashboardCard06 from '../components/crm.slaves/charts/DashboardCard06';
import DashboardCard10 from '../components/crm.slaves/charts/DashboardCard10';
import DashboardCard11 from '../components/crm.slaves/charts/DashboardCard11';
import DashboardCard08 from '../components/crm.slaves/charts/DashboardCard08';


const APILink = import.meta.env.VITE_APILink
const UserDashboard = () => {
    const { t } = useTranslation()
    const { i18n } = useTranslation();
    const languageCode = i18n.language;
    const user = useSelector(x => x.user)
    const [bookingData, setBookingData] = useState(null);
    const dispatch = useDispatch()
    // Dummy data for the list of requests
    const requests = [
        { id: 1, title: 'Request 1', description: 'Description for Request 1', date: new Date("2023-06-23T00:00:00.000Z"), status: 'Pending' },
        { id: 2, title: 'Request 2', description: 'Description for Request 2', date: new Date("2023-05-21T00:00:00.000Z"), status: 'Approved' },
        { id: 3, title: 'Request 3', description: 'Description for Request 3', date: new Date("2023-04-21T00:00:00.000Z"), status: 'Rejected' },
    ];

    // Function to handle the button click
    const handleRequestClick = () => {
        // Logic to handle the request button click
        console.log('Request button clicked');
    };
    const handleBooking = (x) => {

        dispatch({
            type: 'SET_BOOKING',
            payload: x,
        });
    }

    const updateBookingStatus = async (status) => {
        try {
            const response = await axios.put(`${APILink}/bookings/booking/${user.uid}`, { status });
            return response.data;
        } catch (error) {
            console.error('Error updating booking status:', error);
            return null;
        }
    };
    const styles = {
        requestCards: {
            width: "100%",
            maxWidth: '1260px',
            ml: 5, mr: 5
        },
        dashboardCont: {
            p: 5, m: 'auto',
            width: 'fit-content',
            maxWidth: '1260px',
            display: 'flex',
        },
        Pending: {
            backgroundColor: '#B3E5FC'
        },
        Rejected: {
            backgroundColor: '#F8BBD0'
        },
        Approved: {
            backgroundColor: '#69F0AE',
        },
        buttonStyle1: {
            ml: 2, mr: 2, p: 1,
            // backgroundColor: '#69F0AE',
            borderRadius: '15px',
            // color:'#212121',
            transition: 'all 0.5s ease-in-out',
            '&:hover': {
                backgroundColor: '#0091EA',
                borderRadius: '25px',
                color: '#fff',
            }

        },
        buttonStyle2: {
            ml: 2, mr: 2, p: 1,
            // backgroundColor: '#B3E5FC',
            borderRadius: '15px',
            // color:'#212121',
            transition: 'all 0.5s ease-in-out',
            '&:hover': {
                backgroundColor: '#0091EA',
                borderRadius: '25px',
                color: '#fff',
            }

        },
        divider: {
            textAlign: 'center',
            m: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        avatar: {
            bgcolor: getRandomColor,
            width: '10rem',
            height: '10rem',
            fontSize: '4rem',
            color: '#fffff0',
            m: 'auto',
            display: 'flex',
            fontFamily: 'Monoton'

        }
    }

    const startWhatsAppChat = () => {
        const phoneNumber = '+923172047047'; // Replace with the actual WhatsApp number
        const message = encodeURIComponent("Hello Sir, I'm interested in your Services. Can we talk? (Ref:AI-Medical-Scriber-CRM)");
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          if (/WhatsApp/i.test(navigator.userAgent)) {
            window.location.href = url;
          } else { window.open(url, '_blank'); }
        } else {
          window.open(url, '_blank');
        }
      
      };
      
    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: languageCode
                }}
            >
                <title>User Dashboard | AI Medical Scriber</title>
                <meta name="description" content="Dashboard for clients of AI Medical Scriber " />

            </Helmet>
            {user &&
                <Grid
                    container
                    spacing={5}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx={styles.dashboardCont}
                >
                    <Grid item xs={12} >
                        <Divider >
                            <Avatar alt={user.displayName} sx={styles.avatar} >
                                {getFirstLetters(user.displayName)}
                            </Avatar>
                        </Divider>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography component={'h1'} variant='h3'  >
                            Hi, {user.displayName}!
                        </Typography>
                        <Typography component={'h2'} variant='subtitle2'  >
                            @{user.email}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} >
                    <div className="grid grid-cols-12 gap-6 my-8 ">
                        {/* Line chart (Customers Over Time) */}
                        <DashboardCard08 />
                        {/* Card (Customers) */}
                        <DashboardCard10 />
                        {/* Doughnut chart (Package Type) */}
                        <DashboardCard06 />
                        {/* Card (Media Source) */}
                        <DashboardCard11 />
                    </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='flex justify-center items-center mt-2 ' >
                            <span className='text-sm z-10 rounded-3xl text-blue-900 bg-teal-200 py-1 px-6 inline' >
                                Developed By <a target='_blank' href='https://www.myababeel.com' rel='' ><img src='https://myababeel.com/ababeel-logo-transparent.webp' className='inline block' width={50} height={39} /> <b > MyAbabeel</b></a>
                            </span>
                        </div>
                        <Divider style={{ transform: 'translateY(-25px)', backgroundColor: '#cacaca', zIndex: -2 }} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ display: 'flex', justifyContent: 'space-evenly' }}
                    >
                        <Button
                            variant='outlined'
                            aria-label={t('buttons.ExpDev')}
                            startIcon={<MdReceiptLong />}
                            href='https://www.myababeel.com'
                            target='_blank'
                            className='shadow-md rounded-4xl border-sm '
                        >
                            {t('buttons.ExpDev')}
                        </Button>

                        <button aria-label={t('buttons.SWM')} onClick={startWhatsAppChat} className=" bg-white-700 rounded-3xl pr-4 shadow-lg hover:shadow:xl hover:bg-blue-200 hover:text-black-100">
                            <RiWhatsappLine size={'2rem'}  className="p-0 m-1  shadow-2xl inline  text-teal-600  rounded-xl" />
                            {t('buttons.contactDev')}
                        </button>
                    </Grid>
                </Grid>
            }

        </>
    );
};

export default UserDashboard;
