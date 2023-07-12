module.exports = { isResetDataValid, isLoginDataValid, isSignUpDataValid };

function isResetDataValid(email)
{
    let response = '';

    if (isInvalidEmail(email))
    {
        response = addErrorMessage(response, 'Please enter a valid email.');
    }

    return { hasError: response.length > 0, errorMessage: response };
}

function isLoginDataValid(email, password)
{
    let response = '';

    if (isInvalidEmail(email))
    {
        response = addErrorMessage(response, 'Please enter a valid email.');
    }

    if (isStringEmpty(password))
    {
        response = addErrorMessage(response, 'Please enter a password.');
    }

    return { hasError: response.length > 0, errorMessage: response };
}

function isSignUpDataValid(email, fullName, password)
{
    let response = '';

    if (isInvalidEmail(email))
    {
        response = addErrorMessage(response, 'Please enter a valid email.');
    }

    if (isStringEmpty(fullName))
    {
        response = addErrorMessage(response, 'Please enter your name.');
    }

    if (isStringEmpty(password))
    {
        response = addErrorMessage(response, 'Please enter a password.');
    }

    return { hasError: response.length > 0, errorMessage: response };
}

function isInvalidEmail(email)
{
    if (email === "" || !email.includes("@") || !email.includes("."))
    {
        return true;
    } else
    {
        return false;
    }
}

function isStringEmpty(checkString)
{
    if (checkString === "")
    {
        return true;
    } else
    {
        return false;
    }
}

function areStringsMatching(stringA, stringB)
{
    if (stringA === stringB)
    {
        return true;
    } else
    {
        return false;
    }
}

function addErrorMessage(errorA, errorB)
{
    if (errorA.length === 0) return errorB;

    return errorA + ' & ' + errorB;
}