import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SingleServicePage from "./pages/SingleServicePage";
import BlogPage from "./pages/BlogPage";
import SinglePostPage from "./pages/SinglePostPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import SingleCaseStudyPage from "./pages/SingleCaseStudyPage";
import TeamPage from "./pages/TeamPage";
import PartnershipPage from "./pages/PartnershipPage";
import PricingPage from "./pages/PricingPage";
import FaqPage from "./pages/FaqPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";

// Legal pages
import PrivacyPage from "./pages/legal/PrivacyPage";
import TermsPage from "./pages/legal/TermsPage";

// Auth pages
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import RegisterPage from "./pages/auth/RegisterPage";

// Admin layout and pages
import { AdminLayout } from "./components/admin/AdminLayout";
import { RequireAuth } from "./components/admin/RequireAuth";
import DashboardPage from "./pages/admin/DashboardPage";
import ServicesAdminPage from "./pages/admin/ServicesAdminPage";
import ProjectsAdminPage from "./pages/admin/ProjectsAdminPage";
import PricingAdminPage from "./pages/admin/PricingAdminPage";
import TestimonialsAdminPage from "./pages/admin/TestimonialsAdminPage";
import BlogAdminPage from "./pages/admin/BlogAdminPage";
import TeamAdminPage from "./pages/admin/TeamAdminPage";
import FaqAdminPage from "./pages/admin/FaqAdminPage";
import ContactsAdminPage from "./pages/admin/ContactsAdminPage";
import SettingsAdminPage from "./pages/admin/SettingsAdminPage";
import UsersAdminPage from "./pages/admin/UsersAdminPage";
import PartnersAdminPage from "./pages/admin/PartnersAdminPage";
import NewsletterAdminPage from "./pages/admin/NewsletterAdminPage";
import HomepageBlocksAdminPage from "./pages/admin/HomepageBlocksAdminPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Public marketing routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<SingleServicePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<SinglePostPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="case-studies/:slug" element={<SingleCaseStudyPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="partnership" element={<PartnershipPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="legal/privacy" element={<PrivacyPage />} />
        <Route path="legal/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Authentication routes */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      {/* Unauthorized page */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Admin routes - Protected */}
      <Route path="/admin" element={<RequireAuth />}>
        <Route element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="services" element={<ServicesAdminPage />} />
          <Route path="projects" element={<ProjectsAdminPage />} />
          <Route path="pricing" element={<PricingAdminPage />} />
          <Route path="testimonials" element={<TestimonialsAdminPage />} />
          <Route path="blog" element={<BlogAdminPage />} />
          <Route path="team" element={<TeamAdminPage />} />
          <Route path="faqs" element={<FaqAdminPage />} />
          <Route path="contacts" element={<ContactsAdminPage />} />
          <Route path="settings" element={<SettingsAdminPage />} />
          <Route path="users" element={<UsersAdminPage />} />
          <Route path="partners" element={<PartnersAdminPage />} />
          <Route path="newsletter" element={<NewsletterAdminPage />} />
          <Route path="homepage" element={<HomepageBlocksAdminPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
