# service-hash

> Provides hashing algorithms through a web worker

[![apm](https://flat.badgen.net/apm/license/service-hash)](https://atom.io/packages/service-hash)
[![apm](https://flat.badgen.net/apm/v/service-hash)](https://atom.io/packages/service-hash)
[![apm](https://flat.badgen.net/apm/dl/service-hash)](https://atom.io/packages/service-hash)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-service-hash)](https://circleci.com/gh/idleberg/atom-service-hash)
[![David](https://flat.badgen.net/david/dep/idleberg/atom-service-hash)](https://david-dm.org/idleberg/atom-service-hash)

## Installation

### apm

Install `service-hash` from Atom [install view](atom://settings-view/show-package?package=service-hash) or use the command-line equivalent:

`$ apm install service-hash`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone the repository as `service-hash`:

```bash
$ git clone https://github.com/idleberg/atom-service-hash service-hash
```

Install dependencies:

```bash
$ cd service-hash && npm install
```

Build source:

```bash
$ npm run build
```

## Usage

### API

`hash(input: string | Buffer | Uint8Array | Uint16Array | Uint32Array, algorithm: string | string[])`

Supported algorithms: `adler32`, `blake2b`, `blake2s`, `blake3`, `crc32`, `keccak224`, `keccak256`, `keccak384`, `keccak512`, `md4`, `md5`, `ripemd160`, `sha1`, `sha224`, `sha256`, `sha384`, `sha512`, `sm3`, `whirlpool`, `xxhash32`, `xxhash64`, `xxhash3`, `xxhash128`.

### Example

To consume the service in your package, add the following to your `package.json`:

```json
"consumedServices": {
  "service-hash": {
    "versions": {
      "0.1.0": "consumeHash"
    }
  },
  "package-deps": [
    {
      "name": "service-hash"
    }
  ]
}
```

Install `atom-package-deps` to handle the package dependency:

`npm install atom-package-deps`

Next up, let's create a package:

```js
import { CompositeDisposable, Disposable } from 'atom';

export default {
  // Consume the service
  consumeHash(hashService) {
    this.hash = hashService;

    return new Disposable(() => {
      this.hash = null;
    });
  },

  // Optional: Add a demo command
  activate() {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        "my-package:demo-command": async () =>
          await this.demoCommand(),
      })
    );
  },

  async demoCommand() {
    await this.hash(`It's demo time!`, 'sha512');
  }
};
```

Let me know if you have any [feedback][Discussions]!

## License

This work is licensed under the [MIT License](LICENSE)

[Web Workers]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
[Discussions]: https://github.com/idleberg/atom-service-hash/discussions
