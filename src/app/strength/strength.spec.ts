import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
    it('should display weak if strenth is 5', () => {
        let pipe = new StrengthPipe();
        let val = pipe.transform(5);
        expect(val).toBe('5 (weak)');
    })

    it('should display strong if strenth is 10', () => {
        let pipe = new StrengthPipe();
        let val = pipe.transform(10);
        expect(val).toBe('10 (strong)');
    })
})