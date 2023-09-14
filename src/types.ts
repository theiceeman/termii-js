export type iRequestSenderId = {
    usecase: string
    company: string
    sender_id?: string
    api_key?: string
}

export type iSendMessage = {
    to: string
    sms: string
    from?: string
    type?: string
    channel?: string     // 'dnd' | 'whatsapp' | 'generic'
    api_key?: string
}
export type iSendBulkMessage = {
    to: Array<string>
    sms: string
    from?: string
    type?: string
    channel?: string     // 'dnd' | 'whatsapp' | 'generic'
    api_key?: string
}

export type iSendWithAutoGeneratedNumber = {
    sms: string
    to: string
    api_key?: string
}

export type iSendToken = {
    to: string
    message_text: string
    from?: string
    message_type?: string    //  "NUMERIC" "ALPHANUMERIC
    channel?: string     //  dnd, WhatsApp, generic or email
    pin_attempts?: number
    pin_time_to_live?: number
    pin_length?: number
    pin_placeholder?: string
    api_key?: string
}
export type iInAppToken = {
    phone_number: number
    pin_type?: string    //  "NUMERIC" "ALPHANUMERIC
    pin_attempts?: number
    pin_time_to_live?: number
    pin_length?: number
    api_key?: string
}