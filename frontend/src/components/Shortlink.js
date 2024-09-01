import QRCodeComponent from './QRcode';

export default function shortlink({shortenedUrl, urlValue ,setShortenedUrl, setUrlValue}){

function urlChangeHandle(e) {
    setUrlValue(e.target.value);
  }
  
  async function handleSubmitUrl(e) {
    e.preventDefault();
    const url = 'https://shorturl-xa35.onrender.com/url/create';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlValue }),
      });
      
      if (response.ok) {
        const result = await response.json();
        setShortenedUrl(result.res); // Update state with the shortened URL
        // console.log('Success:', shortenedUrl);
      } else {
        console.error('Failed to shorten the URL');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row text-left ml-64'>
        <div className='mt-20 w-1/2'>
          <h1 className='p1'>Build stronger digital connections</h1>
          <p className='text-xl'>
            Use our URL shortener, QR Codes, and Link-in-bio pages to engage your audience and connect them to the right information.
            Build, edit, and track everything inside the ShortUrl Connections Platform.
          </p>
          <button type="button" className="inline-flex items-center justify-center px-6 py-4 mt-12 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">
            Get Started For Free
          </button>
        </div>

        <div className='w-1/2 mt-0 pt-0 mr-0'>
          <img src='https://docrdsfx76ssb.cloudfront.net/static/1712086357/pages/wp-content/uploads/2024/02/11.15_hero_mobile@2x.png' alt="Hero" />
        </div>
      </div>

      <div>
        <p className='paramain'>Great connections start with a click</p>
        <p className='paramain1'>Sign up for a free account</p>
      </div>

      {/* shortener input field */}
      <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8 mb-4">
        <p className="text-xl font-bold tracking-widest text-green-600">Shorten a Long Link</p>

        <form onSubmit={handleSubmitUrl} className="mt-6">
          <div>
            <label htmlFor="url" className="sr-only">link</label>
            <input
              type=""
              name="url"
              id="url"
              placeholder="Enter a Link to shorten it"
              className="w-2/3 p-4 text-black transition-all duration-200 bg-white border border-black rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
              value={urlValue}
              onChange={urlChangeHandle}
              required
            />
          </div>

          <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md">
            Shorten URL
          </button>
        </form>

        {shortenedUrl && (
          <div>
            <p className="text-lg font-medium text-red-500">Shortened URL: `http://localhost:4000/url/{shortenedUrl}`</p>
          </div>
        )
        }
        
        {
        shortenedUrl ? 
         (<QRCodeComponent shortenedUrl = {shortenedUrl} urlValue = {urlValue} />) : (<h1>Qrcode does not generated</h1>)
        }
      </div>
      </div>
      )
    }
