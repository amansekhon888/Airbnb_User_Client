export interface LoginResponse {
    sessiontoken: string,
    step: string
}
export interface ApiResponse<T> {
    statusCode: number,
    success: boolean,
    message: string,
    data: T
}