// https://github.com/DragonMinded/bemaniutils/blob/22e58850047dbe9a8e4d59361ed8d69acca7b238/bemani/common/card.py
// https://github.com/skogaby/butterfly/blob/master/butterflycore/src/main/java/com/buttongames/butterflycore/cardconv/A.kt
import bigInt, { BigInteger } from 'big-integer';

const KEY: BigInteger[] = [
  bigInt('0x20d0d03c'),
  bigInt('0x868ecb41'),
  bigInt('0xbcd89c84'),
  bigInt('0x4c0e0d0d'),
  bigInt('0x84fc30ac'),
  bigInt('0x4cc1890e'),
  bigInt('0xfc5418a4'),
  bigInt('0x02c50f44'),
  bigInt('0x68acb4e0'),
  bigInt('0x06cd4a4e'),
  bigInt('0xcc28906c'),
  bigInt('0x4f0c8ac0'),
  bigInt('0xb03ca468'),
  bigInt('0x884ac7c4'),
  bigInt('0x389490d8'),
  bigInt('0xcf80c6c2'),
  bigInt('0x58d87404'),
  bigInt('0xc48ec444'),
  bigInt('0xb4e83c50'),
  bigInt('0x498d0147'),
  bigInt('0x64f454c0'),
  bigInt('0x4c4701c8'),
  bigInt('0xec302cc4'),
  bigInt('0xc6c949c1'),
  bigInt('0xc84c00f0'),
  bigInt('0xcdcc49cc'),
  bigInt('0x883c5cf4'),
  bigInt('0x8b0fcb80'),
  bigInt('0x703cc0b0'),
  bigInt('0xcb820a8d'),
  bigInt('0x78804c8c'),
  bigInt('0x4fca830e'),
  bigInt('0x80d0f03c'),
  bigInt('0x8ec84f8c'),
  bigInt('0x98c89c4c'),
  bigInt('0xc80d878f'),
  bigInt('0x54bc949c'),
  bigInt('0xc801c5ce'),
  bigInt('0x749078dc'),
  bigInt('0xc3c80d46'),
  bigInt('0x2c8070f0'),
  bigInt('0x0cce4dcf'),
  bigInt('0x8c3874e4'),
  bigInt('0x8d448ac3'),
  bigInt('0x987cac70'),
  bigInt('0xc0c20ac5'),
  bigInt('0x288cfc78'),
  bigInt('0xc28543c8'),
  bigInt('0x4c8c7434'),
  bigInt('0xc50e4f8d'),
  bigInt('0x8468f4b4'),
  bigInt('0xcb4a0307'),
  bigInt('0x2854dc98'),
  bigInt('0x48430b45'),
  bigInt('0x6858fce8'),
  bigInt('0x4681cd49'),
  bigInt('0xd04808ec'),
  bigInt('0x458d0fcb'),
  bigInt('0xe0a48ce4'),
  bigInt('0x880f8fce'),
  bigInt('0x7434b8fc'),
  bigInt('0xce080a8e'),
  bigInt('0x5860fc6c'),
  bigInt('0x46c886cc'),
  bigInt('0xd01098a4'),
  bigInt('0xce090b8c'),
  bigInt('0x1044cc2c'),
  bigInt('0x86898e0f'),
  bigInt('0xd0809c3c'),
  bigInt('0x4a05860f'),
  bigInt('0x54b4f80c'),
  bigInt('0x4008870e'),
  bigInt('0x1480b88c'),
  bigInt('0x0ac8854f'),
  bigInt('0x1c9034cc'),
  bigInt('0x08444c4e'),
  bigInt('0x0cb83c64'),
  bigInt('0x41c08cc6'),
  bigInt('0x1c083460'),
  bigInt('0xc0c603ce'),
  bigInt('0x2ca0645c'),
  bigInt('0x818246cb'),
  bigInt('0x0408e454'),
  bigInt('0xc5464487'),
  bigInt('0x88607c18'),
  bigInt('0xc1424187'),
  bigInt('0x284c7c90'),
  bigInt('0xc1030509'),
  bigInt('0x40486c94'),
  bigInt('0x4603494b'),
  bigInt('0xe0404ce4'),
  bigInt('0x4109094d'),
  bigInt('0x60443ce4'),
  bigInt('0x4c0b8b8d'),
  bigInt('0xe054e8bc'),
  bigInt('0x02008e89'),
];
const LUT_A0: BigInteger[] = [
  bigInt('0x02080008'),
  bigInt('0x02082000'),
  bigInt('0x00002008'),
  bigInt('0x00000000'),
  bigInt('0x02002000'),
  bigInt('0x00080008'),
  bigInt('0x02080000'),
  bigInt('0x02082008'),
  bigInt('0x00000008'),
  bigInt('0x02000000'),
  bigInt('0x00082000'),
  bigInt('0x00002008'),
  bigInt('0x00082008'),
  bigInt('0x02002008'),
  bigInt('0x02000008'),
  bigInt('0x02080000'),
  bigInt('0x00002000'),
  bigInt('0x00082008'),
  bigInt('0x00080008'),
  bigInt('0x02002000'),
  bigInt('0x02082008'),
  bigInt('0x02000008'),
  bigInt('0x00000000'),
  bigInt('0x00082000'),
  bigInt('0x02000000'),
  bigInt('0x00080000'),
  bigInt('0x02002008'),
  bigInt('0x02080008'),
  bigInt('0x00080000'),
  bigInt('0x00002000'),
  bigInt('0x02082000'),
  bigInt('0x00000008'),
  bigInt('0x00080000'),
  bigInt('0x00002000'),
  bigInt('0x02000008'),
  bigInt('0x02082008'),
  bigInt('0x00002008'),
  bigInt('0x02000000'),
  bigInt('0x00000000'),
  bigInt('0x00082000'),
  bigInt('0x02080008'),
  bigInt('0x02002008'),
  bigInt('0x02002000'),
  bigInt('0x00080008'),
  bigInt('0x02082000'),
  bigInt('0x00000008'),
  bigInt('0x00080008'),
  bigInt('0x02002000'),
  bigInt('0x02082008'),
  bigInt('0x00080000'),
  bigInt('0x02080000'),
  bigInt('0x02000008'),
  bigInt('0x00082000'),
  bigInt('0x00002008'),
  bigInt('0x02002008'),
  bigInt('0x02080000'),
  bigInt('0x00000008'),
  bigInt('0x02082000'),
  bigInt('0x00082008'),
  bigInt('0x00000000'),
  bigInt('0x02000000'),
  bigInt('0x02080008'),
  bigInt('0x00002000'),
  bigInt('0x00082008'),
];
const LUT_A1: BigInteger[] = [
  bigInt('0x08000004'),
  bigInt('0x00020004'),
  bigInt('0x00000000'),
  bigInt('0x08020200'),
  bigInt('0x00020004'),
  bigInt('0x00000200'),
  bigInt('0x08000204'),
  bigInt('0x00020000'),
  bigInt('0x00000204'),
  bigInt('0x08020204'),
  bigInt('0x00020200'),
  bigInt('0x08000000'),
  bigInt('0x08000200'),
  bigInt('0x08000004'),
  bigInt('0x08020000'),
  bigInt('0x00020204'),
  bigInt('0x00020000'),
  bigInt('0x08000204'),
  bigInt('0x08020004'),
  bigInt('0x00000000'),
  bigInt('0x00000200'),
  bigInt('0x00000004'),
  bigInt('0x08020200'),
  bigInt('0x08020004'),
  bigInt('0x08020204'),
  bigInt('0x08020000'),
  bigInt('0x08000000'),
  bigInt('0x00000204'),
  bigInt('0x00000004'),
  bigInt('0x00020200'),
  bigInt('0x00020204'),
  bigInt('0x08000200'),
  bigInt('0x00000204'),
  bigInt('0x08000000'),
  bigInt('0x08000200'),
  bigInt('0x00020204'),
  bigInt('0x08020200'),
  bigInt('0x00020004'),
  bigInt('0x00000000'),
  bigInt('0x08000200'),
  bigInt('0x08000000'),
  bigInt('0x00000200'),
  bigInt('0x08020004'),
  bigInt('0x00020000'),
  bigInt('0x00020004'),
  bigInt('0x08020204'),
  bigInt('0x00020200'),
  bigInt('0x00000004'),
  bigInt('0x08020204'),
  bigInt('0x00020200'),
  bigInt('0x00020000'),
  bigInt('0x08000204'),
  bigInt('0x08000004'),
  bigInt('0x08020000'),
  bigInt('0x00020204'),
  bigInt('0x00000000'),
  bigInt('0x00000200'),
  bigInt('0x08000004'),
  bigInt('0x08000204'),
  bigInt('0x08020200'),
  bigInt('0x08020000'),
  bigInt('0x00000204'),
  bigInt('0x00000004'),
  bigInt('0x08020004'),
];
const LUT_A2: BigInteger[] = [
  bigInt('0x80040100'),
  bigInt('0x01000100'),
  bigInt('0x80000000'),
  bigInt('0x81040100'),
  bigInt('0x00000000'),
  bigInt('0x01040000'),
  bigInt('0x81000100'),
  bigInt('0x80040000'),
  bigInt('0x01040100'),
  bigInt('0x81000000'),
  bigInt('0x01000000'),
  bigInt('0x80000100'),
  bigInt('0x81000000'),
  bigInt('0x80040100'),
  bigInt('0x00040000'),
  bigInt('0x01000000'),
  bigInt('0x81040000'),
  bigInt('0x00040100'),
  bigInt('0x00000100'),
  bigInt('0x80000000'),
  bigInt('0x00040100'),
  bigInt('0x81000100'),
  bigInt('0x01040000'),
  bigInt('0x00000100'),
  bigInt('0x80000100'),
  bigInt('0x00000000'),
  bigInt('0x80040000'),
  bigInt('0x01040100'),
  bigInt('0x01000100'),
  bigInt('0x81040000'),
  bigInt('0x81040100'),
  bigInt('0x00040000'),
  bigInt('0x81040000'),
  bigInt('0x80000100'),
  bigInt('0x00040000'),
  bigInt('0x81000000'),
  bigInt('0x00040100'),
  bigInt('0x01000100'),
  bigInt('0x80000000'),
  bigInt('0x01040000'),
  bigInt('0x81000100'),
  bigInt('0x00000000'),
  bigInt('0x00000100'),
  bigInt('0x80040000'),
  bigInt('0x00000000'),
  bigInt('0x81040000'),
  bigInt('0x01040100'),
  bigInt('0x00000100'),
  bigInt('0x01000000'),
  bigInt('0x81040100'),
  bigInt('0x80040100'),
  bigInt('0x00040000'),
  bigInt('0x81040100'),
  bigInt('0x80000000'),
  bigInt('0x01000100'),
  bigInt('0x80040100'),
  bigInt('0x80040000'),
  bigInt('0x00040100'),
  bigInt('0x01040000'),
  bigInt('0x81000100'),
  bigInt('0x80000100'),
  bigInt('0x01000000'),
  bigInt('0x81000000'),
  bigInt('0x01040100'),
];
const LUT_A3: BigInteger[] = [
  bigInt('0x04010801'),
  bigInt('0x00000000'),
  bigInt('0x00010800'),
  bigInt('0x04010000'),
  bigInt('0x04000001'),
  bigInt('0x00000801'),
  bigInt('0x04000800'),
  bigInt('0x00010800'),
  bigInt('0x00000800'),
  bigInt('0x04010001'),
  bigInt('0x00000001'),
  bigInt('0x04000800'),
  bigInt('0x00010001'),
  bigInt('0x04010800'),
  bigInt('0x04010000'),
  bigInt('0x00000001'),
  bigInt('0x00010000'),
  bigInt('0x04000801'),
  bigInt('0x04010001'),
  bigInt('0x00000800'),
  bigInt('0x00010801'),
  bigInt('0x04000000'),
  bigInt('0x00000000'),
  bigInt('0x00010001'),
  bigInt('0x04000801'),
  bigInt('0x00010801'),
  bigInt('0x04010800'),
  bigInt('0x04000001'),
  bigInt('0x04000000'),
  bigInt('0x00010000'),
  bigInt('0x00000801'),
  bigInt('0x04010801'),
  bigInt('0x00010001'),
  bigInt('0x04010800'),
  bigInt('0x04000800'),
  bigInt('0x00010801'),
  bigInt('0x04010801'),
  bigInt('0x00010001'),
  bigInt('0x04000001'),
  bigInt('0x00000000'),
  bigInt('0x04000000'),
  bigInt('0x00000801'),
  bigInt('0x00010000'),
  bigInt('0x04010001'),
  bigInt('0x00000800'),
  bigInt('0x04000000'),
  bigInt('0x00010801'),
  bigInt('0x04000801'),
  bigInt('0x04010800'),
  bigInt('0x00000800'),
  bigInt('0x00000000'),
  bigInt('0x04000001'),
  bigInt('0x00000001'),
  bigInt('0x04010801'),
  bigInt('0x00010800'),
  bigInt('0x04010000'),
  bigInt('0x04010001'),
  bigInt('0x00010000'),
  bigInt('0x00000801'),
  bigInt('0x04000800'),
  bigInt('0x04000801'),
  bigInt('0x00000001'),
  bigInt('0x04010000'),
  bigInt('0x00010800'),
];
const LUT_B0: BigInteger[] = [
  bigInt('0x00000400'),
  bigInt('0x00000020'),
  bigInt('0x00100020'),
  bigInt('0x40100000'),
  bigInt('0x40100420'),
  bigInt('0x40000400'),
  bigInt('0x00000420'),
  bigInt('0x00000000'),
  bigInt('0x00100000'),
  bigInt('0x40100020'),
  bigInt('0x40000020'),
  bigInt('0x00100400'),
  bigInt('0x40000000'),
  bigInt('0x00100420'),
  bigInt('0x00100400'),
  bigInt('0x40000020'),
  bigInt('0x40100020'),
  bigInt('0x00000400'),
  bigInt('0x40000400'),
  bigInt('0x40100420'),
  bigInt('0x00000000'),
  bigInt('0x00100020'),
  bigInt('0x40100000'),
  bigInt('0x00000420'),
  bigInt('0x40100400'),
  bigInt('0x40000420'),
  bigInt('0x00100420'),
  bigInt('0x40000000'),
  bigInt('0x40000420'),
  bigInt('0x40100400'),
  bigInt('0x00000020'),
  bigInt('0x00100000'),
  bigInt('0x40000420'),
  bigInt('0x00100400'),
  bigInt('0x40100400'),
  bigInt('0x40000020'),
  bigInt('0x00000400'),
  bigInt('0x00000020'),
  bigInt('0x00100000'),
  bigInt('0x40100400'),
  bigInt('0x40100020'),
  bigInt('0x40000420'),
  bigInt('0x00000420'),
  bigInt('0x00000000'),
  bigInt('0x00000020'),
  bigInt('0x40100000'),
  bigInt('0x40000000'),
  bigInt('0x00100020'),
  bigInt('0x00000000'),
  bigInt('0x40100020'),
  bigInt('0x00100020'),
  bigInt('0x00000420'),
  bigInt('0x40000020'),
  bigInt('0x00000400'),
  bigInt('0x40100420'),
  bigInt('0x00100000'),
  bigInt('0x00100420'),
  bigInt('0x40000000'),
  bigInt('0x40000400'),
  bigInt('0x40100420'),
  bigInt('0x40100000'),
  bigInt('0x00100420'),
  bigInt('0x00100400'),
  bigInt('0x40000400'),
];
const LUT_B1: BigInteger[] = [
  bigInt('0x00800000'),
  bigInt('0x00001000'),
  bigInt('0x00000040'),
  bigInt('0x00801042'),
  bigInt('0x00801002'),
  bigInt('0x00800040'),
  bigInt('0x00001042'),
  bigInt('0x00801000'),
  bigInt('0x00001000'),
  bigInt('0x00000002'),
  bigInt('0x00800002'),
  bigInt('0x00001040'),
  bigInt('0x00800042'),
  bigInt('0x00801002'),
  bigInt('0x00801040'),
  bigInt('0x00000000'),
  bigInt('0x00001040'),
  bigInt('0x00800000'),
  bigInt('0x00001002'),
  bigInt('0x00000042'),
  bigInt('0x00800040'),
  bigInt('0x00001042'),
  bigInt('0x00000000'),
  bigInt('0x00800002'),
  bigInt('0x00000002'),
  bigInt('0x00800042'),
  bigInt('0x00801042'),
  bigInt('0x00001002'),
  bigInt('0x00801000'),
  bigInt('0x00000040'),
  bigInt('0x00000042'),
  bigInt('0x00801040'),
  bigInt('0x00801040'),
  bigInt('0x00800042'),
  bigInt('0x00001002'),
  bigInt('0x00801000'),
  bigInt('0x00001000'),
  bigInt('0x00000002'),
  bigInt('0x00800002'),
  bigInt('0x00800040'),
  bigInt('0x00800000'),
  bigInt('0x00001040'),
  bigInt('0x00801042'),
  bigInt('0x00000000'),
  bigInt('0x00001042'),
  bigInt('0x00800000'),
  bigInt('0x00000040'),
  bigInt('0x00001002'),
  bigInt('0x00800042'),
  bigInt('0x00000040'),
  bigInt('0x00000000'),
  bigInt('0x00801042'),
  bigInt('0x00801002'),
  bigInt('0x00801040'),
  bigInt('0x00000042'),
  bigInt('0x00001000'),
  bigInt('0x00001040'),
  bigInt('0x00801002'),
  bigInt('0x00800040'),
  bigInt('0x00000042'),
  bigInt('0x00000002'),
  bigInt('0x00001042'),
  bigInt('0x00801000'),
  bigInt('0x00800002'),
];
const LUT_B2: BigInteger[] = [
  bigInt('0x10400000'),
  bigInt('0x00404010'),
  bigInt('0x00000010'),
  bigInt('0x10400010'),
  bigInt('0x10004000'),
  bigInt('0x00400000'),
  bigInt('0x10400010'),
  bigInt('0x00004010'),
  bigInt('0x00400010'),
  bigInt('0x00004000'),
  bigInt('0x00404000'),
  bigInt('0x10000000'),
  bigInt('0x10404010'),
  bigInt('0x10000010'),
  bigInt('0x10000000'),
  bigInt('0x10404000'),
  bigInt('0x00000000'),
  bigInt('0x10004000'),
  bigInt('0x00404010'),
  bigInt('0x00000010'),
  bigInt('0x10000010'),
  bigInt('0x10404010'),
  bigInt('0x00004000'),
  bigInt('0x10400000'),
  bigInt('0x10404000'),
  bigInt('0x00400010'),
  bigInt('0x10004010'),
  bigInt('0x00404000'),
  bigInt('0x00004010'),
  bigInt('0x00000000'),
  bigInt('0x00400000'),
  bigInt('0x10004010'),
  bigInt('0x00404010'),
  bigInt('0x00000010'),
  bigInt('0x10000000'),
  bigInt('0x00004000'),
  bigInt('0x10000010'),
  bigInt('0x10004000'),
  bigInt('0x00404000'),
  bigInt('0x10400010'),
  bigInt('0x00000000'),
  bigInt('0x00404010'),
  bigInt('0x00004010'),
  bigInt('0x10404000'),
  bigInt('0x10004000'),
  bigInt('0x00400000'),
  bigInt('0x10404010'),
  bigInt('0x10000000'),
  bigInt('0x10004010'),
  bigInt('0x10400000'),
  bigInt('0x00400000'),
  bigInt('0x10404010'),
  bigInt('0x00004000'),
  bigInt('0x00400010'),
  bigInt('0x10400010'),
  bigInt('0x00004010'),
  bigInt('0x00400010'),
  bigInt('0x00000000'),
  bigInt('0x10404000'),
  bigInt('0x10000010'),
  bigInt('0x10400000'),
  bigInt('0x10004010'),
  bigInt('0x00000010'),
  bigInt('0x00404000'),
];
const LUT_B3: BigInteger[] = [
  bigInt('0x00208080'),
  bigInt('0x00008000'),
  bigInt('0x20200000'),
  bigInt('0x20208080'),
  bigInt('0x00200000'),
  bigInt('0x20008080'),
  bigInt('0x20008000'),
  bigInt('0x20200000'),
  bigInt('0x20008080'),
  bigInt('0x00208080'),
  bigInt('0x00208000'),
  bigInt('0x20000080'),
  bigInt('0x20200080'),
  bigInt('0x00200000'),
  bigInt('0x00000000'),
  bigInt('0x20008000'),
  bigInt('0x00008000'),
  bigInt('0x20000000'),
  bigInt('0x00200080'),
  bigInt('0x00008080'),
  bigInt('0x20208080'),
  bigInt('0x00208000'),
  bigInt('0x20000080'),
  bigInt('0x00200080'),
  bigInt('0x20000000'),
  bigInt('0x00000080'),
  bigInt('0x00008080'),
  bigInt('0x20208000'),
  bigInt('0x00000080'),
  bigInt('0x20200080'),
  bigInt('0x20208000'),
  bigInt('0x00000000'),
  bigInt('0x00000000'),
  bigInt('0x20208080'),
  bigInt('0x00200080'),
  bigInt('0x20008000'),
  bigInt('0x00208080'),
  bigInt('0x00008000'),
  bigInt('0x20000080'),
  bigInt('0x00200080'),
  bigInt('0x20208000'),
  bigInt('0x00000080'),
  bigInt('0x00008080'),
  bigInt('0x20200000'),
  bigInt('0x20008080'),
  bigInt('0x20000000'),
  bigInt('0x20200000'),
  bigInt('0x00208000'),
  bigInt('0x20208080'),
  bigInt('0x00008080'),
  bigInt('0x00208000'),
  bigInt('0x20200080'),
  bigInt('0x00200000'),
  bigInt('0x20000080'),
  bigInt('0x20008000'),
  bigInt('0x00000000'),
  bigInt('0x00008000'),
  bigInt('0x00200000'),
  bigInt('0x20200080'),
  bigInt('0x00208080'),
  bigInt('0x20000000'),
  bigInt('0x20208000'),
  bigInt('0x00000080'),
  bigInt('0x20008080'),
];

const VALID_CHARS = '0123456789ABCDEFGHJKLMNPRSTUWXYZ';
const CONV_CHARS = { I: '1', O: '0' };

const __typeFromCardId = (cardId: string): BigInteger => {
  const upper = cardId.toUpperCase();
  if (upper.startsWith('E004')) return bigInt(1);
  if (upper.startsWith('0')) return bigInt(2);
  return bigInt(0);
};

const __checksum = (data: BigInteger[]): BigInteger => {
  let checksum = bigInt(0);

  for (let i = 0; i < 15; i++) {
    checksum = checksum.plus(bigInt((i % 3) + 1).multiply(data[i]));
  }

  while (checksum.greaterOrEquals(bigInt('0x20'))) {
    checksum = checksum.and(bigInt('0x1f')).plus(checksum.shiftRight(5));
  }

  return checksum;
};

const __ror = (val: BigInteger, amount: BigInteger): BigInteger => {
  return ((val.shiftLeft(bigInt(32).minus(amount))).and(bigInt('0xffffffff'))).or((val.shiftRight(amount)).and(bigInt('0xffffffff')));
};

const __operatorA = (off: BigInteger, state: BigInteger): BigInteger => {
  let v3 = (state.shiftRight(32)).and(bigInt('0xffffffff'));
  let v4 = state.and(bigInt('0xffffffff'));

  for (let i = 0; i < 32; i += 4) {
    const v20 = __ror(v3.xor(KEY[off.plus(i + 1).toJSNumber()]), bigInt(28));
    {
      const b0 = LUT_B0[v20.shiftRight(26).and(bigInt('0x3f')).toJSNumber()];
      const b1 = LUT_B1[v20.shiftRight(18).and(bigInt('0x3f')).toJSNumber()];
      const b2 = LUT_B2[v20.shiftRight(10).and(bigInt('0x3f')).toJSNumber()];
      const b3 = LUT_B3[v20.shiftRight(2).and(bigInt('0x3f')).toJSNumber()];

      const a0 = LUT_A0[(v3.xor(KEY[off.plus(i).toJSNumber()]).shiftRight(26)).and(bigInt('0x3f')).toJSNumber()];
      const a1 = LUT_A1[(v3.xor(KEY[off.plus(i).toJSNumber()]).shiftRight(18)).and(bigInt('0x3f')).toJSNumber()];
      const a2 = LUT_A2[(v3.xor(KEY[off.plus(i).toJSNumber()]).shiftRight(10)).and(bigInt('0x3f')).toJSNumber()];
      const a3 = LUT_A3[(v3.xor(KEY[off.plus(i).toJSNumber()]).shiftRight(2)).and(bigInt('0x3f')).toJSNumber()];

      v4 = v4.xor(b0.xor(b1).xor(b2).xor(b3).xor(a0).xor(a1).xor(a2).xor(a3));
    }

    const v21 = __ror(v4.xor(KEY[off.plus(i + 3).toJSNumber()]), bigInt(28));
    {
      const b0 = LUT_B0[v21.shiftRight(26).and(bigInt('0x3f')).toJSNumber()];
      const b1 = LUT_B1[v21.shiftRight(18).and(bigInt('0x3f')).toJSNumber()];
      const b2 = LUT_B2[v21.shiftRight(10).and(bigInt('0x3f')).toJSNumber()];
      const b3 = LUT_B3[v21.shiftRight(2).and(bigInt('0x3f')).toJSNumber()];

      const a0 = LUT_A0[(v4.xor(KEY[off.plus(i + 2).toJSNumber()]).shiftRight(26)).and(bigInt('0x3f')).toJSNumber()];
      const a1 = LUT_A1[(v4.xor(KEY[off.plus(i + 2).toJSNumber()]).shiftRight(18)).and(bigInt('0x3f')).toJSNumber()];
      const a2 = LUT_A2[(v4.xor(KEY[off.plus(i + 2).toJSNumber()]).shiftRight(10)).and(bigInt('0x3f')).toJSNumber()];
      const a3 = LUT_A3[(v4.xor(KEY[off.plus(i + 2).toJSNumber()]).shiftRight(2)).and(bigInt('0x3f')).toJSNumber()];

      v3 = v3.xor(b0.xor(b1).xor(b2).xor(b3).xor(a0).xor(a1).xor(a2).xor(a3));
    }
  }

  return (v3.and(bigInt('0xffffffff')).shiftLeft(32)).or(v4.and(bigInt('0xffffffff')));
  // return ((v3 & bigInt("0xffffffff)) << 32n) | (v4 & bigInt(0xffffffff)");
};

const __operatorB = (off: BigInteger, state: BigInteger): BigInteger => {
  let v3 = state.shiftRight(32).and(bigInt('0xffffffff'));
  let v4 = state.and(bigInt('0xffffffff'));

  for (let i = 0; i < 32; i += 4) {
    const v20 = __ror(v3.xor(KEY[off.plus(31 - i).toJSNumber()]), bigInt(28));
    {
      const a0 = LUT_A0[(v3.xor(KEY[off.plus(30 - i).toJSNumber()]).shiftRight(26)).and(bigInt('0x3f')).toJSNumber()];
      const a1 = LUT_A1[(v3.xor(KEY[off.plus(30 - i).toJSNumber()]).shiftRight(18)).and(bigInt('0x3f')).toJSNumber()];
      const a2 = LUT_A2[(v3.xor(KEY[off.plus(30 - i).toJSNumber()]).shiftRight(10)).and(bigInt('0x3f')).toJSNumber()];
      const a3 = LUT_A3[(v3.xor(KEY[off.plus(30 - i).toJSNumber()]).shiftRight(2)).and(bigInt('0x3f')).toJSNumber()];

      const b0 = LUT_B0[(v20.shiftRight(26)).and(bigInt('0x3f')).toJSNumber()];
      const b1 = LUT_B1[(v20.shiftRight(18)).and(bigInt('0x3f')).toJSNumber()];
      const b2 = LUT_B2[(v20.shiftRight(10)).and(bigInt('0x3f')).toJSNumber()];
      const b3 = LUT_B3[(v20.shiftRight(2)).and(bigInt('0x3f')).toJSNumber()];

      v4 = v4.xor(a0.xor(a1).xor(a2).xor(a3).xor(b0).xor(b1).xor(b2).xor(b3));
    }

    const v21 = __ror(v4.xor(KEY[off.plus(29 - i).toJSNumber()]), bigInt(28));
    {
      const a0 = LUT_A0[(v4.xor(KEY[off.plus(28 - i).toJSNumber()]).shiftRight(26)).and(bigInt('0x3f')).toJSNumber()];
      const a1 = LUT_A1[(v4.xor(KEY[off.plus(28 - i).toJSNumber()]).shiftRight(18)).and(bigInt('0x3f')).toJSNumber()];
      const a2 = LUT_A2[(v4.xor(KEY[off.plus(28 - i).toJSNumber()]).shiftRight(10)).and(bigInt('0x3f')).toJSNumber()];
      const a3 = LUT_A3[(v4.xor(KEY[off.plus(28 - i).toJSNumber()]).shiftRight(2)).and(bigInt('0x3f')).toJSNumber()];

      const b0 = LUT_B0[(v21.shiftRight(26)).and(bigInt('0x3f')).toJSNumber()];
      const b1 = LUT_B1[(v21.shiftRight(18)).and(bigInt('0x3f')).toJSNumber()];
      const b2 = LUT_B2[(v21.shiftRight(10)).and(bigInt('0x3f')).toJSNumber()];
      const b3 = LUT_B3[(v21.shiftRight(2).and(bigInt('0x3f'))).toJSNumber()];

      v3 = v3.xor(a0.xor(a1).xor(a2).xor(a3).xor(b0).xor(b1).xor(b2).xor(b3));
    }
  }

  return (v3.and(bigInt('0xffffffff')).shiftLeft(32)).or(v4.and(bigInt('0xffffffff')));
};

const __toInt64 = (data: BigInteger[]): BigInteger => {
  const inX = (data[0].and(bigInt('0xff'))).or((data[1].and('0xff')).shiftLeft(8)).or((data[2].and('0xff')).shiftLeft(16)).or((data[3].and('0xff')).shiftLeft(24));
  const inY = (data[4].and(bigInt('0xff'))).or((data[5].and('0xff')).shiftLeft(8)).or((data[6].and('0xff')).shiftLeft(16)).or((data[7].and('0xff')).shiftLeft(24));

  const v7 = (((inX.xor(inY.shiftRight(4))).and(bigInt('0xf0f0f0f')).shiftLeft(4)).xor(inY)).and(bigInt('0xffffffff'));
  const v8 = (((inX.xor(inY.shiftRight(4))).and(bigInt('0xf0f0f0f')).xor(inX))).and(bigInt('0xffffffff'));
  const v9 = (v7.xor(v8.shiftRight(16))).and(bigInt('0x0000ffff'));
  const v10 = (((v7.xor(v8.shiftRight(16))).shiftLeft(16)).xor(v8)).and(bigInt('0xffffffff'));
  const v11 = (v9.xor(v7)).and(bigInt('0xffffffff'));
  const v12 = (v10.xor(v11.shiftRight(2))).and(bigInt('0x33333333'));
  const v13 = (v11.xor(v12.shiftLeft(2))).and(bigInt('0xffffffff'));
  const v14 = (v12.xor(v10)).and(bigInt('0xffffffff'));
  const v15 = (v13.xor(v14.shiftRight(8))).and(bigInt('0x00ff00ff'));
  const v16 = (v14.xor(v15.shiftLeft(8))).and(bigInt('0xffffffff'));
  const v17 = __ror(v15.xor(v13), bigInt(1));
  const v18 = (v16.xor(v17)).and(bigInt('0x55555555'));
  const v3 = __ror(v18.xor(v16), bigInt(1));
  const v4 = (v18.xor(v17)).and(bigInt('0xffffffff'));

  return ((v3.and(bigInt('0xffffffff'))).shiftLeft(32n)).or(v4.and(bigInt('0xffffffff')));
};

const __fromInt64 = (data: BigInteger[], state: BigInteger): BigInteger[] => {
  const v3 = (state.shiftRight(32n)).and(bigInt('0xffffffff'));
  const v4 = state.and(bigInt('0xffffffff'));

  const v22 = __ror(v4, bigInt(31));
  const v23 = (v3.xor(v22)).and(bigInt('0x55555555'));
  const v24 = (v23.xor(v22)).and(bigInt('0xffffffff'));

  const v25 = __ror(v23.xor(v3), bigInt(31));
  const v26 = (v25.xor(v24.shiftRight(8))).and(bigInt('0x00ff00ff'));
  const v27 = (v24.xor(v26.shiftLeft(8))).and(bigInt('0xffffffff'));

  const v28 = (v26.xor(v25)).and(bigInt('0xffffffff'));
  const v29 = ((v28.shiftRight(2)).xor(v27)).and(bigInt('0x33333333'));
  const v30 = ((v29.shiftLeft(2)).xor(v28)).and(bigInt('0xffffffff'));

  const v31 = (v29.xor(v27)).and(bigInt('0xffffffff'));
  const v32 = (v30.xor(v31.shiftRight(16))).and(bigInt('0x0000ffff'));
  const v33 = (v31.xor(v32.shiftLeft(16n))).and(bigInt('0xffffffff'));

  const v34 = (v32.xor(v30)).and(bigInt('0xffffffff'));
  const v35 = (v33.xor(v34.shiftRight(4))).and(bigInt('0xf0f0f0f'));

  const outY = ((v35.shiftLeft(4)).xor(v34)).and(bigInt('0xffffffff'));
  const outX = (v35.xor(v33)).and(bigInt('0xffffffff'));

  data[0] = outX.and(bigInt('0xff'));
  data[1] = (outX.shiftRight(8)).and(bigInt('0xff'));
  data[2] = (outX.shiftRight(16)).and(bigInt('0xff'));
  data[3] = (outX.shiftRight(24)).and(bigInt('0xff'));
  data[4] = outY.and(bigInt('0xff'));
  data[5] = (outY.shiftRight(8)).and(bigInt('0xff'));
  data[6] = (outY.shiftRight(16)).and(bigInt('0xff'));
  data[7] = (outY.shiftRight(24)).and(bigInt('0xff'));

  return data;
};
const __int64ArrayToByteArray = (inp: BigInteger[]): number[] => {
  return inp.map((i) => Number(i));
};
const __byteArrayToInt64Array = (inp: number[]): BigInteger[] => {
  return inp.map((i) => bigInt(i));
};
const __int64ArrayReverse = (inp: BigInteger[]): BigInteger[] => {
  return inp.reverse();
};
const __encode = (intInt64s: BigInteger[]): BigInteger[] => {
  if (intInt64s.length !== 8) {
    return new Array(8).fill(bigInt(0));
  }

  const inp = intInt64s;
  let out = new Array(8).fill(bigInt(0));

  out = __fromInt64(out, __operatorA(bigInt('0x00'), __toInt64(inp)));
  out = __fromInt64(out, __operatorB(bigInt('0x20'), __toInt64(out)));
  out = __fromInt64(out, __operatorA(bigInt('0x40'), __toInt64(out)));

  return out;
};
const __decode = (inInt64s: BigInteger[]): BigInteger[] => {
  if (inInt64s.length !== 8) {
    return new Array(8).fill(bigInt(0));
  }

  const inp = inInt64s;
  let out = new Array(8).fill(bigInt(0));

  out = __fromInt64(out, __operatorB(bigInt('0x40'), __toInt64(inp)));
  out = __fromInt64(out, __operatorA(bigInt('0x20'), __toInt64(out)));
  out = __fromInt64(out, __operatorB(bigInt('0x00'), __toInt64(out)));
  return out;
};

export const encode = (nfcId: string): string => {
  if (nfcId.length !== 16) {
    throw Error('nfcId must be 16 in length!');
  }

  const cardBytes = Buffer.from(nfcId, 'hex');
  const cardInt64s = __byteArrayToInt64Array([...cardBytes]);

  const reverse = __int64ArrayReverse(cardInt64s);
  const ciphered = __encode(reverse);

  const bits: BigInteger[] = new Array(65).fill(bigInt(0));
  for (let i = 0; i < 64; i++) {
    bits[i] = (ciphered[bigInt(i).shiftRight(3).toJSNumber()].shiftRight(((bigInt(i).not()).and(7)))).and(1);
  }

  const groups: BigInteger[] = new Array(16).fill(bigInt(0));
  for (let i = 0; i < 13; i++) {
    groups[i] = (bits[i * 5].shiftLeft(4)).or(bits[i * 5 + 1].shiftLeft(3)).or(bits[i * 5 + 2].shiftLeft(2)).or(bits[i * 5 + 3].shiftLeft(1)).or(bits[i * 5 + 4].shiftLeft(0));
  }

  groups[13] = bigInt(1);
  groups[0] = groups[0].xor(__typeFromCardId(nfcId));

  for (let i = 0; i < 14; i++) {
    let index = i - 1;
    if (index < 0) {
      index = groups.length + (i % groups.length) - 1;
    }
    groups[i] = groups[i].xor(groups[index]);
  }

  groups[14] = __typeFromCardId(nfcId);
  groups[15] = __checksum(groups);

  let final = '';
  for (const i of groups) {
    final += VALID_CHARS[Number(i)];
  }

  return final;
};

export const decode = (cardId: string): string => {
  cardId = cardId.replaceAll(' ', '');
  cardId = cardId.replaceAll('-', '');
  cardId = cardId.toUpperCase();

  for (const [k, v] of Object.entries(CONV_CHARS)) {
    cardId = cardId.replaceAll(k, v);
  }

  if (cardId.length !== 16) {
    throw new Error('nfcId must be 16 in length!');
  }

  // ?????
  // for (let i = 0; i < cardId.length; ++i) {
  //   if (cardId.indexOf(cardId[i]) === -1) {
  //     return "";
  //   }
  // }

  const groups: BigInteger[] = Array.from(cardId).map((c) =>
    bigInt(VALID_CHARS.indexOf(c))
  );
  if (groups[14].notEquals(1) && groups[14].notEquals(2)) {
    throw new Error('invalid char!');
  }

  if (groups[15].notEquals(__checksum(groups))) {
    throw new Error('checksum error');
  }

  for (let i = 13; i > 0; i--) {
    groups[i] = groups[i].xor(groups[i - 1]);
  }
  groups[0] = groups[0].xor(groups[14]);

  const bits: BigInteger[] = new Array(64).fill(bigInt(0));
  for (let i = 0; i < 64; ++i) {
    bits[i] = (groups[Math.floor(i / 5)].shiftRight(4 - (i % 5))).and(1);
  }

  const ciphered: BigInteger[] = new Array(8).fill(bigInt(0));
  for (let i = 0; i < 64; ++i) {
    ciphered[Math.floor(i / 8)] = ciphered[Math.floor(i / 8)].or(bits[i].shiftLeft((bigInt(i).not()).and(7)));
  }

  const deciphered = __decode(ciphered);
  const reverse = __int64ArrayReverse(deciphered);
  const final = Buffer.from(__int64ArrayToByteArray(reverse));
  return final.toString('hex').toUpperCase();
};
