functionformValidation()
{
varuid = document.registration.userid;
varpassid = document.registration.passid;
varuname = document.registration.username;
varuadd = document.registration.address;
varucountry = document.registration.country;
varuzip = document.registration.zip;
varuemail = document.registration.email;
varumsex = document.registration.msex;
varufsex = document.registration.fsex; if(userid_validation(uid,5,16))
{
if(passid_validation(passid,7,16))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
}
}
}
}
}
}
}
return false;
}
 
functionuserid_validation(uid,mx,my)
{
varuid_len = uid.value.length;
if (uid_len == 0 || uid_len>= my || uid_len< mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
 
functionpassid_validation(passid,mx,my)
{
varpassid_len = passid.value.length;
if (passid_len == 0 ||passid_len>= my || passid_len< mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
functionallLetter(uname)
{
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
functionValidateEmail(uemail)
{
varmailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
functionvalidsex(umsex,ufsex)
{
x=0;
 
if(umsex.checked)
{
x++;
} if(ufsex.checked)
{
x++;
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Successfully Submitted');
window.location.reload()
return true;}
}