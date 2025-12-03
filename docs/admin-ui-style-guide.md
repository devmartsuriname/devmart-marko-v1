# Devmart Admin UI Style Guide

> **Version:** 1.3 (Phase D V2 Modules Polish)  
> **Last Updated:** December 3, 2025  
> **Source:** `src/styles/admin.css`

This document provides a comprehensive reference for all CSS classes, tokens, and usage patterns implemented in the Devmart Admin Backend UI.

---

## Table of Contents

1. [Overview & Design Principles](#1-overview--design-principles)
2. [Color Token System](#2-color-token-system)
3. [Layout Components](#3-layout-components)
4. [Component Classes](#4-component-classes)
5. [Form Components](#5-form-components)
6. [Modal Components](#6-modal-components)
7. [Dashboard Components](#7-dashboard-components)
8. [Icon Utilities](#8-icon-utilities)
9. [Typography Utilities](#9-typography-utilities)
10. [Accessibility](#10-accessibility)
11. [Auth Page Components](#11-auth-page-components)
12. [Responsive Breakpoints](#12-responsive-breakpoints)
13. [Usage Examples](#13-usage-examples)
14. [Settings Page Components](#14-settings-page-components)
15. [Admin Module UI Pattern](#15-admin-module-ui-pattern)
16. [Error Handling & Notification Patterns](#16-error-handling--notification-patterns)
17. [V2 Modules Polish Patterns](#17-v2-modules-polish-patterns)

---

## 1. Overview & Design Principles

### Design Philosophy

The Devmart Admin UI follows a **Nexio-style minimal admin aesthetic** with these core principles:

- **Token-Driven CSS**: All colors, shadows, and spacing use CSS custom properties
- **Isolated Namespace**: Admin styles are scoped to prevent frontend marketing site leakage
- **Light/Dark Theme Parity**: Complete token coverage for both themes
- **Component Consistency**: Standardized patterns across all admin modules

### Architecture Rules

1. **No Tailwind utilities in admin components** - Use `.admin-*` classes only
2. **No hardcoded colors** - Always use `var(--admin-*)` tokens
3. **No frontend CSS modifications** - Admin styles live in `src/styles/admin.css` only
4. **Theme toggle via `.lightmode` class** - Applied to `body` element

### File Structure

```
src/
├── styles/
│   ├── admin.css              # All admin styles (primary)
│   └── admin-theme-vars.css   # Shadcn variable overrides for admin
├── pages/admin/               # Admin page components
└── components/admin/          # Reusable admin components
```

---

## 2. Color Token System

### 2.1 Background & Surface Tokens

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--admin-bg` | `hsl(222, 84%, 4.9%)` | `hsl(0, 0%, 98%)` | Main page background |
| `--admin-bg-secondary` | `hsl(217, 32%, 17.5%)` | `hsl(0, 0%, 100%)` | Cards, modals, panels |
| `--admin-bg-tertiary` | `hsl(217, 32%, 22%)` | `hsl(0, 0%, 96%)` | Hover states, subtle backgrounds |
| `--admin-card-bg` | `hsla(0, 0%, 100%, 0.04)` | `hsl(0, 0%, 100%)` | Card backgrounds |

### 2.2 Text Color Tokens

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--admin-text` | `hsl(210, 40%, 98%)` | `hsl(222, 47%, 11%)` | Primary text, headings |
| `--admin-text-muted` | `hsl(215, 20%, 65%)` | `hsl(215, 16%, 47%)` | Secondary/helper text |
| `--admin-text-secondary` | `hsl(215, 20%, 75%)` | `hsl(215, 16%, 37%)` | Tertiary text, timestamps |

### 2.3 Border Tokens

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--admin-border` | `hsl(217, 32%, 17.5%)` | `hsl(214, 32%, 91%)` | Subtle borders, dividers |
| `--admin-border-strong` | `hsl(217, 32%, 25%)` | `hsl(214, 32%, 80%)` | Emphasized borders |

### 2.4 Accent Tokens (Devmart Green)

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--admin-accent` | `hsl(152, 82%, 55%)` | `hsl(152, 82%, 55%)` | Primary accent, buttons |
| `--admin-accent-hover` | `hsl(152, 82%, 60%)` | `hsl(152, 82%, 50%)` | Hover state |
| `--admin-accent-muted` | `hsla(152, 82%, 55%, 0.1)` | `hsla(152, 82%, 55%, 0.08)` | Subtle backgrounds, focus rings |

### 2.5 Status Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--admin-success` | `hsl(142, 76%, 36%)` | Published, active, confirmed |
| `--admin-success-bg` | `hsla(142, 76%, 36%, 0.1)` | Success backgrounds |
| `--admin-warning` | `hsl(38, 92%, 50%)` | Draft, pending, caution |
| `--admin-warning-bg` | `hsla(38, 92%, 50%, 0.1)` | Warning backgrounds |
| `--admin-error` | `hsl(0, 84%, 60%)` | Errors, danger, archived |
| `--admin-error-bg` | `hsla(0, 84%, 60%, 0.1)` | Error backgrounds |
| `--admin-info` | `hsl(199, 89%, 48%)` | Information, neutral states |
| `--admin-info-bg` | `hsla(199, 89%, 48%, 0.1)` | Info backgrounds |

### 2.6 Shadow Tokens

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--admin-shadow-sm` | `0 1px 2px 0 hsla(0, 0%, 0%, 0.05)` | `0 1px 2px 0 hsla(0, 0%, 0%, 0.03)` |
| `--admin-shadow-md` | `0 4px 6px -1px hsla(0, 0%, 0%, 0.1)` | `0 2px 4px 0 hsla(0, 0%, 0%, 0.06)` |
| `--admin-shadow-lg` | `0 10px 15px -3px hsla(0, 0%, 0%, 0.1)` | `0 4px 8px 0 hsla(0, 0%, 0%, 0.08)` |

---

## 3. Layout Components

### 3.1 Admin Shell

```css
.admin-layout          /* Main flex container (min-height: 100vh) */
.admin-sidebar         /* Fixed 260px left sidebar */
.admin-sidebar.collapsed /* Hidden state (width: 0) */
.admin-main-wrapper    /* Flex-1 content wrapper */
.admin-header          /* Sticky 64px top header */
.admin-content         /* Main scrollable content area */
```

**Layout Structure:**
```jsx
<div className="admin-layout">
  <aside className="admin-sidebar">...</aside>
  <div className="admin-main-wrapper">
    <header className="admin-header">...</header>
    <main className="admin-content">...</main>
  </div>
</div>
```

### 3.2 Sidebar Navigation

```css
.admin-sidebar-header     /* Logo container */
.admin-sidebar-logo       /* Logo link */
.admin-sidebar-logo-img   /* Logo image (max-width: 150px) */
.admin-sidebar-nav        /* Navigation container */
.admin-nav-item           /* Individual nav link */
.admin-nav-item.active    /* Active state with accent left border */
.admin-nav-icon           /* 20x20px nav icon */
.admin-sidebar-footer     /* Bottom section with sign-out */
```

### 3.3 Header

```css
.admin-header             /* Sticky header bar */
.admin-header-left        /* Menu toggle area */
.admin-header-right       /* Actions area (theme toggle) */
.admin-header-title       /* Page title in header */
.admin-menu-toggle        /* Hamburger menu button */
```

---

## 4. Component Classes

### 4.1 Cards

```css
.admin-card               /* Base card: border, shadow, 24px padding */
.admin-card-header        /* Flex header with actions */
.admin-card-title         /* 18px semibold title */
.admin-card-description   /* Muted description text */
```

**Usage:**
```jsx
<div className="admin-card">
  <div className="admin-card-header">
    <h2 className="admin-card-title">Card Title</h2>
  </div>
  <p className="admin-card-description">Description text</p>
  {/* Card content */}
</div>
```

### 4.2 Buttons

| Class | Description |
|-------|-------------|
| `.admin-btn` | Base button (10px 20px padding, 8px radius) |
| `.admin-btn-primary` | Accent background, dark text |
| `.admin-btn-secondary` | Transparent with border |
| `.admin-btn-ghost` | Transparent, subtle hover |
| `.admin-btn-destructive` | Error/danger red |
| `.admin-btn-sm` | Small variant (6px 12px) |
| `.admin-btn-icon` | Icon-only (8px padding) |

**Button States:**
- `:hover` - Background lightens/darkens appropriately
- `:disabled` - 50% opacity, cursor not-allowed
- `:focus-visible` - Accent outline with 2px offset

### 4.3 Tables

```css
.admin-table              /* Full-width table with collapsed borders */
.admin-table thead        /* Muted header background */
.admin-table th           /* 13px uppercase, 0.5px letter-spacing */
.admin-table td           /* 16px vertical padding */
.admin-table tbody tr:hover /* Tertiary background on hover */
.admin-table-empty        /* Centered empty state message */
.admin-table-wrapper      /* Overflow-x scroll container */
.admin-table-actions      /* Right-aligned action button container */
```

**Advanced Table Classes:**
```css
.admin-table-zebra        /* Alternating row backgrounds */
.admin-table-cell-name    /* Primary cell text */
.admin-table-cell-subtitle /* Secondary cell text (muted) */
.admin-table-cell-truncate /* 200px max-width with ellipsis */
```

**Table Usage:**
```jsx
<div className="admin-table-wrapper">
  <table className="admin-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th className="admin-table-actions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span className="admin-table-cell-name">Item Name</span>
          <span className="admin-table-cell-subtitle">Subtitle</span>
        </td>
        <td><span className="admin-badge-success">Published</span></td>
        <td className="admin-table-actions">
          <button className="admin-btn-sm admin-btn-ghost">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### 4.4 Badges

| Class | Color | Usage |
|-------|-------|-------|
| `.admin-badge` | Base styles | Required base class |
| `.admin-badge-success` | Green | Published, active |
| `.admin-badge-warning` | Yellow/orange | Draft, pending |
| `.admin-badge-error` | Red | Errors, archived |
| `.admin-badge-danger` | Red | Alias for error |
| `.admin-badge-info` | Blue | Information |
| `.admin-badge-default` | Gray | Neutral/unknown |
| `.admin-badge-outline` | Transparent + border | Subtle emphasis |
| `.admin-badge-secondary` | Tertiary background | Low emphasis |

**Badge Usage:**
```jsx
<span className="admin-badge admin-badge-success">Published</span>
<span className="admin-badge admin-badge-warning">Draft</span>
<span className="admin-badge admin-badge-error">Archived</span>
```

### 4.5 Alerts

```css
.admin-alert              /* Base alert (12px 16px, 6px radius, left border) */
.admin-alert-success      /* Green left border */
.admin-alert-error        /* Red left border */
.admin-alert-warning      /* Yellow left border */
.admin-alert-info         /* Blue left border */
.admin-alert-mb           /* 16px margin-bottom utility */
```

**Alert Usage:**
```jsx
<div className="admin-alert admin-alert-success admin-alert-mb">
  Operation completed successfully!
</div>
```

---

## 5. Form Components

### 5.1 Form Elements

```css
.admin-form-group         /* Wrapper with 20px margin-bottom */
.admin-form-label         /* 14px semibold label */
.admin-label              /* Alias for form-label */
.admin-form-input         /* Full-width text input */
.admin-input              /* Alias for form-input */
.admin-textarea           /* Multi-line input (80px min-height) */
.admin-select             /* Dropdown select */
.admin-checkbox           /* 16px checkbox with accent color */
.admin-checkbox-container /* Flex row with 42px height */
.admin-required           /* Red asterisk for required fields */
```

**Input Styles:**
- Background: `var(--admin-bg-tertiary)`
- Border: `1px solid var(--admin-border)`
- Focus: `border-color: var(--admin-accent)` + subtle box-shadow
- Padding: `12px 16px`
- Border radius: `6px`

### 5.2 Form Layout

```css
.admin-modal-form         /* Grid container with 1.25rem gap */
.admin-form-row           /* Single row with 1rem gap */
.admin-form-row-2         /* Two-column grid (1fr 1fr) */
.admin-form-row-3         /* Three-column grid (1fr 1fr 1fr) */
.admin-modal-footer       /* Right-aligned button bar with top border */
```

**Form Layout Example:**
```jsx
<form className="admin-modal-form">
  <div className="admin-form-row-2">
    <div className="admin-form-group">
      <label className="admin-label">First Name <span className="admin-required">*</span></label>
      <input type="text" className="admin-input" />
    </div>
    <div className="admin-form-group">
      <label className="admin-label">Last Name</label>
      <input type="text" className="admin-input" />
    </div>
  </div>
  <div className="admin-form-group">
    <label className="admin-label">Description</label>
    <textarea className="admin-textarea" rows={4}></textarea>
  </div>
  <div className="admin-modal-footer">
    <button type="button" className="admin-btn admin-btn-secondary">Cancel</button>
    <button type="submit" className="admin-btn admin-btn-primary">Save</button>
  </div>
</form>
```

### 5.3 Focus States

All form inputs have consistent focus styles:
```css
:focus {
  border-color: var(--admin-accent);
  box-shadow: 0 0 0 3px var(--admin-accent-muted);
  outline: none;
}
```

---

## 6. Modal Components

### 6.1 Modal Structure

```css
.admin-modal-content      /* Fixed centered modal (max-width: 700px) */
.admin-modal-content-sm   /* Small modal (max-width: 500px) */
.admin-modal-header       /* Flex column for title/description */
.admin-modal-title        /* 1.125rem semibold title */
.admin-modal-description  /* 0.875rem muted description */
```

### 6.2 Critical Modal Inline Styles

> **IMPORTANT:** All admin modals MUST use this inline style object to prevent visibility issues:

```jsx
const modalStyle = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 200,
  display: "grid",
  width: "100%",
  maxWidth: "700px",        // Use "500px" for delete dialogs
  maxHeight: "90vh",
  overflowY: "auto",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: "var(--admin-bg-secondary, #1a1a2e)",
  color: "var(--admin-text, #ffffff)",
  border: "1px solid var(--admin-border, rgba(255,255,255,0.1))",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
  borderRadius: "8px"
};
```

**Modal Usage:**
```jsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent style={modalStyle}>
    <DialogHeader className="admin-modal-header">
      <DialogTitle className="admin-modal-title">Modal Title</DialogTitle>
      <DialogDescription className="admin-modal-description">
        Description text
      </DialogDescription>
    </DialogHeader>
    <form className="admin-modal-form">
      {/* Form fields */}
      <div className="admin-modal-footer">
        <button className="admin-btn admin-btn-secondary">Cancel</button>
        <button className="admin-btn admin-btn-primary">Save</button>
      </div>
    </form>
  </DialogContent>
</Dialog>
```

---

## 7. Dashboard Components

### 7.1 Dashboard Header

```css
.dashboard-header             /* 32px margin-bottom */
.dashboard-header-title       /* 24px semibold heading */
.dashboard-header-description /* Muted 14px description */
```

### 7.2 Stat Cards

```css
.dashboard-stats              /* Auto-fit grid (min 240px columns) */
.dashboard-stat-card          /* Flex card with hover lift */
.stat-icon-wrapper            /* 48px rounded icon container */
.stat-icon-wrapper.accent     /* Green (Devmart accent) */
.stat-icon-wrapper.info       /* Blue */
.stat-icon-wrapper.warning    /* Yellow/orange */
.stat-icon-wrapper.success    /* Green */
.stat-content                 /* Flex column for value/label */
.stat-value                   /* 28px bold number */
.stat-label                   /* 14px muted text */
```

**Stat Card Usage:**
```jsx
<div className="dashboard-stats">
  <div className="dashboard-stat-card">
    <div className="stat-icon-wrapper accent">
      <FileText className="admin-icon-24" />
    </div>
    <div className="stat-content">
      <span className="stat-value">24</span>
      <span className="stat-label">Total Services</span>
    </div>
  </div>
</div>
```

### 7.3 Dashboard Panels

```css
.dashboard-grid               /* 2-column grid */
.dashboard-panel              /* Card with hover lift effect */
.dashboard-panel-header       /* Title + action flex row */
.dashboard-panel-title        /* 16px semibold title */
```

### 7.4 Contact List

```css
.contact-list                 /* Flex column with 12px gap */
.contact-item                 /* Flex row with hover state */
.contact-avatar               /* 40px circular placeholder */
.contact-info                 /* Flex column for name/subject */
.contact-name                 /* Truncated primary text */
.contact-subject              /* Truncated secondary text */
.contact-meta                 /* Timestamp and badge */
.contact-time                 /* 12px muted timestamp */
```

### 7.5 Quick Actions

```css
.quick-actions-grid           /* 2x2 grid */
.quick-action-item            /* Action button with icon */
.quick-action-item:hover      /* Accent text highlight */
.quick-action-icon            /* Icon wrapper */
.quick-action-label           /* Action text */
```

### 7.6 Empty & Loading States

```css
.dashboard-empty-state        /* Centered muted message */
.dashboard-skeleton           /* Animated pulse loading */
```

---

## 8. Icon Utilities

```css
.admin-icon-16    /* 16px - Inline/small icons */
.admin-icon-20    /* 20px - Default size */
.admin-icon-24    /* 24px - Stat cards, headers */
.admin-icon-muted /* color: var(--admin-text-muted) */
.admin-icon-accent /* color: var(--admin-accent) */
```

**Icon Usage:**
```jsx
import { Plus, Edit, Trash2 } from "lucide-react";

<Plus className="admin-icon-20" />
<Edit className="admin-icon-16 admin-icon-muted" />
<Trash2 className="admin-icon-16 admin-icon-accent" />
```

---

## 9. Typography Utilities

```css
.admin-page-title      /* 1.5rem semibold page heading */
.admin-section-title   /* 16px semibold section heading */
.admin-helper-text     /* 12px muted helper/hint text */
```

---

## 10. Accessibility

### Focus-Visible States

All interactive elements have `:focus-visible` styles:

```css
:focus-visible {
  outline: 2px solid var(--admin-accent);
  outline-offset: 2px;
}
```

**Elements with focus states:**
- Buttons (`.admin-btn`)
- Inputs (`.admin-input`, `.admin-textarea`, `.admin-select`)
- Checkboxes (`.admin-checkbox`)
- Navigation items (`.admin-nav-item`)

### Keyboard Navigation

- Tab order follows visual layout
- Modal focus trapping handled by Radix Dialog
- Escape key closes modals

---

## 11. Auth Page Components

```css
.auth-container       /* Centered flex container (min-height: 100vh) */
.auth-card            /* 440px max-width centered card */
.auth-logo            /* Logo container (centered) */
.auth-logo-img        /* Logo image (max-width: 200px) */
.auth-title           /* 28px bold heading */
.auth-description     /* Muted 14px description */
.auth-form            /* Form wrapper */
.auth-link            /* Accent-colored link */
.auth-footer          /* Centered footer text */
```

**Auth Page Structure:**
```jsx
<div className="auth-container">
  <div className="auth-card">
    <div className="auth-logo">
      <img src="/path/to/logo.png" alt="Logo" className="auth-logo-img" />
      <p className="auth-description">Sign in to continue</p>
    </div>
    <form className="auth-form">
      {/* Form fields */}
    </form>
    <div className="auth-footer">
      <a href="/auth/forgot-password" className="auth-link">Forgot password?</a>
    </div>
  </div>
</div>
```

---

## 12. Responsive Breakpoints

### Breakpoint Reference

| Breakpoint | Target | Changes |
|------------|--------|---------|
| `≤1024px` | Tablet | Sidebar collapses, dashboard grid → 1 column |
| `≤768px` | Small tablet | Reduced padding, smaller stat cards |
| `≤640px` | Mobile | Single column layouts, compact spacing |

### Responsive Behavior

**Sidebar:**
- Default: 260px fixed width
- ≤1024px: Collapsed by default, toggle to show

**Dashboard Stats:**
- Default: Auto-fit grid (min 240px)
- ≤640px: Smaller stat values (24px), compact padding

**Dashboard Grid:**
- Default: 2 columns
- ≤1024px: Single column

**Quick Actions:**
- Default: 2x2 grid
- ≤640px: Single column

---

## 13. Usage Examples

### Creating a New Admin Page

```jsx
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";

const MyAdminPage = () => {
  return (
    <AdminLayout>
      <div className="admin-card">
        <div className="admin-card-header">
          <h2 className="admin-card-title">Page Title</h2>
          <button className="admin-btn admin-btn-primary">
            <Plus className="admin-icon-16" /> Add New
          </button>
        </div>
        <DataTable columns={columns} rows={data} />
      </div>
    </AdminLayout>
  );
};
```

### Creating a Form Modal

```jsx
const AddItemModal = ({ isOpen, onClose, onSuccess }) => {
  const modalStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 200,
    width: "100%",
    maxWidth: "700px",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "1.5rem",
    backgroundColor: "var(--admin-bg-secondary)",
    border: "1px solid var(--admin-border)",
    borderRadius: "8px",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent style={modalStyle}>
        <DialogHeader className="admin-modal-header">
          <DialogTitle className="admin-modal-title">Add New Item</DialogTitle>
        </DialogHeader>
        <form className="admin-modal-form">
          <div className="admin-form-group">
            <label className="admin-label">
              Name <span className="admin-required">*</span>
            </label>
            <input type="text" className="admin-input" />
          </div>
          <div className="admin-modal-footer">
            <button type="button" className="admin-btn admin-btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary">
              Save
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
```

### Using Status Badges

```jsx
const getStatusBadge = (status) => {
  switch (status) {
    case "published":
      return <span className="admin-badge admin-badge-success">Published</span>;
    case "draft":
      return <span className="admin-badge admin-badge-warning">Draft</span>;
    case "archived":
      return <span className="admin-badge admin-badge-error">Archived</span>;
    default:
      return <span className="admin-badge admin-badge-default">{status}</span>;
  }
};
```

### Dashboard Stat Card

```jsx
<div className="dashboard-stat-card">
  <div className="stat-icon-wrapper accent">
    <Users className="admin-icon-24" />
  </div>
  <div className="stat-content">
    <span className="stat-value">{count}</span>
    <span className="stat-label">Total Users</span>
  </div>
</div>
```

---

## Changelog

### Phase 1: Color & Token Standardization
- Defined complete CSS variable system
- Added all status color tokens
- Created badge and alert utility classes
- Replaced all hardcoded colors with tokens

### Phase 2: Dashboard Layout Polish
- Reorganized dashboard to Nexio-style layout
- Added stat cards with icon wrappers
- Created contact list component styles
- Implemented quick actions grid

### Phase 3A: Form Standardization
- Standardized all form element styles
- Created multi-column form layout classes
- Added focus states for accessibility
- Implemented modal form patterns

### Phase 3B: Table Standardization
- Unified table header and cell styling
- Added zebra striping option
- Created truncation utilities
- Standardized action button placement

---

## 14. Settings Page Components

### 14.1 Settings Tabs

The Settings page uses a custom tabbed interface for organizing configuration sections.

| Class | Usage |
|-------|-------|
| `.settings-tabs` | Container wrapper for tab navigation |
| `.settings-tab-list` | Horizontal scrollable tab bar (flexbox with gap) |
| `.settings-tab` | Individual tab button (pill-style) |
| `.settings-tab--active` | Active tab state (accent background) |

**Styling Details:**
- Tab list has `background-color: var(--admin-bg-tertiary)` with rounded corners
- Active tab uses `var(--admin-accent)` background with `var(--admin-bg-secondary)` text
- Inactive tabs use `var(--admin-text-muted)` and transparent background
- Hover state adds subtle background and text color change
- Mobile responsive with smaller padding at ≤640px

**Example:**
```html
<div class="settings-tabs">
  <div class="settings-tab-list">
    <button class="settings-tab settings-tab--active">Brand</button>
    <button class="settings-tab">Contact</button>
    <button class="settings-tab">Social Media</button>
    <button class="settings-tab">SEO & Branding</button>
  </div>
</div>
```

### 14.2 Color Picker

Color picker utilities for branding color controls.

| Class | Usage |
|-------|-------|
| `.admin-color-picker-wrapper` | Flex container for color input + text input combo |
| `.admin-color-input` | Native `<input type="color">` styled (48×48px) |

**Styling Details:**
- Color picker wrapper uses `display: flex; gap: 12px; align-items: center`
- Color input has border radius and border matching other inputs
- Focus state uses accent color ring (`box-shadow: 0 0 0 3px var(--admin-accent-muted)`)

**Example:**
```html
<div class="admin-form-group">
  <label class="admin-form-label">Primary Color</label>
  <div class="admin-color-picker-wrapper">
    <input type="color" class="admin-color-input" value="#4be89b" />
    <input type="text" class="admin-form-input" value="#4be89b" maxlength="7" />
  </div>
  <small class="admin-helper-text">Main brand color for marketing site.</small>
</div>
```

---

## 15. Admin Module UI Pattern

This section describes the standard structure for admin module pages to ensure consistency.

### 15.1 Standard Module Page Structure

Every admin module page follows this layout pattern:

```
┌─────────────────────────────────────────────────────────────┐
│ Page Header                                                 │
│ ┌─────────────────────────────────────┐ ┌─────────────────┐ │
│ │ Page Title (h1.admin-page-title)    │ │ Add Button      │ │
│ └─────────────────────────────────────┘ └─────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ Error Alert (if error)                                      │
├─────────────────────────────────────────────────────────────┤
│ Loading State OR DataTable                                  │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Table Header (Name, Status, Actions...)                 │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ Row 1: Data... | Edit | Delete                          │ │
│ │ Row 2: Data... | Edit | Delete                          │ │
│ │ ...                                                     │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 15.2 Required Components per Module

Each admin module requires these files:

| File | Purpose |
|------|---------|
| `src/pages/admin/{Module}AdminPage.tsx` | Main list page with DataTable |
| `src/components/admin/{module}/Add{Module}Modal.tsx` | Create form modal |
| `src/components/admin/{module}/Edit{Module}Modal.tsx` | Update form modal |
| `src/components/admin/{module}/Delete{Module}Dialog.tsx` | Delete confirmation |
| `src/integrations/supabase/queries/{module}.ts` | Query layer functions |

### 15.3 DataTable Column Patterns

Standard column types and renderers:

```jsx
// Text column
{ key: "name", label: "Name" }

// Status badge column
{ 
  key: "status", 
  label: "Status", 
  render: (item) => (
    <span className={`admin-badge admin-badge-${item.status === 'published' ? 'success' : 'warning'}`}>
      {item.status}
    </span>
  )
}

// Boolean column
{ 
  key: "featured", 
  label: "Featured", 
  render: (item) => item.featured ? "Yes" : "No" 
}

// Date column
{ 
  key: "updated_at", 
  label: "Updated", 
  render: (item) => new Date(item.updated_at).toLocaleDateString() 
}

// Actions column (always last)
{ 
  key: "actions", 
  label: "Actions", 
  render: (item) => (
    <div className="admin-table-actions">
      <button className="admin-btn admin-btn-sm admin-btn-ghost" onClick={() => setEditItem(item)}>
        Edit
      </button>
      <button className="admin-btn admin-btn-sm admin-btn-destructive" onClick={() => setDeleteItem(item)}>
        Delete
      </button>
    </div>
  )
}
```

### 15.4 Form Field Patterns

Standard form field groupings in modals:

```jsx
// Single field row
<div className="admin-form-group">
  <label className="admin-label">Field Name <span className="admin-required">*</span></label>
  <input type="text" className="admin-input" value={value} onChange={onChange} />
</div>

// Two-column row
<div className="admin-form-row-2">
  <div className="admin-form-group">
    <label className="admin-label">First Field</label>
    <input type="text" className="admin-input" />
  </div>
  <div className="admin-form-group">
    <label className="admin-label">Second Field</label>
    <input type="text" className="admin-input" />
  </div>
</div>

// Status/Featured row (common pattern)
<div className="admin-form-row-2">
  <div className="admin-form-group">
    <label className="admin-label">Status</label>
    <select className="admin-select">
      <option value="draft">Draft</option>
      <option value="published">Published</option>
      <option value="archived">Archived</option>
    </select>
  </div>
  <div className="admin-checkbox-container">
    <input type="checkbox" className="admin-checkbox" id="featured" />
    <label htmlFor="featured" className="admin-label">Featured</label>
  </div>
</div>

// Textarea
<div className="admin-form-group">
  <label className="admin-label">Description</label>
  <textarea className="admin-textarea" rows={4}></textarea>
</div>

// Button bar
<div className="admin-modal-footer">
  <button type="button" className="admin-btn admin-btn-secondary">Cancel</button>
  <button type="submit" className="admin-btn admin-btn-primary">Save</button>
</div>
```

---

## 16. Error Handling & Notification Patterns

This section documents the standard patterns for errors, validation, and notifications.

### 16.1 Toast Notifications

We use `sonner` for toast notifications. Import and use as follows:

```typescript
import { toast } from "sonner";

// Success notification (after create/update/delete)
toast.success("Service created successfully");

// Error notification (API failures)
toast.error("Failed to save. Please try again.");

// Info notification (neutral feedback)
toast.info("Processing your request...");

// Warning notification (non-blocking alerts)
toast.warning("This action cannot be undone");
```

**When to use toasts:**
- After successful CRUD operations
- After API errors
- For temporary status messages
- NOT for field validation errors (use inline errors instead)

### 16.2 Page-Level Error Alerts

For errors that apply to the entire page (e.g., failed to load data):

```jsx
{error && (
  <div className="admin-alert admin-alert-error admin-alert-mb">
    {error}
  </div>
)}
```

**Alert variants:**

| Class | Use Case |
|-------|----------|
| `.admin-alert-success` | Operation completed successfully |
| `.admin-alert-error` | Failed to load data, API errors |
| `.admin-alert-warning` | Non-critical warnings |
| `.admin-alert-info` | Informational messages |

### 16.3 Form Validation Errors

Display field-level validation errors inline below the input:

```jsx
<div className="admin-form-group">
  <label className="admin-label">Email <span className="admin-required">*</span></label>
  <input 
    type="email" 
    className="admin-input" 
    style={{ borderColor: emailError ? 'var(--admin-error)' : undefined }}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  {emailError && (
    <span style={{ color: 'var(--admin-error)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
      {emailError}
    </span>
  )}
</div>
```

**Validation patterns:**
- Check required fields before submission
- Show error text below the specific field
- Add red border to invalid inputs
- Clear errors when user starts typing

### 16.4 Loading States

Show loading state while fetching data:

```jsx
{isLoading ? (
  <div className="admin-loading-state">Loading...</div>
) : (
  <DataTable columns={columns} data={items} />
)}
```

For button loading states:

```jsx
<button 
  className="admin-btn admin-btn-primary" 
  disabled={isSubmitting}
>
  {isSubmitting ? "Saving..." : "Save"}
</button>
```

### 16.5 Empty States

When no data exists:

```jsx
{items.length === 0 && !isLoading && (
  <div className="admin-table-empty">
    No items found. Click "Add" to create your first item.
  </div>
)}
```

### 16.6 Permission Denied Feedback

When user lacks permission for an action:

```typescript
import { toast } from "sonner";

const handleDelete = async () => {
  if (!hasPermission(userRole, 'services', 'delete')) {
    toast.error("You don't have permission to delete services");
    return;
  }
  // proceed with delete...
};
```

### 16.7 Network Error Handling

Standard pattern for handling Supabase errors:

```typescript
const fetchData = async () => {
  setIsLoading(true);
  setError(null);
  
  const { data, error } = await getAllServices();
  
  if (error) {
    setError(error.message || "Failed to load data");
    toast.error("Failed to load services");
  } else {
    setItems(data || []);
  }
  
  setIsLoading(false);
};
```

### 16.8 RLS Error Handling

When RLS policies block an operation:

```typescript
const handleCreate = async (data: ServiceInput) => {
  const { error } = await createService(data);
  
  if (error) {
    if (error.message.includes('row-level security')) {
      toast.error("Permission denied. You may not have access to this action.");
    } else {
      toast.error(`Failed to create: ${error.message}`);
    }
    return;
  }
  
  toast.success("Service created successfully");
  onSuccess();
};
```

---

## 17. V2 Modules Polish Patterns

This section documents the UX patterns implemented during Phase D for V2 modules (Partners, Newsletter, Homepage Blocks).

### 17.1 Toolbar Pattern

All V2 modules use a consistent toolbar above the DataTable:

```css
.admin-toolbar               /* Flex container with gap */
.admin-search                /* Search input wrapper (min 200px, max 300px) */
.admin-filter-pills          /* Filter button group */
```

**Usage:**
```jsx
<div className="admin-toolbar">
  <div className="admin-search">
    <input
      type="text"
      className="admin-input"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  <div className="admin-filter-pills">
    <button className={`admin-btn admin-btn-sm ${filter === "all" ? "admin-btn-primary" : "admin-btn-ghost"}`}>All</button>
    <button className={`admin-btn admin-btn-sm ${filter === "active" ? "admin-btn-primary" : "admin-btn-ghost"}`}>Active</button>
    <button className={`admin-btn admin-btn-sm ${filter === "inactive" ? "admin-btn-primary" : "admin-btn-ghost"}`}>Inactive</button>
  </div>
</div>
```

### 17.2 Enhanced Empty State Pattern

When no data exists, show a descriptive empty state with an action:

```css
.admin-empty-state           /* Centered container with padding */
.admin-empty-state h3        /* Title styling */
.admin-empty-state p         /* Description (muted) */
```

**Usage:**
```jsx
{items.length === 0 ? (
  <div className="admin-card">
    <div className="admin-empty-state">
      <h3>No items yet</h3>
      <p>Description explaining what this module is for.</p>
      <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
        Add First Item
      </button>
    </div>
  </div>
) : filteredItems.length === 0 ? (
  <div className="admin-card">
    <div className="admin-table-empty">No items match your filter.</div>
  </div>
) : (
  <DataTable ... />
)}
```

### 17.3 Error State with Retry Pattern

When data fetching fails, show an actionable error:

```jsx
{error && (
  <div className="admin-alert admin-alert-error admin-alert-mb">
    {error}
    <button 
      className="admin-btn admin-btn-sm admin-btn-ghost" 
      onClick={fetchData} 
      style={{ marginLeft: '1rem' }}
    >
      Retry
    </button>
  </div>
)}
```

### 17.4 Core Block Guardrails (Homepage Blocks)

For critical blocks like `hero` and `cta`:

1. **Visual Badge in Table:**
```jsx
{(value === "hero" || value === "cta") && (
  <span className="admin-badge admin-badge-info">Core</span>
)}
```

2. **Read-Only Key Field in Edit Modal:**
```jsx
<input
  type="text"
  className="admin-input"
  value={formData.key}
  disabled={isCoreBlock}
/>
{isCoreBlock && (
  <span className="admin-helper-text">This is a core block. The key cannot be changed.</span>
)}
```

3. **Strong Delete Warning:**
```jsx
{isCoreBlock ? (
  <DialogDescription>
    <strong style={{ color: 'var(--admin-error)' }}>⚠️ Warning:</strong> 
    Deleting the "{block?.key}" block will break the homepage. Are you absolutely sure?
  </DialogDescription>
) : (
  <DialogDescription>Standard delete confirmation...</DialogDescription>
)}
```

### 17.5 Inline Form Validation Pattern

Add validation with inline error messages:

```typescript
const [errors, setErrors] = useState<{ name?: string; logo_url?: string }>({});

const validate = () => {
  const newErrors: { name?: string; logo_url?: string } = {};
  if (!formData.name.trim() || formData.name.trim().length < 2) {
    newErrors.name = "Name must be at least 2 characters";
  }
  if (!formData.logo_url.match(/^https?:\/\/.+/)) {
    newErrors.logo_url = "Please enter a valid URL";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

**Display inline errors:**
```jsx
<input
  type="text"
  className="admin-input"
  value={formData.name}
  onChange={(e) => {
    setFormData({ ...formData, name: e.target.value });
    if (errors.name) setErrors({ ...errors, name: undefined });
  }}
/>
{errors.name && (
  <span className="admin-helper-text" style={{ color: 'var(--admin-error)' }}>
    {errors.name}
  </span>
)}
```

### 17.6 Console Logging Pattern

All modules should log errors with module-specific tags:

```typescript
if (error) {
  console.error("[PartnersAdminPage] Failed to load partners", error);
  setError(error.message);
}
```

---

## Quick Reference Card

```
BACKGROUNDS:     --admin-bg, --admin-bg-secondary, --admin-bg-tertiary
TEXT:            --admin-text, --admin-text-muted, --admin-text-secondary
BORDERS:         --admin-border, --admin-border-strong
ACCENT:          --admin-accent, --admin-accent-hover, --admin-accent-muted
STATUS:          --admin-success, --admin-warning, --admin-error, --admin-info

BUTTONS:         .admin-btn + .admin-btn-{primary|secondary|ghost|destructive}
BADGES:          .admin-badge + .admin-badge-{success|warning|error|info|default}
INPUTS:          .admin-input, .admin-textarea, .admin-select
LAYOUT:          .admin-card, .admin-table, .admin-modal-form
ICONS:           .admin-icon-{16|20|24}, .admin-icon-{muted|accent}
SETTINGS:        .settings-tabs, .settings-tab, .admin-color-picker-wrapper
TOOLBAR:         .admin-toolbar, .admin-search, .admin-filter-pills
EMPTY STATE:     .admin-empty-state
```
```
