
const FormValidator = {
    passwordFormat: /(?=.*\d)(?=.*[A-Z]).{8,}/,
    matchPasswords: function(a, b){
        return a === b
    },
    matchError: function(){
        return(
            <div className="alert alert-danger">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                Passwords must match
            </div>
        )
    },
    checkPasswordFormat: function(a){
        return passwordFormat.test(a)
    },
    passwordFormatError: function(){
        return(
            <div className="alert alert-danger">
                <ul>
                    <li>Be at least 8 characters long</li>
                    <li>Have at least one Uppercase letter</li>
                    <li>Have at least one Lowercase letter</li>
                    <li>Have at least one Number</li>
                </ul>
            </div>
        )
    },
    checkEmailFormat: function(a){
        return a
    }

}

export default FormValidator