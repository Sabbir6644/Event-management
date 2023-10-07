

const Contact = () => {
     return (
          <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-6">
            Have questions or want to collaborate on a health event? We'd love to hear from you!
            Feel free to reach out through the contact information below or by filling out the form.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Contact Information</h2>
              <p className="text-lg mb-2">
                <strong>Health Care Ltd</strong>
              </p>
              <p className="text-lg mb-2">123 Wellness Way</p>
              <p className="text-lg mb-2">Healthville, HV 12345</p>
              <p className="text-lg mb-2">Phone: (123) 456-7890</p>
              <p className="text-lg mb-2">Email: info@healthcareagency.com</p>
            </div>
            <form className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input type="text" id="name" name="name" className="border p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input type="email" id="email" name="email" className="border p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium">Message</label>
                <textarea id="message" name="message" className="border p-2 w-full h-40" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
     );
};

export default Contact;