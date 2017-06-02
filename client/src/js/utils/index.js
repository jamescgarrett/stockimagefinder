/**
 * Checks the Http Status of a request
 * @param {object} response Http response.
 * @return {object} response Http response.
 */
export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.errorText);
  error.response = response;
  throw error;
}

/**
 * Parse JSON
 * @param {object} response A json object.
 * @return {object} Parsed json object.
 */
export function parseJSON(response) {
  return response.json();
}
