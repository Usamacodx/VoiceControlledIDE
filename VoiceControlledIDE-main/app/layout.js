import './globals.css';
import React from 'react';
import {LoggerProvider} from './context/LoggerContext';
import {OutputProvider} from './context/OutputContext';

export const metadata = {
  title: 'Voice-Controlled IDE',
  description: 'An IDE that can be controlled with voice commands',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <OutputProvider>
          <LoggerProvider>
            {children}
          </LoggerProvider>
        </OutputProvider>
      </body>
    </html>
  );
}
