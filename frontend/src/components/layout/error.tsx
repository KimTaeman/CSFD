import React from 'react';

interface ErrorLayoutProps {
  error: Error;
  resetErrorBoundary: any;
}

function ErrorLayout({ error, resetErrorBoundary }: ErrorLayoutProps) {
  if (!import.meta.env.DEV) {
    return (
      <div className="animate-in flex min-h-svh flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">CSFD 2025</h1>
          <div className="my-8 space-y-4">
            <h2 className="font-semibold">Something went wrong!</h2>
            <p>Please try again later or contact staff/administrator.</p>
            <button className="w-full bg-gray-800 hover:bg-gray-900 rounded text-white px-4 py-2 cursor-pointer" onClick={resetErrorBoundary}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in flex min-h-svh flex-col items-center justify-center text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">CSFD 2025</h1>
        <div className="my-8 space-y-4">
          <div className="space-y-4">
            <span className="font-semibold">The following error has occurred:</span>{' '}
            <pre className="mt-2 text-red-500">{error.message}</pre>
          </div>
          <pre className="w-full max-w-screen overflow-x-auto rounded bg-gray-50 p-4 text-start">
            {error.stack}
          </pre>
          <button className="w-full bg-gray-800 hover:bg-gray-900 rounded text-white px-4 py-2 cursor-pointer" onClick={resetErrorBoundary}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorLayout;
