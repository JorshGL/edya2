import { firebaseStorage } from "./../firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

export const useFirebaseStorage = () => {
  const upload = async (file) => {
    const storageRef = ref(firebaseStorage, uuid());
    const uploadTask = await uploadBytes(storageRef, file);
    return await getDownloadURL(uploadTask.ref);
  };

  return {
    upload
  };
}