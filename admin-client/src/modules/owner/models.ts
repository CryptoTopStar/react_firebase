export interface Owner {
  id: string;
  name: string;
  assignProperties: string;
  contactName: string;
  mailingAddress: string;
  phoneType: PhoneType;
  phoneNumber: number;
  email: string;
  assignRole: AssignType;
  assignTags: AssignTags;
}

export enum PhoneType {
  cell,
  mobile
}

export enum AssignType {
  owner,
  manager,
  accounting
}

export enum AssignTags {
  tags = "tags"
}


