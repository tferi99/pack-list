import { Transform } from 'class-transformer';

export function ToBooleanOld() {
  return Transform((v) => ['1', 1, 'true', true].includes(v.value));
}
