## Vitest Configuration

1. Create file with the next name: **vitest.config.ts**. Add the following configuration:

```

/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom'
    },
})

```

2. In **package.json**, inside the object script add:

```
    "test": "vitest",
    // If are you going to use the UI from vitest you must to add: 
    "test" "vitest --ui",
```

3. In **tsconfig.json**, in the Compiler options, insert the following option:

```
    "types":["vitest/globals"],
```

4. Install react testing library

```
    yarn add -D @testing-library/react
```