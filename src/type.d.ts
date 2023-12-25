declare namespace Express {
    export interface Request {
        user?: {
            username: string ;
            sub: number ;
            id: number ;
            // storeImageAndGetUrl : 
        }
    }
}