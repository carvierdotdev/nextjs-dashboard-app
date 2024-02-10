import NextAuth from 'next-auth';
import Credential from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credential({})],
});
