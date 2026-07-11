import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("The little universe caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-midnight px-6 text-cream">
          <section className="max-w-md rounded-lg border border-sky/25 bg-white/8 p-6 text-center shadow-glow backdrop-blur">
            <p className="font-handwriting text-3xl text-sky">A star flickered.</p>
            <h1 className="mt-3 font-serifSoft text-4xl">Something went softly wrong.</h1>
            <p className="mt-4 text-sm leading-7 text-silver">
              Refresh the page and the universe should gather itself again. Your local progress is kept whenever the browser allows it.
            </p>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
