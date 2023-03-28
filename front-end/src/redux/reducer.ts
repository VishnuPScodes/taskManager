import { myActions } from "./action";


const initState={
    token:'',
    auth:false
}

export const appReducer = (state = initState, action: any) => {
    switch(action.type){
        case myActions.ADD_TOKEN :{
            return {
                ...state,
                token:action.payload,
                auth:true
            }
        }
        case myActions.LOG_OUT :{
            return {
                ...state,
                auth:false
            }
        }
        default :
        return state
    }
};