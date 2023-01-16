// onclick -> field black
function fname_check(fname, spnid) {
  //   let fname = document.getElementById("fname").value;
  if (fname.value == "") {
    document.getElementById(spnid).innerHTML = "enter first name";
    return false;
  } else {
    document.getElementById(spnid).innerHTML = "";
    return false;
  }
}
function lname_check(lname, spnid) {
  //   let fname = document.getElementById("fname").value;
  if (lname.value == "") {
    document.getElementById(spnid).innerHTML = "enter Last name";
    return false;
  } else {
    document.getElementById(spnid).innerHTML = "";
    return false;
  }
}
function mno_check(mno, spnid) {
  if (mno.value == "") {
    document.getElementById(spnid).innerHTML = "Enter Mobile no";
    return false;
  } else if (mno.value.length < 10) {
    document.getElementById(spnid).innerHTML = "Enter 10 digits properly";
    return false;
  } else {
    document.getElementById(spnid).innerHTML = "";
    return false;
  }
}
function mail_check(mail, spnid) {
  if (mail.value == "") {
    document.getElementById(spnid).innerHTML = "enter Email";
    return false;
  } else {
    document.getElementById(spnid).innerHTML = "";
    return false;
  }
}
