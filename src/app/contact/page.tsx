import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="responsive-width flex flex-col justify-center bg-thistle">
      <div className="flex gap-2 items-center justify-center">
        <div className="bg-firebrick w-3 h-3 md:w-5 md:h-5 overflow-hidden" />
        <p className="text-2xl md:text-4xl my-6 font-bold">CONTACT ME</p>
      </div>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
