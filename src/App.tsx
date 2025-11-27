import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SingleServicePage from "./pages/SingleServicePage";
import BlogPage from "./pages/BlogPage";
import SinglePostPage from "./pages/SinglePostPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import TeamPage from "./pages/TeamPage";
import PartnershipPage from "./pages/PartnershipPage";
import PricingPage from "./pages/PricingPage";
import FaqPage from "./pages/FaqPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<SingleServicePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<SinglePostPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="partnership" element={<PartnershipPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
