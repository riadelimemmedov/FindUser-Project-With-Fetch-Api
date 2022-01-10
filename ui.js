//!!Html data

class UI{
    constructor(){
        this.profileContainer = document.getElementById('profileContainer')
        this.alert = document.getElementById('alert')
    }

    showProfile(account){
        this.profileContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://picsum.photos/200/300" class="img-thumbnail"></a>
                    </div>

                    <div class="col-md-9">
                        <h4 class="card-title">Contact<h4>

                        <ul class="list-group">
                            <li class="list-group-item">Name : ${account.name}</li>
                            <li class="list-group-item">Surname : ${account.username}</li>
                            <li class="list-group-item">Email : ${account.email}</li>
                            <li class="list-group-item">
                                Geo : 
                                ${account.address.geo.lat}
                                ${account.address.geo.lng}
                            </li>
                            <li class="list-group-item">
                                Phone : ${account.phone}
                            <li>
                            <li class="list-group-item">
                                Website : ${account.website}
                            <li>
                            <li class="list-group-item">
                                Company :
                                ${account.company.name}
                            </li>
                        </ul>
                        <h4 class="card-title mt-4">ToDo List</h4>

                        <ul id="todo" class="list-group">
                        
                        </ul>

                    </div>
                </div> 
            </div>
        </div>
        `
    }

    showAlert(errorMessage){
        this.alert.innerHTML += `</br>${errorMessage} is not found`
    }


    showToDo(value){
        let htmlToDoData = ''

        value.forEach(function(item){
            if(item.completed){
                htmlToDoData += `
                <li class="list-group-item  bg-success">
                    ${item.title}
                </li>
                `
            }

            else{//if is not completed enter to else
                htmlToDoData += `
                    <li class="list-group-item bg-secondary">
                        ${item.title}
                    </li>
                `
            }

        })


        this.profileContainer.querySelector('#todo').innerHTML += htmlToDoData
    }


    clear(){
        this.profileContainer.innerHTML = ""
        this.alert.innerHTML = ""
    }
}