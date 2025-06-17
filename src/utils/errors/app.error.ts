export interface AppError extends Error{
    statusCode: number;
}

export class  InternalServerError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "InternalServerError";
        this.message = message
        this.statusCode = 500;
    }
}

export class BadRequestError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "BadRequestError";
        this.message = message
        this.statusCode = 400;
    }
}

export class NotFoundError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "NotFoundError";
        this.message = message
        this.statusCode = 404;
    }
}   

export class UnauthorizedError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "UnauthorizedError";
        this.message = message
        this.statusCode = 401;
    }
}

export class ForbiddenError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "ForbiddenError";
        this.message = message
        this.statusCode = 403;
    }
}

export class ConflictError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "ConflictError";
        this.message = message
        this.statusCode = 409;
    }
}

export class UnprocessableEntityError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "UnprocessableEntityError";
        this.message = message
        this.statusCode = 422;
    }
}

export class TooManyRequestsError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "TooManyRequestsError";
        this.message = message
        this.statusCode = 429;
    }
}

export class ServiceUnavailableError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "ServiceUnavailableError";
        this.message = message
        this.statusCode = 503;
    }
}

export class notImplementedError implements AppError {
    
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        this.name = "notImplementedError";
        this.message = message
        this.statusCode = 501;
    }
}   