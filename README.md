# service-hash

> Provides hashing algorithms through a web worker

[![License](https://img.shields.io/github/license/idleberg/atom-service-hash?color=blue&style=for-the-badge)](https://github.com/idleberg/atom-service-hash/blob/master/LICENSE)
[![Release](https://img.shields.io/github/v/release/idleberg/atom-service-hash?style=for-the-badge)](https://github.com/idleberg/atom-service-hash/releases)
[![Downloads](https://img.shields.io/pulsar/dt/service-hash?style=for-the-badge&color=slateblue)](https://web.pulsar-edit.dev/packages/service-hash)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-service-hash/default.yml?style=for-the-badge)](https://github.com/idleberg/atom-service-hash/actions)

## Installation


### Package Manager

Install `service-fetch` from the editor's [Package Manager](http://flight-manual.pulsar-editor.cc/using-atom/sections/atom-packages/) or the command-line equivalent:

```sh
$ ppm install service-fetch
```

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.pulsar\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.pulsar\packages
```

**Linux & macOS**

```bash
$ cd ~/.pulsar/packages/
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
