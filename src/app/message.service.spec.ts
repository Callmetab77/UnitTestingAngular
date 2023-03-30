import { MessageService } from "./message.service"

describe('MessageService', () => {
  let service: MessageService;

  it('should have no messages to start', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0)
  })

  it('should add a message when add is called', () => {
    service = new MessageService();

    service.add('Hakdog');

    expect(service.messages.length).toBe(1)
  })

  it('should have 2 length', () => {
    //
    service = new MessageService();


    //act
    service.add('Hakdog 1');
    service.add('Hakdog 2');

    console.log('length of message', service.messages.length)

    expect(service.messages.length).toBe(2)
  })


  it('should remove all messages when clear is called', () => {
    //
    service = new MessageService();

    //act
    service.add('Hakdog 1');

    console.log('length of message', service.messages.length)

    //act 2
    service.clear();

    console.log('length of message', service.messages.length)
    expect(service.messages.length).toBe(0)
  })
})
