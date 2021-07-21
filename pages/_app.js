import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto">
      <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
