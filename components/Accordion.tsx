"use client";
import React from "react";

export default function Accordion({
  open,
  title,
  notification,
  children,
}: {
  open: boolean;
  title: string;
  notification?: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = React.useState(open);
  return (
    <>
      <section
        className="border-y flex gap-4 items-center justify-between px-4 py-2 hover:bg-gray-200"
        onClick={() => setShow(!show)}
      >
        <div className="accordion-contaner">
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 text-blue-600 ${!show && "rotate-180"}`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"
              />
            </svg>
          </div>

          <div className="accordion-name">{title}</div>
        </div>
        <div className="accordion-contaner">
          {notification && (
            <div className="notification-badge">{notification}</div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-blue-600 w-6 h-6 p-0.5 hover:bg-gray-300 rounded-md"
          >
            <path
              fill="currentColor"
              d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
            />
          </svg>
        </div>
      </section>
      {show && <div>{children}</div>}
    </>
  );
}
