import { Response, Request, NextFunction } from "express"
import jwt from 'jsonwebtoken';




/**
 * usually you would have a user for auth, but this generates a token everytime someone
 * gets the api
 * @param req usually if there's a request as to get params from the request
 * @param res sends the token 
 */
const createToken = async (req: Request, res: Response): Promise<void>=>{
    try {
        let user = {
            id: '123',
            name:'Gisselle'
          };
          const token: any = jwt.sign({
           user:user
          }, "SECRETKEY", { expiresIn: 60 * 60 });      
          res.status(200).json(token);
   
        } catch (error) {
    throw error
    }
}

const checkToken = (req:any, res:any, next:any) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(token,  process.env.SECRETKEY!);
      console.log(decoded)
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  };


export {createToken,checkToken }