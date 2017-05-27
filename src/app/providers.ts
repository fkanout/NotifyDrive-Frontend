import { Auth } from '../providers/auth';
import { User } from '../providers/user';
import { LocalStorage } from '../providers/storage';
import { GeolocationNative } from '../providers/geolocation';
import { NDErrorHandler } from '../providers/error-handler'
import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
export const PROVIDERS = [
    Auth,
    User,
    LocalStorage,
    GeolocationNative,
    NDErrorHandler,
    Camera,
    Transfer,
    File,
    FilePath
]