import { Owner } from "./models";

export const OwnerKeys = {
  tableName: 'owners',
  id: "id",
  name: "name",
}

export class OwnerMapper {

  static toJson(owner: Owner): Record<string, any> {
    return {
      [OwnerKeys.id]: owner.id,
      [OwnerKeys.name]: owner.name,
    };
  }

  static fromJson(json: any): Owner {
    return {
      id: json[OwnerKeys.id],
      name: json[OwnerKeys.name],
      assignProperties: json.assignProperties,
      contactName: json.contactName,
      mailingAddress: json.mailingAddress,
      phoneType: json.phoneType,
      phoneNumber: json.phoneNumber,
      email: json.email,
      assignRole: json.assignRole,
      assignTags: json.assignTags
    };
  }

}
