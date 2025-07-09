import { Injectable } from '@nestjs/common';
import { ProviderCrypto } from '@xagami/core';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptProvider implements ProviderCrypto {
  async crypto(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
  compare(password: string, passwordCrypto: string): Promise<boolean> {
    return bcrypt.compare(password, passwordCrypto);
  }
}
