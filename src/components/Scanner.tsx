import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

const Scanner = () => {
  const navigate = useNavigate();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const webcamRef = React.useRef<Webcam>(null);

  const videoConstraints = {
    facingMode: { ideal: 'environment' } // Prefer rear camera on phones
  };

  const handleCapture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      // TODO: Send image to OCR service
      console.log('Captured image:', imageSrc);
      // For now, just navigate back to pantry
      navigate('/');
    }
  }, [webcamRef, navigate]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Scan Items</h1>
      
      {!isCameraActive ? (
        <div className="space-y-4">
          <button
            onClick={() => setIsCameraActive(true)}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Camera
          </button>
          <p className="text-gray-600 text-center">
            Use your camera to scan receipts or product labels
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden bg-black">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="w-full"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleCapture}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Capture
            </button>
            <button
              onClick={() => setIsCameraActive(false)}
              className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Stop Camera
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => navigate('/')}
        className="mt-8 w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Back to Pantry
      </button>
    </div>
  );
};

export default Scanner; 