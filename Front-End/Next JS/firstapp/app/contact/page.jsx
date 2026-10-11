import React from "react";
import Navbar from "../header/page";

export default function ContactForm() {

  return (
    <div>
      <Navbar />
      <section className="px-4 md:px-8 mt-6">
        <div className="max-w-6xl max-lg:max-w-2xl mx-auto">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
              Contact us
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Have a question, need support, or want to discuss your next project? We’re here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 items-start gap-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block">Name</label>
                <input type="text" id="name" name="name" placeholder="John doe"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
              </div>
              <div>
                <label htmlFor="email"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 text-slate-900 font-medium text-sm inline-block">Phone
                  number</label>
                <input type="number" id="phone" name="phone" placeholder="+11800-259-854"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
              </div>
              <div>
                <label htmlFor="company"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block">Company</label>
                <input type="text" id="company" name="company" placeholder="XYZ pvt. ltd."
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
              </div>
              <div>
                <label htmlFor="message"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block">Message</label>
                <textarea placeholder="Write message" rows="6" type="text" id="message" name="message"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"></textarea>
              </div>

              <button type="submit"
                className="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Send
                message</button>
            </form>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-12 max-lg:-order-1">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-slate-600" viewBox="0 0 32 32">
                    <path d="M26.69 7.8c-1.97-4.13-6.03-6.74-10.6-6.8C11.51.94 7.45 3.46 5.41 7.6c-2.12 4.29-1.62 9.26 1.32 12.99l7.59 9.64a2.024 2.024 0 0 0 3.18 0l7.79-9.9c2.83-3.6 3.36-8.39 1.4-12.52zm-2.96 11.29-7.83 9.9-7.59-9.64c-2.45-3.11-2.87-7.28-1.1-10.86 1.7-3.44 4.95-5.48 8.71-5.48h.15c3.86.06 7.16 2.17 8.82 5.66s1.23 7.38-1.16 10.42" data-original="#000000" />
                    <path d="M15.91 7.16c-3.01 0-5.46 2.45-5.46 5.46s2.45 5.46 5.46 5.46 5.46-2.45 5.46-5.46-2.45-5.46-5.46-5.46m0 8.91a3.461 3.461 0 0 1 0-6.92 3.461 3.461 0 0 1 0 6.92" data-original="#000000" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-slate-900 text-base font-semibold">Visit office</h3>
                  <p className="text-sm text-slate-600 mt-1"> 123 Main Street, City, Country</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-slate-600"
                    viewBox="0 0 32 32">
                    <path
                      d="M22.56 30a5.2 5.2 0 0 1-2-.41A34.53 34.53 0 0 1 2.4 11.42a5 5 0 0 1 1.06-5.51l3-3a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-1.63 1.65a12.54 12.54 0 0 0 7.07 7.07l1.68-1.67a3 3 0 0 1 4.24 0l3.53 3.53a3 3 0 0 1 0 4.24l-3 3a5 5 0 0 1-3.56 1.5M8.62 4a1 1 0 0 0-.71.29l-3 3a3 3 0 0 0-.64 3.31 32.47 32.47 0 0 0 17.1 17.16 3 3 0 0 0 3.31-.64l3-3a1 1 0 0 0 0-1.42l-3.54-3.53a1 1 0 0 0-1.41 0l-2.12 2.12a1 1 0 0 1-1 .24 14.42 14.42 0 0 1-9.12-9.12 1 1 0 0 1 .24-1l2.12-2.12a1 1 0 0 0 .29-.71 1 1 0 0 0-.29-.7L9.33 4.29A1 1 0 0 0 8.62 4"
                      data-original="#000000" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-slate-900 text-base font-semibold">Call us</h3>
                  <p className="text-sm text-slate-600 mt-1"> +158 996 888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-slate-600"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd"
                      d="M.41 4.747A4.35 4.35 0 0 1 4.76.4h14.488a4.35 4.35 0 0 1 4.35 4.352l-.007 10.109a4.35 4.35 0 0 1-4.35 4.346H13.52a.3.3 0 0 0-.188.07l-4.548 3.84c-1.319 1.113-3.338.176-3.338-1.552v-2.068a.29.29 0 0 0-.29-.29h-.403a4.35 4.35 0 0 1-4.35-4.352zM4.76 2.14a2.61 2.61 0 0 0-2.61 2.608l-.008 10.108a2.61 2.61 0 0 0 2.61 2.611h.403c1.12 0 2.03.91 2.03 2.03v2.068a.29.29 0 0 0 .475.22l4.548-3.839a2.03 2.03 0 0 1 1.31-.479h5.723a2.61 2.61 0 0 0 2.61-2.608l.007-10.108a2.61 2.61 0 0 0-2.61-2.61zm2.128 5.29a.87.87 0 0 1 .87-.87h8.485a.87.87 0 0 1 0 1.74H7.757a.87.87 0 0 1-.87-.87zm0 4.744a.87.87 0 0 1 .87-.87h4.781a.87.87 0 0 1 0 1.74H7.758a.87.87 0 0 1-.87-.87"
                      clipRule="evenodd" data-original="#000000" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-slate-900 text-base font-semibold">Chat to us</h3>
                  <p className="text-sm text-slate-600 mt-1">info@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 fill-slate-600"
                    viewBox="0 0 100 100">
                    <path
                      d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-slate-900 text-base font-semibold">Fax</h3>
                  <p className="text-sm text-slate-600 mt-1">+1-548-2588</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}