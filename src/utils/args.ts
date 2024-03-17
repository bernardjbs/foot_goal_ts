import * as process from 'process';

const argv = (key: string): string | boolean | null => {
  // Return true if the key exists and a value is undefined
  if (process.argv.includes(`--${key}`)) return true;

  const value = process.argv.find(element => element.startsWith(`--${key}:`));

  // Return null if the key does not exist and a value is undefined
  if (!value) return null;

  return value.replace(`--${key}:`, '');
};

export default argv;