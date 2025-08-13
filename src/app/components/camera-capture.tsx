
"use client"

import { useRef, useState, useCallback } from "react"
import { Camera, X, RotateCcw, Check } from "lucide-react"

interface CameraCaptureProps {
  onCapture: (file: File) => void
  onClose: () => void
}

export default function CameraCapture({ onCapture, onClose }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const startCamera = useCallback(async () => {
    try {
      setError(null)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // Use back camera on mobile
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })

      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsStreaming(true)
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
      setError("Tidak dapat mengakses kamera. Pastikan Anda memberikan izin kamera.")
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setIsStreaming(false)
  }, [])

  const capturePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    if (!context) return

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    // Convert canvas to blob then to file
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], `camera-photo-${Date.now()}.jpg`, {
            type: "image/jpeg",
          })

          // Create preview URL
          const imageUrl = URL.createObjectURL(blob)
          setCapturedImage(imageUrl)

          // Stop camera after capture
          stopCamera()
        }
      },
      "image/jpeg",
      0.8,
    )
  }, [stopCamera])

  const confirmCapture = useCallback(() => {
    if (!canvasRef.current) return

    canvasRef.current.toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], `camera-photo-${Date.now()}.jpg`, {
            type: "image/jpeg",
          })
          onCapture(file)
          onClose()
        }
      },
      "image/jpeg",
      0.8,
    )
  }, [onCapture, onClose])

  const retakePhoto = useCallback(() => {
    setCapturedImage(null)
    if (capturedImage) {
      URL.revokeObjectURL(capturedImage)
    }
    startCamera()
  }, [capturedImage, startCamera])

  // Start camera when component mounts
  useState(() => {
    startCamera()
    return () => {
      stopCamera()
      if (capturedImage) {
        URL.revokeObjectURL(capturedImage)
      }
    }
  })

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Ambil Foto</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <div className="relative">
          {!capturedImage ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-64 bg-gray-200 rounded object-cover"
              />
              {isStreaming && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button onClick={capturePhoto} className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-50">
                    <Camera size={24} className="text-gray-700" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <img
                src={capturedImage || "/placeholder.svg"}
                alt="Captured"
                className="w-full h-64 bg-gray-200 rounded object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button onClick={retakePhoto} className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50">
                  <RotateCcw size={20} className="text-gray-700" />
                </button>
                <button onClick={confirmCapture} className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600">
                  <Check size={20} className="text-white" />
                </button>
              </div>
            </>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />

        {!isStreaming && !capturedImage && !error && (
          <div className="flex justify-center mt-4">
            <button onClick={startCamera} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Mulai Kamera
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
