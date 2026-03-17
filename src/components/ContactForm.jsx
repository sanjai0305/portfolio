import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle, XCircle } from 'lucide-react';

function ContactForm() {
  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          setIsSubmitting(false);
          e.target.reset();

          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus('error');
          setIsSubmitting(false);

          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Send a Message
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Have a project or opportunity? Let’s connect.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            {/* Name */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-blue-500">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full pl-12 p-4 bg-slate-50 dark:bg-slate-800 border rounded-xl"
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-blue-500">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full pl-12 p-4 bg-slate-50 dark:bg-slate-800 border rounded-xl"
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <div className="absolute top-4 left-0 pl-4 text-slate-400 group-focus-within:text-blue-500">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full pl-12 p-4 bg-slate-50 dark:bg-slate-800 border rounded-xl"
              />
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition w-full sm:w-auto mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Status */}
            {status === 'success' && (
              <div className="flex justify-center items-center gap-2 text-green-500">
                <CheckCircle /> Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="flex justify-center items-center gap-2 text-red-500">
                <XCircle /> Failed to send message
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactForm;