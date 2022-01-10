
const profiledata = new Profile()
const ui = new UI() 

const searchProfile = document.getElementById('searchProfile')

searchProfile.addEventListener('keyup', function (e) {
    ui.clear()
    const textUsername = e.target.value

    if (textUsername !== '') {
        profiledata.getProfile(textUsername)
            .then(function(response) {

                if (response.profile.length == 0) {
                    ui.showAlert(textUsername)
                }

                else {//if is not null enter to else
                    ui.showProfile(response.profile[0])
                    ui.showToDo(response.todo)
                }
            })
            .catch(err => {
                ui.showAlert(textUsername)
            })

    }
})