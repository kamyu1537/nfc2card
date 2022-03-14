// https://github.com/DragonMinded/bemaniutils/blob/22e58850047dbe9a8e4d59361ed8d69acca7b238/bemani/common/card.py
// https://github.com/skogaby/butterfly/blob/master/butterflycore/src/main/java/com/buttongames/butterflycore/cardconv/A.kt

const KEY: bigint[] = [
  BigInt(0x20d0d03c),
  BigInt(0x868ecb41),
  BigInt(0xbcd89c84),
  BigInt(0x4c0e0d0d),
  BigInt(0x84fc30ac),
  BigInt(0x4cc1890e),
  BigInt(0xfc5418a4),
  BigInt(0x02c50f44),
  BigInt(0x68acb4e0),
  BigInt(0x06cd4a4e),
  BigInt(0xcc28906c),
  BigInt(0x4f0c8ac0),
  BigInt(0xb03ca468),
  BigInt(0x884ac7c4),
  BigInt(0x389490d8),
  BigInt(0xcf80c6c2),
  BigInt(0x58d87404),
  BigInt(0xc48ec444),
  BigInt(0xb4e83c50),
  BigInt(0x498d0147),
  BigInt(0x64f454c0),
  BigInt(0x4c4701c8),
  BigInt(0xec302cc4),
  BigInt(0xc6c949c1),
  BigInt(0xc84c00f0),
  BigInt(0xcdcc49cc),
  BigInt(0x883c5cf4),
  BigInt(0x8b0fcb80),
  BigInt(0x703cc0b0),
  BigInt(0xcb820a8d),
  BigInt(0x78804c8c),
  BigInt(0x4fca830e),
  BigInt(0x80d0f03c),
  BigInt(0x8ec84f8c),
  BigInt(0x98c89c4c),
  BigInt(0xc80d878f),
  BigInt(0x54bc949c),
  BigInt(0xc801c5ce),
  BigInt(0x749078dc),
  BigInt(0xc3c80d46),
  BigInt(0x2c8070f0),
  BigInt(0x0cce4dcf),
  BigInt(0x8c3874e4),
  BigInt(0x8d448ac3),
  BigInt(0x987cac70),
  BigInt(0xc0c20ac5),
  BigInt(0x288cfc78),
  BigInt(0xc28543c8),
  BigInt(0x4c8c7434),
  BigInt(0xc50e4f8d),
  BigInt(0x8468f4b4),
  BigInt(0xcb4a0307),
  BigInt(0x2854dc98),
  BigInt(0x48430b45),
  BigInt(0x6858fce8),
  BigInt(0x4681cd49),
  BigInt(0xd04808ec),
  BigInt(0x458d0fcb),
  BigInt(0xe0a48ce4),
  BigInt(0x880f8fce),
  BigInt(0x7434b8fc),
  BigInt(0xce080a8e),
  BigInt(0x5860fc6c),
  BigInt(0x46c886cc),
  BigInt(0xd01098a4),
  BigInt(0xce090b8c),
  BigInt(0x1044cc2c),
  BigInt(0x86898e0f),
  BigInt(0xd0809c3c),
  BigInt(0x4a05860f),
  BigInt(0x54b4f80c),
  BigInt(0x4008870e),
  BigInt(0x1480b88c),
  BigInt(0x0ac8854f),
  BigInt(0x1c9034cc),
  BigInt(0x08444c4e),
  BigInt(0x0cb83c64),
  BigInt(0x41c08cc6),
  BigInt(0x1c083460),
  BigInt(0xc0c603ce),
  BigInt(0x2ca0645c),
  BigInt(0x818246cb),
  BigInt(0x0408e454),
  BigInt(0xc5464487),
  BigInt(0x88607c18),
  BigInt(0xc1424187),
  BigInt(0x284c7c90),
  BigInt(0xc1030509),
  BigInt(0x40486c94),
  BigInt(0x4603494b),
  BigInt(0xe0404ce4),
  BigInt(0x4109094d),
  BigInt(0x60443ce4),
  BigInt(0x4c0b8b8d),
  BigInt(0xe054e8bc),
  BigInt(0x02008e89),
];
const LUT_A0: bigint[] = [
  BigInt(0x02080008),
  BigInt(0x02082000),
  BigInt(0x00002008),
  BigInt(0x00000000),
  BigInt(0x02002000),
  BigInt(0x00080008),
  BigInt(0x02080000),
  BigInt(0x02082008),
  BigInt(0x00000008),
  BigInt(0x02000000),
  BigInt(0x00082000),
  BigInt(0x00002008),
  BigInt(0x00082008),
  BigInt(0x02002008),
  BigInt(0x02000008),
  BigInt(0x02080000),
  BigInt(0x00002000),
  BigInt(0x00082008),
  BigInt(0x00080008),
  BigInt(0x02002000),
  BigInt(0x02082008),
  BigInt(0x02000008),
  BigInt(0x00000000),
  BigInt(0x00082000),
  BigInt(0x02000000),
  BigInt(0x00080000),
  BigInt(0x02002008),
  BigInt(0x02080008),
  BigInt(0x00080000),
  BigInt(0x00002000),
  BigInt(0x02082000),
  BigInt(0x00000008),
  BigInt(0x00080000),
  BigInt(0x00002000),
  BigInt(0x02000008),
  BigInt(0x02082008),
  BigInt(0x00002008),
  BigInt(0x02000000),
  BigInt(0x00000000),
  BigInt(0x00082000),
  BigInt(0x02080008),
  BigInt(0x02002008),
  BigInt(0x02002000),
  BigInt(0x00080008),
  BigInt(0x02082000),
  BigInt(0x00000008),
  BigInt(0x00080008),
  BigInt(0x02002000),
  BigInt(0x02082008),
  BigInt(0x00080000),
  BigInt(0x02080000),
  BigInt(0x02000008),
  BigInt(0x00082000),
  BigInt(0x00002008),
  BigInt(0x02002008),
  BigInt(0x02080000),
  BigInt(0x00000008),
  BigInt(0x02082000),
  BigInt(0x00082008),
  BigInt(0x00000000),
  BigInt(0x02000000),
  BigInt(0x02080008),
  BigInt(0x00002000),
  BigInt(0x00082008),
];
const LUT_A1: bigint[] = [
  BigInt(0x08000004),
  BigInt(0x00020004),
  BigInt(0x00000000),
  BigInt(0x08020200),
  BigInt(0x00020004),
  BigInt(0x00000200),
  BigInt(0x08000204),
  BigInt(0x00020000),
  BigInt(0x00000204),
  BigInt(0x08020204),
  BigInt(0x00020200),
  BigInt(0x08000000),
  BigInt(0x08000200),
  BigInt(0x08000004),
  BigInt(0x08020000),
  BigInt(0x00020204),
  BigInt(0x00020000),
  BigInt(0x08000204),
  BigInt(0x08020004),
  BigInt(0x00000000),
  BigInt(0x00000200),
  BigInt(0x00000004),
  BigInt(0x08020200),
  BigInt(0x08020004),
  BigInt(0x08020204),
  BigInt(0x08020000),
  BigInt(0x08000000),
  BigInt(0x00000204),
  BigInt(0x00000004),
  BigInt(0x00020200),
  BigInt(0x00020204),
  BigInt(0x08000200),
  BigInt(0x00000204),
  BigInt(0x08000000),
  BigInt(0x08000200),
  BigInt(0x00020204),
  BigInt(0x08020200),
  BigInt(0x00020004),
  BigInt(0x00000000),
  BigInt(0x08000200),
  BigInt(0x08000000),
  BigInt(0x00000200),
  BigInt(0x08020004),
  BigInt(0x00020000),
  BigInt(0x00020004),
  BigInt(0x08020204),
  BigInt(0x00020200),
  BigInt(0x00000004),
  BigInt(0x08020204),
  BigInt(0x00020200),
  BigInt(0x00020000),
  BigInt(0x08000204),
  BigInt(0x08000004),
  BigInt(0x08020000),
  BigInt(0x00020204),
  BigInt(0x00000000),
  BigInt(0x00000200),
  BigInt(0x08000004),
  BigInt(0x08000204),
  BigInt(0x08020200),
  BigInt(0x08020000),
  BigInt(0x00000204),
  BigInt(0x00000004),
  BigInt(0x08020004),
];
const LUT_A2: bigint[] = [
  BigInt(0x80040100),
  BigInt(0x01000100),
  BigInt(0x80000000),
  BigInt(0x81040100),
  BigInt(0x00000000),
  BigInt(0x01040000),
  BigInt(0x81000100),
  BigInt(0x80040000),
  BigInt(0x01040100),
  BigInt(0x81000000),
  BigInt(0x01000000),
  BigInt(0x80000100),
  BigInt(0x81000000),
  BigInt(0x80040100),
  BigInt(0x00040000),
  BigInt(0x01000000),
  BigInt(0x81040000),
  BigInt(0x00040100),
  BigInt(0x00000100),
  BigInt(0x80000000),
  BigInt(0x00040100),
  BigInt(0x81000100),
  BigInt(0x01040000),
  BigInt(0x00000100),
  BigInt(0x80000100),
  BigInt(0x00000000),
  BigInt(0x80040000),
  BigInt(0x01040100),
  BigInt(0x01000100),
  BigInt(0x81040000),
  BigInt(0x81040100),
  BigInt(0x00040000),
  BigInt(0x81040000),
  BigInt(0x80000100),
  BigInt(0x00040000),
  BigInt(0x81000000),
  BigInt(0x00040100),
  BigInt(0x01000100),
  BigInt(0x80000000),
  BigInt(0x01040000),
  BigInt(0x81000100),
  BigInt(0x00000000),
  BigInt(0x00000100),
  BigInt(0x80040000),
  BigInt(0x00000000),
  BigInt(0x81040000),
  BigInt(0x01040100),
  BigInt(0x00000100),
  BigInt(0x01000000),
  BigInt(0x81040100),
  BigInt(0x80040100),
  BigInt(0x00040000),
  BigInt(0x81040100),
  BigInt(0x80000000),
  BigInt(0x01000100),
  BigInt(0x80040100),
  BigInt(0x80040000),
  BigInt(0x00040100),
  BigInt(0x01040000),
  BigInt(0x81000100),
  BigInt(0x80000100),
  BigInt(0x01000000),
  BigInt(0x81000000),
  BigInt(0x01040100),
];
const LUT_A3: bigint[] = [
  BigInt(0x04010801),
  BigInt(0x00000000),
  BigInt(0x00010800),
  BigInt(0x04010000),
  BigInt(0x04000001),
  BigInt(0x00000801),
  BigInt(0x04000800),
  BigInt(0x00010800),
  BigInt(0x00000800),
  BigInt(0x04010001),
  BigInt(0x00000001),
  BigInt(0x04000800),
  BigInt(0x00010001),
  BigInt(0x04010800),
  BigInt(0x04010000),
  BigInt(0x00000001),
  BigInt(0x00010000),
  BigInt(0x04000801),
  BigInt(0x04010001),
  BigInt(0x00000800),
  BigInt(0x00010801),
  BigInt(0x04000000),
  BigInt(0x00000000),
  BigInt(0x00010001),
  BigInt(0x04000801),
  BigInt(0x00010801),
  BigInt(0x04010800),
  BigInt(0x04000001),
  BigInt(0x04000000),
  BigInt(0x00010000),
  BigInt(0x00000801),
  BigInt(0x04010801),
  BigInt(0x00010001),
  BigInt(0x04010800),
  BigInt(0x04000800),
  BigInt(0x00010801),
  BigInt(0x04010801),
  BigInt(0x00010001),
  BigInt(0x04000001),
  BigInt(0x00000000),
  BigInt(0x04000000),
  BigInt(0x00000801),
  BigInt(0x00010000),
  BigInt(0x04010001),
  BigInt(0x00000800),
  BigInt(0x04000000),
  BigInt(0x00010801),
  BigInt(0x04000801),
  BigInt(0x04010800),
  BigInt(0x00000800),
  BigInt(0x00000000),
  BigInt(0x04000001),
  BigInt(0x00000001),
  BigInt(0x04010801),
  BigInt(0x00010800),
  BigInt(0x04010000),
  BigInt(0x04010001),
  BigInt(0x00010000),
  BigInt(0x00000801),
  BigInt(0x04000800),
  BigInt(0x04000801),
  BigInt(0x00000001),
  BigInt(0x04010000),
  BigInt(0x00010800),
];
const LUT_B0: bigint[] = [
  BigInt(0x00000400),
  BigInt(0x00000020),
  BigInt(0x00100020),
  BigInt(0x40100000),
  BigInt(0x40100420),
  BigInt(0x40000400),
  BigInt(0x00000420),
  BigInt(0x00000000),
  BigInt(0x00100000),
  BigInt(0x40100020),
  BigInt(0x40000020),
  BigInt(0x00100400),
  BigInt(0x40000000),
  BigInt(0x00100420),
  BigInt(0x00100400),
  BigInt(0x40000020),
  BigInt(0x40100020),
  BigInt(0x00000400),
  BigInt(0x40000400),
  BigInt(0x40100420),
  BigInt(0x00000000),
  BigInt(0x00100020),
  BigInt(0x40100000),
  BigInt(0x00000420),
  BigInt(0x40100400),
  BigInt(0x40000420),
  BigInt(0x00100420),
  BigInt(0x40000000),
  BigInt(0x40000420),
  BigInt(0x40100400),
  BigInt(0x00000020),
  BigInt(0x00100000),
  BigInt(0x40000420),
  BigInt(0x00100400),
  BigInt(0x40100400),
  BigInt(0x40000020),
  BigInt(0x00000400),
  BigInt(0x00000020),
  BigInt(0x00100000),
  BigInt(0x40100400),
  BigInt(0x40100020),
  BigInt(0x40000420),
  BigInt(0x00000420),
  BigInt(0x00000000),
  BigInt(0x00000020),
  BigInt(0x40100000),
  BigInt(0x40000000),
  BigInt(0x00100020),
  BigInt(0x00000000),
  BigInt(0x40100020),
  BigInt(0x00100020),
  BigInt(0x00000420),
  BigInt(0x40000020),
  BigInt(0x00000400),
  BigInt(0x40100420),
  BigInt(0x00100000),
  BigInt(0x00100420),
  BigInt(0x40000000),
  BigInt(0x40000400),
  BigInt(0x40100420),
  BigInt(0x40100000),
  BigInt(0x00100420),
  BigInt(0x00100400),
  BigInt(0x40000400),
];
const LUT_B1: bigint[] = [
  BigInt(0x00800000),
  BigInt(0x00001000),
  BigInt(0x00000040),
  BigInt(0x00801042),
  BigInt(0x00801002),
  BigInt(0x00800040),
  BigInt(0x00001042),
  BigInt(0x00801000),
  BigInt(0x00001000),
  BigInt(0x00000002),
  BigInt(0x00800002),
  BigInt(0x00001040),
  BigInt(0x00800042),
  BigInt(0x00801002),
  BigInt(0x00801040),
  BigInt(0x00000000),
  BigInt(0x00001040),
  BigInt(0x00800000),
  BigInt(0x00001002),
  BigInt(0x00000042),
  BigInt(0x00800040),
  BigInt(0x00001042),
  BigInt(0x00000000),
  BigInt(0x00800002),
  BigInt(0x00000002),
  BigInt(0x00800042),
  BigInt(0x00801042),
  BigInt(0x00001002),
  BigInt(0x00801000),
  BigInt(0x00000040),
  BigInt(0x00000042),
  BigInt(0x00801040),
  BigInt(0x00801040),
  BigInt(0x00800042),
  BigInt(0x00001002),
  BigInt(0x00801000),
  BigInt(0x00001000),
  BigInt(0x00000002),
  BigInt(0x00800002),
  BigInt(0x00800040),
  BigInt(0x00800000),
  BigInt(0x00001040),
  BigInt(0x00801042),
  BigInt(0x00000000),
  BigInt(0x00001042),
  BigInt(0x00800000),
  BigInt(0x00000040),
  BigInt(0x00001002),
  BigInt(0x00800042),
  BigInt(0x00000040),
  BigInt(0x00000000),
  BigInt(0x00801042),
  BigInt(0x00801002),
  BigInt(0x00801040),
  BigInt(0x00000042),
  BigInt(0x00001000),
  BigInt(0x00001040),
  BigInt(0x00801002),
  BigInt(0x00800040),
  BigInt(0x00000042),
  BigInt(0x00000002),
  BigInt(0x00001042),
  BigInt(0x00801000),
  BigInt(0x00800002),
];
const LUT_B2: bigint[] = [
  BigInt(0x10400000),
  BigInt(0x00404010),
  BigInt(0x00000010),
  BigInt(0x10400010),
  BigInt(0x10004000),
  BigInt(0x00400000),
  BigInt(0x10400010),
  BigInt(0x00004010),
  BigInt(0x00400010),
  BigInt(0x00004000),
  BigInt(0x00404000),
  BigInt(0x10000000),
  BigInt(0x10404010),
  BigInt(0x10000010),
  BigInt(0x10000000),
  BigInt(0x10404000),
  BigInt(0x00000000),
  BigInt(0x10004000),
  BigInt(0x00404010),
  BigInt(0x00000010),
  BigInt(0x10000010),
  BigInt(0x10404010),
  BigInt(0x00004000),
  BigInt(0x10400000),
  BigInt(0x10404000),
  BigInt(0x00400010),
  BigInt(0x10004010),
  BigInt(0x00404000),
  BigInt(0x00004010),
  BigInt(0x00000000),
  BigInt(0x00400000),
  BigInt(0x10004010),
  BigInt(0x00404010),
  BigInt(0x00000010),
  BigInt(0x10000000),
  BigInt(0x00004000),
  BigInt(0x10000010),
  BigInt(0x10004000),
  BigInt(0x00404000),
  BigInt(0x10400010),
  BigInt(0x00000000),
  BigInt(0x00404010),
  BigInt(0x00004010),
  BigInt(0x10404000),
  BigInt(0x10004000),
  BigInt(0x00400000),
  BigInt(0x10404010),
  BigInt(0x10000000),
  BigInt(0x10004010),
  BigInt(0x10400000),
  BigInt(0x00400000),
  BigInt(0x10404010),
  BigInt(0x00004000),
  BigInt(0x00400010),
  BigInt(0x10400010),
  BigInt(0x00004010),
  BigInt(0x00400010),
  BigInt(0x00000000),
  BigInt(0x10404000),
  BigInt(0x10000010),
  BigInt(0x10400000),
  BigInt(0x10004010),
  BigInt(0x00000010),
  BigInt(0x00404000),
];
const LUT_B3: bigint[] = [
  BigInt(0x00208080),
  BigInt(0x00008000),
  BigInt(0x20200000),
  BigInt(0x20208080),
  BigInt(0x00200000),
  BigInt(0x20008080),
  BigInt(0x20008000),
  BigInt(0x20200000),
  BigInt(0x20008080),
  BigInt(0x00208080),
  BigInt(0x00208000),
  BigInt(0x20000080),
  BigInt(0x20200080),
  BigInt(0x00200000),
  BigInt(0x00000000),
  BigInt(0x20008000),
  BigInt(0x00008000),
  BigInt(0x20000000),
  BigInt(0x00200080),
  BigInt(0x00008080),
  BigInt(0x20208080),
  BigInt(0x00208000),
  BigInt(0x20000080),
  BigInt(0x00200080),
  BigInt(0x20000000),
  BigInt(0x00000080),
  BigInt(0x00008080),
  BigInt(0x20208000),
  BigInt(0x00000080),
  BigInt(0x20200080),
  BigInt(0x20208000),
  BigInt(0x00000000),
  BigInt(0x00000000),
  BigInt(0x20208080),
  BigInt(0x00200080),
  BigInt(0x20008000),
  BigInt(0x00208080),
  BigInt(0x00008000),
  BigInt(0x20000080),
  BigInt(0x00200080),
  BigInt(0x20208000),
  BigInt(0x00000080),
  BigInt(0x00008080),
  BigInt(0x20200000),
  BigInt(0x20008080),
  BigInt(0x20000000),
  BigInt(0x20200000),
  BigInt(0x00208000),
  BigInt(0x20208080),
  BigInt(0x00008080),
  BigInt(0x00208000),
  BigInt(0x20200080),
  BigInt(0x00200000),
  BigInt(0x20000080),
  BigInt(0x20008000),
  BigInt(0x00000000),
  BigInt(0x00008000),
  BigInt(0x00200000),
  BigInt(0x20200080),
  BigInt(0x00208080),
  BigInt(0x20000000),
  BigInt(0x20208000),
  BigInt(0x00000080),
  BigInt(0x20008080),
];

const VALID_CHARS = '0123456789ABCDEFGHJKLMNPRSTUWXYZ';
const CONV_CHARS = { 'I': '1', 'O': '0' };

const __typeFromCardId = (cardId: string): bigint => {
  const upper = cardId.toUpperCase();
  if (upper.startsWith('E004')) return 1n;
  if (upper.startsWith('0')) return 2n;
  return 0n;
};
const __checksum = (data: bigint[]): bigint => {
  let checksum = 0n;

  for (let i = 0n; i < 15n; i++) {
    checksum += ((i % 3n) + 1n) * data[Number(i)];
  }

  while (checksum >= BigInt(0x20)) {
    checksum = (checksum & BigInt(0x1f)) + (checksum >> 5n);
  }

  return checksum;
};

const __ror = (val: bigint, amount: bigint): bigint => {
  return ((val << (32n - amount)) & BigInt(0xffffffff)) | ((val >> amount) & BigInt(0xffffffff));
};

const __operatorA = (off: bigint, state: bigint): bigint => {
  let v3 = (state >> 32n) & BigInt(0xffffffff);
  let v4 = state & BigInt(0xffffffff);

  for (let i = 0n; i < 32n; i += 4n) {
    const v20 = __ror(v3 ^ KEY[Number(off + i + 1n)], 28n);

    v4 ^=
      LUT_B0[Number((v20 >> 26n) & BigInt(0x3f))] ^
      LUT_B1[Number((v20 >> 18n) & BigInt(0x3f))] ^
      LUT_B2[Number((v20 >> 10n) & BigInt(0x3f))] ^
      LUT_B3[Number((v20 >> 2n) & BigInt(0x3f))] ^
      LUT_A0[Number(((v3 ^ KEY[Number(off + i)]) >> 26n) & BigInt(0x3f))] ^
      LUT_A1[Number(((v3 ^ KEY[Number(off + i)]) >> 18n) & BigInt(0x3f))] ^
      LUT_A2[Number(((v3 ^ KEY[Number(off + i)]) >> 10n) & BigInt(0x3f))] ^
      LUT_A3[Number(((v3 ^ KEY[Number(off + i)]) >> 2n) & BigInt(0x3f))];

    const v21 = __ror(v4 ^ KEY[Number(off + i + 3n)], 28n);

    v3 ^=
      LUT_B0[Number((v21 >> 26n) & BigInt(0x3f))] ^
      LUT_B1[Number((v21 >> 18n) & BigInt(0x3f))] ^
      LUT_B2[Number((v21 >> 10n) & BigInt(0x3f))] ^
      LUT_B3[Number((v21 >> 2n) & BigInt(0x3f))] ^
      LUT_A0[Number(((v4 ^ KEY[Number(off + i + 2n)]) >> 26n) & BigInt(0x3f))] ^
      LUT_A1[Number(((v4 ^ KEY[Number(off + i + 2n)]) >> 18n) & BigInt(0x3f))] ^
      LUT_A2[Number(((v4 ^ KEY[Number(off + i + 2n)]) >> 10n) & BigInt(0x3f))] ^
      LUT_A3[Number(((v4 ^ KEY[Number(off + i + 2n)]) >> 2n) & BigInt(0x3f))];
  }

  return ((v3 & BigInt(0xffffffff)) << 32n) | (v4 & BigInt(0xffffffff));
};
const __operatorB = (off: bigint, state: bigint): bigint => {
  let v3 = (state >> 32n) & BigInt(0xffffffff);
  let v4 = state & BigInt(0xffffffff);

  for (let i = 0n; i < 32n; i += 4n) {
    const v20 = __ror(v3 ^ KEY[Number(off + 31n - i)], 28n);

    v4 ^=
      LUT_A0[Number(((v3 ^ KEY[Number(off + 30n - i)]) >> 26n) & BigInt(0x3f))] ^
      LUT_A1[Number(((v3 ^ KEY[Number(off + 30n - i)]) >> 18n) & BigInt(0x3f))] ^
      LUT_A2[Number(((v3 ^ KEY[Number(off + 30n - i)]) >> 10n) & BigInt(0x3f))] ^
      LUT_A3[Number(((v3 ^ KEY[Number(off + 30n - i)]) >> 2n) & BigInt(0x3f))] ^
      LUT_B0[Number((v20 >> 26n) & BigInt(0x3f))] ^
      LUT_B1[Number((v20 >> 18n) & BigInt(0x3f))] ^
      LUT_B2[Number((v20 >> 10n) & BigInt(0x3f))] ^
      LUT_B3[Number((v20 >> 2n) & BigInt(0x3f))];

    const v21 = __ror(v4 ^ KEY[Number(off + 29n - i)], 28n);

    v3 ^=
      LUT_A0[Number(((v4 ^ KEY[Number(off + 28n - i)]) >> 26n) & BigInt(0x3f))] ^
      LUT_A1[Number(((v4 ^ KEY[Number(off + 28n - i)]) >> 18n) & BigInt(0x3f))] ^
      LUT_A2[Number(((v4 ^ KEY[Number(off + 28n - i)]) >> 10n) & BigInt(0x3f))] ^
      LUT_A3[Number(((v4 ^ KEY[Number(off + 28n - i)]) >> 2n) & BigInt(0x3f))] ^
      LUT_B0[Number((v21 >> 26n) & BigInt(0x3f))] ^
      LUT_B1[Number((v21 >> 18n) & BigInt(0x3f))] ^
      LUT_B2[Number((v21 >> 10n) & BigInt(0x3f))] ^
      LUT_B3[Number((v21 >> 2n) & BigInt(0x3f))];
  }

  return ((v3 & BigInt(0xffffffff)) << 32n) | (v4 & BigInt(0xffffffff));
};
const __toInt64 = (data: bigint[]): bigint => {
  const inX =
    (data[0] & BigInt(0xff)) |
    ((data[1] & BigInt(0xff)) << 8n) |
    ((data[2] & BigInt(0xff)) << 16n) |
    ((data[3] & BigInt(0xff)) << 24n);

  const inY =
    (data[4] & BigInt(0xff)) |
    ((data[5] & BigInt(0xff)) << 8n) |
    ((data[6] & BigInt(0xff)) << 16n) |
    ((data[7] & BigInt(0xff)) << 24n);

  const v7 = ((((inX ^ (inY >> 4n)) & BigInt(0xf0f0f0f)) << 4n) ^ inY) & BigInt(0xffffffff);
  const v8 = (((inX ^ (inY >> 4n)) & BigInt(0xf0f0f0f)) ^ inX) & BigInt(0xffffffff);
  const v9 = (v7 ^ (v8 >> 16n)) & BigInt(0x0000ffff);
  const v10 = (((v7 ^ (v8 >> 16n)) << 16n) ^ v8) & BigInt(0xffffffff);
  const v11 = (v9 ^ v7) & BigInt(0xffffffff);
  const v12 = (v10 ^ (v11 >> 2n)) & BigInt(0x33333333);
  const v13 = (v11 ^ (v12 << 2n)) & BigInt(0xffffffff);
  const v14 = (v12 ^ v10) & BigInt(0xffffffff);
  const v15 = (v13 ^ (v14 >> 8n)) & BigInt(0x00ff00ff);
  const v16 = (v14 ^ (v15 << 8n)) & BigInt(0xffffffff);
  const v17 = __ror(v15 ^ v13, 1n);
  const v18 = (v16 ^ v17) & BigInt(0x55555555);
  const v3 = __ror(v18 ^ v16, 1n);
  const v4 = (v18 ^ v17) & BigInt(0xffffffff);

  return ((v3 & BigInt(0xffffffff)) << 32n) | (v4 & BigInt(0xffffffff));
};
const __fromInt64 = (data: bigint[], state: bigint): bigint[] => {
  const v3 = (state >> 32n) & BigInt(0xffffffff);
  const v4 = state & BigInt(0xffffffff);

  const v22 = __ror(v4, 31n);
  const v23 = (v3 ^ v22) & BigInt(0x55555555);
  const v24 = (v23 ^ v22) & BigInt(0xFFFFFFFF);

  const v25 = __ror(v23 ^ v3, 31n);
  const v26 = (v25 ^ (v24 >> 8n)) & BigInt(0x00FF00FF);
  const v27 = (v24 ^ (v26 << 8n)) & BigInt(0xFFFFFFFF);

  const v28 = (v26 ^ v25) & BigInt(0xFFFFFFFF);
  const v29 = ((v28 >> 2n) ^ v27) & BigInt(0x33333333);
  const v30 = ((v29 << 2n) ^ v28) & BigInt(0xFFFFFFFF);

  const v31 = (v29 ^ v27) & BigInt(0xffffffff);
  const v32 = (v30 ^ (v31 >> 16n)) & BigInt(0x0000ffff);
  const v33 = (v31 ^ (v32 << 16n)) & BigInt(0xffffffff);

  const v34 = (v32 ^ v30) & BigInt(0xffffffff);
  const v35 = (v33 ^ (v34 >> 4n)) & BigInt(0xf0f0f0f);

  const outY = ((v35 << 4n) ^ v34) & BigInt(0xffffffff);
  const outX = (v35 ^ v33) & BigInt(0xffffffff);

  data[0] = outX & BigInt(0xff);
  data[1] = (outX >> 8n) & BigInt(0xff);
  data[2] = (outX >> 16n) & BigInt(0xff);
  data[3] = (outX >> 24n) & BigInt(0xff);
  data[4] = outY & BigInt(0xff);
  data[5] = (outY >> 8n) & BigInt(0xff);
  data[6] = (outY >> 16n) & BigInt(0xff);
  data[7] = (outY >> 24n) & BigInt(0xff);

  return data;
};
const __int64ArrayToByteArray = (inp: bigint[]): number[] => {
  return inp.map(i => Number(i));
};
const __byteArrayToInt64Array = (inp: number[]): bigint[] => {
  return inp.map(i => BigInt(i));
};
const __int64ArrayReverse = (inp: bigint[]): bigint[] => {
  return inp.reverse();
};
const __encode = (intInt64s: bigint[]): bigint[] => {
  if (intInt64s.length !== 8) {
    return new Array(8).fill(0n);
  }

  const inp = intInt64s;
  let out = new Array(8).fill(0n);

  out = __fromInt64(out, __operatorA(BigInt(0x00), __toInt64(inp)));
  out = __fromInt64(out, __operatorB(BigInt(0x20), __toInt64(out)));
  out = __fromInt64(out, __operatorA(BigInt(0x40), __toInt64(out)));

  return out;
};
const __decode = (inInt64s: bigint[]): bigint[] => {
  if (inInt64s.length !== 8) {
    return new Array(8).fill(0n);
  }

  const inp = inInt64s;
  let out = new Array(8).fill(0n);


  out = __fromInt64(out, __operatorB(BigInt(0x40), __toInt64(inp)));
  out = __fromInt64(out, __operatorA(BigInt(0x20), __toInt64(out)));
  out = __fromInt64(out, __operatorB(BigInt(0x00), __toInt64(out)));
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


  const bits: bigint[] = new Array(65).fill(0n);
  for (let i = 0n; i < 64n; i++) {
    bits[Number(i)] = (ciphered[Number(i >> 3n)] >> (~i & 7n)) & 1n;
  }

  const groups: bigint[] = new Array(16).fill(0n);
  for (let i = 0n; i < 13n; i++) {
    groups[Number(i)] =
      (bits[Number(i * 5n)] << 4n) |
      (bits[Number(i * 5n + 1n)] << 3n) |
      (bits[Number(i * 5n + 2n)] << 2n) |
      (bits[Number(i * 5n + 3n)] << 1n) |
      (bits[Number(i * 5n + 4n)] << 0n);
  }

  groups[13] = 1n;
  groups[0] ^= __typeFromCardId(nfcId);

  for (let i = 0n; i < 14n; i++) {
    let index = i - 1n;
    if (index < 0n) {
      index = BigInt(groups.length) + (i % BigInt(groups.length)) - 1n;
    }
    groups[Number(i)] ^= groups[Number(index)];
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

  const groups: bigint[] = Array.from(cardId).map(c => BigInt(VALID_CHARS.indexOf(c)));
  if (groups[14] !== 1n && groups[14] !== 2n) {
    throw new Error('invalid char!');
  }

  if (groups[15] !== __checksum(groups)) {
    throw new Error('checksum error');
  }

  for (let i = 13; i > 0; i--) {
    groups[i] ^= groups[i - 1];
  }
  groups[0] ^= groups[14];

  const bits: bigint[] = new Array(64).fill(0n);
  for (let i = 0; i < 64; ++i) {
    bits[i] = ((groups[Math.floor(i / 5)] >> BigInt(4 - (i % 5))) & 1n);
  }

  const ciphered: bigint[] = new Array(8).fill(0n);
  for (let i = 0n; i < 64n; ++i) {
    ciphered[Number(i / 8n)] |= bits[Number(i)] << (~i & 7n);
  }

  const deciphered = __decode(ciphered);
  const reverse = __int64ArrayReverse(deciphered);
  const final = Buffer.from(__int64ArrayToByteArray(reverse));
  return final.toString('hex').toUpperCase();
};
