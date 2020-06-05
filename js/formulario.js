function validar(form){

    if(form.mail.value==""){
    alert ("EL CAMPO CORREO ES OBLIGATORIO DEBE INGRESARLO");
    form.mail.focus();return false;
    }
    if(form.password.value == "") {
    alert ("EL CAMPO CONTRASEÑA ES OBLIGATORIO");
    form.password.focus();return false;
    }
    if(form.password2.value == "") {
    alert ("EL CAMPO RECTIFICAR CONTRASEÑA ES OBLIGATORIO");
    form.password2.focus();return false;
    }
    if(form.password.value != form.password2.value){
    alert ("Las 2 contraseñas no coniciden");
    form.password.focus();return false;
    }
    return true;
    
    }