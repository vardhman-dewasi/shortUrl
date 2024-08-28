import QRCode from 'qrcode.react';

const QRCodeComponent = ({shortenedUrl, urlValue}) => {
  return (
    <div>
      <h2 className='m-4'>QR Code for: {shortenedUrl}</h2>
      <QRCode value={urlValue} />
      
    </div>
  );
};

export default QRCodeComponent;
