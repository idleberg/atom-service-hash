import { resolve } from 'path';
import Logger from './log';

const worker = new Worker(resolve(__dirname, 'hash.worker.js'));

const supportedAlgorithms = {
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
  xxhash123: 'xxHash128'
};

/**
 *
 * @param responseType
 * @param {string} url
 * @param {Object} options
 * @returns {*}
 */
function hash(contents: string | Buffer | Uint8Array | Uint16Array | Uint32Array, algorithm: string | string[] = 'sha1'): Promise<string> {
  const algorithms = Array.isArray(algorithm) ? algorithm : [algorithm];

  const prettyAlgorithms = algorithms.map(algorithm => {
    if (!Object.keys(supportedAlgorithms).includes(algorithm)) {
      throw Error(`Unsupported algorithm '${algorithm}'`);
    }

     return supportedAlgorithms[algorithm]
  }).join(', ');

  return new Promise((resolve) => {
    Logger.log(`Requesting ${prettyAlgorithms}:`, contents);
    worker.postMessage({ contents, algorithms });

    worker.onmessage = (e: MessageEvent) => {
      Logger.log(`Receiving ${prettyAlgorithms}:`, e.data);

      resolve(e.data);
    };
  });
}

export default hash;