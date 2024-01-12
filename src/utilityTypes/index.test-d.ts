import { it, describe, expectTypeOf } from "vitest";
import type { AtLeastOne, AtMostOne, ExactlyOne } from "./index";


type SomeType = {
    s: string;
    n: number;
    b: boolean;
    o: Record<string, unknown>
}

describe('AtLeastOne<SomeType>', () => {
    let val: AtLeastOne<SomeType>
    it("Fails when no prop is set", () => {
        // @ts-expect-error
        val = { }        
    })
    it('Accepts when one prop from SomeType is set', () => {
        val = { s: ''};
        val = { n: 7}
        val = { b: false }
        val = { o: {}}
    })
    it('Accepts when more than prop from SomeType  is set', () => {
        val = { s: '', n: 7}
        val = { b: true, o: { anything: ''}}
    })
    it('Fails when a prop not on SomeType is set', () => {
        // @ts-expect-error
        val = { s: '', x: 7}
        // @ts-expect-error
        val = { b: true, o: { anything: ''}, z: false}
    })

})




