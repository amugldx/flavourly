# 🚨 CRITICAL RULE: ALWAYS USE PNPM

## **NEVER USE NPM OR NPX - ONLY PNPM/PNPX**

### **❌ FORBIDDEN COMMANDS:**

- `npm install`
- `npm add`
- `npm remove`
- `npm run`
- `npx`
- Any npm-related commands

### **✅ REQUIRED COMMANDS:**

- `pnpm install`
- `pnpm add`
- `pnpm remove`
- `pnpm run`
- `pnpx`
- Only pnpm-related commands

### **📋 COMMAND MAPPING:**

| ❌ Don't Use          | ✅ Use Instead         |
| --------------------- | ---------------------- |
| `npm install`         | `pnpm install`         |
| `npm add package`     | `pnpm add package`     |
| `npm add -D package`  | `pnpm add -D package`  |
| `npm remove package`  | `pnpm remove package`  |
| `npm run dev`         | `pnpm run dev`         |
| `npm run build`       | `pnpm run build`       |
| `npx tsx script.ts`   | `pnpx tsx script.ts`   |
| `npx prisma generate` | `pnpx prisma generate` |
| `npx tsc --noEmit`    | `pnpx tsc --noEmit`    |

### **🎯 EXAMPLES OF CORRECT USAGE:**

```bash
# ✅ CORRECT - Package installation
pnpm add sharp
pnpm add -D @types/node

# ✅ CORRECT - Running scripts
pnpm run dev
pnpm run build
pnpm run lint

# ✅ CORRECT - Using npx equivalent
pnpx tsx scripts/test.ts
pnpx prisma generate
pnpx tsc --noEmit
```

### **🚫 EXAMPLES OF INCORRECT USAGE:**

```bash
# ❌ WRONG - Don't use npm
npm install
npm add package
npm run dev

# ❌ WRONG - Don't use npx
npx tsx script.ts
npx prisma generate
```

### **📝 REMINDER:**

- **ALWAYS** check this file before running any package management commands
- **ALWAYS** use `pnpm` or `pnpx` instead of `npm` or `npx`
- **NEVER** use npm commands in this project
- This is a **PERMANENT RULE** that must be followed

### **🔗 Why PNPM:**

- Faster installation
- Better disk space usage
- Stricter dependency management
- User's preferred package manager
- **USER EXPLICITLY REQUESTED THIS**

---

**Last Updated**: January 2025
**Status**: ACTIVE RULE - MUST BE FOLLOWED
