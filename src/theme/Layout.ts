import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/** Exporta tamanho do device */
export const window = {
  width,
  height,
};

/** Verifica se device tem largura menor que 375 */
export const isSmallDevice = width < 375;

/** @enum Tamanhos em numero da aplicação {number} */
export enum Size {
  s2 = 2,
  s4 = 4,
  s8 = 8,
  s10 = 10,
  s12 = 12,
  s14 = 14,
  s16 = 16,
  s20 = 20,
  s24 = 24,
  s28 = 28,
  s30 = 30,
  s32 = 32,
  s36 = 36,
  s40 = 40,
  s44 = 44,
  s48 = 48,
  s52 = 52,
  s56 = 56,
  s60 = 60,
  s64 = 64,
}

/** @enum Tamanhos em pixel da aplicação {string} */
export enum Pixels {
  p0 = '0px',
  p2 = '2px',
  p4 = '4px',
  p8 = '8px',
  p10 = '10px',
  p12 = '12px',
  p14 = '14px',
  p16 = '16px',
  p20 = '20px',
  p24 = '24px',
  p28 = '28px',
  p32 = '32px',
  p36 = '36px',
  p40 = '40px',
  p44 = '44px',
  p48 = '48px',
  p52 = '52px',
  p56 = '56px',
  p60 = '60px',
  p64 = '64px',
}
