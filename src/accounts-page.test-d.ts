import { it, test, describe, expectTypeOf } from "vitest";
import type { AccountsPage, Accounts, RegularAccount, PocketAccount } from "./account-page";

describe("Checking type RegularAccount", () => {
    it ("must have a name", () => { 
        const account: RegularAccount = {
            name: "Account 1",
            IBAN: "some IBAN",
            DKK:  500 
        }        

    })
    it ("must have a name that is a string", () => {
        const account: RegularAccount = {
            name: "Account 1",
            IBAN: "some IBAN",
            DKK:  500,            
        }        
        const wrongNameType: RegularAccount = {
            // @ts-expect-error
            name: 7,
            IBAN: "some IBAN",
            DKK:  500 
        }
        
        // @ts-expect-error
        const failedAccount: RegularAccount = {
            IBAN: "some IBAN",
            DKK:  500 
        }
    })
    it("with positive DKK amount succeeds", () => {
        const account: RegularAccount = {
            name: "Account 1",
            IBAN: "some IBAN",
            DKK:  500 
        }
        
    })
    test("Regular Account with negative DKK amount succeeds", () => {
        const account: RegularAccount = {
            name: "Account 2",
            IBAN: "some IBAN",
            DKK:  -100 
        }    
    })
    test("Regular Account using different currency fails", () => {
        const account: RegularAccount = {
            name: "Account 2",
            IBAN: "some IBAN",
            // @ts-expect-error
            USD:  -100 
        }            
    })
})
describe("Checking type PocketAccount", () => {
    it("fails when there is no pocket currency", () => {    
        const account: PocketAccount = {    
            name: "some name",
            IBAN: "some iban",
            // @ts-expect-error
            pockets: {}
        }
    })
    it("fails for a Non-pocket currency", () => {    

        const account: PocketAccount = {    
            name: "some name",
            IBAN: "some iban",
            pockets: { 
                // @ts-expect-error
                DKK: 300 
            }
        }
    })

    it("allows multiple distinct legal pocket currency", () => {
        const account: PocketAccount = {    
            name: "some name",
            IBAN: "some iban",
            pockets: { 
                USD: 300, 
                SEK: 200 
            }
        }
    })

    it("fails when one of multiple distinct pocket currencies is not allowed", () => {
        const account: PocketAccount = {    
            name: "some name",
            IBAN: "some iban",
            pockets: { 
                SEK: 200, 
                // @ts-expect-error
                DKK: 300 
            }
        }
    })
})
describe('Checking type AccountsPage', () => {    
    describe("checking accounts", () => {
        const regularAccount1 = {
            name: "account-name",
            IBAN: "some Iban",
            DKK: 300
        }
        const regularAccount2 = {
            name: "account-name",
            IBAN: "some Iban",
            DKK: 300
        }
        const pocketAccount1 = {    
            name: "some name",
            IBAN: "some iban",
            pockets: { 
                SEK: 300 
            }
        }            
        const pocketAccount2 = {    
            name: "some name",
            IBAN: "some iban",
            pockets: { 
                USD: 300,
                EUR: -20
            }
        }            

        it("fails when empty", () => {
            // @ts-expect-error
            const accounts: Accounts = []
        })
        it("succeeds with a RegularAccount", () => {
            const accounts: Accounts = [regularAccount1]
        })
        it("fails with only a Pocket Account", () => {
            // @ts-expect-error
            const accounts: Accounts = [pocketAccount1]            
        })
        it("succeeds with multiple RegularAccount's", () => {
            const accounts: Accounts = [regularAccount1,regularAccount2]
        })
        it("succeeds with a combination of RegularAccount's and PocketAccounts", () => {
            const accounts: Accounts = [regularAccount1,pocketAccount1, regularAccount2, pocketAccount2]
        })
        it('fails if it do not have RegularAccount as first element', () => {
            // @ts-expect-error
            const accounts: Accounts = [pocketAccount1, regularAccount1, regularAccount2, pocketAccount2]
        })    
    })
})


// test("Pocket Account", () => {
//     expectTypeOf(pocketAccountsV1).toEqualTypeOf<PocketAccount>()
//     expectTypeOf(pocketAccountsV2).toEqualTypeOf<PocketAccount>()
//     expectTypeOf(pocketAccountsV3).toEqualTypeOf<PocketAccount>()
//     expectTypeOf(illegalPocketAccountsV1).toEqualTypeOf<PocketAccount>()
// })
