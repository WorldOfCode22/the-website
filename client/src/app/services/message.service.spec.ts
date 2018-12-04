import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let Service: MessageService;
  beforeEach(() => {TestBed.configureTestingModule({});
    Service = TestBed.get(MessageService);
  });

  it('should be created', () => {
    expect(Service).toBeTruthy();
  });

  it('should init with blank string', () => {
    expect(Service.Message).toBe('');
  });

  it('should be able to change message', () => {
    Service.Message = 'test';
    expect(Service.Message).toBe('test');
  });

  it('should listen for message changes', () => {
    const EventListener = Service.Listener;
    EventListener.subscribe((val) => {
      expect(val).toBe('tester');
    });
    Service.Message = 'tester';
  });
});
