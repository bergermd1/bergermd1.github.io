function isEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

function validateEmails(email1, email2) {
    email1 = email1.toLowerCase();
    email2 = email2.toLowerCase();
    return (isEmail(email1) && isEmail (email2) && (email1 === email2));
}