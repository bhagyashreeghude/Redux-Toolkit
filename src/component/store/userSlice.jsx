import { createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:[

    ],
    reducers:{
        addUser(state,action){
            state.push(action.payload)

        },
        displayGender(state,action){
            state.push(action.payload)

        },
        removeUser(state,action){
            state.splice(action.payload,1)

        },
        deleteUsers (state,action){
            state.length=0(action.payload)
            
        }
    }
})
console.log(userSlice.actions)

export default userSlice.reducer;
export const {addUser} =userSlice.actions;
export const {removeUser} =userSlice.actions;
export const {deleteUser} =userSlice.actions;
