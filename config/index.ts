import type { AppInfo } from '@/types/app'
export const APP_ID = '010bc78a-44e9-4cc3-9690-f17d3c25ce30'
export const API_KEY = 'app-NeAHHqWskGW0Y7px3Kg5utXq'
export const API_URL = 'https://api.dify.ai/v1'
// export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
// export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
// export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'en',
  disable_session_same_site: false, // set it to true if you want to embed the chatbot in an iframe
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
