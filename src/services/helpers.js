export function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

export function removeBaseUrl(url) {
  const baseUrlPattern = /^https?:\/\/[a-z:0-9.]+/;
  let result = '';

  const match = baseUrlPattern.exec(url);
  if (match != null) {
    result = match[0];
  }

  if (result.length > 0) {
    url = url.replace(result, '');
  }

  return url;
}
