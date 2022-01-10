//!Burda ise apidan data cekmek ucun lazim olan kodlar yazilacag fetch vaistesile es6 da gelen fetch ile yeni

class Profile{
    constructor(){
        this.clientid = ''
        this.clientSecret = ''
    }

    async getProfile(username){

        //!Profile
        const profileResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users?username=${username}`)
        const profile = await profileResponse.json()
        
        //!Belong Profile Todo
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todo = await todoResponse.json()
        

        //!Return Data
        return{
            profile,
            todo
        }
        
    }
}