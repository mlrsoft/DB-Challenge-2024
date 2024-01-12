import type { User } from "./user-model";
import { type AccountsPage } from "./account-page";
import type { DataFetchError } from "./data-fetch-error";
import { type InternationalPaymentsPage } from "./international-page";

export type GlobalState = {
    fetchingData: boolean
    user?: User
    accountsPage: {
        loadingTresshold: boolean,
        data?: AccountsPage
    },
    internationalPaymentPage: {
        loadingTresshold: boolean,
        data?: InternationalPaymentsPage
    },
    error?: DataFetchError

}




