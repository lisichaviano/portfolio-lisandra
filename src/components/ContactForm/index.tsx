const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/mpzvwlld"
      accept-charset="UTF-8"
      encType="multipart/form-data"
      method="POST"
      className="flex flex-col gap-12 md:gap-20 bg-white shadow-lg p-10 md:p-20"
    >
      <div className="flex max-md:flex-col justify-between gap-12 md:gap-20">
        <div className="flex flex-col gap-2 max-md:w-full w-1/2">
          <label htmlFor="name" className="text-md md:text-lg font-questrial">
            Name
          </label>
          <input
            id="name"
            name="Name"
            className="border-b-2 text-md md:text-lg border-transparent font-questrial placeholder:text-neutral-300 border-b-firebrick focus:outline-none"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className="flex flex-col gap-2 max-md:w-full w-1/2">
          <label
            htmlFor="lastname"
            className="textmd md:text-lg font-questrial"
          >
            LastName
          </label>
          <input
            type="text"
            id="lastname"
            name="LastName"
            placeholder="LastName"
            className="border-b-2 font-questrial placeholder:text-neutral-300 text-md md:text-lg border-transparent border-b-firebrick focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <label htmlFor="email" className="text-md md:text-lg font-questrial">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="Email"
          placeholder="Email"
          required
          className="border-b-2 font-questrial placeholder:text-neutral-300 text-md md:text-lg border-transparent border-b-firebrick focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-md md:text-lg font-questrial">
          Message
        </label>
        <textarea
          id="message"
          name="Message"
          placeholder="Message"
          required
          className="border-b-2 font-questrial placeholder:text-neutral-300 text-md md:text-lg border-transparent border-b-firebrick focus:outline-none"
          rows={5}
        />
      </div>
      <div className="flex">
        <button className="text-sm whitespace-nowrap md:text-base font-questrial hover:bg-white hover:text-firebrick hover:border-firebrick font-bold text-white bg-firebrick border-2 border-transparent hover:cursor-pointer rounded-full py-2 px-4">
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
