import { BehaviorSubject, Observable } from 'rxjs';
import { Owner } from "./models";
import { OwnerRepository } from "./ownerRepository";

export interface OwnerManager {
  list: Observable<Owner[]>;
  create(owner: Owner): void;
  update(owner: Owner): void;
}

export class OwnerManagerImpl implements OwnerManager {
  private _list = new BehaviorSubject<Owner[]>([]);

  constructor(
    private readonly OwnerRepository: OwnerRepository,
  ) { }

  list = this._list.asObservable();

  create(owner: Owner) {
    this.OwnerRepository.createOrUpdate(owner);
    // TODO - update list
  }

  update(owner: Owner) {
    console.log('owner', owner);
  }

}