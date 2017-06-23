
const FormValidator = {
    passwordFormat: /(?=.*\d)(?=.*[A-Z]).{8,}/,
    emailFormat: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'/,
    error_message: {
        email: 'Please enter a valid email address',
        password: 'Password contain one letter, one number, and be 8 characters long',
        confirm: 'Passwords must match'
    },
    matchPasswords: function(a, b){
        return a === b
    },
    matchError: function(){
        $("input[name='confirmPassword']").attr("invalid")

    },
    checkPasswordFormat: function(a){
        return passwordFormat.test(a)
    },
    passwordFormatError: function(){
       $("input[name='password']").attr('invalid')
    },
    checkEmailFormat: function(a){
        return emailFormat.test(a)
    },
    emailFormatError: function(){
        $("input[name='email']").attr('invalid')
    }

}

export default FormValidator