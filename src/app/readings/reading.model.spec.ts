import { Reading } from './reading.model';
import { BOOKS } from '../mocks';

describe('Model: Reading', ()=>{
  let reading : Reading;
  let spy : any;

  beforeEach(() => {
    reading = new Reading({ id: 1, book: BOOKS[0] });
  });

  it('.finishHim should be defined', () => {
    spy = spyOn(reading, 'deactive').and.returnValue(false);
    expect(reading.finishHim).toBeTruthy();
    
    reading.finishHim();
    expect(reading.deactive).toHaveBeenCalled();
  });

  it('.finishHim should finish the reading', () => {
    reading.finishHim();

    expect(reading.status).toEqual('Completed');
    expect(reading.finished_at).not.toBeNull();
    expect(reading.progress).toEqual(100);
    expect(reading.book.read).toBeTruthy();
  });

  it('.deactive should be defined', () => {
    expect(reading.deactive).toBeTruthy();
  });

  it('.activate should be defined', () => {
    expect(reading.activate).toBeTruthy();

    reading.activate();

    expect(reading.status).toEqual('In Progress');
    expect(reading.active).toBeTruthy();
  });
});