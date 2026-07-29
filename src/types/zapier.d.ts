import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'chatbot-id'?: string;
          'is-popup'?: string | boolean;
          height?: string;
          width?: string;
        },
        HTMLElement
      >;
    }
  }
}

// React 18/19 JSX Module Augmentation
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'chatbot-id'?: string;
          'is-popup'?: string | boolean;
          height?: string;
          width?: string;
        },
        HTMLElement
      >;
    }
  }
}
