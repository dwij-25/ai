import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
      <Head>
        <title>AI Test Automation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="glassmorphic-container p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold text-white mb-6">AI Test Automation</h1>
        <p className="text-xl text-white mb-4">
          Generate automated test cases from UI designs, images, PDFs, URLs, or descriptions.
        </p>
        <button className="cyberpunk-button">Get Started</button>
      </main>

      <style jsx>{`
        .glassmorphic-container {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .cyberpunk-button {
          background: linear-gradient(45deg, #ff0066, #ff6600);
          border: none;
          color: white;
          padding: 1rem 2rem;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        .cyberpunk-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255, 0, 102, 0.6);
        }
      `}</style>
    </div>
  );
}