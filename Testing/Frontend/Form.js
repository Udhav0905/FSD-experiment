export function validateForm(data) {
  if (!data.name || !data.email) {
    return false;
  }
  return true;
}