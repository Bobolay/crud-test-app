import { TestBed } from '@angular/core/testing';

import { EditPageResolver } from './edit-page.resolver';

describe('EditPageResolver', () => {
  let resolver: EditPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
