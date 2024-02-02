"use client";
import React from "react";
import Accordion from "@/components/Accordion";
import ChatSection from "@/components/ChatSection";
import Chat from "./Chat";
import AddMembers from "./AddMembers";

export default function Message() {
  const [addMember, setAddMember] = React.useState(false);
  return (
    <main className=" w-full h-screen flex md:justify-end">
      <div className="flex flex-col max-w-4xl w-full">
        <header className="flex items-center justify-between bg-blue-950 p-4 shadow">
          <h1 className="text-lg font-semibold text-white">Messages</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
              className="text-gray-100"
            >
              <path
                fill="currentColor"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
              />
            </svg>
          </div>
        </header>
        <main className="flex-1 flex flex-col md:flex-row flex-grow">
          <aside className="md:max-w-xs w-full flex-1 border-r overflow-y-scroll max-h-full h-[90vh] space-y-2 bg-white">
            <section className="flex items-center justify-center w-full">
              <div className="p-4 pl-1">
                <div className="relative">
                  <span className="absolute inset-y-0 right-2 flex items-center">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-gray-800"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="py-2 text-sm w-full text-gray-700 bg-gray-50 border rounded-sm pr-10 pl-2 focus:outline-none focus:bg-gray-100 focus:text-gray-800"
                    placeholder="Search for Names"
                  />
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-blue-600 w-6 h-6 p-0.5 hover:bg-gray-100 rounded-md"
                onClick={() => setAddMember(!addMember)}
              >
                <path
                  fill="currentColor"
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                />
              </svg>
            </section>
            <nav className="py-2 flex gap-6 items-center justify-start px-6">
              <div className="font-semibold text-sm border-b-2 border-blue-600 text-blue-600 pb-1">
                All
              </div>
              <div className="font-semibold text-sm text-gray-800">Pinned</div>
            </nav>
            <Accordion open={true} title="Direct Messages">
              <section className="flex gap-4 items-center justify-between px-4 py-2 pb-4 hover:bg-blue-100">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gray-600"></span>
                  <p className="text-sm font-bold text-gray-900">Emily J</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-700"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="M33.87 8.32L28 2.42a2.07 2.07 0 0 0-2.92 0L4.27 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0l8.29-1.9l20.78-20.76a2.07 2.07 0 0 0 0-2.92M12.09 30.2l-7.77 1.63l1.77-7.62L21.66 8.7l6 6ZM29 13.25l-6-6l3.48-3.46l5.9 6Z"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-xs text-gray-700 font-medium">
                    April-12-2023
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-auto h-8 text-blue-600"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      d="M16 24a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                    />
                  </svg>
                </div>
              </section>
            </Accordion>

            <section>
              <Accordion open={true} title="Liberty Park Estates">
                <Chat name="DFR Team" date="April-12-2023" />
                <Chat
                  name="Site Safety Team"
                  date="April-12-2023"
                  notification="05"
                />
              </Accordion>
            </section>

            <Accordion open={false} title="SPU Cadder Falls" notification="05">
              <Chat
                name="Site Safety Team"
                date="April-12-2023"
                notification="05"
              />
            </Accordion>
            <Accordion open={false} title="Bridge Repair Over Powell's Creek">
              <Chat name="Site Safety Team" date="April-12-2023" />
            </Accordion>
            <Accordion open={false} title="Administrative Building Repair Work">
              <Chat name="Site Safety Team" date="April-12-2023" />
            </Accordion>
          </aside>
          {addMember ? (
            <AddMembers setAddMember={setAddMember} />
          ) : (
            <ChatSection />
          )}
        </main>
      </div>
    </main>
  );
}
