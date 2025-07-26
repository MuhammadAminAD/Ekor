import type { ITranslationTypes } from '@/locales/TranslationsTypes'
import 'i18next'

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: ITranslationTypes
    }
}
