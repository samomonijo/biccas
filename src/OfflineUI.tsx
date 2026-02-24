const OfflineUI = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        You&apos;re offline!
      </h1>

      <p className="text-gray-600 mb-6 max-w-xl">
        Please check your internet connection. The page will reload
        automatically once you&apos;re back online.
      </p>

      <div className="animate-pulse text-blue-600 font-semibold">
        Waiting for connection...
      </div>
    </div>
  );
};

export default OfflineUI;