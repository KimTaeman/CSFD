import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, useRoutes } from 'react-router';
import ErrorLayout from '@/components/layout/error.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';
import { App } from './app';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container not found');
}

const root = (container as any).__reactRoot ?? createRoot(container);
(container as any).__reactRoot = root;

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorLayout}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
);
