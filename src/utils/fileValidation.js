const VALID_FORMATS = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "tiff", // Images
  "mp4",
  "mov",
  "avi",
  "mkv",
  "webm",
  "wmv", // Videos
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx", // Documents
  "txt",
  "csv",
  "rtf",
  "odt",
  "ods",
  "odp", // Other documents
];

/**
 * Function to check if a file has a valid format
 * @param {string} fileName - The name of the file to validate
 * @returns {boolean} - Returns true if the file format is valid, otherwise false
 */
export function isValidFileType(fileName) {
  const extension = fileName.split(".").pop().toLowerCase();
  return VALID_FORMATS.includes(extension);
}
