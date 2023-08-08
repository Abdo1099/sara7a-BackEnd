export class AppError extends Error {
    constructor(message, codeStatus){
        super(message)
        this.codeStatus = codeStatus
    }
}