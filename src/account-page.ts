/**
 * This File contains the types used for the Accounts Page
 */

import { type AtLeastOne } from "./utilityTypes"
import { type DataFetchError } from "./data-fetch-error"
/**
 * Currencies
 */
const allAcceptedCurrencies = ["DKK", "SEK", "NOK", "USD", "EUR"] as const

type Currency = typeof allAcceptedCurrencies[number]

/**
 * Regular Account
 */


/**
 * Type representing a Regular Account
 */
export type RegularAccount = {
    name: string;
    IBAN: string;
    DKK: number
}

/**
 * PocketAccount
 */

type PocketAccountCurrency = Exclude<Currency, "DKK">
/**
 * Pockets is typed as a currency with an associated value
 */
export type PocketAccountPockets =  AtLeastOne<{   
    [key in PocketAccountCurrency]: number;
}>

export type PocketAccount = {
    name: string;
    IBAN: string;
    pockets: PocketAccountPockets
}

type Account = RegularAccount | PocketAccount 

export type Accounts = [RegularAccount, ...Account[] ]


/**
 * AccountsPage
 * There should be atleast 1 Regular Account
 * It can have more accounts that are either more Regular Accounts or Pocket Accounts.
 * 
 */
export type AccountsPage = {    
    accounts?: Accounts
    error?: DataFetchError
}
