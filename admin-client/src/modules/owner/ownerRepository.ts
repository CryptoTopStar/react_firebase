import { doc, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "../../config/firebaseConfig";
import { Owner } from "./models";
import { OwnerKeys, OwnerMapper } from "./ownerMapper";

export interface OwnerRepository {
  createOrUpdate(owner: Owner): Promise<void>;
}


export class OwnerRepositoryImpl implements OwnerRepository {
  // private _collection = collection(firebaseFirestore, OwnerKeys.tableName);

  async createOrUpdate(owner: Owner) {
    const data = OwnerMapper.toJson(owner);
    await setDoc(doc(firebaseFirestore, OwnerKeys.tableName, owner.id), data);


    // const owner: Owner = {
    //   name: "",
    //   assignProperties: "",
    //   contactName: "",
    //   mailingAddress: "",
    //   phoneType: "",
    //   phoneNumber: "",
    //   email: "",
    //   assignRole: "",
    //   assignTags: "",
    // }
  }
}