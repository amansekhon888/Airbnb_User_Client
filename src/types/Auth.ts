export interface LoginResponse {
    sessionToken: string,
    step: string
}
export interface ApiResponse<T> {
    statusCode: number,
    success: boolean,
    message: string,
    data: T
}