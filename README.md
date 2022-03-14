# @kamyu/nfc2card

Konmai Card NFC ID encode/decode library

## Installation

```shell
npm i @kamyu/nfc2card
```

## Build

```shell
npm run build
```

## Usage

### Javascript

```javascript
const { encode, decode } = require('@kamyu/nfc2card');
encode('NFC ID'); // => 'CARD ID'
decode('CARD ID'); // => 'NFC ID'
```

### Typescript

```typescript
import { encode, decode } from '@kamyu/nfc2card';

encode('NFC ID'); // => 'CARD ID'
decode('CARD ID'); // => 'NFC ID'
```
