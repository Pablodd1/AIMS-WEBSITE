import React, { Suspense, lazy, } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GiTechnoHeart } from 'react-icons/gi';
import { RxIdCard, RxSketchLogo } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';


import './styles/css/index.css';
import './styles/css/tailwind.css';
import { styles } from './styles/js/styles';

const ErrorPage = lazy(() => import('./Error'));
const LoginDialog = lazy(() => import('./pages/signin'));
const AppDownloadPage = lazy(() => import('./pages/appDownload'));
const Technology = lazy(() => import('./pages/technology'));
const AboutUs = lazy(() => import('./pages/aboutUs'));
const CustomerCare = lazy(() => import('./pages/CustomerCare'));
const Article = lazy(() => import('./pages/article'));
const PolicyPage = lazy(() => import('./pages/policy').then(module => ({ default: module.PolicyPage })));
const TermsPage = lazy(() => import('./pages/policy').then(module => ({ default: module.TermsPage })));
const NavBar = lazy(() => import('./Common/NavBar'));
const Footer = lazy(() => import('./Common/footer'));
const ChatButton = lazy(() => import('./Common/ChatButton'));
const FancyLinks = lazy(() => import('./Common/fancyLinks'));
const Popup = lazy(() => import('./Common/popUp'));
const OrganizationForm = lazy(() => import('./Common/formGetStarted'));


function Layout() {
  const { t } = useTranslation()

  const links = [
    { title: t('buttons.home'), icon: <FaHome color='inherit' />, add: "/" },
    { title: t('buttons.technology'), icon: <GiTechnoHeart color='inherit' />, add: "/technology" },
    { title: t('buttons.articles'), icon: <RxIdCard color='inherit' />, add: "/customer-care" },
    { title: t('buttons.aboutUs'), icon: <RxSketchLogo color='inherit' />, add: "/about-us" },
  ]

  return (
    <>
      <NavBar links={links} styles={styles} />
      <Outlet />
      <FancyLinks />
      <Footer links={links} linkStyles={styles} />
      <ChatButton />
      <Popup styles={styles} />
      <OrganizationForm />      
    </>
  );
};



export default function MyRoutes({ Home, }) {

  const Loader = ({ children }) => {
    return <Suspense fallback={<div className='w-full h-full bg-transparent ' >{' '}</div>} >
      {children}
    </Suspense>
  }
  const handleRouteChange = () => { window.scrollTo(0, 0); };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loader children={<Layout />} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Loader children={Home} />
        },
        {
          path: '/technology',
          element: <Loader children={<Technology styles={styles} />} />
        },
        {
          path: '/about-us',
          element: <Loader children={<AboutUs styles={styles} />} />
        },
        {
          path: '/customer-care',
          element: <Loader children={<CustomerCare styles={styles} />} />
        },
        {
          path: '/customer-care/:blogId',
          element: <Loader children={<Article styles={styles} />} />
        },
        {
          path: '/policies',
          element: <Loader children={<PolicyPage styles={styles} />} />
        },
        {
          path: '/terms-and-conditions',
          element: <Loader children={<TermsPage styles={styles} />} />
        },
        {
          path: '/download/ai-medical-scriber',
          element: <Loader children={<AppDownloadPage />} />
        },
      ]
    },
    {
      path: "/crm-login/admins",
      element: <Loader children={<LoginDialog />} />

    }
  ]);

  React.useEffect(() => {
    const unsubscribe = router.subscribe(handleRouteChange);
    return () => {
      unsubscribe();
    };
  }, []);

  return <RouterProvider router={router} />

}
