import ContactMe from "../components/homeComponents/ContactMe";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-10 md:py-16 px-4">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-8">
        Contact With Me
      </h1>
      <ContactMe></ContactMe>
    </div>
  );
};

export default ContactPage;
