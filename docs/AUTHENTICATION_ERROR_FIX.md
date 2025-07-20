# Authentication Error Handling Fix

## Problem

The sign-in page was showing a generic "System configuration error" message instead of specific error messages for different authentication scenarios.

## Root Cause

1. **Missing NextAuth Environment Variables**: The `.env` file was missing `NEXTAUTH_SECRET` and `NEXTAUTH_URL` variables, causing NextAuth to throw configuration errors.
2. **Generic Error Handling**: The error handling was not properly distinguishing between different types of authentication failures.

## Solution

### 1. Fixed Environment Variables

Added the missing NextAuth environment variables to `.env`:

```env
NEXTAUTH_SECRET="EM747YBv+Xn+Phkx87yaxBsWvrVtv+RMYj//mCM09Xo="
NEXTAUTH_URL="http://localhost:3000"
```

### 2. Improved Error Handling in `lib/auth.ts`

- Changed `return null` to `throw new Error()` for missing credentials
- Ensured specific error messages are thrown for different scenarios:
  - `'No user found with this email'` - when email doesn't exist
  - `'Invalid password'` - when password is wrong
  - `'Email and password are required'` - when fields are empty

### 3. Updated Error Message Mapping in `lib/hooks/use-auth.ts`

- Removed generic "Configuration" error messages
- Added specific error message for `'Email and password are required'`
- Improved error message mapping to handle exact error cases

## Specific Error Messages

Now the application shows specific error messages for different scenarios:

### Non-existent Email

- **Input**: `nonexistent@test.com` / `anypassword`
- **Error**: "No account found with this email address. Please check your email or create a new account."

### Wrong Password

- **Input**: `test@test.com` / `wrongpassword`
- **Error**: "Incorrect password. Please try again."

### Empty Fields

- **Input**: Empty email or password
- **Error**: "Please enter both email and password."

### Valid Credentials

- **Input**: `test@test.com` / `testpass123`
- **Result**: Successful sign-in and redirect to dashboard

## Testing

Use the test script to verify the error handling:

```bash
pnpx tsx scripts/test-specific-auth-errors.ts
```

This script:

1. Creates test users if they don't exist
2. Provides testing scenarios with expected error messages
3. Guides you through manual testing in the browser

## Files Modified

1. **`.env`** - Added NextAuth environment variables
2. **`lib/auth.ts`** - Improved error handling in authorize function
3. **`lib/hooks/use-auth.ts`** - Updated error message mapping
4. **`scripts/fix-nextauth-env.ts`** - Created script to fix environment variables
5. **`scripts/test-specific-auth-errors.ts`** - Created comprehensive test script

## Result

The authentication system now provides clear, actionable error messages instead of generic configuration errors, improving the user experience significantly.
