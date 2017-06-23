import { Bins } from '../../imports/collections/bins'


export const FormHandler = {
    error: {},
    nullBinError : 'You must supply a Bin name.',
    duplicateBinError: 'Bin already exists',
    checkBinName: function(content){
        if(content.length <= 0){
            return this.error = {message: nullBinError}
        }
        if(Bins.findOne(content)){
            return this.error = {message: nullBinError}
        }
        return false
    }
}

export const AuthValidator = {
    error: {},
    emailRex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'/,
    strongPwd: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'),
    mediumPwd: new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'),
    usernameError: "Username must be unique",
    emailError: 'Please enter a valid email',
    passwordError: 'Password must be 8 characters long and contain at least 1 number',
    usernameValidator: function(str){
        return str
    },
    emailValidator: function(str){
        return this.emailRex.test(str)

    },
    passwordValidator: function(str){
        if(this.strongPwd.test(str)){
            return "Password Strength: Strong"
        } else if(this.mediumPwd.test(str)){
            return "Password Strength: Good"
        } else {
            return this.passwordError
        }
    }



}