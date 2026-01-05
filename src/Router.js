// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './PrivacyPolicy';
import CookiesPolicy from './CookiesPolicy';
import TermsOfService from './TermsOfService';
import RefundPolicy from './RefundPolicy';

import ThankYouPage from './thank';
import Under18 from './Under18';
import ResponsibleGaming from './ResponsibleGaming';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/refundpolicy" element={<RefundPolicy />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/cookiespolicy" element={<CookiesPolicy />} />
      <Route path="/termsofservice" element={<TermsOfService />} />
      <Route path="/thank" element={<ThankYouPage></ThankYouPage>} />
      <Route path="/under18" element={<Under18></Under18>} />
      <Route path="/responsiblegaming" element={<ResponsibleGaming></ResponsibleGaming>} />
    </Routes>
  );
};

export default Router;
