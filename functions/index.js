/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
initializeApp();

exports.validateFile = onCall(
  {
    region: "europe-central2",
    cors: {
      origin: ["http://localhost:5173"], // or '*' for dev
      methods: ["POST", "OPTIONS"],
      // credentials: true, // if needed
    },
  },
  (request) => {
    const { fileName } = request.data;
    console.log("Received fileName:", fileName);

    if (!fileName) {
      throw new HttpsError("invalid-argument", "File name is missing.");
    }

    const extension = fileName.split(".").pop().toLowerCase();
    const VALID_FORMATS = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "webp",
      "tiff",
      "mp4",
      "mov",
      "avi",
      "mkv",
      "webm",
      "wmv",
      "pdf",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "ppt",
      "pptx",
      "txt",
      "csv",
      "rtf",
      "odt",
      "ods",
      "odp",
    ];

    if (!VALID_FORMATS.includes(extension)) {
      throw new HttpsError(
        "invalid-argument",
        `Unsupported file format: ${extension}`
      );
    }

    console.log(`File "${fileName}" is valid.`);
    return { success: true };
  }
);
