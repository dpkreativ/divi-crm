import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl px-4 md:px-8 py-8 mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
