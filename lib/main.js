var k=Object.create;var i=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var p=t=>i(t,"__esModule",{value:!0});var A=(t,r)=>{p(t);for(var e in r)i(t,e,{get:r[e],enumerable:!0})},H=(t,r,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of b(r))!w.call(t,s)&&s!=="default"&&i(t,s,{get:()=>r[s],enumerable:!(e=y(r,s))||e.enumerable});return t},h=t=>H(p(i(t!=null?k(x(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);A(exports,{default:()=>C});var f=h(require("atom"));var c="service-hash";function n(t,r){for(var e=0,s=r.length,o=t.length;e<s;e++,o++)t[o]=r[e];return t}var D=function(){function t(r){r===void 0&&(r={}),this.name=r.name,this.styleSheet=`
      background-color: `+(r.backgroundColor||"darkgrey")+`;
      border-radius: 2px;
      color: `+(r.color||"white")+`;
      line-height: 1.5;
      padding: 1px 4px;
      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);
    `}return t.prototype.__console__=function(r){for(var e,s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];!(atom==null?void 0:atom.inDevMode())||(s.unshift("%c"+this.name+"%c",this.styleSheet,""),(e=window.console)[r].apply(e,s))},t.prototype.debug=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.__console__.apply(this,n(["debug"],r))},t.prototype.error=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.__console__.apply(this,n(["error"],r))},t.prototype.info=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.__console__.apply(this,n(["info"],r))},t.prototype.log=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.__console__.apply(this,n(["log"],r))},t.prototype.trace=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.__console__.apply(this,n(["trace"],r))},t.prototype.warn=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];this.__console__.apply(this,n(["warn"],r))},t}(),g=D;var a=new g({name:c,backgroundColor:"black",color:"lightsalmon"});var m=h(require("path"));var d=new Worker((0,m.resolve)(__dirname,"hash.worker.js")),u={adler32:"Adler-32",blake2b:"BLAKE2b",blake2s:"BLAKE2s",blake3:"BLAKE3",crc32:"CRC32",keccak224:"Keccak-224",keccak256:"Keccak-256",keccak384:"Keccak-384",keccak512:"Keccak-512",md4:"MD4",md5:"MD5",ripemd160:"RIPEMD-160",sha1:"SHA-1",sha224:"SHA-224",sha256:"SHA-256",sha384:"SHA-384",sha512:"SHA-512",sm3:"SM3",whirlpool:"Whirlpool",xxhash32:"xxHash32",xxhash64:"xxHash64",xxhash3:"xxHash3",xxhash123:"xxHash128"};function S(t,r="sha1"){let e=Array.isArray(r)?r:[r],s=e.map(o=>{if(!Object.keys(u).includes(o))throw Error(`Unsupported algorithm '${o}'`);return u[o]}).join(", ");return new Promise(o=>{a.log(`Requesting ${s}:`,t),d.postMessage({contents:t,algorithms:e}),d.onmessage=l=>{a.log(`Receiving ${s}:`,l.data),o(l.data)}})}var v=S;var C={subscriptions:new f.CompositeDisposable,activate(){a.log("Activating package")},deactivate(){var t;a.log("Deactivating package"),(t=this.subscriptions)==null||t.dispose()},provideHash(){return a.log("Providing service"),v}};0&&(module.exports={});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=main.js.map
