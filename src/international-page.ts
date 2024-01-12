import { Accounts } from "./account-page";

export type InternationalPaymentsPage = {
    entryVariant: 'SWIFT' | 'IBAN';
    data : {
        IBAN: string;
        SWIFT: string;
        accounts: Accounts
    }
    
}
