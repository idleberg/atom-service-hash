import * as hashWasm from 'hash-wasm';

const ctx: Worker = self as any;

onmessage = async (e: MessageEvent): Promise<void> => {
  const { contents, algorithms } = e.data;

  const hashes = {};

  await Promise.all(algorithms.map(async algorithm => {
    hashes[algorithm] = await hashWasm[algorithm](contents);
  }));

  ctx.postMessage(
    algorithms.length === 1 ? hashes[algorithms[0]] : hashes,
    null
  );
};
