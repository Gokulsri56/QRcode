import React, { useState } from "react";

export const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("https://itzgokul.ccbp.tech/");
    const [qrSize, setQrSize] = useState("150");

    async function generateQR() {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error('Error generating QR code:', error);
        } finally {
            setLoading(false);
        }
    }

    function downloadQR() {
        fetch(img)
            .then((res) => res.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "qrcode.png");
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch((error) => {
                console.error('Error downloading QR code:', error);
            });
    }

    return (
        <div className='app-container'>
            <h1>QR CODE GENERATOR</h1>
            {loading && <p>Please Wait...</p>}
            {img && <img src={img} alt="QR Code" className="img" />}
            <div>
                <label htmlFor="dataInput" className="input-label">
                    Data for QR code:
                </label>
                <input
                    type="text"
                    id="dataInput"
                    placeholder="Enter data for QR code"
                    value={qrData}
                    onChange={(e) => setQrData(e.target.value)}
                />
               
              
                <button className="Generate" onClick={generateQR}>
                    Generate QR Code
                </button>
                <button className="Download" onClick={downloadQR}>
                    Download QR Code
                </button>
            </div>
        </div>
    );
};
