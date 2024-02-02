import React from "react";

export default function ChatSection() {
  return (
    <div className="hidden md:flex flex-1 h-[90vh] flex-col">
      <section className="bg-white border-b px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-600 rounded-full border">
              <span className="font-semibold text-xs text-white">DT</span>
            </div>
            <p className="text-sm font-bold text-gray-900">
              DFR Team | Liberty Park Estates
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
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
        </div>
      </section>
      <section className="bg-white p-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4">
            <div className="font-medium text-sm border-b-2 border-blue-600 text-blue-600 pb-1">
              Chat
            </div>
            <div className="font-medium text-sm text-gray-800">Files</div>
            <div className="font-medium text-sm text-gray-800">
              Team Members
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1 overflow-y-auto p-4 h-[60vh]">
        <MessageReceive
          name="Emily Johnson"
          date="Apr 17th, 10:32 AM"
          message={["Hello", "Welcome back"]}
        />
        <MessageSend
          message={["Hello", "Welcome back"]}
          date="Apr 17th, 10:33 AM"
        />

        <MessageReceive
          name="David Wilson"
          date="Apr 17th, 10:33 AM"
          message={["Okay"]}
        />
        <MessageSend message={["Looks good!"]} date="Apr 17th, 10:34 AM" />
      </div>
      <div className="pt-2">
        <section className="flex gap-2 flex-grow p-2">
          <div className="p-2 border rounded-sm text-xs text-gray-400 hover:bg-gray-50">
            @Emily J
          </div>
          <div className="p-2 border rounded-sm text-xs text-gray-400 hover:bg-gray-50">
            Sure
          </div>
          <div className="p-2 border rounded-sm text-xs text-gray-400 hover:bg-gray-50">
            Can I send after some time?
          </div>
        </section>
        <div className="flex flex-col bg-white border-t">
          <div className="flex flex-grow text-gray-700 space-x-1 p-1 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-700 w-6 h-6 p-1 hover:bg-gray-100 rounded-sm"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
              <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-700 w-6 h-6 p-1 hover:bg-gray-100 rounded-sm"
            >
              <line x1="19" x2="10" y1="4" y2="4"></line>
              <line x1="14" x2="5" y1="20" y2="20"></line>
              <line x1="15" x2="9" y1="4" y2="20"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-700 w-6 h-6 p-1 hover:bg-gray-100 rounded-sm"
            >
              <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
              <line x1="4" x2="20" y1="20" y2="20"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-700 w-6 h-6 p-1 hover:bg-gray-100 rounded-sm"
            >
              <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
              <path d="M14 12a4 4 0 0 1 0 8H6"></path>
              <line x1="4" x2="20" y1="12" y2="12"></line>
            </svg>
            |
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-700 w-6 h-6 p-1 hover:bg-gray-100 rounded-sm"
            >
              <line x1="8" x2="21" y1="6" y2="6"></line>
              <line x1="8" x2="21" y1="12" y2="12"></line>
              <line x1="8" x2="21" y1="18" y2="18"></line>
              <line x1="3" x2="3.01" y1="6" y2="6"></line>
              <line x1="3" x2="3.01" y1="12" y2="12"></line>
              <line x1="3" x2="3.01" y1="18" y2="18"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-700 w-6 h-6 p-1 hover:bg-gray-100 rounded-sm"
            >
              <line x1="8" x2="21" y1="6" y2="6"></line>
              <line x1="8" x2="21" y1="12" y2="12"></line>
              <line x1="8" x2="21" y1="18" y2="18"></line>
              <line x1="3" x2="3.01" y1="6" y2="6"></line>
              <line x1="3" x2="3.01" y1="12" y2="12"></line>
              <line x1="3" x2="3.01" y1="18" y2="18"></line>
            </svg>
          </div>

          <div className="flex w-full">
            <div className="relative w-full">
              <span className="absolute inset-y-0 right-2 flex items-center">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
                    />
                  </svg>
                </button>
              </span>

              <input
                className="flex h-10 w-full border-y bg-bray-100 py-2 text-xs placeholder:text-gray-500 pr-10 pl-2 text-gray-800 flex-grow px-4"
                placeholder="Enter message"
                type="text"
              />
            </div>

            <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-700 h-10 px-4 py-2 bg-blue-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageReceive({
  name,
  date,
  message,
}: {
  name: string;
  date: string;
  message: string[];
}) {
  return (
    <div className="message-receive-contaner">
      <div className="w-10 h-10">
        <span className="avatar-contaner">
          <span className="avatar-text">
            {name.split(" ").map((txt: string) => txt[0])}
          </span>
        </span>
      </div>

      <div>
        <div className="message-receive-box">
          <p className="message-receive-name">{name}</p>
          <p className="message-receive-text">{message[0]}</p>
        </div>

        {message.splice(1).map((msg: string, i: any) => (
          <div className="message-receive-box" key={i}>
            <p className="message-receive-text">{msg}</p>
          </div>
        ))}
        <div className="message-date">
          <span className="message-date-text">{date}</span>
        </div>
      </div>
    </div>
  );
}

function MessageSend({ message, date }: { message: string[]; date: string }) {
  return (
    <section className="message-send-contaner">
      <div className="message-sexd-box">
        <p className="message-text">{message[0]}</p>
      </div>
      {message.length >= 1 && (
        <>
          {message.splice(1).map((msg: string, i: any) => (
            <div className="message-sexd-box" key={i}>
              <p className="message-text">{msg}</p>
            </div>
          ))}
        </>
      )}
      <div className="message-date">
        <span className="message-date-text">{date}</span>
      </div>
    </section>
  );
}
