import React from "react";

export default function AddMembers({
  setAddMember,
}: {
  setAddMember: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="hidden md:flex flex-1 h-[90vh] flex-col">
      <section className="bg-white border-b px-4 py-2">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center justify-center gap-2 hover:bg-gray-100 rounded-md p-1"
            onClick={() => setAddMember(false)}
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
                stroke-linejoin="round"
                stroke-width="48"
                d="M328 112L184 256l144 144"
              />
            </svg>
            <p className="text-sm font-bold text-gray-900">Back</p>
          </div>
        </div>
      </section>
      <section className="p-4">
        <p className="text-sm font-bold text-gray-900">Added Members </p>
        <div className="p-4 bg-gray-100 h-40 w-full mt-4 ">
          <div className="flex flex-wrap gap-2">
            <section className="flex gap-1 border rounded-full w-fit h-fit p-1 items-center justify-center hover:bg-gray-200">
              <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-blue-600 rounded-full border">
                <span className="font-semibold text-[8px] text-white">AS</span>
              </div>
              <p className="text-xs font-bold text-gray-900">Emily J</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-blue-700"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </section>
            <section className="flex gap-1 border rounded-full w-fit h-fit p-1 items-center justify-center hover:bg-gray-200">
              <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-yellow-600 rounded-full border">
                <span className="font-semibold text-[8px] text-white">AS</span>
              </div>
              <p className="text-xs font-bold text-gray-900">Emily J</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-blue-700"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </section>
            <section className="flex gap-1 border rounded-full w-fit h-fit p-1 items-center justify-center hover:bg-gray-200">
              <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-orange-600 rounded-full border">
                <span className="font-semibold text-[8px] text-white">AS</span>
              </div>
              <p className="text-xs font-bold text-gray-900">Emily J</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-blue-700"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </section>
            <section className="flex gap-1 border rounded-full w-fit h-fit p-1 items-center justify-center hover:bg-gray-200">
              <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-red-600 rounded-full border">
                <span className="font-semibold text-[8px] text-white">AS</span>
              </div>
              <p className="text-xs font-bold text-gray-900">Emily J</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-blue-700"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </section>
            <section className="flex gap-1 border rounded-full w-fit h-fit p-1 items-center justify-center hover:bg-gray-200">
              <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-black rounded-full border">
                <span className="font-semibold text-[8px] text-white">AS</span>
              </div>
              <p className="text-xs font-bold text-gray-900">Emily J</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-blue-700"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                />
              </svg>
            </section>
          </div>
        </div>
      </section>

      {/* bottom buttons add or cancle */}
      <div className="mt-auto flex items-end gap-4 w-full p-8 justify-end">
        <button
          className="text-sm font-semibold text-gray-900 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-sm w-32"
          onClick={() => setAddMember(false)}
        >
          Cancel
        </button>
        <button className="text-sm font-semibold text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-sm w-32">
          Add
        </button>
      </div>
    </div>
  );
}
