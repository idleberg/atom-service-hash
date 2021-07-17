function mapAlgorithm(): unknown {
  return {
    adler32: 'Adler-32',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    crc32: 'CRC32',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    md4: 'MD4',
    md5: 'MD5',
    ripemd160: 'RIPEMD-160',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sm3: 'SM3',
    whirlpool: 'Whirlpool',
    xxhash32: 'xxHash32',
    xxhash64: 'xxHash64',
    xxhash3: 'xxHash3',
    xxhash128: 'xxHash128'
  }
}

export {
  mapAlgorithm
};