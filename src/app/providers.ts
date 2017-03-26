import { Auth } from '../providers/auth';
import { User } from '../providers/user';
import { LocalStorage } from '../providers/storage';
import { GeolocationNative } from '../providers/geolocation';
import { NDErrorHandler } from '../providers/error-handler'


export const PROVIDERS = [
    Auth,
    User,
    LocalStorage,
    GeolocationNative,
    NDErrorHandler
]