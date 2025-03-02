import React from "react";

function Service() {
  return (
    <div>
      <div className="bg-black px-3 py-3">
        <div className="h-[750px] flex justify-center items-center lg:px-32 px-5 relative bg-[url('./assets/images/nhere.jpg')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="w-full lg:w-2/3 flex items-center justify-center relative">
            <h1 className="text-white font-semibold text-6xl text-center">
              Service
            </h1>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto bg-white py-12">
        <div className="flex justify-center">
          <div className="w-full pl-10 max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-35 px-8">
            <div className="col-span space-y-9 pr-1">
              <div>
                <h1 className="text-2xl font-bold">
                  Lndline : +011-81-3-1234-5678
                </h1>
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  WhatsApp : +81 62386 94085
                </h1>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Address </h1>
                <p className="font-semibold text-gray-600">
                  Japan <br />
                  〒150-0001 Tokyo,
                  <br />
                  Shibuya City
                  <br />
                  Jingumae
                  <br />
                  2 Chome−19−5
                  <br />
                  AZUMAビル地下1階
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Timetables</h1>
                <p className="font-semibold text-gray-600">
                  Opening Hours:
                  <br /> Monday to Saturday from 12 pm to 11 pm <br />
                  Sunday from 12 pm to 5 pm <br />
                  (11)3258-2578 <br /> Fast Food Window:
                  <br /> from 11 am to 11 pm
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/akshay.ashasreekumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl text-blue-600 hover:text-blue-800">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/j.k.d.s_u/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl text-pink-600 hover:text-pink-800">
                    <i className="fab fa-instagram"></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-span-2">
              <iframe
                title="Specific Location Map"
                src="https://maps.google.com/maps?q=35.6733431,139.7103884&z=15&output=embed"
                className="w-full h-[531px]"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
