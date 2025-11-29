import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-[600px] mx-auto mt-10">

      <div className="flex bg-gray-200 p-1 rounded-xl">
        
        <button
          onClick={() => setActiveTab("home")}
          className={`flex-1 py-2 rounded-lg transition 
            ${activeTab === "home" ? "bg-blue-600 text-white" : "text-gray-700"}
          `}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("about")}
          className={`flex-1 py-2 rounded-lg transition 
            ${activeTab === "about" ? "bg-blue-600 text-white" : "text-gray-700"}
          `}
        >
          About
        </button>

        <button
          onClick={() => setActiveTab("contact")}
          className={`flex-1 py-2 rounded-lg transition 
            ${activeTab === "contact" ? "bg-blue-600 text-white" : "text-gray-700"}
          `}
        >
          Contact
        </button>
      </div>

      <div className="mt-5 p-5 bg-white shadow rounded-xl">
        
        {activeTab === "home" && (
          <div>
            <h2 className="text-xl font-bold">Home</h2>
            <p className="text-gray-600 mt-2">
              Welcome to the home tab!
            </p>
          </div>
        )}

        {activeTab === "about" && (
          <div>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-gray-600 mt-2">
              This is the about section.
            </p>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="text-gray-600 mt-2">
              You can contact us anytime!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
