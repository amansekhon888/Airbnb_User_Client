export interface LoginResponse {
    sessionPayload: string,
    step: string
}
export interface ApiResponse<T> {
    statusCode: number,
    success: boolean,
    message: string,
    data: T
}