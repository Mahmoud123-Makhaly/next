"use client";
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <p>{error.message}</p>
      <h2 className="text-red-400">Something went wrong!</h2>
      <button
        className="bg-indigo-400 text-xl text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};
export default ErrorBoundary;
