import * as process from 'process';

const argv = (key: string): string | boolean | null => {
  if (process.argv.includes(`--${key}`)) return true;

  const value = process.argv.find((element) => element.startsWith(`--${key}:`));

  if (!value) return null;

  return value.replace(`--${key}:`, '');
};

export default argv;
