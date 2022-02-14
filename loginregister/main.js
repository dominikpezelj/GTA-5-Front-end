$(document).ready(function() {

    //on document ready state
    $("#login").show()
    $("#registration").hide()
    $("#info").hide()
    //show character images basic state
    $("#regmsg").hide()
    $("#join-bg").hide()
    $("#logman").show()
    $("#logwom").show()

    //Main menu control (Login, Register, Info)
    $("#btnRegister").click(function() {
        loadRegister()
    })
    $("#btnLogin").click(function() {
        loadLogin()
    })
    $("#btnInfoList").click(function() {
        loadInfo()
    })


});

//save input values and button click actions
$("#fireLogin").click(() => {

    if ($("#loginUsername").val() && $("#loginPassword").val()) {
        let loginUsername = $("#loginUsername").val()
        let loginPassword = $("#loginPassword").val()
        fireLogin()
        disableButtons()

        $("#loading").html("<div class='fireL d-flex justify-content-center'><div class='spinner-border text-info' role='status'><span class='' style='color:#000;'></span></div><b class='loading1'>Authorizing...</b></div>")
        setTimeout(() => {
            // if username iz baze 
            let authSucess = true;
            if (authSucess) {
                setTimeout(() => {
                    $("#loading").html("<div class='fireL d-flex justify-content-center'><div class='spinner-border text-info' role='status'><span class='' style='color:#000;'></span></div><b class='loading1'>Logging you in...</b></div>")
                    setTimeout(() => {
                        let loginSucessful = true
                        if (loginSucessful) {
                            $("#loading").html("<div class='fireL d-flex justify-content-center'> <i class='fas fa-check-circle loadingSucess' ></i><strong class='errText'>Success!</strong></div>")
                            //send data to other cef and fire it.

                        } else {
                            $("#loading").html("<div class='fireL d-flex justify-content-center'> <i class='fas fa-times-circle loadingFailed' ></i><strong class='errText'>Login error!</strong></div>")
                            //back to login page.
                            setTimeout(() => {
                                enableButtons()
                                location.reload();


                            }, 5000);


                        }
                    }, 5000);
                }, 5000);
            } else {
                $("#loading").html("<div class='fireL d-flex justify-content-center'> <i class='fas fa-times-circle' style='color: #ff3021; font-size: 50px;'></i><strong class='errText'>Auth failed!</strong></div>")
                setTimeout(() => {
                    enableButtons()
                    location.reload();


                }, 5000);


            }
        }, 5000);

    } else {

        if (!$("#loginUsername").val()) {
            let id = '#loginUsername'
            let msg = 'enter username to proceed'
            inputError(id, msg)

        } else {
            $('#loginUsername').removeClass("errorInput")
        }
        if (!$("#loginPassword").val()) {
            let id = '#loginPassword'
            let msg = 'enter password to proceed'
            inputError(id, msg)

        } else {
            $('#loginPassword').removeClass("errorInput")
        }

    }
})

$("#fireRegister").click(() => {
    if ($("#regEmail").val() && $("#regUsername").val() && $("#regPassword").val() && $("#regPassword2").val()) { //check input fields
        if ($("#regPassword").val() == $("#regPassword2").val()) { //password is equal?
            if ($("#regPassword").val().length > 7) { //check password length
                if (regUsernameValidateLength($("#regUsername").val())) { //check username length
                    if (regUsernameValidateFormat($("#regUsername").val())) { //check username format
                        if (regEmailValidateFormat($("#regEmail").val())) { //check email format
                            let email = $("#regEmail").val()
                            let username = $("#regUsername").val()
                            let pass1 = $("#regPassword").val()
                            let pass2 = $("#regPassword2").val()


                            alert($("#regPassword2").val())

                            fireRegistration()
                            disableButtons()

                            $("#loading").html("<div class='fireL d-flex justify-content-center'><div class='spinner-border text-info' role='status'><span class='' style='color:#000;'></span></div><b class='loading1'>Registration in progress...</b></div>")
                            setTimeout(() => {
                                regSucessful = false;
                                if (regSucessful) {


                                    setTimeout(() => {
                                        $("#loading").html("<div class='fireL d-flex justify-content-center'> <i class='fas fa-check-circle loadingSucess' style=''></i><strong class='errText'>Registration sucessful!</strong></div>")
                                        setTimeout(() => {
                                            enableButtons()
                                            location.reload();
                                        }, 5000);
                                    }, 5000);

                                } else {

                                    $("#loading").html("<div class='fireL d-flex justify-content-center'> <i class='fas fa-times-circle loadingFailed'></i><strong class='errText'>Registration failed!</strong></div>")
                                    setTimeout(() => {
                                        enableButtons()
                                        location.reload();
                                    }, 5000);

                                }
                            }, 5000);
                        } else {
                            let id = '#regEmail'
                            let msg = 'invalid email format'
                            inputError(id, msg)

                        }

                    } else {
                        let id = '#regUsername'
                        let msg = 'invalid characters'
                        inputError(id, msg)

                    }

                } else {
                    let id = '#regUsername'
                    let msg = 'username is too short'
                    inputError(id, msg)

                }

            } else {

                let id = '#regPassword'
                let id2 = '#regPassword2'
                let msg = 'password is too short'
                inputError(id, msg)
                inputError(id2, msg)
            }

        } else {
            let id = '#regPassword'
            let id2 = '#regPassword2'
            let msg = 'passwords doesnt match'
            inputError(id, msg)
            inputError(id2, msg)

        }

    } else {

        if (!$("#regEmail").val()) {
            let id = '#regEmail'
            let msg = 'enter e-mail to proceed'
            inputError(id, msg)

        } else {
            $('#regEmail').removeClass("errorInput")
        }
        if (!$("#regUsername").val()) {
            let id = '#regUsername'
            let msg = 'enter username to proceed'
            inputError(id, msg)

        } else {
            $('#regUsername').removeClass("errorInput")
        }

        if (!$("#regPassword").val()) {
            let id = '#regPassword'
            let msg = 'enter password to proceed'
            inputError(id, msg)

        } else {
            $('#regPassword').removeClass("errorInput")
        }

        if (!$("#regPassword2").val()) {
            let id = '#regPassword2'
            let msg = 'enter password to proceed'
            inputError(id, msg)

        } else {
            $('#regPassword2').removeClass("errorInput")
        }
    }

})


function loadRegister() {
    $("#registration").show()
    $("#login").hide()
    $("#info").hide()
    $("#logman").hide()
    $("#logwom").hide()
    $("#regmsg").show()
    $("#join-bg").show()
    $("#btnInfoList").removeClass("active");
    $("#btnRegisterList").addClass("active");
    $("#btnLoginList").removeClass("active");
}

function loadLogin() {
    $("#registration").hide()
    $("#login").show()
    $("#info").hide()
    $("#logman").show()
    $("#logwom").show()
    $("#regmsg").hide()
    $("#join-bg").hide()
    $("#btnInfoList").removeClass("active");
    $("#btnRegisterList").removeClass("active");
    $("#btnLoginList").addClass("active");
}

function loadInfo() {
    $("#registration").hide()
    $("#login").hide()
    $("#info").show()
    $("#regmsg").hide()
    $("#join-bg").hide()
    $("#logman").hide()
    $("#logwom").hide()
    $("#btnRegisterList").removeClass("active");
    $("#btnLoginList").removeClass("active");
    $("#btnInfoList").addClass("active");
}

function disableButtons() {
    $('#btnInfoList').css("pointer-events", "none")
    $('#btnLogin').css("pointer-events", "none")
    $('#btnRegister').css("pointer-events", "none")
}

function enableButtons() {
    $('#btnInfoList').css("pointer-events", "auto")
    $('#btnLogin').css("pointer-events", "auto")
    $('#btnRegister').css("pointer-events", "auto")
}

function fireLogin() {
    $("#registration").hide()
    $("#login").hide()
    $("#info").hide()
    $("#regmsg").hide()
    $("#join-bg").hide()
    $("#logman").hide()
    $("#logwom").hide()
}

function fireRegistration() {
    $("#registration").hide()
    $("#login").hide()
    $("#info").hide()
    $("#regmsg").hide()
    $("#join-bg").hide()
    $("#logman").hide()
    $("#logwom").hide()
}

function regUsernameValidateLength(username) {
    alert(username)
    if (username.length > 3) {
        return true;
    } else return false

}

function regUsernameValidateFormat(username) {
    var isValid = /^[a-zA-Z0-9]*$/.test(username);
    if (isValid) {
        return true;
    } else return false
}

function regEmailValidateFormat(email) {
    var isValid = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
    if (isValid) {
        return true;
    } else return false
}


function inputError(id, msg) {
    $(id).addClass("errorInput")
    $(id).val('')
    $(id).attr("placeholder", msg);
}