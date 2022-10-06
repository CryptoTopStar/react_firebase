import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "../../config/firebaseConfig";
import { Property } from "./models";
import { PropertyKeys, PropertyMapper } from "./propertyMapper";

export interface PropertyRepository {
  createOrUpdate(property: Property): Promise<void>;
}


export class PropertyRepositoryImpl implements PropertyRepository {
  private _collection = collection(firebaseFirestore, PropertyKeys.tableName);

  async createOrUpdate(property: Property): Promise<void> {
    const path = doc(firebaseFirestore, PropertyKeys.tableName, property.id);
    const data = PropertyMapper.toJson(property);
    await setDoc(path, data);
  }
}