import React from "react";

export default function SaveProfileButton({ saveUserData }) {
  return (
    <button className="save-button" onClick={saveUserData}>
      Save My Information
    </button>
  );
}
