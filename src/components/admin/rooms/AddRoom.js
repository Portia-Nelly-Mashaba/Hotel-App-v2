import React from 'react'
import { useState } from 'react';

const AddRoom = () => {
  const [activeTab, setActiveTab] = useState("room");

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" role="tablist">
        <li className="me-2">
          <button
            onClick={() => setActiveTab("room")}
            type="button"
            role="tab"
            aria-controls="room"
            aria-selected={activeTab === "room"}
            className={`inline-block p-4 ${activeTab === "room" ? "text-blue-600 rounded-ss-lg dark:text-blue-500" : "hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"}`}
          >
            Hotel Rooms
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setActiveTab("add-room")}
            type="button"
            role="tab"
            aria-controls="add-room"
            aria-selected={activeTab === "add-room"}
            className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Add New Room
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setActiveTab("action")}
            type="button"
            role="tab"
            aria-controls="action"
            aria-selected={activeTab === "action"}
            className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Action
          </button>
        </li>
      </ul>

      <div>
        {activeTab === "room" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" role="tabpanel">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.
            </p>
            <a href="/" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
              Learn more
              <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
              </svg>
            </a>
          </div>
        )}

        {activeTab === "add-room" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" role="tabpanel">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
            <ul role="/" className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">Dynamic reports and dashboards</span>
              </li>
              {/* Repeat other list items as needed */}
            </ul>
          </div>
        )}

        {activeTab === "action" && (
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" role="tabpanel">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col">
                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
              </div>
              {/* Repeat other statistic items */}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddRoom