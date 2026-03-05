import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  Loader2,
  CheckCircle,
} from "lucide-react";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden bg-darkBg"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text & Socials */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">
              04. Contact
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Let’s build something <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                meaningful together.
              </span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              I’m currently looking for new opportunities. Whether you have a
              question or just want to say hi, I’ll try my best to get back to
              you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mdshazzadhosenzisan@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                  <Mail
                    className="text-primary group-hover:text-white"
                    size={24}
                  />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">
                    Email Me
                  </p>
                  <p className="text-white font-medium">
                    mdshazzadhosenzisan@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/shazzad-hosen"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Github size={20} className="text-white/70" />
                  <span className="text-white font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shazzadhosen"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Linkedin size={20} className="text-[#0077b5]" />
                  <span className="text-white font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-primary" size={24} />
              <h4 className="text-xl font-bold">Send a Message</h4>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-1">Name</label>
                  <input
                    name="user_name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-1">Email</label>
                  <input
                    name="user_email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-1">Subject</label>
                <input
                  name="subject"
                  required
                  type="text"
                  placeholder="Inquiry about Backend Project"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] ${
                  status === "success"
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-linear-to-r from-primary to-accent text-white hover:brightness-110 shadow-primary/20 disabled:opacity-70"
                }`}
              >
                {status === "idle" && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                )}
                {status === "error" && <>Try Again</>}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-center text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Shazzad Hosen. Built with React &
            Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
