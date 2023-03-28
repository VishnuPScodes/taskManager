
export const myActions={
    ADD_TOKEN:"ADD_TOKEN",
    LOG_OUT:"LOG_OUT"

}

export const addToken=(payload:any)=>{
    return {
        type:myActions.ADD_TOKEN,
        payload
    }
}
export const logOut = (payload: any) => {
  return {
    type: myActions.LOG_OUT,
  };
};
