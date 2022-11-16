const validateForm = () =>{
    if( document.myForm.Name.inputTitle == "" ) {
        alert( "Please provide your name!" );
        document.myForm.inputTitle.focus() ;
        return false;
     }
}

export { validateForm }