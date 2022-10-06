import { Property } from "./models";


export const PropertyKeys = {
  tableName: 'properties',
  id: "id",
  name: "name",
};

export class PropertyMapper {
  static toJson(property: Property): Record<string, any> {
    //TODO - create json
    return {
      [PropertyKeys.id]: property.id,
    };
  }

  static fromJson(json: any): Property {
    return {
      id: json[PropertyKeys.id],
      name: json.propertyName,
      owners: json.owners,
      type: json.type,
      size: json.size,
      suites: json.qtyOfSuites,
      buildings: json.totalBulding,
      address: json.address,
      country: json.country,
      city: json.city,
      state: json.state,
      zip: json.zipCode,
    };
  }

}