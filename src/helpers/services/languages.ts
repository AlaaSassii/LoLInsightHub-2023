type Language = {
    code: string;
    name: string;
};

const supportedLanguages: Record<string, Language> = {
    cs_CZ: {
        code: 'cs_CZ',
        name: 'Czech (Czech Republic)',
    },
    el_GR: {
        code: 'el_GR',
        name: 'Greek (Greece)',
    },
    pl_PL: {
        code: 'pl_PL',
        name: 'Polish (Poland)',
    },
    ro_RO: {
        code: 'ro_RO',
        name: 'Romanian (Romania)',
    },
    hu_HU: {
        code: 'hu_HU',
        name: 'Hungarian (Hungary)',
    },
    en_GB: {
        code: 'en_GB',
        name: 'English (United Kingdom)',
    },
    de_DE: {
        code: 'de_DE',
        name: 'German (Germany)',
    },
    es_ES: {
        code: 'es_ES',
        name: 'Spanish (Spain)',
    },
    it_IT: {
        code: 'it_IT',
        name: 'Italian (Italy)',
    },
    fr_FR: {
        code: 'fr_FR',
        name: 'French (France)',
    },
    ja_JP: {
        code: 'ja_JP',
        name: 'Japanese (Japan)',
    },
    ko_KR: {
        code: 'ko_KR',
        name: 'Korean (Korea)',
    },
    es_MX: {
        code: 'es_MX',
        name: 'Spanish (Mexico)',
    },
    es_AR: {
        code: 'es_AR',
        name: 'Spanish (Argentina)',
    },
    pt_BR: {
        code: 'pt_BR',
        name: 'Portuguese (Brazil)',
    },
    en_US: {
        code: 'en_US',
        name: 'English (United States)',
    },
    en_AU: {
        code: 'en_AU',
        name: 'English (Australia)',
    },
    ru_RU: {
        code: 'ru_RU',
        name: 'Russian (Russia)',
    },
    tr_TR: {
        code: 'tr_TR',
        name: 'Turkish (Turkey)',
    },
    ms_MY: {
        code: 'ms_MY',
        name: 'Malay (Malaysia)',
    },
    en_PH: {
        code: 'en_PH',
        name: 'English (Republic of the Philippines)',
    },
    en_SG: {
        code: 'en_SG',
        name: 'English (Singapore)',
    },
    th_TH: {
        code: 'th_TH',
        name: 'Thai (Thailand)',
    },
    vi_VN: {
        code: 'vi_VN',
        name: 'Vietnamese (Viet Nam)',
    },
    id_ID: {
        code: 'id_ID',
        name: 'Indonesian (Indonesia)',
    },
    zh_MY: {
        code: 'zh_MY',
        name: 'Chinese (Malaysia)',
    },
    zh_CN: {
        code: 'zh_CN',
        name: 'Chinese (China)',
    },
    zh_TW: {
        code: 'zh_TW',
        name: 'Chinese (Taiwan)',
    },
};
