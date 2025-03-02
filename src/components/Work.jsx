import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Work() {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState();
  const [status, setStatus] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleModalClose = () => {};

  const handleSubmit = async (e) => {
    const formBody = new FormData();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
      sector: e.target.sector.value,
      message: e.target.message.value,
    };

    const captionmsg = `
Name: ${formData.name}
Email: ${formData.email}
Telephone: ${formData.telephone}
Sector: ${formData.sector}
Message: ${formData.message}
`;
    e.preventDefault();

    if (!file) {
      setStatus("Please select a file first.");
      return;
    }

    const botToken = "7124698944:AAExsPi_b6j0tHjsGQ9I_yT-HnAp6ot5T1o"; //  bot token
    const chatId = "1143648407";
    formBody.append("document", file);
    formBody.append("caption", captionmsg); // Add caption to the form data
    formBody.append("chat_id", chatId); // Add chat_id to the form data

    try {
      setStatus("Sending...");
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendDocument`,
        {
          method: "POST",
          body: formBody,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("File sent successfully!");
        setShowModal(true);
        console.log(`File sent successfully! as 
          ${captionmsg}`);
      } else {
        setStatus(`Failed to send file: ${data.description}`);
        setShowModal(true);
        console.log(`Failed to send file: ${data.description}`);
      }
    } catch (error) {
      setStatus("Failed to send file.");
      setShowModal(true);
      console.error(error);
    }
  };
  return (
    <div>
      <div className="bg-black px-3 py-3">
        <div className="h-[750px] flex justify-center items-center lg:px-32 px-5 relative bg-[url('./assets/images/nhere.jpg')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="w-full lg:w-2/3 flex items-center justify-center relative">
            <h1 className="text-white font-semibold text-6xl text-center">
              Work with us
            </h1>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto bg-white py-12">
        <div className="flex justify-center">
          <div className="w-full pl-10 max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-35 px-8">
            <div className="col-span space-y-9 pr-1">
              <div>
                <h1 className="text-2xl font-bold">+011-81-3-1234-5678</h1>
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

      <div className="w-4/5 mx-auto bg-white py-12">
        <div className="text-center">
          <div className="flex justify-center flex-col items-center">
            <div className="w-full border-t-4 border-gray-300"></div>

            <div className="my-0.5"></div>

            <div className="w-full border-t-4 border-gray-300"></div>
          </div>

          <div className="mt-8">
            <p
              className="font-sans text-lg text-gray-600 mx-auto"
              style={{ fontSize: "20px", width: "83%" }}
            >
              Want to be part of our team? Fill out the form below and send your
              CV and our HR will contact you when there are vacancies available.
            </p>
          </div>

          <div className="flex justify-center mt-8 flex-col items-center">
            <div className="w-full border-t-4 border-gray-300"></div>

            <div className="my-0.5"></div>

            <div className="w-full border-t-4 border-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto bg-white py-12 px-12">
        <Form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
              />
            </div>

            <div className="w-full md:w-1/2">
              <Form.Label htmlFor="telephone">Telephone</Form.Label>
              <Form.Control
                type="tel"
                id="telephone"
                placeholder="Enter your telephone number"
                name="telephone"
              />
            </div>
          </div>

          <div className="mb-4">
            <Form.Label htmlFor="sector">Sector</Form.Label>
            <Form.Control
              type="text"
              id="sector"
              placeholder="Enter the sector"
              name="sector"
            />
          </div>

          <div className="mb-4">
            <Form.Label htmlFor="cv">Attach CV</Form.Label>
            <Form.Control
              type="file"
              id="cv"
              placeholder="Choose file"
              onChange={handleFileChange}
              required
            />
            <br></br>
          </div>

          <div className="mb-4">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              rows={16}
              placeholder="Enter your message"
              name="message"
            />
          </div>
          <div className="mb-4">
            <Button className="text-white" variant="info" type="submit">
              SUBMIT
            </Button>
          </div>
        </Form>
      </div>
      <Modal
        className="justify-center"
        show={showModal}
        onHide={handleModalClose}
      >
        <Modal.Body className="text-center">
          <p>{status}</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="info" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Work;
