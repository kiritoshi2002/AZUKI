import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Communication() {
  // const [message, setMessage] = useState('');
  // const [status, setStatus] = useState('');

  // const sendMessage = async (e) => {
  //   const botToken = '7124698944:AAExsPi_b6j0tHjsGQ9I_yT-HnAp6ot5T1o';
  //   const chatId = '1143648407';
  //   const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const [status, setStatus] = useState(""); // For status message in modal
  const [showModal, setShowModal] = useState(false); // For showing/hiding modal

  // Modal close handler
  const handleModalClose = () => setShowModal(false);

  async function sendMessage(e) {
    e.preventDefault(); // Prevent default form submission

    const formData = {
      name: e.target.name.value,
      enterprise: e.target.enterprise.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const msg = `
        Name: ${formData.name}
        Enterprise: ${formData.enterprise}
        Email: ${formData.email}
        Telephone: ${formData.telephone}
        Subject: ${formData.subject}
        Message: ${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7124698944:AAExsPi_b6j0tHjsGQ9I_yT-HnAp6ot5T1o/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "1143648407",
            text: msg,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setShowModal(true);
        console.log("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
        setShowModal(true);
        console.error("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred while sending the message.");
      setShowModal(true);
      console.error("Error:", error);
    }
  }
  // Update your Form component to use handleSubmit

  return (
    <div>
      <div className="bg-black px-3 py-3">
        <div className="h-[750px] flex justify-center items-center lg:px-32 px-5 relative bg-[url('./assets/images/nhere.jpg')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="w-full lg:w-2/3 flex items-center justify-center relative">
            <h1 className="text-white font-semibold text-6xl text-center">
              Communication & Press
            </h1>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto bg-white py-12">
        <div className="flex justify-center">
          <div className="w-full pl-10 max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-35 px-8">
            <div className="col-span space-y-9 pr-1">
              <div>
                <h1 className="text-2xl font-bold">E-Mail</h1>
                <p className="font-semibold text-gray-600">
                  azukirestaurants@gmail.com
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Address</h1>
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
        {/* Centered content */}
        <div className="text-center">
          {/* Top Divider */}
          <div className="flex justify-center flex-col items-center">
            {/* First line */}
            <div className="w-full border-t-4 border-gray-300"></div>
            {/* Spacing */}
            <div className="my-0.5"></div>
            {/* Second line */}
            <div className="w-full border-t-4 border-gray-300"></div>
          </div>

          {/* Text Content */}
          <div className="mt-8">
            <p
              className="font-sans text-lg text-gray-600 mx-auto"
              style={{ fontSize: "20px", width: "83%" }}
            >
              For press releases, photos, marketing and communication actions,
              fill out the form below and we will get back to you.
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="flex justify-center mt-8 flex-col items-center">
            {/* First line */}
            <div className="w-full border-t-4 border-gray-300"></div>
            {/* Spacing */}
            <div className="my-0.5"></div>
            {/* Second line */}
            <div className="w-full border-t-4 border-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto bg-white py-12 px-12">
        <Form onSubmit={sendMessage}>
          {/* Name Field */}
          <div className="mb-4">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" id="name" name="name" />
          </div>

          <div className="mb-4">
            <Form.Label htmlFor="name">ENTERPRISE</Form.Label>
            <Form.Control type="text" id="enterprise" name="enterprise" />
          </div>

          {/* Email and Telephone (Side by Side) */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Email Field */}
            <div className="w-full md:w-1/2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" name="email" />
            </div>

            {/* Telephone Field */}
            <div className="w-full md:w-1/2">
              <Form.Label htmlFor="telephone">Telephone</Form.Label>
              <Form.Control type="tel" name="telephone" />
            </div>
          </div>

          {/* Sector Field */}
          <div className="mb-4">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control type="text" id="subject" name="subject" />
          </div>

          {/* Message Field */}
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
          <Modal
            className="justify-center"
            show={showModal}
            onHide={handleModalClose}
          >
            <Modal.Body className="text-center">
              <p>{status}</p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button variant="info" onClick={handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    </div>
  );
}

export default Communication;
