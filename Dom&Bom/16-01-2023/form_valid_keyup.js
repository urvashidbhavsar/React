function check_reg_ex_fname(e, spnid) {
  //   let f_name = document.getElementById("fname").value;
  let regname = /^[a-zA-Z]*$/;
  //   regname.test(f_name)
  if (regname.test(e.value)) {
    document.getElementById(spnid).innerHTML = "";
  } else {
    document.getElementById(spnid).innerHTML = "Digits not allowed";
    return false;
  }
}

function check_mno_reg_ex(e, spnid) {
  let reg = /^[0-9]*$/;
  if (reg.test(e.value)) {
    document.getElementById(spnid).innerHTML = "";
  } else {
    document.getElementById(spnid).innerHTML = "Aphabets are not allowed";
    return false;
  }
}

function check_mail_exp(e, spnid) {
  let regmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regmail.test(e.value)) {
    document.getElementById(spnid).innerHTML = "";
    return true;
  } else {
    document.getElementById(spnid).innerHTML = "Enter proper Email id";
    return false;
  }
}
