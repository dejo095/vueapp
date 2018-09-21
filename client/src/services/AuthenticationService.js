import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

// called like this
// AuthenticationService.register({
//     email: 'asd@dsads.com',
//     password: 'asdad'
// })