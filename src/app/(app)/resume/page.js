// app/page.jsx
'use client';

export default function ResumePage() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Resume PDF Viewer - Smaller and Centered */}
            <main className="flex-1 w-full flex items-center justify-center p-6">
                <div className="w-full max-w-3xl">
                    <iframe
                        src="https://drive.google.com/file/d/1e20HvEvFgmiDet3XB-PkyvMTN4qovVDa/preview"
                        className="w-full h-[600px] border border-gray-200 rounded-lg shadow-lg"
                        title="Resume - Priyansh Nigam"
                        loading="lazy"
                        allow="autoplay"
                    />
                </div>
            </main>
        </div>
    );
}
