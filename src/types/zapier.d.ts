// types/zapier.d.ts
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'chatbot-id'?: string;
          'is-popup'?: string;
          height?: string;
          width?: string;
        },
        HTMLElement
      >;
    }
  }
}
