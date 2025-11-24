import HomeButton from "@/components/HomeButton";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <HomeButton />
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-4">
        Feedbacks are appreciated! If you have found a bug, have a suggestion, or want to report incorrect data, please reach out to me. This is a solo project and your feedback keeps it going.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mt-6">
        <h2 className="font-semibold mb-2">Email Support</h2>
        <p>
          <a href="mailto:feedback@cashoutcalc.tech" className="text-blue-600 hover:underline">feedback@cashoutcalc.tech</a>
        </p>
      </div>
      <Footer />
    </main>
  );
}