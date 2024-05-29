import Chance from "chance"

const chance= Chance() 
export const fakeUserData = ( )=>{
    console.log(chance.name({middle:true}))
    
    return chance.name({middle:true})
   
    
}
export const fakeUserDataGender = ()=>{
    console.log(chance.gender())
    return chance.gender()
}


