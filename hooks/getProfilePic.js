import { storage } from "../firebase/config";

// Define a function that takes a file as input and uploads it to Firebase Storage
const uploadProfilePicture = async (file) => {
  // Get a reference to the Firebase Storage root directory
  const storageRef = storage.ref();

  // Create a child reference to the "profile-pictures" folder and specify the filename
  const fileRef = storageRef.child(`profile-pictures/${file.name}`);

  // Upload the file to Firebase Storage using the put() method
  await fileRef.put(file);

  // Get the download URL for the uploaded file using the getDownloadURL() method
  const url = await fileRef.getDownloadURL();

  // Return the download URL
  return url;
};
