export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl">Page not found</p>
        <a href="/" className="text-blue-500 underline mt-4 block">Back to home</a>
      </div>
    </div>
  );
}
