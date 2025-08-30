// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { Close, LinkedInIcon } from "../../assets/Svg";
// import { motion } from "framer-motion";

// const LeaveARequest = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => setIsOpen(!open);

//   return (
//     <>
//       <motion.button
//         className="px-4 md:px-15 glass-card text-white rounded-xl py-3 bg-primary-dark text-center font-un-bounded font-medium text-xs"
//         onClick={() => setIsOpen(true)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.2 }}
//       >
//         Leave a request
//       </motion.button>

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-[1000000]" onClose={toggleModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 backdrop-blur-[1px] bg-[#020C1480]" />
//           </Transition.Child>
//           <div className="fixed inset-0 overflow-y-auto ">
//             <div className="flex items-center justify-center min-h-full p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-[440px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all  px-6 py-10 relative">
//                   <section className=" text-center mb-7">
//                     <Dialog.Title
//                       as="h3"
//                       className="font-medium text-primary-dark mb-3"
//                     >
//                       Let's build something awesome!
//                     </Dialog.Title>
//                     <p className="text-sm  ">
//                       Share a few details about your project or challenge below.
//                       If you prefer, contact me on LinkedIn.
//                     </p>
//                     <button
//                       onClick={toggleModal}
//                       className="outline-none bg-primary-extra-light hover:bg-primary-light border border-primary-light p-2 rounded-full absolute top-4 right-4"
//                     >
//                       <Close />
//                     </button>
//                   </section>

//                   <form className="space-y-4">
//                     <div className="font-un-bounded">
//                       <label htmlFor="fullName" className=" text-[10px] ">
//                         Full name*
//                       </label>
//                       <input
//                         type="text"
//                         className="outline-none mt-1 w-full px-4 py-3 border border-primary-light rounded-xl bg-primary-extra-light placeholder:text-primary-medium text-xs "
//                         placeholder="What’s your name?"
//                         required
//                         id="fullName"
//                       />
//                     </div>

//                     <div className="font-un-bounded">
//                       <label htmlFor="email" className=" text-[10px] ">
//                         Email*
//                       </label>
//                       <input
//                         type="email"
//                         className="outline-none mt-1 w-full px-4 py-3 border border-primary-light rounded-xl bg-primary-extra-light placeholder:text-primary-medium text-xs "
//                         placeholder="What’s your name?"
//                         id="email"
//                         autoComplete="email"
//                         required
//                       />
//                     </div>

//                     <div className="font-un-bounded">
//                       <label htmlFor="details" className=" text-[10px] ">
//                         Project details*
//                       </label>
//                       <textarea
//                         name="details"
//                         id="details"
//                         className="outline-none mt-1 w-full px-4 py-3 border border-primary-light rounded-xl bg-primary-extra-light placeholder:text-primary-medium text-xs resize-none h-22"
//                         required
//                         placeholder="Tell me more about your project - Goals, timeline, and any helpful links… Let’s hear it!"
//                       ></textarea>
//                     </div>

//                     <div>
//                       <div className="flex items-center gap-5">
//                         <button className="hover:bg-primary-dark/95 hover:scale-[101%] px-15 w-full text-white rounded-xl h-10 bg-primary-dark text-center font-un-bounded font-medium text-xs">
//                           Submit
//                         </button>

//                         <div>
//                           <a
//                             href="https://www.linkedin.com/in/micheal-francis-frontend-engineer"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label="Connect with me on LinkedIn"
//                             title="LinkedIn Profile"
//                             className="rounded-full border border-primary-dark h-10 w-10 flex items-center justify-center group hover:border-0 transition-colors duration-300 ease-in-out hover:bg-[#0073b1] hover:scale-105"
//                           >
//                             <LinkedInIcon className="group-hover:fill-white " />
//                           </a>
//                         </div>
//                       </div>

//                       <p className="text-primary-medium text-xs text-center mt-2">
//                         By clicking "Submit", you agree to the
//                         Personal Data Processing Policy
//                       </p>
//                     </div>
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// };

// export default LeaveARequest;
