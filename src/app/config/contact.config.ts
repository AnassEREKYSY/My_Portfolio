/**
 * Contact form configuration.
 *
 * The form is sent through Web3Forms (https://web3forms.com), which forwards
 * every submission to the mailbox linked to the access key below.
 *
 * How to get the key:
 *   1. Go to https://web3forms.com
 *   2. Enter ereanass@gmail.com and click "Create Access Key"
 *   3. Copy the key received by email and paste it below
 *
 * The access key is a public, write-only identifier. It is meant to live in
 * client-side code and cannot be used to read submissions or change settings.
 */
export const CONTACT_PLACEHOLDER_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

export interface ContactConfig {
  web3formsEndpoint: string;
  web3formsAccessKey: string;
  recipientLabel: string;
}

export const CONTACT_CONFIG: ContactConfig = {
  web3formsEndpoint: 'https://api.web3forms.com/submit',
  web3formsAccessKey: 'd53ecaa9-fd51-49f1-a6c5-b29ada9bf057',
  recipientLabel: 'ereanass@gmail.com'
};

export const isContactFormConfigured = (): boolean => {
  const key = CONTACT_CONFIG.web3formsAccessKey.trim();
  return key.length > 0 && key !== CONTACT_PLACEHOLDER_KEY;
};
