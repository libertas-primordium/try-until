# try-until
Javascript method to wrap web request methods or other functions that can return errors.

## DESCRIPTION:
This simple javascript method can be called and passed as arguments a method and its arguments. It is intended specifically to be used with methods that perform web requests. `TryUntil.retry()` will continue to call the method it has been passed if an error response is returned, until a non-error response is returned, at which point it will exit the loop and return that response object.
___
## USAGE:
```js
await TryUntil.retry(funct,params,context) // Suppress error and retry  
await TryUntil.retryAndConsole(funct,params,context) // Send error to console.error() and retry  
await TryUntil.retryAndThrow(funct,params,context) // Throw new Error() and retry  
```
`funct`: The web request method to be used. It needs to be passed as a function object, without the ().

`params`: A single string or an array of parameters needed when calling the method.

`context`: The object to be used as the contextual `this` when calling the method.
___
Nobody paid me to do this, so if my work saves you time or money, consider sending a tip!

```
BTC: 1EHkFQBk9LB2Zm3RcP7EeVLqUUDaEFpNxx

LTC: Lht9v7E9bxPMAmU2TUeVx2SJZu2AW32LSW

ETH: 0xaba31e526ca98a2a659d69b30adc2da8f3eaaa2d

DOGE: DC8xePEAyC2PeGQUqF51abrF8m7BMuVVoS

XMR: 41tnfGBpCt527q9aqdAjU914gcyJ8Fk2K9vGHHxswgF1hPgouanA2WFbQKimLBMt3zESnkuBWcn29NMiVAC1k4CxRMAdqB6
```
___
## LICENSE:
This software is made available under the MIT licence.

Copyright (c) 2021 libertas-primordium

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
