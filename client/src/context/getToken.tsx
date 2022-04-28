import React, { createContext,useReducer, useEffect, useContext } from "react";
import axios from 'axios';
import { generateTokenUrl } from "../utils/contants";


enum ActionType {
    GETTOKEN = "GETTOKEN",
  }

const initialState={
    token:  "",
    
}

interface Action {
    type: ActionType;
    payload?:string;
}

interface State{
    token:string
}



const reducer: React.Reducer<State, Action> =  (state: State, action: Action) => {

    switch(action.type){
        case ActionType.GETTOKEN:
            return{
                token:action.payload!
            };
           
              default:
                throw new Error();
   
  }

}

const TokenContext = createContext<{
    state:State
    addToken:(token:any)=>void
}>({
    state:initialState,
    addToken:()=>{}
});


export const TokenProvider = (props: { children: React.ReactNode; } )=>{
    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        addToken(generateTokenUrl)
        
      },[]);

      const addToken = async (generateTokenUrl:any)=>{

        
        const response = await axios.get(generateTokenUrl)
        const token = response.data
          
        dispatch({
            type:ActionType.GETTOKEN,
            payload:token!
        })
      }


    return(
        <TokenContext.Provider value={{state, addToken}}>
            {props.children}
        </TokenContext.Provider>
        );



};

export const useStore = () => useContext(TokenContext);