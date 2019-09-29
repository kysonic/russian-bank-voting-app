export default () => {
  const min = 1;
  const max = 30;
  const date = new Date(Date.now() + (Math.random() * max + min) * 24 *3600 * 1000);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1);
  const dd = String(date.getDate());
  return `${dd.length < 2 ? '0' + dd : dd}.${mm.length < 2 ? '0' + mm : mm}.${yyyy}`;
};
