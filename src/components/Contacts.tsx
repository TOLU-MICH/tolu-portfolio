import contactImage from "../assets/images/contact.gif";
import { LinkedInIcon, MailIcon, XIcon } from "../assets/Svg";
import LeaveARequest from "./modals/LeaveARequest";

const Contacts = () => {
  return (
    <div
      className="grid col-span-1 lg:grid-cols-4  gap-4 lg:gap-7 py-7 lg:py-15  relative"
      id="contact-me"
    >
      <div className="col-span-1 lg:sticky lg:top-36 lg:h-fit">
        <h2 className="font-medium text-2xl mb-2">Contacts</h2>
      </div>
      <div className="col-span-1 lg:col-span-3  bg-primary-light rounded-2xl overflow-hidden xl:p-15 p-10 sm:p-14">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="space-y-9  md:order-first order-last">
            <h4 className="font-medium text-primary-dark ">
              You’ve got a challenge? Let's talk!
            </h4>

            <p className="text-black text-sm">
              Drop me a request on the website or reach out via WhatsApp,
              Twitter, LinkedIn—whatever works best for you. Let’s create
              something amazing together!
            </p>

            <div className="flex flex-col xl:flex-row  gap-5">
              <LeaveARequest />
              <span className="flex  gap-5">
                <a
                  href="https://www.linkedin.com/in/micheal-francis-frontend-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                  title="LinkedIn Profile"
                  className="rounded-full border border-primary-dark h-10 w-10 flex items-center justify-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-[#0073b1] hover:scale-105"
                >
                  <LinkedInIcon className="group-hover:fill-white " />
                </a>
                <a
                  aria-label="Follow me on Twitter/X"
                  title="Twitter/X Profile"
                  href="https://x.com/tolu_mich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary-dark h-10 w-10 flex justify-center items-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-black hover:scale-105"
                >
                  <XIcon className="group-hover:fill-white w-5 h-5" />
                </a>
                <a
                  aria-label="Send me an email"
                  title="Email Me"
                  href="mailto:francismicheal609@gmail.com"
                  className="rounded-full border border-primary-dark h-10 w-10 flex justify-center items-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-black hover:scale-105"
                >
                  <MailIcon className="w-5 h-5 group-hover:fill-white " />
                </a>
              </span>
            </div>
          </div>

          <div>
            <img
              src={contactImage}
              alt="contact illustration"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
