import React from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch React errors and display fallback UI
 * Prevents the entire app from crashing when an error occurs
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught an error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-screen bg-[#05050d] flex items-center justify-center">
          <div className="text-center px-6 py-12 max-w-md">
            <div className="text-cyan-400 text-8xl mb-4">⚠️</div>
            <h1 className="text-cyan-400 text-4xl font-bold mb-4">
              Algo deu errado
            </h1>
            <p className="text-gray-300 mb-6">
              Desculpe, ocorreu um erro inesperado. Tente recarregar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded transition-colors cursor-pointer"
            >
              Recarregar Página
            </button>
            {import.meta.env.DEV && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-gray-400 text-xs hover:text-gray-300">
                  Detalhes do erro
                </summary>
                <pre className="bg-gray-900 p-3 rounded mt-2 text-red-400 text-xs overflow-auto max-h-40">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
