import { BehaviorSubject, Observable } from 'rxjs';
import { FileService } from '../../core/services/FileService';
import { Property } from "./models";
import { PropertyRepository } from "./propertyRepository";

export interface PropertyManager {
  list: Observable<Property[]>;
  create(property: Property, image: File): Promise<void>;
  update(property: Property): Promise<void>;
  refreshList(): Promise<void>;
}

export class PropertyManagerImpl implements PropertyManager {
  private _list = new BehaviorSubject<Property[]>([]);

  constructor(
    private readonly propertyRepository: PropertyRepository,
    private readonly fileService: FileService,
  ) { }

  list = this._list.asObservable();

  async refreshList(): Promise<void> {
    // throw 'TODO';
  }

  async create(property: Property, image: File): Promise<void> {
    const imageUrl = await this.fileService.create(image);
    property = {
      ...property,
      imageUrl: imageUrl,
    };
    await this.propertyRepository.createOrUpdate(property);
    await this.refreshList();
    throw 'TODO';
  }

  async update(property: Property): Promise<void> {
    console.log('property', property);
    // throw 'TODO';
  }

}