import React, { useState } from 'react';

 function Analytics({ shortenedUrl })  {
  const [analyticsData, setAnalyticsData] = useState(null);

  async function getAnalytics(e) {
    e.preventDefault();
    const url = `https://shorturl-xa35.onrender.com/url/analytics/${shortenedUrl}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response) {
        const result = await response.json();
        setAnalyticsData(result);
        console.log('Success:', result);
      } else {
        console.error('Failed to get analytics for shortened URL');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <button onClick={getAnalytics} className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-orange-600 rounded-md">Get Analytics</button>
      {analyticsData && (
        <div>
          <h2>Analytics Data</h2>
          <p>Number of clicks:{JSON.stringify(analyticsData.totalClicks)}</p>
          <p>TimeStamp:{JSON.stringify(analyticsData.analytics)}</p>
        </div>
      )}
    </div>
  );
}
export default Analytics;
