-- Migration: Create Enums for Devmart Marko Backend
-- Phase 2 MVP - Backend Integration

-- Content status for publishable entities (services, blog_posts, etc.)
CREATE TYPE public.content_status AS ENUM ('draft', 'published', 'archived');

-- Submission status for contact form entries
CREATE TYPE public.submission_status AS ENUM ('new', 'read', 'responded', 'archived');

-- Admin roles (stored in separate user_roles table for security)
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

-- Billing period for pricing plans (defined now, used in later phase)
CREATE TYPE public.billing_period AS ENUM ('month', 'year', 'one-time');