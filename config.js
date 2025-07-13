require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '254769902543',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUI3Ym9LTWNxUjNWVS95UXk1VnhQN2NjZEVaalhXM1pNTSsxVmlIYjYydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTFpWVJ3MldzNTN1dXJOeVdzeUFKczJ3YjBzcWNJM3pJY1Q3bkZkald4ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSDNWMS81MEdLcDMvcVpQRW8zeEQrK2NHU0RoVkQ0VCszUTU3b2RUTUZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSWk9STTZyWUxHT0hOb1hERjUyanFDVy9idUg0MUY5Q1N3N0VEYVJMdDBRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIekpnK1YzenBacStmd0RsMktSOVFXd09YRDd3ODN0VE4ycElvdWxrVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFRU3I1MWo4dFptNWVNNkRnb0EzNTNqTEZsSmtGdWNnSGlaMWYzaTJnQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1B2Tmp1aVByWGFrUTdRVmVqQjBjRFZQdC9ROWg0VVhDR1gvbDlqcmVYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjdjbEUzQ1RpV0xUSWVGTDh5M0hvbFVWL1hnTnZDbVpKZXNvUTdGMjgxVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxaUTNtVkNzai8zVjZlSTFoZE5yVnJSNkZjd0lQN3pzVlBRVjZreitIWUZpODFabkJjN3ZYZ1BLZXpXdzYwQmQzcTIzT3RZc0RXV1FXRVV5TW9sdkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiI5OGkzV0RIclYyeW9UUmQ5djVxWWFpVzEyTlpIcFlpbmtQTjAxcmQva3R3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2OTkwMjU0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRjFGMTM2RjQ1RTQ4RkExNERFODY5MUQyMkNDRDU1NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyNDM1MTcwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDOVpCRDdHNyIsIm1lIjp7ImlkIjoiMjU0NzY5OTAyNTQzOjQ4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzc4MzgyMTI0MTk3ODA6NDhAbGlkIiwibmFtZSI6IuKggOKDnSDioIDig50g4qCA4oOdIOKggOKDnVJO4qCA4oOdIOKggOKDnSDioIDig50g4qCA4oOd44WkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcnk2NzRFRU1xVDBNTUdHQk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJucUZaWGNwZFIxVUZockk1cVNvaDFueEU1TjE3Q0JrZmtveGtQZjhpZjFNPSIsImFjY291bnRTaWduYXR1cmUiOiJsV2MrcklkeHR2VkdwWXVuVVNoUHlNM09peFg1TUJpM0REajNoc1QvMGI2b1lhTEFWQnh2MFk5SW9nakowcnZwYW0zRDNPZS9DVmVjQ1lES3NxQ2hEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWi9SeE9Nc3pwNDZPTDVveXlyRlVVajlYSWNKWE5ITjdmVGZ6ZlYrT2JITWNUL3FVcDBFVWY1QWRuQ21SOEx0dnhyK1dsSVo4SzR6dGJ1Y1VBNkVrQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3Njk5MDI1NDM6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjZoV1YzS1hVZFZCWWF5T2FrcUlkWjhST1RkZXdnWkg1S01aRDMvSW45VCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyNDM1MTU5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhJTSJ9',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID || '77838212419780',

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
