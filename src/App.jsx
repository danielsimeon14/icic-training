import { useState } from "react";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import "./app.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      alert("Please fill all fields");
      return;
    }

    const message = `Hello, I just registered for the church training.
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}. I would like to make payment and send proof.`;

    const whatsappUrl = `https://wa.me/2349035987953?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className="bg-gray-50 min-h-screen max-w-7xl mx-auto ">
      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center rounded-b-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Workers Training Conference 2026
        </h1>
        <p className="max-w-xl mx-auto text-lg text-blue-100 mb-6">
          Be equipped for ministry, connect with fellow ministers, and grow
          under seasoned men of God.
        </p>

        <a href="#register">
          <button className="bg-white text-blue-900 px-3 py-3 rounded-full font-semibold shadow-md hover:translate-y-1 transition">
            Register Now
          </button>
        </a>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why You Should Attend
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Connect with fellow ministers",
            "Learn from experienced and seasoned men of God",
            "Receive a certificate of participation",
            "Get equipped for effective ministry",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-[1.o4] hover:translate-y-1"
            >
              <p className="text-lg font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENT */}
      <section className="bg-white py-12 px-6 max-w-xl mx-auto rounded-2xl shadow-md mb-12">
        <h3 className="text-xl font-bold mb-4">Payment Details</h3>
        <p>Bank: Access Bank</p>
        <p>Amount: N10, 000</p>
        <p>Account Number: 1234567890</p>
        <p>Account Name: Church Ministry</p>

        <p className="mt-4 text-sm text-gray-700">
          After payment, you will be redirected to WhatsApp to send proof.
        </p>
      </section>

      {/* FORM */}
      <section id="register" className="pb-20 px-6">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
            Register Now
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <button className="w-full bg-blue-900  text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Register & Continue
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
