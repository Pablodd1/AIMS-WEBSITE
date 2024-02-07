import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaOpencart } from 'react-icons/fa6';
import { RiWhatsappLine } from 'react-icons/ri';

const AppDownloadPage = () => {
  const { t } = useTranslation();
  const startWhatsAppChat = () => {
    const phoneNumber = '+1 (786) 970-8366'; // Replace with the actual WhatsApp number
    const message = encodeURIComponent("Hello Sir, I'm interested in your AI Medical Scriber. Can we talk about this?");
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
    <div style={{ height: '100vh', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          pt: 0,
          position: 'fixed',
          top: 0,
          height: '100vh',
          width: '100%',
          zIndex: -1,
          backgroundImage: `url(/images/cover-AIMS.webp)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20% center',

        }}
      >{' '}
      </div>
      <div className="min-h-screen flex flex-col text-white-100 justify-center items-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">App Coming Soon</h1>
        <p className="text-lg md:text-xl mb-8 text-white-300 text-center">
          We are working hard to bring you an amazing app. Stay tuned!
        </p>
        <div className="flex flex-row items-center              ">
          <button
            size="larger"
            aria-label={t('buttons.tryNow')}
            variant="contained"
            icon={<FaOpencart size={'1.25rem'} />}
            onClick={() => handleBooking(true)}
            className="m-2 mt-10 p-2 rounded-lg shadow-2xl font-semibold uppercase tracking-wide bg-CTA-500 text-CTA-800 w-52 transition-colors duration-300 hover:bg-CTA-600 hover:text-CTA-900"
          >

            {t('buttons.bookNow')}
          </button>
          <button aria-label={t('buttons.SWM')} className="m-2  pt-10 p-2 rounded-lg text-green-100 ">
            <RiWhatsappLine size={'2.5rem'} onClick={startWhatsAppChat} className="p-1 shadow-2xl  bg-teal-700 rounded-xl hover:bg-teal-100 hover:text-green-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadPage;
