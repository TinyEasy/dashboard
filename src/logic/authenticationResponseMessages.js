module.exports = { checkError };

function checkError(response) {
  if (response.code) {
    return {
      isError: true,
      errorMessage: getErrorMessage(response.code),
    };
  }

  return {
    isError: false,
    errorMessage: "",
  };
}

function getErrorMessage(errorCode) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Invalid email address. Please enter a valid email.";

    case "auth/user-disabled":
      return "Your account has been disabled. Please contact the administrator.";

    case "auth/user-not-found":
      return "User not found. Please check the entered email address.";

    case "auth/wrong-password":
      return "Incorrect password. Please try again.";

    case "auth/email-already-in-use":
      return "The email address is already in use by another account.";

    case "auth/account-exists-with-different-credential":
      return "An account with this email already exists. Please sign in using the associated provider.";

    case "auth/operation-not-allowed":
      return "Operation not allowed. Please contact the administrator.";

    case "auth/popup-closed-by-user":
      return "The sign-in popup was closed before completing the process.";

    case "auth/provider-already-linked":
      return "Your account is already linked to this provider.";

    case "auth/requires-recent-login":
      return "This operation requires recent login. Please sign in again.";

    case "auth/missing-password":
      return "Please enter a password.";

    case "auth/weak-password":
      return "Password should be at least 6 characters.";

    case null:
      return "";

    default:
      return "An error occurred. Please contact us or try again later.";
  }
}
