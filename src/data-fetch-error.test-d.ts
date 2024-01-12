import { it, test, describe, expectTypeOf } from "vitest";
import type { DataFetchError} from "./data-fetch-error";

describe("DataFetchError", () => {
    it("knows the correct message when kind is set", () => {
        const networkError: DataFetchError = {
            kind: "NETWORK",
            message: "Connection lost"
        }
        const serverError: DataFetchError = {
            kind: "SERVER",
            statusCode: 500,
            message: "Ups, the server failed"
        }
        const timeoutError: DataFetchError = {
            kind: "TIMEOUT",
            threshold: 2500,
            message: "Connection timed out"
        }        
    })
    it("errors when not following the discriminated union", () => {
        const badNetworkError: DataFetchError = {
            kind: "NETWORK",
            // @ts-expect-error
            statusCode: 20,
            message: "Connection lost"
        }
        const serverError: DataFetchError = {
            kind: "SERVER",
            // @ts-expect-error
            threshold: 500,
            message: "Ups, the server failed"
        }
        const timeoutError: DataFetchError = {
            kind: "TIMEOUT",
            // @ts-expect-error
            statusCode: 408,
            message: "Connection timed out"
        }        

    })
})