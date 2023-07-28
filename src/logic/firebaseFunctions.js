export async function createCheckoutSession(email, token, priceId, successUrl, cancelUrl) {
  const requestData = {
    email: email,
    priceId: priceId,
    success_url: successUrl,
    cancel_url: cancelUrl,
  };

  const functionURL =
    "https://us-central1-d-tiny-house-designer.cloudfunctions.net/createCheckoutSession";
  return await triggerFirebaseFunction(token, functionURL, requestData);
}

export async function setFullName(email, token, fullName) {
  const requestData = {
    email: email,
    fullName: fullName,
  };

  const functionURL = "https://us-central1-d-tiny-house-designer.cloudfunctions.net/setFullName";

  return await triggerFirebaseFunction(token, functionURL, requestData);
}

export async function checkLicenseVersion(email, token) {
  const requestData = {
    email: email,
  };

  const functionURL =
    "https://us-central1-d-tiny-house-designer.cloudfunctions.net/checkUserLicenseVersion";
  return await triggerFirebaseFunction(token, functionURL, requestData);

  //Returns string options: expired, trial, personal, business.
}

export async function checkLicenseDaysLeft(email, token) {
  const requestData = {
    email: email,
  };

  const functionURL =
    "https://us-central1-d-tiny-house-designer.cloudfunctions.net/checkLicenseDaysLeft";
  return await triggerFirebaseFunction(token, functionURL, requestData);
  //Returns string literal days as a number.
}

export async function setUsageIntent(email, token, usageIntent)
{
  const requestData = {
    email: email,
    usageIntent: usageIntent
  };

  const functionURL = 'https://us-central1-d-tiny-house-designer.cloudfunctions.net/setUsageIntent';

  return await triggerFirebaseFunction(token, functionURL, requestData);
}

export async function createMailchimpSubscription(email, firstName, tags)
{
  const requestData = {
    email: email,
    firstName: firstName,
    tags: tags
  };

  const functionURL = 'https://us-central1-d-tiny-house-designer.cloudfunctions.net/createMailchimpSubscription';
  return await triggerFirebaseFunction(null, functionURL, requestData);
}

//---------------------------------------------------------------

async function triggerFirebaseFunction(idToken, functionUrl, requestData) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify(requestData),
  };

  try {
    const response = await fetch(functionUrl, requestOptions);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Error triggering Firebase Function:", error);
    throw error;
  }
}


