import { Bins } from '../../imports/collections/bins'


export default FormHandler = {
    error: { message: '', isError: false},
    nullBinError : 'You must supply a Bin name.',
    duplicateBinError: 'Bin already exists',
    checkBinName: function(content){
        if(content.length <= 0){
            return this.error = {message: nullBinError, isError: true}
        }
        if(Bins.findOne(content)){
            return this.error = {message: nullBinError, isError: true}
        }
        return false
    }
}