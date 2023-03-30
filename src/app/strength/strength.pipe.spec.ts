import { StrengthPipe } from "./strength.pipe"

describe('Strength Pipe', () => {
  it('should display weak if strength is 9', () => {
    //arrange
    let pipe = new StrengthPipe();

    //act
    expect(pipe.transform(9)).toEqual('9 (weak)');
  })

  it('should display strong if strength is 11', () => {
    //arrange
    let pipe = new StrengthPipe();

    //act
    expect(pipe.transform(11)).toEqual('11 (strong)');
  })

  it('should display unbelievable because is value is more than 20', () => {
    //arrange
    let pipe = new StrengthPipe();

    //act
    expect(pipe.transform(31)).toEqual('31 (unbelievable)');
  })
})
