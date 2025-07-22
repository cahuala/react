// core/index.ts

import { CoreFacade } from 'adapters'
import FirestoreAdminProvider from './adapters/db/FirestoreAdminProvider'

export function getCore() {
  return new CoreFacade(new FirestoreAdminProvider())
}

