import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(className)}
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn("sm:rounded-lg", className)}
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 200,
        display: 'grid',
        width: '100%',
        maxWidth: '32rem',
        maxHeight: '85vh',
        overflowY: 'auto',
        gap: '1rem',
        padding: '1.5rem',
        backgroundColor: 'var(--admin-bg-secondary, #1a1a2e)',
        color: 'var(--admin-text, #ffffff)',
        border: '1px solid var(--admin-border, rgba(255,255,255,0.1))',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRadius: '0.5rem',
      }}
      {...props}
    >
      {children}
      <DialogPrimitive.Close 
        style={{
          position: 'absolute',
          right: '1rem',
          top: '1rem',
          opacity: 0.7,
          borderRadius: '0.125rem',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          color: 'inherit',
          padding: '0.25rem',
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
      >
        <X className="h-4 w-4" style={{ width: '1rem', height: '1rem' }} />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(className)} 
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
      textAlign: 'left',
      ...style,
    }}
    {...props} 
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(className)} 
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: '0.5rem',
      ...style,
    }}
    {...props} 
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, style, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(className)}
    style={{
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '-0.025em',
      ...style,
    }}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, style, ...props }, ref) => (
  <DialogPrimitive.Description 
    ref={ref} 
    className={cn(className)} 
    style={{
      fontSize: '0.875rem',
      color: 'var(--admin-text-muted, rgba(255,255,255,0.6))',
      ...style,
    }}
    {...props} 
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
