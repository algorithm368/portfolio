import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Header from "./commons/Header";
import Section from "./commons/Section";

interface ContactProps {
  readonly darkMode: boolean;
}

function Contact({ darkMode }: ContactProps) {
  return (
    <Section id="contact" darkMode={darkMode} pattern="odd">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Header
          darkMode={darkMode}
          text="Contact"
          subText="I'm always open to discussing new opportunities and exciting projects."
        />

        <div className="grid md:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div
                className={`p-4 ${
                  darkMode ? "bg-emerald-400/10" : "bg-emerald-50"
                }`}
              >
                <Mail
                  className={`w-6 h-6 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`font-normal mb-2 ${
                    darkMode ? "text-gray-200" : "text-stone-700"
                  }`}
                >
                  Email
                </h3>
                <a
                  href="mailto:siriwat.chr@gmail.com"
                  className={`font-light ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-700"
                  } transition-colors duration-300`}
                >
                  siriwat.chr@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div
                className={`p-4 ${
                  darkMode ? "bg-emerald-400/10" : "bg-emerald-50"
                }`}
              >
                <Phone
                  className={`w-6 h-6 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`font-normal mb-2 ${
                    darkMode ? "text-gray-200" : "text-stone-700"
                  }`}
                >
                  Phone
                </h3>
                <a
                  href="tel:061-361-3628"
                  className={`font-light ${
                    darkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-700"
                  } transition-colors duration-300`}
                >
                  061-361-3628
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div
                className={`p-4 ${
                  darkMode ? "bg-emerald-400/10" : "bg-emerald-50"
                }`}
              >
                <MapPin
                  className={`w-6 h-6 ${
                    darkMode ? "text-emerald-400" : "text-emerald-600"
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`font-normal mb-2 ${
                    darkMode ? "text-gray-200" : "text-stone-700"
                  }`}
                >
                  Location
                </h3>
                <p
                  className={`font-light ${
                    darkMode ? "text-gray-400" : "text-stone-500"
                  }`}
                >
                  Mueang Phitsanulok District
                  <br />
                  Phitsanulok 65000
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3
                className={`font-normal mb-6 ${
                  darkMode ? "text-gray-200" : "text-stone-700"
                }`}
              >
                Connect
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/algorithm368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 transition-all duration-300 hover:transform hover:scale-110 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-600"
                  }`}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/siriwat-chairak-341602344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 transition-all duration-300 hover:transform hover:scale-110 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-600"
                  }`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Zen Quote/Message */}
          <div
            className={`p-12 ${darkMode ? "bg-gray-800/50" : "bg-stone-50"}`}
          >
            <div className="text-center">
              <div
                className={`text-6xl font-extralight mb-8 opacity-20 ${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                道
              </div>
              <p
                className={`text-lg font-light leading-relaxed italic ${
                  darkMode ? "text-gray-300" : "text-stone-600"
                }`}
              >
                "The way is not in the sky.
                <br />
                The way is in the heart."
              </p>
              <div
                className={`w-12 h-1 mx-auto mt-8 ${
                  darkMode ? "bg-emerald-400" : "bg-emerald-500"
                }`}
              ></div>
              <p
                className={`mt-6 font-light ${
                  darkMode ? "text-gray-400" : "text-stone-500"
                }`}
              >
                Let's create something meaningful together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
