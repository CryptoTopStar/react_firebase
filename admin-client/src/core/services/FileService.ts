import { ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "../../config/firebaseConfig";

export interface FileService {
  create(file: File): Promise<string>;
}

export class FileServiceImpl implements FileService {

  async create(file: File): Promise<string> {
    const uniqueName = `${new Date().getMilliseconds()}_${file.name}`;
    const fileRef = ref(firebaseStorage, uniqueName);
    const result = await uploadBytes(fileRef, file);
    return result.ref.fullPath;
  }
}
