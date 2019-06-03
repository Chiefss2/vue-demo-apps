export function getCrrentAuthority() {
  return ['guest'];
}

export function isLogin() {
  const current = getCrrentAuthority();
  return current && current[0] !== 'guest';
}
