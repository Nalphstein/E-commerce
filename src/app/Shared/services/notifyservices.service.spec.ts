import { TestBed } from '@angular/core/testing';

import { NotifyservicesService } from './notifyservices.service';

describe('NotifyservicesService', () => {
  let service: NotifyservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
