export type DataFetchErrorNetwork = {
    kind: "NETWORK",
    message: "Connection lost"
}
export type DataFetchErrorServer = {
    kind: "SERVER",
    statusCode: number
    message: "Ups, the server failed"
}
export type DataFetchErrorTimeout = {
    kind: "TIMEOUT"
    threshold: number
    message: "Connection timed out"
}
export type DataFetchError = DataFetchErrorNetwork | DataFetchErrorServer | DataFetchErrorTimeout

